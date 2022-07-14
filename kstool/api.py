from __future__ import unicode_literals

import frappe

from frappe import auth, exceptions

@frappe.whitelist(allow_guest=True)
def login(usr, pwd):

    try:
        login_manager = auth.LoginManager()
        login_manager.authenticate(user=usr, pwd=pwd)
        login_manager.post_login()
    except exceptions.AuthenticationError :
        frappe.clear_messages()
        frappe.local.response["message"] = {
            "success": 0,
            "message": "Invalid credentials"
        }

        return

    api_generate = generate_keys(frappe.session.user)

    user = frappe.get_doc("User", frappe.session.user)

    user_roles = user.roles

    roles = []
    for role in user_roles:
        roles.append(role.role)
    frappe.local.response["message"] = {
        "success": 1,
        "message": "Authentication success",
        "sid": frappe.session.sid,
        "api_key": user.api_key,
        "api_secret": api_generate,
        "email": user.email,
        "username": user.username,
        "roles" : roles
    }

def generate_keys(user):
    user_details = frappe.get_doc("User", user)

    api_secret = frappe.generate_hash(length=32)

    if not user_details.api_key:
        api_key = frappe.generate_hash(length=32)
        user_details.api_key = api_key
    user_details.api_secret = api_secret
    user_details.save()

    return api_secret

@frappe.whitelist()
def get_school_students(school):
    students = frappe.db.sql(f""" SELECT name FROM `tabEnrollment` WHERE school= '{school}'  """, as_dict=True)
    return students


@frappe.whitelist()
def get_std_by_class(sch_class, school):
    schclass = frappe.db.sql(f"""  SELECT name FROM `tabEnrollment` WHERE school= '{school}' AND school_class= '{sch_class}'  """, as_dict=True)
    return schclass