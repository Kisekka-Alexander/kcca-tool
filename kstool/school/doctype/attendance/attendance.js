// Copyright (c) 2022, Veritas Interactive and contributors
// For license information, please see license.txt

frappe.ui.form.on('Attendance', {

    date: function(frm) {
		if (frm.doc.date > frappe.datetime.get_today())
			frappe.throw(__("Cannot mark attendance for future dates."));
		    //frm.trigger("attendance_list");
	},

    sch_class: function (frm){
        let sch_class = frm.doc.sch_class;
        let school = frm.doc.school;
        if (sch_class){
            frappe.call({
                method: "kstool.api.get_std_by_class",
                args: {sch_class: sch_class, school: school}
            }).done((r) => {
                frm.doc.attendance_list = []
                $.each(r.message, function(_i, e){
                    let entry = frm.add_child("attendance_list")
                    entry.student = e.name;
                })
                refresh_field("attendance_list")
            })
        }
    },
    school: function (frm){
       // let school = frm.doc.school;
        
        //console.log(frm);
       /* if(school){
            frappe.call({
                method: "kstool.api.get_school_students",
                args: {school: school}
            }).done((r)=>{
                frm.doc.attendance_list = []
                $.each(r.message, function(_i, e){
                    let entry = frm.add_child("attendance_list")
                    entry.student = e.name;
                })
            })
        }*/

        let classes = null;
        frappe.db.get_doc('School', frm.doc.school).then((data) => {
           // console.log(data.category);
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

   // sch_class: function {frm}{
       // if(frm.doc.sch_class == "P1")
      //  { set_field_}
    //},

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


});

