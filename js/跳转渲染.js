window.addEventListener('load',function() {
    let name = document.querySelector('.register')
    let nowObj = JSON.parse(this.localStorage.getItem('name'))
    console.log(nowObj);
    if (nowObj) {
        name.innerHTML = `
            <div><a href="悠游登录界面/登陆.html" target="_blank">你好</a></div>
            <div class="line">:</div>
            <div><a href="悠游注册界面/注册.html" target="_blank" style="color: blue;">${nowObj.uname}</a></div>
        `
    }
})