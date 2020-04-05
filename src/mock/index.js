
import Mock from 'mockjs';

Mock.setup({
    timeout: 100
})

//登录
Mock.mock(/\/api\/user\/login(|\?\S*)$/,'post',{
    success: true,
    message: '成功了',
    token: "fdasfdsafdsafdas"
})

//获取个人信息与系统菜单
Mock.mock(/\/api\/user\/menu(|\?\S*)$/,'get',{
    success: true,
    message: '成功了',
    data: {
        "info": {
            "name": "管理员",
            "avatar": "https://himg.bdimg.com/sys/portrait/item/pp.1.1a3e55f2.J-hp2UWn4ZTZ4B-boxxaZQ.jpg?tt=1585406576138"
        },
        "menu": [
            {
                "id": 1,
                "name": "首页",
                "path": "/home"
            },
            {
                "id": 2,
                "name": "工具页",
                "path": "/tool",
                "childs": [
                    {
                        "id": 21,
                        "name": "列表页",
                        "path": "/tool/list"
                    }
                ]
            }
        ]
    }
})


