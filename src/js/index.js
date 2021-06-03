// Navigation Menu Toggler
var header = document.querySelector(".js-header");
var hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", function () {
    header.classList.toggle("menu-open");
});

// JQuery Scripts
$(document).ready(function () {
    // Footer year
    var year = new Date().getFullYear();
    $("#footer-year").text(year);

    // Contact form validate and submit

    $("#contact-form").validate({
        rules: {
            fname: {
                required: true,
                minlength: 2,
            },
            lname: {
                required: true,
                minlength: 2,
            },
            email: {
                required: true,
                email: true,
            },
            phone: {
                required: false,
                phone: "phone",
            },
            message: {
                required: true,
                minlength: 25,
                maxlength: 7000,
            },
        },
        messages: {
            fname: {
                required: "Please provide your first name",
                minlength: "Please provide a valid name",
            },
            lname: {
                required: "Please provide your last name",
                minlength: "Please provide a valid name",
            },
            email: {
                required: "Please provide your email address",
                email: "Please provide a valid email address",
            },
            phone: {
                required: "Please provide your phone number",
                phone: "Please provide a valid phone number",
            },
            message: {
                required: "A message is required",
                minlength: "Please enter at least 25 characters",
                maxlength: "Too long! Max 7000 characters",
            },
        },
        submitHandler: function (form) {
            // Prepare data for submission
            var formData = $("#contact-form"),
                url = formData.attr("action"),
                type = formData.attr("method"),
                data = {};

            formData.find("[name]").each(function (index, value) {
                var input = $(this),
                    name = input.attr("name"),
                    value = input.val();

                data[name] = value;
            });

            // Ajax submission
            $.ajax({
                type: type,
                url: url,
                data: data,
                dataType: "json",
                success: function (response) {
                    // console.log("server response");
                    // console.log(response);
                    if ("error" in response) {
                        $("#form-message").html(response.error);
                        $("#form-message").removeClass("success-message");
                        $("#form-message").addClass("error-message");
                        $("html, body").animate(
                            {
                                scrollTop: $("#scroll").offset().top,
                            },
                            500
                        );
                    } else {
                        $("#form-message").html(response.success);
                        $("#form-message").removeClass("error-message");
                        $("#form-message").addClass("success-message");
                        $("#contact-form")[0].reset();
                        $("html, body").animate(
                            {
                                scrollTop: $("#scroll").offset().top,
                            },
                            500
                        );
                    }
                },
            });
            return false;
        },
    });

    $.validator.addMethod(
        "phone",
        function (value, element) {
            var re = new RegExp("[0-9-()s]+");
            return this.optional(element) || re.test(value);
        },
        "Invalid phone number"
    );

    // var tl = new TimelineMax();
    gsap.config({
        nullTargetWarn: false,
    });

    var tl = gsap.timeline();

    /*=============================================
    =            Index Section            =
    =============================================*/
    tl.from(".hero", 1, {
        y: 300,
        opacity: 0,
    })
        .from(".about-article", 1, {
            x: -50,
            opacity: 0,
            scrollTrigger: {
                trigger: ".about",
                start: "top-=100px bottom",
                end: "bottom-=200px center",
                scrub: true,
            },
        })
        .from(".about-mask", 1, {
            x: 50,
            opacity: 0,
            scrollTrigger: {
                trigger: ".about",
                start: "top-=100px bottom",
                end: "bottom-=200px center",
                scrub: true,
            },
        })
        .from(".mission-content", {
            y: 150,
            opacity: 0,
            scrollTrigger: {
                trigger: ".about-content",
                start: "top center",
                scrub: true,
            },
        })
        .from(".focus-content", {
            y: 300,
            opacity: 0.5,
            scrollTrigger: {
                trigger: "#focus",
                start: "top-=450px center",
                end: "bottom-=200px bottom",
                scrub: true,
            },
        })
        /*=====  End of Index Section  ======*/

        /*=============================================
        =            Focus Section            =
        =============================================*/
        /*=============================================
        =            Right Blobs            =
        =============================================*/

        .from(".focus-blob-design svg:nth-of-type(1)", {
            x: 100,
            opacity: 0.5,
            scrollTrigger: {
                trigger: ".focus-hero-text",
                start: "bottom-=200px center",
                end: "center top",
                scrub: true,
            },
        })
        .from(".focus-blob-design svg:nth-of-type(2)", {
            x: 100,
            opacity: 0.5,
            scrollTrigger: {
                trigger: ".focus-hero-text",
                start: "bottom-=200px center",
                end: "center top",
                scrub: true,
            },
        })
        .from(".focus-blob-design svg:nth-of-type(3)", {
            x: -100,
            opacity: 0.5,
            scrollTrigger: {
                trigger: ".focus-hero-text",
                start: "bottom-=200px center",
                end: "center top",
                scrub: true,
            },
        })
        .from(".focus-blob-design .focus-img", {
            y: 150,
            opacity: 0.5,
            scrollTrigger: {
                trigger: ".focus-hero-text",
                start: "bottom-=200px center",
                end: "center top",
                scrub: true,
            },
        })

        //     //Focus-Gender Section
        .from(".focus-blob-gender svg:nth-of-type(1)", {
            x: 100,
            opacity: 0.5,
            scrollTrigger: {
                trigger: "#focus-development",
                start: "top center",
                end: "bottom center",
                scrub: true,
            },
        })
        .from(".focus-blob-gender svg:nth-of-type(2)", {
            x: 100,
            opacity: 0.5,
            scrollTrigger: {
                trigger: "#focus-development",
                start: "top center",
                end: "bottom center",
                scrub: true,
            },
        })
        .from(".focus-blob-gender svg:nth-of-type(3)", {
            x: -100,
            opacity: 0.5,
            scrollTrigger: {
                trigger: "#focus-development",
                start: "top center",
                end: "bottom center",
                scrub: true,
            },
        })
        .from(".focus-blob-gender .focus-img", {
            y: 150,
            opacity: 0.5,
            scrollTrigger: {
                trigger: "#focus-development",
                start: "top center",
                end: "bottom center",
                scrub: true,
            },
        })

        //     //Focus-Monitoring Section
        .from(".focus-blob-monitoring svg:nth-of-type(1)", {
            x: 100,
            opacity: 0.5,
            scrollTrigger: {
                trigger: "#focus-linking",
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
        })
        .from(".focus-blob-monitoring svg:nth-of-type(2)", {
            x: 100,
            opacity: 0.5,
            scrollTrigger: {
                trigger: "#focus-linking",
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
        })
        .from(".focus-blob-monitoring svg:nth-of-type(3)", {
            x: -100,
            opacity: 0.5,
            scrollTrigger: {
                trigger: "#focus-linking",
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
        })
        .from(".focus-blob-monitoring .focus-img", {
            y: 150,
            opacity: 0.5,
            scrollTrigger: {
                trigger: "#focus-linking",
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
        })

        //     //Focus-social Section
        .from(".focus-blob-social svg:nth-of-type(1)", {
            x: 100,
            opacity: 0.5,
            scrollTrigger: {
                trigger: "#focus-research",
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
        })
        .from(".focus-blob-social svg:nth-of-type(2)", {
            x: 100,
            opacity: 0.5,
            scrollTrigger: {
                trigger: "#focus-research",
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
        })
        .from(".focus-blob-social svg:nth-of-type(3)", {
            x: -100,
            opacity: 0.5,
            scrollTrigger: {
                trigger: "#focus-research",
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
        })
        .from(".focus-blob-social .focus-img", {
            y: 150,
            opacity: 0.5,
            scrollTrigger: {
                trigger: "#focus-research",
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
        })
        //     /*=====  End of Right Blobs  ======*/

        //     /*=============================================
        // =            Left Blobs            =
        // =============================================*/
        //     //Focus-development Section
        .from(".focus-blob-dev svg:nth-of-type(1)", {
            x: -100,
            opacity: 0,
            scrollTrigger: {
                trigger: "#focus-design",
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
        })
        .from(".focus-blob-dev svg:nth-of-type(2)", {
            x: -100,
            opacity: 0,
            scrollTrigger: {
                trigger: "#focus-design",
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
        })
        .from(".focus-blob-dev svg:nth-of-type(3)", {
            x: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: "#focus-design",
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
        })
        .from(".focus-blob-dev .focus-img", {
            y: 150,
            opacity: 0,
            scrollTrigger: {
                trigger: "#focus-design",
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
        })

        //     //Focus-linking Section
        .from(".focus-blob-linking svg:nth-of-type(1)", {
            x: -100,
            opacity: 0.5,
            scrollTrigger: {
                trigger: "#focus-linking",
                start: "top-=450px center",
                end: "top top",
                scrub: true,
            },
        })
        .from(".focus-blob-linking svg:nth-of-type(2)", {
            x: -100,
            opacity: 0.5,
            scrollTrigger: {
                trigger: "#focus-linking",
                start: "top-=450px center",
                end: "top top",
                scrub: true,
            },
        })
        .from(".focus-blob-linking svg:nth-of-type(3)", {
            x: 100,
            opacity: 0.5,
            scrollTrigger: {
                trigger: "#focus-linking",
                start: "top-=450px center",
                end: "top top",
                scrub: true,
            },
        })
        .from(".focus-blob-linking .focus-img", {
            y: 150,
            opacity: 0.5,
            scrollTrigger: {
                trigger: "#focus-linking",
                start: "top-=450px center",
                end: "top top",
                scrub: true,
            },
        })

        //     //Focus-research Section
        .from(".focus-blob-research svg:nth-of-type(1)", {
            x: -100,
            opacity: 0.5,
            scrollTrigger: {
                trigger: "#focus-monitoring",
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
        })
        .from(".focus-blob-research svg:nth-of-type(2)", {
            x: -100,
            opacity: 0.5,
            scrollTrigger: {
                trigger: "#focus-monitoring",
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
        })
        .from(".focus-blob-research svg:nth-of-type(3)", {
            x: 100,
            opacity: 0.5,
            scrollTrigger: {
                trigger: "#focus-monitoring",
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
        })
        .from(".focus-blob-research .focus-img", {
            y: 150,
            opacity: 0.5,
            scrollTrigger: {
                trigger: "#focus-monitoring",
                start: "top center",
                end: "bottom top",
                scrub: true,
            },
        })

        /*=====  End of Left Blobs  ======*/

        /*=====  End of Focus Section  ======*/

        /*=============================================
    =            Team Section            =
    =============================================*/

        .from([".team-details", ".team-flex"], {
            y: 200,
            opacity: 0,
        })

        /*=====  End of Team Section  ======*/

        /*=============================================
    =            Contact Section            =
    =============================================*/
        .from(".contact-slide-up", {
            y: 100,
            opacity: 0,
            delay: -1,
            duration: 1,
        })
        .from(".contact-content", {
            y: 200,
            opacity: 0,
            scrollTrigger: {
                trigger: ".contact-slide-up",
                start: "top center",
                scrub: true,
            },
        });
});
