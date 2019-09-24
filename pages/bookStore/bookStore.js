var swiper = require('../../data/swiperJSON.js')
import {
  currPage1ChannelId1081,
  currPage2ChannelId1081,
} from '../../pages/api/api.js'

// pages/bookStore/bookStore.js
Page({

  data: {
    indicatorDots: true,
    indicatorActiveColor:"rgba(255,255,255,.4)",
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    // 获取首页轮播图数据
    // 获取导航栏数据
    that.setData({
      swiperList: swiper.swiperjson2,
    })

    that.currPage1Id1081()
    that.currPage2Id1081()

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  // 获取currPage1ChannelId1081 数据
  currPage1Id1081() {
    currPage1ChannelId1081().then((respone) => {
      console.log(respone.result)
    })
  },
  // 获取currPage2ChannelId1081 数据
  currPage2Id1081() {
    currPage2ChannelId1081().then((respone) => {
      console.log(respone.result)
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})