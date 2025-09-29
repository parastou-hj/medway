   $(document).ready(function() {
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
        console.log("Desktop mode activated");
        
        const headerHeight = mainHeaderHeight + downHeaderHeight;
        const totalHeight = headerHeight + adHeaderHeight;
        
       
        $headerContainer.css('height', headerHeight);
        $('body').css('padding-top', totalHeight);
        
        // Scroll handler for desktop
        $(window).off('scroll.headerDesktop').on('scroll.headerDesktop', function() {
          const currentScroll = $(this).scrollTop();
          
       
          if (currentScroll > 50) {
           
            if (currentScroll > lastScrollTop && isHeaderVisible) {
              $mainHeader.addClass('lg-header-up');
              $downHeader.addClass('header-hidden');
              $headerContainer.css('height', mainHeaderHeight);
              isHeaderVisible = false;
              console.log("Desktop: Hiding header-down");
            } 
            
            else if (currentScroll < lastScrollTop && !isHeaderVisible) {
              $mainHeader.removeClass('lg-header-up');
              $downHeader.removeClass('header-hidden');
              $headerContainer.css('height', headerHeight);
              isHeaderVisible = true;
              console.log("Desktop: Showing header-down");
            }
          } else {
            
            $mainHeader.removeClass('lg-header-up');
            $downHeader.removeClass('header-hidden');
            $headerContainer.css('height', headerHeight);
            isHeaderVisible = true;
          }
          
          lastScrollTop = currentScroll;
        });
      } 
      
      else {
        console.log("Mobile mode activated");
        
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
              console.log("Mobile: Hiding res-search");
            } 
            
            else if (currentScroll < lastScrollTop && !isHeaderVisible) {
              $mainHeader.removeClass('lg-header-up');
              $resSearch.removeClass('header-hidden');
              $headerContainer.css('height', headerHeight);
              isHeaderVisible = true;
              console.log("Mobile: Showing res-search");
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
  
    // Initialize on document ready
    headerMoving();
    
    // Reinitialize on window resize with debounce
    let resizeTimer;
    $(window).on('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        console.log("Window resized - reinitializing header behavior");
        headerMoving();
      }, 250);
    });
  });
 
 
 $(document).ready(function(){
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
          $('.baner-right').click(function() {
                $('.baner').trigger('prev.owl.carousel');
            });
            
            $('.baner-left').click(function() {
                 $('.baner').trigger('next.owl.carousel');
            });
    });

  
    $(document).ready(function(){
        $(".product-carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            rtl: true,
            nav: false,
            dots: false,
            responsive:{
              0:{
                items:1.4
              },
              992:{
                items:3.5
              }
            }
        });
          $('.baner-right').click(function() {
                $('.baner').trigger('prev.owl.carousel');
            });
            
            $('.baner-left').click(function() {
                 $('.baner').trigger('next.owl.carousel');
            });
    });
       $(document).ready(function(){
        $(".product-carousel-two").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            ltr: true,
            nav: false,
            dots: false,
            responsive:{
              0:{
                items:1.4
              },
              992:{
                items:3.5
              }
            }
        });
          $('.baner-right').click(function() {
                $('.baner').trigger('prev.owl.carousel');
            });
            
            $('.baner-left').click(function() {
                 $('.baner').trigger('next.owl.carousel');
            });
    });
     $(document).ready(function(){
        $(".blog-carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            rtl: true,
            nav: false,
            dots: false,
         
        });
          $('.baner-right').click(function() {
                $('.baner').trigger('prev.owl.carousel');
            });
            
            $('.baner-left').click(function() {
                 $('.baner').trigger('next.owl.carousel');
            });
    });
function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }


     