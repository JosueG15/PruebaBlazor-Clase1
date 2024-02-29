$(document).ready(function () {
    $('#contactForm').validate({
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
            }
        },
        messages: {
            name: "Por favor, introduce tu nombre.",
            email: {
                required: "Por favor, introduce tu correo electrónico.",
                email: "Por favor, introduce una dirección de correo electronico válida."
            },
            message: "Por favor, escribe un mensaje."
        },
        errorElement: "div",
        errorClass: "invalid-feedback",
        highlight: function (element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass("is-invalid").addClass("is-valid");
        },
        errorPlacement: function (error, element) {
            error.addClass("invalid-feedback");
            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.next("label"));
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});
