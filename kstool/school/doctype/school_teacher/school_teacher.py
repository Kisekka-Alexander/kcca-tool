# Copyright (c) 2022, Veritas Interactive and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document
import frappe

class SchoolTeacher(Document):
	def after_insert(self):
		teacher = frappe.get_doc("School Teacher", self.name)

		if not frappe.db.exists("User", {
			'email': teacher.email,
		}):
			user = frappe.get_doc(dict(
				doctype="User",
				email=self.email,
				first_name=self.teacher_name,
				enabled=1,
				mobile_no=self.phone_number,
			))

			user.flags.ignore_permissions = True
			user.flags.ignore_password_policy = True
			user.flags.no_welcome_mail = True


			self.append_role(user, "School Class Teacher")

			user.insert()
		else:
			user = frappe.get_doc("User", self.email)

			self.append_roles(user, "School Class Teacher")

	def append_role(self, user, role):
			user.append_roles(role)