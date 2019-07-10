// pages/index/index.js
var amapFile = require('../../libs/amap-wx.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图参数
    swiperList: [],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    // 导航栏参数
    navList: [],
    // 导航栏模块数据
    todaybookList: [],
    // 拍卖数据
    auctionList: [],
    // 首页图书滚动 实现视频左右滑动 数据-
    swipergoodbookList: [],
    // 首页书单推荐 
    allBookList: [],
    // 新书广场数据
    appDisplayList: []
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    // 获取首页轮播图数据
    wx.request({
      url: app.globalData.BaseURL + '/homeswiper',
      method: 'get',
      header: {
        'content-type': 'application/json' // 默认
      },
      success(res) {
        that.setData({
          swiperList: res.data.data.imgUrls
        })
      }
    })

    // 获取导航栏数据
    wx.request({
      url: app.globalData.BaseURL + '/homenav',
      method: 'get',
      header: {
        'content-type': 'application/json' // 默认
      },
      success(res) {
        that.setData({
          navList: res.data.data.navUrls
        })
      },
      fail() {
        wx.showModal({
          title: '数据库崩溃',
          content: '程序员紧急修复中- -',
        })
      }
    })







    // 获取currPage=1的数据
    wx.request({
      url: app.globalData.Baseurl + 'currPage=1',
      method: 'get',
      success: function(res) {
        let a = []
        res.data.result.list.map(v => {
          if (v.style == 3) {
            a.push.apply(a, v.data);
            that.setData({
              todaybookList: a
            })
          } else {
            // 此处乃拍卖会数据暂时不用
            return
          }
        })
      }
    })
    // 获取currPage=2的数据
    wx.request({
      url: app.globalData.Baseurl + 'currPage=2',
      method: 'get',
      success: function(res) {
        return
      }
    })
    // 获取currPage = 3的数据好书推荐/书单推荐数据/新书广场
    wx.request({
      url: app.globalData.Baseurl + 'currPage=3',
      method: 'get',
      success: function(res) {
        if (res.statusCode === 200) {
          res.data.result.list.filter(v => {
            if (v.dataId == 32) {
              that.setData({
                allBookList: v
              })
            } else if (v.dataId == 24) {
              that.setData({
                swipergoodbookList: v
              })
            } else if (v.dataId == 25) {
              that.setData({
                appDisplayList: v
              })
            }
          })
        }
      }
    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
   
  },

  onPullDownRefresh: function() {
    console.log("下拉一次")
  },
  onReachBottom: function() {
    console.log('上拉加载')
  }
})