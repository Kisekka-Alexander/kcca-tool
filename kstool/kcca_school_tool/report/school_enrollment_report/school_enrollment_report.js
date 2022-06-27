// Copyright (c) 2022, Veritas Interactive and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["School Enrollment Report"] = {
	
	"filters": [
		{
            fieldname: 'status',
            label: __('Status'),
            fieldtype: 'Select',
			options: [
				'All',
				'Active',
				'Suspended',
				'Transfered',
				'Dropped Out',
			]
           
        },
        {
            fieldname: 'nationality',
            label: __('Nationality'),
            fieldtype: 'Link',
            options: 'Country'
           
        },
		{
            fieldname: 'is_refugee',
            label: __('Is Refugee'),
			fieldtype: 'Select',
			options: [
				'All',
				'Yes',
				'No'
			]
           
        },
		{
            fieldname: 'is_special_needs',
            label: __('Is Special Needs'),
			fieldtype: 'Select',
			options: [
				'All',
				'Yes',
				'No'
			]
           
        },
		{
            fieldname: 'is_non_ugandan',
            label: __('Is Foreigner'),
            fieldtype: 'Select',
			options: [
				'All',
				'Yes',
				'No'
			]
           
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
