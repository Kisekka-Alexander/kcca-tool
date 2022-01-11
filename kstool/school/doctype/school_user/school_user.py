# Copyright (c) 2022, Veritas Interactive and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

import frappe

class SchoolUser(Document):
    def after_insert(self):
        school_user = frappe.get_doc("School User", self.name)

        if not frappe.db.exists("User", {
            'email': school_user.email
        }):
            user = frappe.get_doc(dict(
                doctype='User',
                email=school_user.email,
                first_name=school_user.name,
                enabled=1,
                mobile_no=school_user.phone_number
            ))

            user.flags.ignore_permissions = True
            user.flags.ignore_password_policy = True
            user.flags.no_welcome_mail = True

            self.append_role(user, self.role)

            user.insert()

        else:
            user = frappe.get_doc("User", self.email)

            self.append_role(user, self.role)


    def append_role(self, user, role):
        user.append('roles', {
            'role': role
        })
