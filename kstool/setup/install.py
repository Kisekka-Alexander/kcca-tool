import frappe

from six import iteritems
from frappe.installer import update_site_config

def after_migrate():
	add_app_name()
	add_non_standard_user_types()
def add_app_name():
	frappe.db.set_value('System Settings', None, 'app_name', 'KCCA Tool')

def add_non_standard_user_types():
	user_types = get_user_types_data()

	user_type_limit = {}
	for user_type, data in iteritems(user_types):
		user_type_limit.setdefault(frappe.scrub(user_type), 10)

	update_site_config('user_type_doctype_limit', user_type_limit)

	for user_type, data in iteritems(user_types):
		create_custom_role(data)
		create_user_type(user_type, data)

def get_user_types_data():
	return {
		'Headteacher Self Service': {
			'role': 'School Headteacher Self Service',
			'apply_user_permission_on': 'School User',
			'user_id_field': 'email',
			'doctypes': {
				'School Detail': ['read', 'write'],
				'School User': ['read', 'write'],
				'Enrollment': ['read', 'write', 'create', 'delete', 'submit', 'cancel', 'amend'],
			}
		},
		'Class Teach Self Service': {
			'role': 'School Class Teacher Self Service',
			'apply_user_permission_on': 'School User',
			'user_id_field': 'email',
			'doctypes': {
				'School Detail': ['read', 'write'],
				'School User': ['read', 'write'],
				'Enrollment': ['read', 'write', 'create', 'delete', 'submit', 'cancel', 'amend'],
			}
		},
	}

def create_custom_role(data):
	if data.get('role') and not frappe.db.exists('Role', data.get('role')):
		frappe.get_doc({
			'doctype': 'Role',
			'role_name': data.get('role'),
			'desk_access': 1,
			'is_custom': 1
		}).insert(ignore_permissions=True)

def create_user_type(user_type, data):
	if frappe.db.exists('User Type', user_type):
		doc = frappe.get_cached_doc('User Type', user_type)
		doc.user_doctypes = []
	else:
		doc = frappe.new_doc('User Type')
		doc.update({
			'name': user_type,
			'role': data.get('role'),
			'user_id_field': data.get('user_id_field'),
			'apply_user_permission_on': data.get('apply_user_permission_on')
		})

	create_role_permissions_for_doctype(doc, data)
	doc.save(ignore_permissions=True)

def create_role_permissions_for_doctype(doc, data):
	for doctype, perms in iteritems(data.get('doctypes')):
		args = {'document_type': doctype}
		for perm in perms:
			args[perm] = 1

		doc.append('user_doctypes', args)

def update_select_perm_after_install():
	if not frappe.flags.update_select_perm_after_migrate:
		return

	frappe.flags.ignore_select_perm = False
	for row in frappe.get_all('User Type', filters= {'is_standard': 0}):
		print('Updating user type :- ', row.name)
		doc = frappe.get_doc('User Type', row.name)
		doc.save()

	frappe.flags.update_select_perm_after_migrate = False
