const app = getApp()
const api = app.globalData.apiUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  login(e) {
    let phoneNumber = e.detail.value.phoneNumber
    let password = e.detail.value.password
    wx.request({
      url: `${api.apiUrl}/login`,
      data: {
        phoneNumber,
        password
      },
      success(res) {
        if (!res.data.error) {
          app.globalData.loginUserInfo = res.data.userInfo
          wx.setStorage({
            key: "loginUserInfo",
            data: res.data.userInfo || []
          })
          wx.navigateBack()
        }
      }
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