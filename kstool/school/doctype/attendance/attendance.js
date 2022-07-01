// Copyright (c) 2022, Veritas Interactive and contributors
// For license information, please see license.txt

frappe.ui.form.on('Attendance', {
	onload: function(frm) {
		frm.set_query('school', function() {
			return {
				filters: {
					'school_class': (frm.doc.school_class)
				}
			};
		});
		if (!frm.__islocal) {
			frm.set_query('student', 'students', function() {
				return{
					query: 'kstool.school.doctype.attendance.attendance.fetch_students',
					filters: {
						'school_class': (frm.doc.school_class)
					}
				}
			});
		}
	}, 


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

    school_class: function (frm){
        let streams = [];
        console.log(frm.doc.school_class);
        frappe.db.get_list('Stream', {"filters": {"school_class": frm.doc.school_class}}).then((data) => {
            if (data.length > 0)
            {
                data.forEach((stream) => {
                    streams.push(stream.name);
                });
            }
            frm.set_df_property('stream', 'options', streams);
        })
    },



    get_students: function(frm) {
		frappe.db.get_list('Enrollment')
	},





});

