window.addEventListener('load',function() {
    let tabList = document.querySelectorAll('.banner a')
    let tabImg = document.querySelectorAll('.banner .fl')
    for(let i = 0; i < tabList.length; i++) {
        tabList[i].addEventListener('click', function() {
            document.querySelector('.add').classList.remove('add')
            this.classList.add('add')

            document.querySelector('.banner .active').classList.remove('active')
            tabImg[i].classList.add('active')
        })
    }
})