$(function () {
    // 접근성 본문 바로가기
    $('.accessibility a').on('focus', function () {
        $(this).css('top', 0);
    });
    $('.accessibility a').focusout(function () {
        $(this).css('top', '-50px');
    });

    // 메인 비쥬얼 슬라이더
    $('.main-visual-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,  
        fade: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                },
            },
        ],
    });

    // GNB 드롭다운메뉴
    $('.gnb .dept-1>li>a, .gnb .dept-2').hover(function () {
        $(this).parent().find($('.dept-2')).toggleClass('hovered');
    });

    // 서브페이지 현재 메뉴
    $('.subpage-curr .dept-1 a')
        .not($('.dept-2 > li > a,.home'))
        .on('click', function (e) {
            e.preventDefault();
            $('.subpage-curr .dept-1>li').not($(this).parent()).removeClass('active');
            $(this).parent().toggleClass('active');
        });

    // 회원가입 Step-2 메뉴 select 클릭시 화살표 active
    $('.sign_step-2 select').click(function () {
        $(this).toggleClass('active');
    });

    // 회원가입 체크박스 전체 선택
    $('#agree-all').on('click', function () {
        $(this).parents('.content').find('.agree').prop('checked', true);
    });

    // 제품소개 해골 호버시 밑줄 빨간색 효과
    $('.product-intro .row .col-1 a').hover(function () {
        $(this).parent().toggleClass('on');
    });

    // 제품소개 네비게이션
    $('.product-nav').slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 3,
        arrows: true,
        speed: 300,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
        ],
    });

    // 제품소개_리스트 슬라이더
    $('.product-list-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: true,
        speed: 300,
        responsive: [
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    // 제품 상세 페이지 슬라이더
    $('.product-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 300,
    });

    // 모바일 GNB
    $('.btn-ham').click(function () {
        $('.gnb .dept-1').toggleClass('active');
        $(".main").toggleClass('active');
    });
    $('.btn-m-gnb-close').click(function () {
        $('.gnb .dept-1').removeClass('active');
        $(".main").removeClass('active');
    });
    $('.gnb .dept-1>li>a')
        .not('.single')
        .click(function (e) {
            $(this).parent().toggleClass('active');
            e.preventDefault();
            console.log('ok');
        });
});
