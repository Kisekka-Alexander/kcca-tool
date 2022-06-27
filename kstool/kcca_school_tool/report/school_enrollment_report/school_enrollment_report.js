// Copyright (c) 2022, Veritas Interactive and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["School Enrollment Report"] = {
	
	"filters": [
        {
            fieldname: 'nationality',
            label: __('Nationality'),
            fieldtype: 'Link',
            options: ['Country'],
            default: 'Uganda'
           
        },
		{
            fieldname: 'sex',
            label: __('Gender'),
            fieldtype: 'Select',
            options: ['All','Male','Female']
           
        },
		{
			fieldname: 'school',
			label: __('School'),
			fieldtype: 'Link',
			options: 'School'
		}


	]
};
