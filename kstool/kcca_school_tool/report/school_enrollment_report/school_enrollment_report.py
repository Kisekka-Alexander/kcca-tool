# Copyright (c) 2022, Veritas Interactive and contributors
# For license information, please see license.txt

from optparse import Option
import frappe
from frappe import _
from frappe.utils import cint, flt


def execute(filters=None):
	sex = filters.get("sex")
	nationality= filters.get("nationality")
	columns = [
		{
            'fieldname': 'name1',
            'label': _('Name'),
            'fieldtype': 'Data'
            
        },
		{
            'fieldname': 'school_class',
            'label': _('Class'),
            'fieldtype': 'Data' 
        },
        {
            'fieldname': 'sex',
            'label': _('Gender'),
            'fieldtype': 'Data' 
        },
		{
            'fieldname': 'nationality',
            'label': _('Nationality'),
            'fieldtype': 'Data' 
        },
		{
            'fieldname': 'date_of_birth',
            'label': _('DOB'),
            'fieldtype': 'Data' 
        },
		{
            'fieldname': 'school',
            'label': _('School'),
            'fieldtype': 'Data' 
        },
		{
            'fieldname': 'division',
            'label': _('Division'),
            'fieldtype': 'Link',
			'options': 'School'

        }
	
	]

	data=[]
	enrollment_list = get_enrollment_list()
	for student in enrollment_list:
		if(student[1]==sex or sex=='All'):
			data.append(student)
		else: continue
		
	return columns, data

def get_enrollment_list():
	return frappe.db.sql(
	"""select
		name1,
		A.school_class,
		sex,
		nationality,
		date_of_birth,
		A.school,
		division
	from `tabEnrollment` A left join `tabSchool` B on A.school = B.name """
	)

