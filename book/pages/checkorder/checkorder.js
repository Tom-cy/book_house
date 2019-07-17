const app=  getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopCarList: [],
    shopCarNum: null,
    shopCarPrice: null,
    adressdata: []
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
    let userName = app.globalData.loginUserInfo.userName
    let adressdata = this.data.adressdata
    let shopCarList = this.data.shopCarList
    let shopCarPrice = this.data.shopCarPrice
    let shopCarNum = this.data.shopCarNum
    let timeStamp = Date.now();

    app.globalData.orderList = {
      // 地址信息
      adressdata,
      // 订单号
      timeStamp,
      // 列表信息
      shopCarList,
      // 用户
      userName,
      // 总商品数
      shopCarNum,
      // 商品价格
      shopCarPrice
    }

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