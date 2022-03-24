// Copyright (c) 2022, Veritas Interactive and contributors
// For license information, please see license.txt

frappe.ui.form.on('DEMO', {
	num1: function(frm){
		frm.doc.total = frm.doc.num1 + frm.doc.num2;
		refresh_field("total");
},
num2: function(frm){
	  frm.doc.total = frm.doc.num1 + frm.doc.num2;
	  refresh_field("total");
}
});
