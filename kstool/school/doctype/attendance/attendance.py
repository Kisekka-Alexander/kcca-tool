# Copyright (c) 2022, Veritas Interactive and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document
import frappe

class Attendance(Document):
	def before_save(self):
		attendance = self.attendance_list

		present, absent, male_present, female_present = 0, 0, 0, 0
		male_absent, female_absent = 0,0

		if attendance:
			for i in attendance:
				student = frappe.get_doc("Enrollment", i.student)

				if i.status == "Present":
					present += 1
					if student:
						gender = student.sex
						if gender == "Male":
							male_present += 1
						else:
							female_present += 1
				else:
					absent += 1
					if student:
						gender = student.sex
						if gender == "Male":
							male_absent += 1
						else:
							female_absent += 1


		self.present = present
		self.absent = absent
		self.female_present = female_present
		self.male_present = male_present
		self.female_absent = female_absent
		self.male_absent = male_absent
		self.total_count = present + absent