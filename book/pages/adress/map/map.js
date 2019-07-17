// pages/adress/map/map.js
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
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              wx.chooseLocation({
                success: function(res) {
                  console.log(res)
                  wx.setStorageSync("address", res.address)
                   wx.navigateBack({
                     url: "/pages/adress/Addadress"
                   })
                }
              })
            },
            fail:(res=>{
              console.log("fail")
            })
          })
        } else {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.chooseLocation({
            success: function(res) {
              console.log(res)
              wx.setStorageSync("address", res.address)
              wx.navigateBack({
                url: "/pages/adress/Addadress"
              })
            },
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