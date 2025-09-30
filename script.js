$(document).ready(function() {
    // ========== Header Moving Function ==========
    const headerMoving = () => {
        const $header = $('header');
        const $headerContainer = $('.header-container');
        const $mainHeader = $('.header-back');
        const $downHeader = $('.header-down');
        const $advertise = $('.advertise');
        const $resSearch = $('.res-search');
        
        const resSearchHeight = $resSearch.outerHeight() || 0;
        const downHeaderHeight = $downHeader.outerHeight() || 0;
        const mainHeaderHeight = $mainHeader.outerHeight() || 0;
        const adHeaderHeight = $advertise.outerHeight() || 0;
    
        let lastScrollTop = 0;
        let isHeaderVisible = true;
        
        $mainHeader.removeClass('lg-header-up');
        $downHeader.removeClass('header-hidden');
        $resSearch.removeClass('header-hidden');
        
        if (window.innerWidth > 992) {
            const headerHeight = mainHeaderHeight + downHeaderHeight;
            const totalHeight = headerHeight + adHeaderHeight;
            
            $headerContainer.css('height', headerHeight);
            $('body').css('padding-top', totalHeight);
            
            $(window).off('scroll.headerDesktop').on('scroll.headerDesktop', function() {
                const currentScroll = $(this).scrollTop();
                
                if (currentScroll > 50) {
                    if (currentScroll > lastScrollTop && isHeaderVisible) {
                        $mainHeader.addClass('lg-header-up');
                        $downHeader.addClass('header-hidden');
                        $headerContainer.css('height', mainHeaderHeight);
                        isHeaderVisible = false;
                    } else if (currentScroll < lastScrollTop && !isHeaderVisible) {
                        $mainHeader.removeClass('lg-header-up');
                        $downHeader.removeClass('header-hidden');
                        $headerContainer.css('height', headerHeight);
                        isHeaderVisible = true;
                    }
                } else {
                    $mainHeader.removeClass('lg-header-up');
                    $downHeader.removeClass('header-hidden');
                    $headerContainer.css('height', headerHeight);
                    isHeaderVisible = true;
                }
                
                lastScrollTop = currentScroll;
            });
        } else {
            const headerHeight = mainHeaderHeight + resSearchHeight;
            const totalHeight = headerHeight + adHeaderHeight;
            
            $headerContainer.css('height', headerHeight);
            $('body').css('padding-top', totalHeight);
            
            $(window).off('scroll.headerMobile').on('scroll.headerMobile', function() {
                const currentScroll = $(this).scrollTop();
                
                if (currentScroll > 50) {
                    if (currentScroll > lastScrollTop && isHeaderVisible) {
                        $mainHeader.addClass('lg-header-up');
                        $resSearch.addClass('header-hidden');
                        $headerContainer.css('height', mainHeaderHeight);
                        isHeaderVisible = false;
                    } else if (currentScroll < lastScrollTop && !isHeaderVisible) {
                        $mainHeader.removeClass('lg-header-up');
                        $resSearch.removeClass('header-hidden');
                        $headerContainer.css('height', headerHeight);
                        isHeaderVisible = true;
                    }
                } else {
                    $mainHeader.removeClass('lg-header-up');
                    $resSearch.removeClass('header-hidden');
                    $headerContainer.css('height', headerHeight);
                    isHeaderVisible = true;
                }
                
                lastScrollTop = currentScroll;
            });
        }
    };

    headerMoving();
    
    let resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            headerMoving();
        }, 250);
    });

    // ========== Banner Carousel ==========
    $(".baner-owl").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        rtl: true,
        nav: false,
        dots: false
    });

    // ========== Product Carousel ==========
    $(".product-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        rtl: true,
        nav: false,
        dots: false,
        responsive: {
            0: { items: 1.6 },
            768: { items: 2.6 },
            820: { items: 2.8 },
            992: { items: 2.6 },
            1200: { items: 3.1 },
            1300: { items: 3.5 }
        }
    });

    $(".product-carousel-two").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        ltr: true,
        nav: false,
        dots: false,
        responsive: {
            0: { items: 1.6 },
            768: { items: 2.6 },
            820: { items: 2.8 },
            992: { items: 2.6 },
            1200: { items: 3.1 },
            1300: { items: 3.5 }
        }
    });

    // ========== Blog Carousel ==========
    $(".blog-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        rtl: true,
        nav: false,
        dots: false
    });

    // ========== MEGAMENU با HOVER و OVERLAY ==========
    
    // اضافه کردن overlay به body
    if ($('.megamenu-overlay').length === 0) {
        $('body').append('<div class="megamenu-overlay"></div>');
    }

    const $categoryBtn = $('#categoryBtn');
    const $megamenuDropdown = $('#megamenuDropdown');
    const $megamenuOverlay = $('.megamenu-overlay');
    const $closeBtn = $('#closeBtn');
    const $categoryItems = $('.category-item');
    const $subcategoriesContents = $('.subcategories-content');

    let hoverTimeout;

    // Hover روی دکمه دسته‌بندی
    $categoryBtn.on('mouseenter', function() {
        clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(function() {
            $megamenuDropdown.addClass('active');
            $categoryBtn.addClass('active');
            $megamenuOverlay.addClass('active');
        }, 200); // تاخیر 200ms برای جلوگیری از باز شدن ناخواسته
    });

    // Hover خارج از منو
    $categoryBtn.add($megamenuDropdown).on('mouseleave', function(e) {
        clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(function() {
            if (!$categoryBtn.is(':hover') && !$megamenuDropdown.is(':hover')) {
                closeMegamenu();
            }
        }, 300);
    });

    $megamenuDropdown.on('mouseenter', function() {
        clearTimeout(hoverTimeout);
    });


    function closeMegamenu() {
        $megamenuDropdown.removeClass('active');
        $categoryBtn.removeClass('active');
        $megamenuOverlay.removeClass('active');
    }

    // کلیک روی آیتم‌های دسته‌بندی
    $categoryItems.each(function() {
        $(this).on('mouseenter', function() {
            // حذف active از همه آیتم‌ها
            $categoryItems.removeClass('active');
            
            // اضافه کردن active به آیتم کلیک شده
            $(this).addClass('active');
            
            // دریافت نام دسته‌بندی
            const category = $(this).data('category');
            
            // مخفی کردن همه محتواها
            $subcategoriesContents.removeClass('active');
            
            // نمایش محتوای انتخاب شده
            $('[data-content="' + category + '"]').addClass('active');
        });
    });

    // جلوگیری از بسته شدن با کلیک داخل megamenu
    $megamenuDropdown.on('click', function(event) {
        event.stopPropagation();
    });

    // بستن با کلیک خارج از منو
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.category, #megamenuDropdown').length) {
            closeMegamenu();
        }
    });

    // بستن با فشار دکمه Escape
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMegamenu();
        }
    });
});

// ========== Scroll to Top Function ==========
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}