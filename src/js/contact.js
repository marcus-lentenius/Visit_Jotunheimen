$(document).ready(function () {
    $("#contact_submit").click(function () {
        $("#contact_form").hide();
        $("#contact_form_section").html("" +
            "<div class='form_submitted'> " +
            "<h2 class='thank_note'>Tack!</h2> " +
            "</div>");
    })
    var newsletter = false;

    $("#newsletter").click(function () {
        if (newsletter === false) {
            $("<input id='newsletter_text_field' " +
                "class=\"contact_form_field\" " +
                "type=\"text\" " +
                "placeholder='Epostadress'>" +
            "<input id=\"gdpr\" " +
                "name=\"gdpr\" " +
                "type=\"checkbox\"/> " +
                "<label for=\"gdpr\" " +
                "id=\"gdpr_label\"" +
                "class='gdpr_lable'>" +
                    "<p class=\"label_paragraph\">" +
                        "Jag godkänner GDPR" +
                    "</p>" +
                "</label>\n")
            .insertAfter($("#newsletter_label"));
            newsletter = true;
        } else {
            $(this).prop('checked', false);
            $("#newsletter_text_field").remove();
            $("#gdpr").remove();
            $("#gdpr_label").remove();
            newsletter = false
        }
    });
});