
        var flag = true;
        
        AOS.init({
            duration: 800,
        });
        
		$( document ).ready(function() {
			var scene = document.getElementById('scene');
			var parallaxInstance = new Parallax(scene, {
				pointerEvents: true
			});
            
            const mtCard = document.getElementById("mtCard");
            const mtCard2 = document.getElementById("mtCard2");
            const mtCard3 = document.getElementById("mtCard3");
            const video = document.querySelectorAll("video");
            
            $("#mtCard").hover(function(){
                $(this).css("opacity", "0");
                video[2].play();
                }, function(){$(this).css("opacity", "1");
                video[2].pause();
                video[2].currentTime = 0;
            })      
                        
            $("#mtCard2").hover(function(){
                $(this).css("opacity", "0");
                video[1].play();
                }, function(){$(this).css("opacity", "1");
                video[1].pause();
                video[1].currentTime = 0;
            }) 
            
                        
            $("#mtCard3").hover(function(){
                $(this).css("opacity", "0");
                video[0].play();
                }, function(){$(this).css("opacity", "1");
                video[0].pause();
                video[0].currentTime = 0;
            }) 
                 
            $('#cardImgDG').click(function(){
                demoGridModal.open();
            })
            
            $('.demoGridCloseBtn').click(function(){
                Custombox.modal.close();
            })
            
            $('#cardImgIST').click(function(){
                istModal.open();
            })
            
            $('.istCloseBtn').click(function(){
                Custombox.modal.close();
            })
            
            
            $('.cardImgMT').click(function(){
                mtModal.open();
            })
            
            $('.bCloseBtn').click(function(){ //change later to MTcloseBtn, including css
                Custombox.modal.close();
            })
            
            $('.resumeCloseBtn').click(function(){
                Custombox.modal.close();
            })
            
            $("#resumeShape").click(function(){
                resumeModal.open();
            })
            
            // Instantiate new modal
            var demoGridModal = new Custombox.modal({
                content: {
                    effect: 'fadein',
                    target: '#demoGridModal',
                    close: 'true',
                    animateFrom: 'right',
                    fullscreen: 'true',
                    speedIn: 400
                }
            });
            
            var istModal = new Custombox.modal({
                content: {
                    effect: 'fadein',
                    target: '#istModal',
                    close: 'true',
                    animateFrom: 'right',
                    fullscreen: 'true',
                    speedIn: 400
                }
            })
            
            var mtModal = new Custombox.modal({
                content: {
                    effect: 'fadein',
                    target: '#mtModal',
                    close: 'true',
                    animateFrom: 'right',
                    fullscreen: 'true',
                    speedIn: 400
                }
            })
            
            var resumeModal = new Custombox.modal({
                    content: {
                    effect: 'fadein',
                    target: '#resumeModal',
                    close: 'true',
                    animateFrom: 'right',
                    fullscreen: 'true',
                    speedIn: 400
                } 
            })
            
            $("#socialShape").click(function(){
                location.href = "https://www.instagram.com/milk_kale/";
                                    
            })
            
            $("#socialShapeMobile").click(function(){
                location.href = "https://www.instagram.com/milk_kale/";
                console.log("hits social");
                                    
            })
            
            $("#gitShape").click(function(){
                location.href = "https://github.com/mc4107";
            })
            
            $("#gitShapeMobile").click(function(){
                location.href = "https://github.com/mc4107";
                console.log("hits git");
            })
      
            $(window).scroll(function(){
                var wScroll = $(this).scrollTop();
        
                if(wScroll > $('.orbs').offset().top -$(window).height()){
                    
                    if ($('#resumeShape').width() == 100){
                        console.log("is smaller screen");
                        var offset = Math.min(200, wScroll - $('.orbs').offset().top +$(window).height() - 600);
                        var offset2 = Math.min(300, wScroll - $('.orbs').offset().top +$(window).height() - 500);
                        var offset3 = Math.min(500, wScroll - $('.orbs').offset().top +$(window).height() - 325);
                        var offset4 = Math.min(400, wScroll - $('.orbs').offset().top +$(window).height() - 400);
                        
                        $('.orb-1').css({'transform': 'translate('+ offset + 'px, '+ 0 + 'px)'});

                        $('.orb-2').css({'transform': 'translate('+ offset2 + 'px, '+ 0 + 'px)'});

                        $('.orb-3').css({'transform': 'translate('+ offset2 + 'px, '+ 0 + 'px)'});

                        $('.orb-4').css({'transform': 'translate(-'+ offset3 + 'px, '+ 0 + 'px)'});

                        $('.orb-5').css({'transform': 'translate(-'+ offset3 + 'px, '+ 0 + 'px)'});

                        $('.orb-6').css({'transform': 'translate(-'+ offset3 + 'px, '+ 0 + 'px)'});

                        $('.orb-7').css({'transform': 'translate(-'+ offset4 + 'px, '+ 0 + 'px)'});

                        $('.orb-8').css({'transform': 'translate(-'+ offset4 + 'px, '+ 0 + 'px)'});

                        $('.orbDetail-1').css({'transform': 'translate(-'+ offset4 + 'px, '+ 0 + 'px)'});

                        $('.orbDetail-2').css({'transform': 'translate(-'+ offset4 + 'px, '+ 0 + 'px)'});

                        $('.orbDetail-3').css({'transform': 'translate('+ offset2 + 'px, '+ 0 + 'px)'});

                        $('.orbDetail-4').css({'transform': 'translate('+ offset2 + 'px, '+ 0 + 'px)'});

                        $('.orbDetail-5').css({'transform': 'translate(-'+ offset3 + 'px, '+ 0 + 'px)'});

                        $('.orbDetail-6').css({'transform': 'translate(-'+ offset3 + 'px, '+ 0 + 'px)'});

                        $('.orbDetail-7').css({'transform': 'translate(-'+ offset4 + 'px, '+ 0 + 'px)'});

                        $('.orbDetail-8').css({'transform': 'translate(-'+ offset4 + 'px, '+ 0 + 'px)'});

                        $('.dancingMan').css({'transform': 'translate('+ offset2 + 'px, '+ 0 + 'px)'});
                    }
                    
                    else{
                        var offset = Math.min(300, wScroll - $('.orbs').offset().top +$(window).height() - 600);
                        var offset2 = Math.min(400, wScroll - $('.orbs').offset().top +$(window).height() - 500);
                        var offset3 = Math.min(600, wScroll - $('.orbs').offset().top +$(window).height() - 325);
                        var offset4 = Math.min(500, wScroll - $('.orbs').offset().top +$(window).height() - 400);
                        var offset5 = Math.min(800, wScroll - $('.orbs').offset().top +$(window).height() - 325);


                        $('.orb-1').css({'transform': 'translate('+ offset + 'px, '+ 0 + 'px)'});

                        $('.orb-2').css({'transform': 'translate('+ offset2 + 'px, '+ 0 + 'px)'});

                        $('.orb-3').css({'transform': 'translate('+ offset2 + 'px, '+ 0 + 'px)'});

                        $('.orb-4').css({'transform': 'translate(-'+ offset3 + 'px, '+ 0 + 'px)'});

                        $('.orb-5').css({'transform': 'translate(-'+ offset3 + 'px, '+ 0 + 'px)'});

                        $('.orb-6').css({'transform': 'translate(-'+ offset3 + 'px, '+ 0 + 'px)'});

                        $('.orb-7').css({'transform': 'translate(-'+ offset4 + 'px, '+ 0 + 'px)'});

                        $('.orb-8').css({'transform': 'translate(-'+ offset4 + 'px, '+ 0 + 'px)'});

                        $('.orbDetail-1').css({'transform': 'translate(-'+ offset4 + 'px, '+ 0 + 'px)'});

                        $('.orbDetail-2').css({'transform': 'translate(-'+ offset4 + 'px, '+ 0 + 'px)'});

                        $('.orbDetail-3').css({'transform': 'translate('+ offset2 + 'px, '+ 0 + 'px)'});

                        $('.orbDetail-4').css({'transform': 'translate('+ offset2 + 'px, '+ 0 + 'px)'});

                        $('.orbDetail-5').css({'transform': 'translate(-'+ offset3 + 'px, '+ 0 + 'px)'});

                        $('.orbDetail-6').css({'transform': 'translate(-'+ offset3 + 'px, '+ 0 + 'px)'});

                        $('.orbDetail-7').css({'transform': 'translate(-'+ offset4 + 'px, '+ 0 + 'px)'});

                        $('.orbDetail-8').css({'transform': 'translate(-'+ offset4 + 'px, '+ 0 + 'px)'});

                        $('.dancingMan').css({'transform': 'translate('+ offset5 + 'px, '+ 0 + 'px)'});
                    }

                }

                if(wScroll > $('.tearShape').offset().top -$(window).height()){
                    let startingPoint = $('.tearShape').offset().top -$(window).height();
                    var dynamicPoint = wScroll - startingPoint;

                    if(dynamicPoint <= 520){
                        dynamicPoint = dynamicPoint - 90;
                        $('.tearShape').css({
                            'height': ''+ dynamicPoint +'px'
                        });

                        if(dynamicPoint <= 280){
                            $('.tearShape2').css({
                                'height': ''+ dynamicPoint +'px'
                            });
                        }
                    }
                }
            });
            
            const section = document.querySelector("section");
            const section2 = document.querySelector("section2");
            let currentPixel = window.pageYOffset;
            
            const looper = function (){
                const newPixel = window.pageYOffset;
                const diff = newPixel - currentPixel;
                const speed = diff * 0.25;
                
                section.style.transform = "skewY(-" + speed + "deg)";
                section2.style.transform = "skewY(-" + speed + "deg)";
                
                currentPixel = newPixel;
                
                requestAnimationFrame(looper);
            }
            
            looper();
        });
        