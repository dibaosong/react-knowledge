
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


