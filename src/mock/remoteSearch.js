import Mock from 'mockjs'
const list = []
const count = 20

for (let i = 0; i < count; i++) {
  list.push(Mock.mock({
    key: '@increment',
    order_no: '@guid()',
    price: '@float(1000, 15000, 0, 2)',
    'tag|1': ['success', 'pending']
  }))
}
export default {
  transactionList: (_) => {
    return {
      code: 20000,
      data: { items: list }
    }
  },
};