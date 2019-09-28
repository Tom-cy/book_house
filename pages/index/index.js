// pages/index/index.js
var amapFile = require('../../libs/amap-wx.js')
var swiper = require('../../data/swiperJSON.js')
var nav = require('../../data/navListJSON.js')
import {
  currPage1,
  currPage2,
  currPage3,
  currPage4
} from '../../pages/api/api.js'
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    // 旧书国学经典数据切换idx
    idx1: 0,
    // 新书-新近出版数据切换idx
    idx2: 0,
    // 新书销售排行榜数据切换idx
    idx3: 0,
    // json数据idx
    jsonidx: 3,
    // 轮播图参数
    swiperList: [],
    // 导航栏参数
    navList: [],
    // 今日上新模块数据
    todaybookList: [],
    // 全部拍卖单独模块
    allsaleonly: [],
    // 全部拍卖其他模块
    allsaleother: [],
    // 拍卖数据
    auctionList: [],
    // 珍品拍卖三天热点
    hotthreedayList: [],
    // 首页图书滚动 实现视频左右滑动 数据-
    swipergoodbookList: [],
    // 首页书单推荐 
    allBookList: [],
    // 新书广场数据
    appDisplayList: [],
    // 旧书国学热点数据
    oldbookList: [],
    // 新书，新近出版
    newbookList: [],
    // 新书销售排行榜
    salebookList: []

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    // 获取首页轮播图数据
    // 获取导航栏数据
    that.setData({
      swiperList: swiper.swiperjson1,
      navList: nav.navjson,
    })


    // 获取currPage的数据
    this.getcurrPage1()
    this.getcurrPage2()
    this.getcurrPage3()
    this.getcurrPage4()


  },
  // 获取currPage1 模块数据
  getcurrPage1() {
    const that = this
    currPage1().then((respone) => {
      if (respone.status === 1) {
        let res = respone.result.list
        var arr1 = []
        var arr2 = []
        res.filter(v => {
          if (v.dataId === '27') {
            arr1 = v.data
          }
          if (v.dataId === '28') {
            arr2 = v.data
          }
          if (v.dataId === '29') {
            that.setData({
              allsaleonly: v.data.shift(),
              allsaleother: v.data
            })
          }
        })
        let respArray = arr1.concat(arr2)
        that.setData({
          todaybookList: respArray
        })
      }
    })
  },
  // 获取currPage2 模块数据
  getcurrPage2() {
    const that = this
    currPage2().then((respone) => {
      if (respone.status === 1) {
        let res = respone.result.list
        var arr1 = []
        var arr2 = []
        res.filter(v => {
          if (v.dataId === '30') {
            arr1 = v.data
          }
          if (v.dataId === '31') {
            arr2 = v.data
          }
        })
        let respArray = arr1.concat(arr2)
        that.setData({
          hotthreedayList: respArray
        })

        let resdata = res.filter(v => {
          console.log(v)
          return v.dataId === '24'
        })
        that.setData({
        swipergoodbookList: resdata[0]
        })
      }
    })
  },
  // 获取currPage3 模块数据
  getcurrPage3() {
    const that = this
    currPage3().then((respone) => {
      if (respone.status === 1) {
        let res = respone.result.list
        res.filter(v => {
          if (v.dataId === '32') {
            that.setData({
              allBookList: v
            })
          } else if (v.dataId === '25') {
            that.setData({
              appDisplayList: v
            })
          }
          // let resdata = res.filter(v => {
          //   return v.dataId === '24'
          // })
          // that.setData({
          //   swipergoodbookList: resdata[0]
          // })
          //  if (v.dataId === '33') {
          //   // 旧书，国学数据
          //   wx.setStorageSync("oldbookjson", v.data[0].data)
          //  let oldjson = v.data[0].data.slice(0, 3)
          //   that.setData({
          //     oldbookList: v,
          //     oldjson
          //   })
          // }
        })
      }
    })
  },

  // 获取currPage4 模块数据
  getcurrPage4() {
    // const that = this
    // currPage4().then((respone) => {

    // })
  },

  // 好书推荐页面跳转
  goodbookGo(e) {
    let swipergoodbook = this.data.swipergoodbookList.data[0].data
    let mid = e.currentTarget.dataset.id
    let goodList = null
    swipergoodbook.filter(v => {
      if (v.mid == mid) {
        goodList = v
      }
    })
    wx.navigateTo({
      url: '/pages/recommend/recommend?goodList=' + JSON.stringify(goodList)
    })
  },

  // 旧书.国学数据切换
  choose1(e) {
    let olddata = wx.getStorageSync('oldbookjson')
    let idx = this.data.idx1
    idx = idx + 3
    if (idx >= olddata.length) {
      idx = 0
    }
    let oldjson = olddata.slice(idx, idx + 3)
    this.setData({
      idx1: idx,
      oldjson
    })
  },

  // 新书-新近出版数据切换
  choose2(e) {
    let newdata = wx.getStorageSync('newbookjson')
    let idx = this.data.idx2
    idx = idx + 3
    if (idx >= newdata.length) {
      idx = 0
    }
    let newjson = newdata.slice(idx, idx + 3)
    this.setData({
      idx2: idx,
      newjson
    })
  },
  // 新书-新近出版数据切换
  choose3(e) {
    let newdata = wx.getStorageSync('newbookjson')
    let idx = this.data.idx3
    idx = idx + 3
    if (idx >= newdata.length) {
      idx = 0
    }
    let salejson = newdata.slice(idx, idx + 3)
    this.setData({
      idx3: idx,
      salejson
    })
  },




  onPullDownRefresh: function() {
    console.log("下拉一次")
  },
  onReachBottom: function() {
    console.log('上拉加载')
    const that = this
    // 获取currPage1的数据
    let jsonidx = this.data.jsonidx
    jsonidx += 1
    let currPageurl = app.globalData.Baseurl + 'currPage=' + jsonidx
    that.setData({
      jsonidx
    })
    wx.request({
      url: currPageurl,
      method: 'GET',
      success: (res => {
        let respone = res.data
        if (respone.status === 1) {
          let res = respone.result.list
          console.log(res)
          res.filter(v => {
            if (v.dataId === '33') {
              // 旧书，国学数据
              wx.setStorageSync("oldbookjson", v.data[0].data)
              let oldjson = v.data[0].data.slice(0, 3)
              that.setData({
                oldbookList: v,
                oldjson
              })
            } else if (v.dataId === '26') {
              // "新书-新近出版"
              wx.setStorageSync("newbookjson", v.data[0].data)
              let newjson = v.data[0].data.slice(0, 3)
              that.setData({
                newbookList: v,
                newjson
              })
            } else if (v.dataId === '44') {
              // 新书销售排行榜
              wx.setStorageSync("salebookjson", v.data[0].data)
              let salejson = v.data[0].data.slice(0, 3)
              that.setData({
                salebookList: v,
                salejson
              })
            }
          })
        }
      })
    })
  }
})