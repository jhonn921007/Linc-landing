$(document).ready(function() {

	// Validar Campos con Iconos
	   $('#form_iconic_validation').validate({
                errorElement: 'span',
                errorClass: 'error',
                focusInvalid: false,
                ignore: "",
                rules: {
                    FirstName: {
                        minlength: 3,
                        required: true
                    },
										LastName: {
												minlength: 3,
												required: true
										},
                    Email: {
                        required: true,
                        email: true
                    },
										Phone: {
																	minlength: 10,
																	required: true
															},
										Linea:{
											required: true
										}

                },

                invalidHandler: function (event, validator) {
					//display error alert on form submit
                },

                errorPlacement: function (error, element) { // render error placement for each input type
                    var icon = $(element).parent('.input-with-icon').children('i');
                    var parent = $(element).parent('.input-with-icon');
                    icon.removeClass('fa fa-check').addClass('fa fa-exclamation');
                    parent.removeClass('success-control').addClass('error-control');
                },

                highlight: function (element) { // hightlight error inputs
					var parent = $(element).parent();
                    parent.removeClass('success-control').addClass('error-control');
                },

                unhighlight: function (element) { // revert the change done by hightlight

                },

                success: function (label, element) {
                    var icon = $(element).parent('.input-with-icon').children('i');
					var parent = $(element).parent('.input-with-icon');
                    icon.removeClass("fa fa-exclamation").addClass('fa fa-check');
					parent.removeClass('error-control').addClass('success-control');
                },

                submitHandler: function (form) {

                }
            });


	$("#Phone").mask("999 - 999-9999");


});
