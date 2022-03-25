# Copyright (c) 2022, Veritas Interactive and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class Observation(Document):
			def before_save(self):
				total = 0
				observation = self.rating
				if observation == "Poor":
					total +=1
				elif observation == "Fair":
					total +=2
				elif observation == "Good":
					total +=3
				else:
					total +=4
				
				self.total= total		



