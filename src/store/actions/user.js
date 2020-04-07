import api from '@/api/common/common';

export default function getMenu(dispatch){
    //获取个人信息与系统菜单
    api.getMenu().then((res) => {
        dispatch({
            type: 'USER_MENU',
            data: res.data.menu
        })
    })
}