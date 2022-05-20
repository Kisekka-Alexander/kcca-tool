// Copyright (c) 2022, Veritas Interactive and contributors
// For license information, please see license.txt

frappe.ui.form.on('School', 'category', function(frm){
	let classes = null;

		if(	frm.doc.category =='Secondary')
	    	{
		    	classes = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'];
	      }
		else if (frm.doc.category == 'Primary')
        {
          classes = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7'];
        }

		frm.set_df_property('highest_class', 'options', classes);

});
