// pages/checkorder/checkorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopCarList: [],
    shopCarNum: null,
    shopCarPrice: null,
    adressdata:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let shopCarList = wx.getStorageSync("shopdata") || []
    let shopCarNum = wx.getStorageSync("shopCarNum") || []
    let shopCarPrice = wx.getStorageSync("shopCarPrice") || []



    let data = shopCarList.filter(v => v.num)
    this.setData({
      shopCarList: data,
      shopCarNum,
      shopCarPrice
    })
  },
  gopay() {
    wx.navigateTo({
      url: "/pages/pay/pay",
    })
  },
  gotoAdress() {
    wx.navigateTo({
      url: "/pages/adress/adress"
    })
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
    let adressdata = wx.getStorageSync("adress") || []
    this.setData({
      adressdata
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