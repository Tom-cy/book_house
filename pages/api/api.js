const request = require('./request.js')
const app = getApp()





// 获取currPage1的数据
let currPage1url = app.globalData.Baseurl + 'currPage=1'
export function currPage1() {
  return request.axios({
    url: currPage1url,
    method: 'GET'
  })
}

// 获取currPage2的数据
let currPage2url = app.globalData.Baseurl + 'currPage=2'
export function currPage2() {
  return request.axios({
    url: currPage2url,
    method: 'GET'
  })
}

// 获取currPage3的数据
let currPage3url = app.globalData.Baseurl + 'currPage=3'
export function currPage3() {
  return request.axios({
    url: currPage3url,
    method: 'GET'
  })
}

// 获取currPage4的数据
let currPage4url = app.globalData.Baseurl + 'currPage=4'
export function currPage4() {
  return request.axios({
    url: currPage4url,
    method: 'GET'
  })
}


// 获取 currPage=1&channelId=1081  数据
let currPage1ChannelId = app.globalData.BaseStoreurl + 'currPage=1&channelId=1081'
export function currPage1ChannelId1081() {
  return request.axios({
    url: currPage1ChannelId,
    method: 'GET'
  })
}
// https://m.kongfz.com/cart/jsonp/getCartNum
let currPage2ChannelId = app.globalData.BaseStoreurl + 'currPage=2&channelId=1081'
export function currPage2ChannelId1081() {
  return request.axios({
    url: currPage2ChannelId,
    method: 'GET'
  })
}