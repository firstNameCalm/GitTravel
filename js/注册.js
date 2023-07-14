window.addEventListener('load',function() {
    let ipt = document.querySelector('.tel')
    let btn = document.querySelector('.btn')
    let telReg = /^1(3|4|5|7|8)\d{9}$/
    ipt.addEventListener('focus',function() {
        ipt.placeholder = ''
    })
    ipt.addEventListener('blur',function() {
        if(!ipt.value) {
            ipt.placeholder = '请输入手机号'
        }
    })
    btn.onclick = function() {
        if(telReg.test(ipt.value)) {
            // alert('请注意查收验证码')
            let obj = {
                uname: ipt.value
            }
            localStorage.setItem('name',JSON.stringify(obj))
            location.href = '../index.html'

        }else {
            alert('请确认你所输入的手机格式')
        }
        
    }
})