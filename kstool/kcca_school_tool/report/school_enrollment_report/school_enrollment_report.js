// Copyright (c) 2022, Veritas Interactive and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["School Enrollment Report"] = {
	
	"filters": [
        {
            fieldname: 'nationality',
            label: __('Nationality'),
            fieldtype: 'Link',
            options: 'Country'
           
        },
		{
            fieldname: 'sex',
            label: __('Gender'),
            fieldtype: 'Link',
            options: 'Gender'
           
        },
		{
			fieldname: 'school',
			label: __('School'),
			fieldtype: 'Link',
			options: 'School'
		},
		{
			fieldname: 'division',
			label: __('Division'),
			fieldtype: 'Link',
			options: 'Division'
		}



	]
};
