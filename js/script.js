$(document).ready(function () {

    $('.popup').magnificPopup({
        type: 'inline',
        mainClass: 'mfp-fade'
    });


    $("#form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            name: {
                required: true,
            },
            select: {
                required: true,
            },
            phone: {
                required: true,
            }
        },
        messages: {
            email: {
                required: "Вы допустили ошибку"
            },
            name: {
                required: "Вы допустили ошибку"
            },
            select: {
                required: "Вы допустили ошибку"
            },
            phone: {
                required: "Вы допустили ошибку"
            },
        },

    });

    $('#form').on("submit", function (e) {
        e.preventDefault();
        if ($('#form').valid()) {
            $(this).closest(".form-wrap").hide();
            $(this).closest("#request-popup").find(".send-wrap").show();
        }
    });

    $(".send-wrap .popup-btn").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".send-wrap").addClass("hide");
        $(".thank-wrap").addClass("show");
    })

    $(".drop-menu").click(function (e) {
        e.stopPropagation();
        $(this).toggleClass("is-active");
        $(".main-menu").toggleClass("open");
        $("body, html").toggleClass("overflow");
    });

    $('.blog-slider').slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        variableWidth: true,
        infinite: true,
    });

    $(".tab-menu li a").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".tab-menu").find("li").removeClass("active");
        $(this).closest("li").addClass("active");
        var index = $(this).closest("li").index();
        $(".tab-content .tab-content-item").removeClass("active");
        $(".tab-content .tab-content-item").eq(index).addClass("active");
    });

    $(".tab-menu2 li a").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".tab-menu2").find("li").removeClass("active");
        $(this).closest("li").addClass("active");
        var index = $(this).closest("li").index();
        $(".tab-content2 .tab-content-item").removeClass("active");
        $(".tab-content2 .tab-content-item").eq(index).addClass("active");
    });

    $(".faq-list-item .item-heading").on("click", function (e) {
        e.preventDefault();
        if ($(this).find("span").hasClass("rotate")) {
            $(this).find("span").removeClass("rotate");
        } else {
            $(".faq-list-item span").removeClass('rotate');
            $(this).find("span").addClass("rotate");
        }
        $(".faq-list-item").removeClass('opened');
        $(".item-body").removeClass('active');
        $(this).closest(".faq-list-item").find(".item-body").addClass('active');
        $(this).closest(".faq-list-item").addClass('opened');
        $(".item-body:not(.active)").slideUp();
        $(".faq-list-item:not(.opened)").removeClass("active");
        $(this).closest(".faq-list-item").find(".item-body").slideToggle();
        $(this).closest(".faq-list-item").toggleClass("active");
    });

    $(function () {
        $("#slider-range2").slider();
    });

    var parallax = document.getElementsByClassName('parallax');

    $.each(parallax, function (key, value) {

        var parallaxInstance = new Parallax(value, {
            relativeInput: true
        });
    });
    
    $(".main-menu li").on("click", function(){
        $(this).find(".sub-menu").toggleClass("open");
    })

});
