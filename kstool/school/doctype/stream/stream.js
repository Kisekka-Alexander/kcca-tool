// Copyright (c) 2022, Veritas Interactive and contributors
// For license information, please see license.txt

frappe.ui.form.on('Stream', {
	// refresh: function(frm) {

	// }
    school: function (frm){
        let classes = null;
        frappe.db.get_doc('School', frm.doc.school).then((data) => {
            console.log(data.category);
            if (data.category === 'Secondary')
            {
                classes = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'];
            }
            else if (data.category === 'Primary')
            {
                classes = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7'];
            }

            frm.set_df_property('school_class', 'options', classes);
        }).catch((err) => {
            console.log(err);
        });
    },
});
