// Copyright (c) 2022, Veritas Interactive and contributors
// For license information, please see license.txt

frappe.ui.form.on('SCHOOL ATTENDANCE', {


	//P1 Ugandan
	ug_boysp1: function(frm){
		frm.doc.total_ug_p1 = frm.doc.ug_boysp1 + frm.doc.ug_girlsp1;
		frm.doc.total_ugs = frm.doc.ug_boysp1 + frm.doc.ug_girlsp1;
		refresh_field("total_ug_p1");
		
},
  ug_girlsp1: function(frm){
	  frm.doc.total_ug_p1= frm.doc.ug_boysp1 + frm.doc.ug_girlsp1;
		frm.doc.total_ugs = frm.doc.ug_boysp1 + frm.doc.ug_girlsp1;
	  refresh_field("total_ug_p1");
},


 //P2
 ug_boysp2: function(frm){
	frm.doc.total_ug_p2 = frm.doc.ug_boysp2 + frm.doc.ug_girlsp2;
	frm.doc.total_ugs = frm.doc.ug_boysp2 + frm.doc.ug_girlsp2 + frm.doc.ug_girlsp3;
	refresh_field("total_ug_p2");
	
},
ug_girlsp2: function(frm){
	frm.doc.total_ug_p2= frm.doc.ug_boysp2 + frm.doc.ug_girlsp2;
	frm.doc.total_ugs = frm.doc.ug_boysp2 + frm.doc.ug_girlsp2 + frm.doc.ug_girlsp3
	refresh_field("total_ug_p2");
},
	//P3 Ugandan
	ug_boysp3: function(frm){
		frm.doc.total_ug_p3 = frm.doc.ug_boysp3 + frm.doc.ug_girlsp3;
		frm.doc.total_ugs = frm.doc.ug_boysp3 + frm.doc.ug_girlsp3;
		refresh_field("total_ug_p3");
		
},
  ug_girlsp3: function(frm){
	  frm.doc.total_ug_p3= frm.doc.ug_boysp3 + frm.doc.ug_girlsp3;
		frm.doc.total_ugs = frm.doc.ug_boysp3 + frm.doc.ug_girlsp3;
	  refresh_field("total_ug_p3");
},


	//P4 Ugandan
	ug_boysp4: function(frm){
		frm.doc.total_ug_p4 = frm.doc.ug_boysp4 + frm.doc.ug_girlsp4;
		frm.doc.total_ugs = frm.doc.ug_boysp4 + frm.doc.ug_girlsp4;
		refresh_field("total_ug_p4");
		
},
  ug_girlsp4: function(frm){
	  frm.doc.total_ug_p4= frm.doc.ug_boysp4 + frm.doc.ug_girlsp4;
		frm.doc.total_ugs = frm.doc.ug_boysp4 + frm.doc.ug_girlsp4;
	  refresh_field("total_ug_p4");
},


	//P5 Ugandan
	ug_boysp5: function(frm){
		frm.doc.total_ug_p5 = frm.doc.ug_boysp5 + frm.doc.ug_girlsp5;
		frm.doc.total_ugs = frm.doc.ug_boysp5 + frm.doc.ug_girlsp5;
		refresh_field("total_ug_p5");
		
},
  ug_girlsp5: function(frm){
	  frm.doc.total_ug_p5 = frm.doc.ug_boysp5 + frm.doc.ug_girlsp5;
		frm.doc.total_ugs = frm.doc.ug_boysp5 + frm.doc.ug_girlsp5;
	  refresh_field("total_ug_p5");
},


	//P6 Ugandan
	ug_boysp6: function(frm){
		frm.doc.total_ug_p6 = frm.doc.ug_boysp6 + frm.doc.ug_girlsp6;
		frm.doc.total_ugs = frm.doc.ug_boysp6 + frm.doc.ug_girlsp6;
		refresh_field("total_ug_p6");
		
},
  ug_girlsp6: function(frm){
	  frm.doc.total_ug_p6 = frm.doc.ug_boysp6 + frm.doc.ug_girlsp6;
		frm.doc.total_ugs = frm.doc.ug_boysp6 + frm.doc.ug_girlsp6;
	  refresh_field("total_ug_p6");
},


	//P7 Ugandan
	ug_boysp7: function(frm){
		frm.doc.total_ug_p7 = frm.doc.ug_boysp7 + frm.doc.ug_girlsp7;
		frm.doc.total_ugs = frm.doc.ug_boysp7 + frm.doc.ug_girlsp7;
		refresh_field("total_ug_p7");
		
},
  ug_girlsp7: function(frm){
	  frm.doc.total_ug_p7 = frm.doc.ug_boysp7 + frm.doc.ug_girlsp7;
		frm.doc.total_ugs = frm.doc.ug_boysp7 + frm.doc.ug_girlsp7;
	  refresh_field("total_ug_p7");
},



	//P1 Non-Ugandan
	non_ug_bp1: function(frm){
		frm.doc.tot_non_ugp1 = frm.doc.non_ug_bp1 + frm.doc.non_ug_gp1;
		refresh_field("tot_non_ugp1");
		
},
  non_ug_gp1: function(frm){
	  frm.doc.tot_non_ugp1 = frm.doc.non_ug_bp1 + frm.doc.non_ug_gp1;
	  refresh_field("tot_non_ugp1");
},

	//P1 Non-Ugandan
	non_ug_bp2: function(frm){
		frm.doc.tot_non_ugp2 = frm.doc.non_ug_bp2 + frm.doc.non_ug_gp2;
		refresh_field("tot_non_ugp2");
		
},
  non_ug_gp2: function(frm){
	  frm.doc.tot_non_ugp2 = frm.doc.non_ug_bp2 + frm.doc.non_ug_gp2;
	  refresh_field("tot_non_ugp2");
},

	//P3 Non-Ugandan
	non_ug_bp3: function(frm){
		frm.doc.tot_non_ugp3 = frm.doc.non_ug_bp3 + frm.doc.non_ug_gp3;
		refresh_field("tot_non_ugp3");
		
},
  non_ug_gp3: function(frm){
	  frm.doc.tot_non_ugp3 = frm.doc.non_ug_bp3 + frm.doc.non_ug_gp3;
	  refresh_field("tot_non_ugp3");
},

	//P4 Non-Ugandan
	non_ug_bp4: function(frm){
		frm.doc.tot_non_ugp4 = frm.doc.non_ug_bp4 + frm.doc.non_ug_gp4;
		refresh_field("tot_non_ugp4");
		
},
  non_ug_gp4: function(frm){
	  frm.doc.tot_non_ugp4 = frm.doc.non_ug_bp4 + frm.doc.non_ug_gp4;
	  refresh_field("tot_non_ugp4");
},

	//P5 Non-Ugandan
	non_ug_bp5: function(frm){
		frm.doc.tot_non_ugp5 = frm.doc.non_ug_bp5 + frm.doc.non_ug_gp5;
		refresh_field("tot_non_ugp5");
		
},
  non_ug_gp5: function(frm){
	  frm.doc.tot_non_ugp5 = frm.doc.non_ug_bp5 + frm.doc.non_ug_gp5;
	  refresh_field("tot_non_ugp5");
},


	//P6 Non-Ugandan
	non_ug_bp6: function(frm){
		frm.doc.tot_non_ugp6 = frm.doc.non_ug_bp6 + frm.doc.non_ug_gp6;
		refresh_field("tot_non_ugp6");
		
},
  non_ug_gp6: function(frm){
	  frm.doc.tot_non_ugp6 = frm.doc.non_ug_bp6 + frm.doc.non_ug_gp6;
	  refresh_field("tot_non_ugp6");
},

	//P7 Non-Ugandan
	non_ug_bp7: function(frm){
		frm.doc.tot_non_ugp7 = frm.doc.non_ug_bp7 + frm.doc.non_ug_gp7;
		refresh_field("tot_non_ugp7");
		
},
  non_ug_gp7: function(frm){
	  frm.doc.tot_non_ugp7 = frm.doc.non_ug_bp7 + frm.doc.non_ug_gp7;
	  refresh_field("tot_non_ugp7");
},


});