// JavaScript Document
(function($){
    $(document).ready(function(){
        var $window = $(window),
            hd = $('#header'),
            hh = hd.outerHeight(),
            wh = $(window).outerHeight(),
            wst = $(window).scrollTop(),
            banner = $('#bannertop');



        // FIXED HEADER
        /*-----------------------------------------------------------------*/


                    
            function headerSingle() {   
                if ($('#panel').length >0){ p = $('#panel').height(); }else{ p = 0; }
                if(hd.hasClass('fixe')){
                    var ah = $('<div class="afterHeader"> ');
                    hd.after(ah.height(hh));
                    $(window).scroll(function() {
                        if ($(window).scrollTop() > p) $('#header').addClass('sticky');
                        else $('#header').removeClass('sticky');
                    });
                }
            }


            headerSingle(); 

    



        // TOGGLECLASS
        /*-----------------------------------------------------------------*/
            $(".toggleClass > .toggle").each(function () {
                $(this).click(function(){
                    $(this).parent().toggleClass('active');
                }); 
            }); 
            

        // MENU MOBILE 
        /*-----------------------------------------------------------------*/

        $('.menu-btn').click(function(){
            $('body').toggleClass('showMenu'); 
        }); 

        function toggleSlideSub(li,sub) {    
            if(li.hasClass('parent-showsub')){
                sub.slideUp(300,function(){
                    li.removeClass('parent-showsub');
                });                           
            }else{
                sub.slideDown(300,function(){
                    li.addClass('parent-showsub');
                });                           
            }  
        }
        function ClickToggleSlide(span,a,li,sub) {    
            span.click(function(){
                toggleSlideSub(li,sub);
            }); li.prepend(span);
            a.click(function(e){
                e.preventDefault();
                toggleSlideSub(li,sub); 
            });
        }

        $('ul.menu-top-header ul').each(function(){
            var li = $(this).parent(),
                a = li.children('a[href="#"]'),
                btn = $('<span>',{'class':'showsubmenu icon-arrow-2 ib', text : '' });
                $(this).wrap('<div class="wrapul"></div>');
                var wrapul = li.children('.wrapul');

            ClickToggleSlide(btn,a,li,wrapul);           
        })

        $('ul.menu-taxonomy ul').each(function(){
            $(this).parent().addClass('children');
        })
            
            
        var wrapmb = $('.wrap-menu-mb'),
            smb = wrapmb.data('style');
            wrapmb.find('li[class*="children"]').each(function(){
                var 
                p = $(this),
                idli = p.attr('id'),
                ul = p.children('ul'),
                a = p.children('a[href="#"]'),
                btn = $('<span>',{'class':'showsubmenu icon-arrow-2 ib', text : '' });
                p.children('ul').children('li').children('ul').attr("data-parent",idli);
                //a.addClass('outactive').attr("data-parent",id);
                if(smb == 2){
                    btn.click(function(){
                        p.toggleClass('activesubmenu'); 
                        wrapmb.toggleClass('activesubmenu'); 
                    }); p.prepend(btn);
                    var text = p.children('a').html();
                    var head = $('<div class="menu-head"><h3 class="back"><i class="icon-arrow-3 ix"></i> '+text+'</h3></div>');

                    ul.wrap('<div class="wrapul"></div>');

                    p.children('.wrapul').prepend(head);                    
                    $('.back').click(function(){
                        $(this).parent().parent().parent().removeClass('activesubmenu');
                        wrapmb.removeClass('activesubmenu');
                    });  
                }else if(smb == 3){
                    var text = p.children('a').html();
                    var head = $('<div class="menu-head"><h3 class="back"><i class="icon-arrow-3 ix"></i> '+text+'</h3></div>');

                    id = p.attr('id');

                    ulp = ul.data('parent');
                    ul.wrap('<div id="w-'+id+'" data-parent="w-'+ulp+'"  class="wrapul"></div>');
                    var wrap = p.children('.wrapul');
                    wrap.prepend(head);  
                    

                    wrapmb.append(wrap);

                    btn.click(function(){
                        id = $(this).parent().attr('id');
                        a = p.closest(".wrapul");
                        if (a.hasClass('outactive')){
                            a.removeClass('outactive').addClass('outactive2');
                        }else{
                            a.addClass('outactive');
                        }
                        wrapmb.children('#w-'+id+'').addClass('outactive');
                    }); p.prepend(btn);
                    
             
                    $('.back').click(function(){
                        pr = $(this).parent().parent();
                        id = pr.data('parent');
                        pr.removeClass('outactive');
                        a = wrapmb.children('#'+id+'');
                        if (id=='w-undefined'){
                            $('.wrapul.main').removeClass('outactive');
                        }else{
                            a.addClass('outactive').removeClass('outactive2');
                        }                        
                        
                    });  
                } else {  
                    ClickToggleSlide(btn,a,p,ul);
                }

            });    // append - prepend - after - before



        // CLICK SCROLL
        /*-----------------------------------------------------------------*/
            // Click scroll a
          $("a.scrollspy").click(function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('html, body').animate({
              scrollTop: $(id).offset().top - hh
              }, 1000)
          });

            // Back-top
            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $('#back-top').addClass('show');
                } else {
                    $('#back-top').removeClass('show');
                }
            });
            $('#back-top').click(function() {
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });

        // THEME
        /*-----------------------------------------------------------------*/

            $('.searchform .textinput').each(function(){
                var oldVal;
                $(this).bind('DOMAttrModified textInput input change keypress paste focus', function() { //keypress focus
                    var val = $(this).val();
                    if (val) {
                        if(val.length>=3){
                            $(this).parent('.searchform').addClass('focus');
                        }else{
                            $(this).parent('.searchform').removeClass('focus');
                        }
                    }
                });
            })

            $("[class*='cttab'] .tab-menu > div").each(function () {
                $(this).click(function () {
                  var item = $(this),
                    index = $(this).index(),
                    menu = item.parent(),
                    content = menu.parent().children('.tab-content');

                  item.addClass('active').siblings().removeClass('active');
                  content.children(':eq('+index+')').addClass('active').siblings().removeClass('active');
                  content.children(':eq('+index+')').find('.imglazy').each(function(){
                      var src = item.attr('data-src');
                      item.attr('src', src);
                      item.removeClass('imglazy').addClass('imgloaded');
                  }); 
         
                });
            });   
                    

            // VIDEO YOUTUBE
            function resv(l) {   
                var w = parseInt(l.width()),
                    h = parseInt(l.height()),
                    f = l.children('iframe'),
                    dw = f.attr("width"),
                    dh = f.attr("height");
                if(!dw) dw = 1600;
                if(!dh) dh = 900;
                if(w>h && (h/w<dh/dw)){
                    hf = (w*dh)/dw;
                    tf = -((hf - h)/2);
                    f.css({'width': "",'height': hf, 'top': tf, 'left': ""});
                }else{
                    wf = (h*dw)/dh;
                    lf = -((wf - w)/2);
                    f.css({'width': wf,'height': "", 'top': "", 'left': lf});                    
                }                        
            }  

            // iframe video
            var getVideoUrl = function(id,v){
              return 'https://www.youtube.com/embed/' + id + '?' + v + '&disablekb=1&hl=en&loop=1&modestbranding=1&showinfo=0&autohide=0&color=white&iv_load_policy=3&theme=light&rel=0&enablejsapi=1';
            }
            $(".single_video").on('click',function(){
              var id=$(this).data('id'),
                  v=$(this).data('video'),
                  iframe = $('<iframe   frameborder="0" allowfullscreen="1" allow="autoplay; encrypted-media;" src="'+getVideoUrl(id,v)+'"></iframe>');
              $(this).html(iframe);
            }); 




            //Auto toggleHeight
            function toggleAutoHeight() {
              $(".toggleAutoHeight").each(function () {  
                var e = $(this),
                    h = e.data('height'),
                    p = e.data('position'),
                    tm = e.data('more'),
                    tl = e.data('less'),
                    i = e.data('i'),
                    content = e.children('.tgh-content'),
                    first = content.children('.tgh-first'),
                    c = content.outerHeight();
                if(!tm) tm = 'Show more';
                if(!tl) tl = 'Show less';
                var btn = $('<span class="showmore"><span class="text">'+tm+'</span> <i class="'+i+'"></i></span>');

                if(first.length>0){
                    h=0;
                    first.each(function () {
                        h += $(this).outerHeight();
                    });                
                }
                    
                if(c>h){
                    content.wrap('<div  class="wtgh"></div>');
                    var wtgh = e.children('.wtgh');
                    wtgh.css('height',h+'px');
                    btn.click(function(){
                        if(e.hasClass('active')) {
                            hh=h;
                            btn.children('.text').html(tm);
                        }
                        else {
                            hh=c;
                            btn.children('.text').html(tl);
                        }
                        wtgh.animate( { height:hh+"px" }, { queue:false, duration:300 });
                        e.toggleClass('active');
                    }); 
                    if(p=='top')e.prepend(btn);else e.append(btn);          
                }
              });  
            }  
            toggleAutoHeight(); 


        // EQUAL HEIGHT
        /*-----------------------------------------------------------------*/
            // equalHeight
            function equal() {
                $(".equalHeight").each(function () {
                    var $this = $(this),
                        $equal = $this.find(".equal");
                    var padding = $this.attr('data-padding');                    
                    if(!padding)   padding = 0 ;
                    if ($this.length > 0) {
                      $equal.imagesLoaded(function () {
                        equalHeight($equal, parseInt(padding));
                      });
                    }
                });    
            }        
            /* Equal Height good*/
            function equalHeight(className, padding) {
              var tempHeight = 0;
              $(className).each(function () {
                current = $(this).height();
                if (parseInt(tempHeight) < parseInt(current)) {
                  tempHeight = current;
                }
              });
              $(className).css("height", tempHeight + padding + "px");
            }
                       

        // LAZYLOAD
        /*-----------------------------------------------------------------*/
            var offdefault = 50;  //BJLL.threshold;
            var BJLL_options = BJLL_options || {},
                BJLL = {
                    _ticking: !1,
                    check: function() {
                        if (!BJLL._ticking) {
                            BJLL._ticking = !0, void 0 === BJLL.threshold && (void 0 !== BJLL_options.threshold ? BJLL.threshold = parseInt(BJLL_options.threshold) : BJLL.threshold = 200);
                            var e = document.documentElement.clientHeight || body.clientHeight,
                                t = !1,
                                n = document.getElementsByClassName("lazy-hidden");
                            [].forEach.call(n, function(n, a, i) {
                                var s = n.getBoundingClientRect(),
                                    offset = parseFloat(n.getAttribute('offset'));
                                if(offset) o = 0 - offset;
                                else o = offdefault;
                                e - s.top + o > 0 && (BJLL.show(n), t = !0)
                            }), BJLL._ticking = !1, t && BJLL.check()
                        }
                    },
                    show: function(e) {
                        e.className = e.className.replace(/(?:^|\s)lazy-hidden(?!\S)/g, ""), e.addEventListener("load", function() {
                            e.className += " loaded", BJLL.customEvent(e, "lazyloaded");
                        }, !1);
                        var t = e.getAttribute("data-lazy-type");
                        e.className += ' loaded';

                        if(e.classList.contains('onepage')){

                          if(e.classList.contains('active')){
                          }else{
                            $('.onepage').removeClass('active');
                            e.classList.add("active");
                            // i = $(this).attr('id');
                            // $('.nav-tabs li').removeClass('active');                
                            // $('.nav-tabs a[href="#'+i+'"]').parent().addClass('active');
                          }
                        }         
                        if ("image" == t) null != e.getAttribute("data-lazy-srcset") && e.setAttribute("srcset", e.getAttribute("data-lazy-srcset")), null != e.getAttribute("data-lazy-sizes") && e.setAttribute("sizes", e.getAttribute("data-lazy-sizes")), e.setAttribute("src", e.getAttribute("data-lazy-src"));
                        else if ("bg" == t) {
                            var n = e.getAttribute("data-lazy-src");
                            e.style.backgroundImage = 'url(' + n + ')';
                        }
                        else if ("iframe" == t) {
                            var n = e.getAttribute("data-lazy-src"),
                                a = document.createElement("div");
                            a.innerHTML = n;
                            var i = a.firstChild;
                            e.parentNode.replaceChild(i, e);
                        }
                        else if ("mp4" == t) {
                            var n = e.getAttribute("data-lazy-src"),
                                a = '<source src="'+n+'" type="video/mp4">';
                            e.innerHTML += a;
                        }
                    },
                    customEvent: function(e, t) {
                        var n;
                        document.createEvent ? (n = document.createEvent("HTMLEvents")).initEvent(t, !0, !0) : (n = document.createEventObject()).eventType = t, n.eventName = t, document.createEvent ? e.dispatchEvent(n) : e.fireEvent("on" + n.eventType, n)
                    }
                };
            window.addEventListener("load", BJLL.check, !1), window.addEventListener("scroll", BJLL.check, !1), window.addEventListener("resize", BJLL.check, !1), document.getElementsByTagName("body").item(0).addEventListener("post-load", BJLL.check, !1);


        // RESPONSIVE
        /*-----------------------------------------------------------------*/
        
        $window.bind("load", function() {
            equal();
        });        

        isRes = function(){return $window.width() > 767};
        $window.resize(function(){
            //if(isRes()){ followequal();}
            //equal(); 
        });



    }); 

})(jQuery); 

