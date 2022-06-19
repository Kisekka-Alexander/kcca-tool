// Copyright (c) 2022, Veritas Interactive and contributors
// For license information, please see license.txt

frappe.ui.form.on('Primary Inspection', {
	// Enrolment at the beginning of the school year
	boys: function(frm){
		frm.doc.total = frm.doc.boys + frm.doc.girls;
		refresh_field("total");
  },
   girls: function(frm){
	  frm.doc.total = frm.doc.boys + frm.doc.girls;
	  refresh_field("total");
  },

	// Current enrolment (on day of the inspection)
	boys1: function(frm){
		frm.doc.total1 = frm.doc.boys1 + frm.doc.girls1;
		refresh_field("total1");
  },
   girls1: function(frm){
	  frm.doc.total1 = frm.doc.boys1 + frm.doc.girls1;
	  refresh_field("total1");
  },

	// Attendance on the day of the inspection
	boys2: function(frm){
		frm.doc.total2 = frm.doc.boys2 + frm.doc.girls2;
		refresh_field("total2");
  },
   girls2: function(frm){
	  frm.doc.total2 = frm.doc.boys2 + frm.doc.girls2;
	  refresh_field("total2");
  },


	
});
