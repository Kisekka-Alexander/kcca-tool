# Copyright (c) 2022, Veritas Interactive and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class Enrollment2(Document):
	def before_save(self):
		enrollment2 = self.number_of_teachers_deployed
		boys,boys1,boys2 = 0,0,0
		girls,girls1,girls2 = 0,0,0

		total = boys + girls
		total1 = boys1 + girls1
		total2 = boys2 + girls2


		self.boys = boys
		self.boys1 = boys1
		self.boys2 = boys2

		self.girls = girls
		self.girls1 = girls1
		self.girls2 = girls2

		self.total = total 
		self.total1 = total1
		self.total2 = total2
