const app = getApp();
const api = app.globalData.apiUrl

Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderlist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
    let userInfo = app.globalData.loginUserInfo.userName
    wx.request({
      url: `${api.apiUrl}/getOrderList`,
      data: {
        userInfo
      },
      success: res => {
        this.setData({
          orderlist: res.data.data
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },
  bookDetail(e){
    let timeStamp = e.currentTarget.dataset.stamp
    wx.navigateTo({
      url: "/pages/order/orderDetail?timeStamp=" + timeStamp,
    })
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