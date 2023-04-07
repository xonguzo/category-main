$(document).ready(function () {


/* 퀵메뉴 */

$('#follow').hover(function()
  {
    $('#follow').stop().animate({marginRight: '100px'}, 100);
  },function()
    {
      $('#follow').stop().animate({marginRight: '0px'}, 100);
  });

  $(window).scroll(function(){
    let curpos=$(window).scrollTop();
    $('#follow').stop().animate({top: curpos+180});
  });



/* 메인비주얼 */
let fimg=$('.changeimg ul li');
let ftext=$('.changeimg ul li .con');

let woldImg=0;
let wnewImg=0;
let woldText=0;
let wnewText=0;
let wcount=fimg.length;

function changeImg(wnewImg)
  {if(woldImg !=wnewImg)
    {fimg.eq(woldImg).removeClass('visibleImg');
    fimg.eq(wnewImg).addClass('visibleImg');
    };
    woldImg = wnewImg;
  };
function changeText(wnewText)
  {if(woldText !=wnewText)
    {
    ftext.eq(woldText).removeClass('visibleTxt');
    ftext.eq(wnewText).addClass('visibleTxt');
    }
    woldText = wnewText;
  };

//자동함수 생성
function autoImg()
  {wnewImg++;
    if(wnewImg>wcount-1)
      {wnewImg=0;}
    changeImg(wnewImg);
  };
function autoText()
  {wnewText++;
    if(wnewText>wcount-1)
      {wnewText=0;}
    changeText(wnewText)
  };

timer1=setInterval(autoImg, 4000);
timer2=setInterval(autoText, 4000);

/* 메인메뉴 */  
$('.gnb').hover(function()
  {$(this).find('.main .submenu').stop().slideDown();
  $('.bgBox').stop().slideDown();
  }, function()
    {$(this).find('.main .submenu').stop().slideUp();
    $('.bgBox').stop().slideUp();
    });

/* 행사배너 */

let bnum=0;
let nold=0;
let g_pop=$('.poster').index();
$('.page span:nth-child(1)').text(g_pop+1); //index는 0부터 시작하므로 펭지를 표시하기 위해 1을 더함

  //다음보기
  $('.right').click(function(){

    if(bnum<4) /* 전체 갯수의 반개수만큼 정도->맨앞에 이미지를 기준으로 하기때문에 보이는 폭을 고려해서 전체 갯수의 반 정도를 설정함 */
      {
      $('.hide .poster').stop(true,true).animate({marginLeft:'-=420px'},500);
      bnum++;
    }

    nnew=nold+1;
    nnum=$('.expl ul').length;

    if(nnew<nnum)
      {
        $('.expl ul').eq(nold).hide();
        $('.expl ul').eq(nnew).show();
        nold=nnew;
      }

      if(g_pop<4)
        {g_pop++;
        $('.page span:nth-child(1)').text(g_pop+1); //바뀌는 페이지 표시
        };
  });

//이전보기
$('.left').click(function(){

  if(bnum>0) /* 전체 갯수의 반개수만큼 정도->맨앞에 이미지를 기준으로 하기때문에 보이는 폭을 고려해서 전체 갯수의 반 정도를 설정함 */
    {
    $('.hide .poster').stop(true,true).animate({marginLeft:'+=420px'},500);
    bnum--;
  }

  nnew=nold-1;

    if(nnew>=0)
      {
        $('.expl ul').eq(nold).hide();
        $('.expl ul').eq(nnew).show();
        nold=nnew;
      }

      if(g_pop>0)
        {g_pop--;
        $('.page span:nth-child(1)').text(g_pop+1); //바뀌는 페이지 표시
        }  

});





});



