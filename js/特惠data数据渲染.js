window.addEventListener('load', function() {
    let data = [
        {
            scr: '../imgs/tehui1.jpg',
            sale: '已售150',
            title: '【泼水节预售】广州直飞泰国曼谷+芭提雅+沙美岛6天5晚跟团游(全程无自费+全程5星酒店+沙美岛出海+国际人妖秀+送意外险）',
            date: ':清明五一03/30-06/30',
            price: '￥2099起 '
        },
        {
            scr: '../imgs/tehui2.jpg',
            sale: '已售108',
            title: '广州直飞普吉岛6天4/5天4晚晚精致游(无自费+指定4晚网评国际五星酒店+赠送流量卡+大堡礁浮潜+蓝钻珊瑚岛+泰式风情人妖秀）',
            date: ':清明五一03/21-06/28',
            price: '￥2899起 '
        },
        {
            scr: '../imgs/tehui3.jpg',
            sale: '已售152',
            title: '【全景游】广州直飞土耳其12天(女神节赠送玫瑰水+五星酒店·泡温泉+番红花城特色民居+双海寻梦爱琴海+外星美景卡帕多奇亚）',
            date: ':清明五一03/30-05/30',
            price: '￥5999起 '
        },
        {
            scr: '../imgs/tehui4.jpg',
            sale: '已售89',
            title: '【樱花预售】广州直飞大阪+东京+京都+名古屋+富士山6天5晚品质游(拒签全退+河口湖樱花祭+升级1晚温泉酒店+日式酒店料理+浴衣体验）',
            date: ':清明五一04/03-05/31',
            price: '￥4280起 '
        },
        {
            scr: '../imgs/tehui5.jpg',
            sale: '已售77',
            title: '广州直飞越柬6天5晚游/柬埔寨一地5天4晚经典文化美食之旅(大小吴哥窟+高棉的微笑+金边皇宫+巴肯山日落+赠送柬埔寨特色纪念品）',
            date: ':清明五一04/03-07/28',
            price: '￥3888起 '
        },
        {
            scr: '../imgs/tehui6.jpg',
            sale: '已售205',
            title: '【一价全含】广州飞哈尔滨+亚布力+雪乡+民俗村6/7天5晚跟团游(百人销量+全程不带钱包+0购物0自费+天天特色餐+4星5星住宿)',
            date: ':清明五一清明五一03/22-03/31',
            price: '￥3980起 '
        }
    ];
    let left = document.querySelector('.main_info .fl') // 获取容器
    for(let i = 0; i < data.length; i++) {
        let box = document.createElement('div') // 循环创建盒子
        box.classList.add('info')
        box.innerHTML = `
                <img src=${data[i].scr} class="fl">
                <div class="fr">
                    <a href="#">${data[i].sale}</a>
                    <p>${data[i].title}</p>
                    <div class="time">班期&nbsp;${data[i].date}</div>
                    <div class="price">${data[i].price} </div>
                    <div class="reserve">立刻预定</div>
                </div>
                <div class="clear"></div>
        ` // 添加类容
        left.appendChild(box)
    }
})