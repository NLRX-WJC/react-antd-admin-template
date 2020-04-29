import request from '@/utils/request'
export function transactionList() {
  return request({
    url: '/transaction/list',
    method: 'get'
  })
}