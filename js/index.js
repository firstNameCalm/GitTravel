window.addEventListener('load',function() {
// 轮播图部分
    var swiper = new Swiper('.swiper-container', {
        autoplay:true,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
// 首页排他思想
      let topList = document.querySelectorAll('.tab-Item')
      let index = document.querySelector('.index')
      for(let i = 0; i < topList.length; i++) {
        topList[i].addEventListener('mouseenter',function() {
          document.querySelector('.index').classList.remove('index')
          this.classList.add('index')
        })
      } 
      let wrap = document.querySelector('.wrap')
      wrap.addEventListener('mouseleave', function() {
        let wrapTimer = setTimeout(() => {
          document.querySelector('.index').classList.remove('index')
          index.classList.add('index')
        }, 2000);
      })
// 返回顶部模块
    let backImg = document.querySelector('.Back-top')
    let cheap = document.querySelector('.mexico')
    // console.log(cheap.offsetTop);
    document.addEventListener('scroll', function() {
      if (window.pageYOffset >= cheap.offsetTop) {
        backImg.style.display = 'block'
      }else {
        backImg.style.display = 'none'
      }
      var timer = null
      backImg.addEventListener('click',function() {
        timer = setInterval(function() {
          document.documentElement.scrollTop = 0
          if (document.documentElement.scrollTop  == 0) {
            clearInterval(timer)
            timer = null
          }
        },30)
      })
    })
})