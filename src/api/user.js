import request from '@/utils/request'

export function login(params) {
  return request({
    url: '/taskmaster/user/login',
    method: 'get',
    params
  })
}
export function logout(data) {
    return request({
        url: '/vue-admin-template/user/logout',
        method: 'post',
        data
    })
}
  