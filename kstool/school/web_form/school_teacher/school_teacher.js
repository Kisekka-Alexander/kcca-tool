frappe.ready(function() {
	// frappe.web_form.on("school", (field, value) => {
    //     console.log(value)
    //     let classes = null;
    //     frappe.db.get_doc('School', value).then((data) => {
    //         console.log(data.category);
    //         if (data.category === 'Secondary')
    //         {
    //             classes = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'];
    //         }
    //         else if (data.category === 'Primary')
    //         {
    //             classes = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7'];
    //         }
    //
    //         frappe.web_form.set_value('school_class', 'options', classes);
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // }),

})