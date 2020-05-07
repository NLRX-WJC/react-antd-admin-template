import request from '@/utils/request'
export function excelList() {
  return request({
    url: '/excel/list',
    method: 'get'
  })
}