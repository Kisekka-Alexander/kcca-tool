# Copyright (c) 2022, Veritas Interactive and contributors
# For license information, please see license.txt

from optparse import Option
import frappe
from frappe import _
from frappe.utils import cint, flt
from pymysql import NULL


def execute(filters=None):
	is_ugandan=0
	status = filters.get("status")
	is_refugee = filters.get("is_refugee")
	is_special_needs = filters.get("is_special_needs")
	is_non_ugandan = filters.get("is_non_ugandan")
	if is_non_ugandan == 'Yes':
		is_ugandan = 1
	elif is_non_ugandan == 'No':
		is_ugandan=0
	elif is_non_ugandan == 'All':
		is_ugandan = ''


	# nationality= filters.get("nationality")
	if (filters.get("nationality")):
		nationality=filters.get("nationality")
	else: nationality=''

	if (filters.get("school")):
		school=filters.get("school")
	else: school=''

	if (filters.get("division")):
		division=filters.get("division")
	else: division=''
    
	if (filters.get("sex")):
		sex=filters.get("sex")
	else: sex=''
	
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
            'fieldname': 'Age',
            'label': _('Age'),
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

        },
		
		{
            'fieldname': 'status',
            'label': _('Status'),
            'fieldtype': 'Data'
        }
	
	]

	data=[]
	enrollment_list = get_enrollment_list()
	for student in enrollment_list:
		if((student[2]==sex or sex=='') 
					and (student[3]==nationality or nationality=='')
					and (student[6]==school or school=='')
					and (student[7]==division or division=='')  
					and (student[8]==status or status=='All') 
					and (student[9]==is_ugandan or is_ugandan=='')
					and (student[10]==is_refugee or is_refugee=='All')
					and (student[11]==is_special_needs or is_special_needs=='All')):
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
		TIMESTAMPDIFF(year, date_of_birth, CURDATE()) AS Age,
		A.school,
		division,
		status,
		is_non_ugandan,
		is_refugee,
		is_special_needs,
		ifnull(A.residence,'') as residence
	from `tabEnrollment` A left join `tabSchool` B on A.school = B.name """
	)

