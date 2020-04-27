import request from '@/utils/request'

export function reqUserInfo(data) {
  return request({
    url: '/userInfo',
    method: 'post',
    data
  })
}