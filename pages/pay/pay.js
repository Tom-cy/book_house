

const app = getApp();
const appConfig = app.globalData.appConfig;
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function ( ) {
  },

  data: {
    payStatus: "已支付",
    cancelStataus: "已取消",
  },


  pay: function (e) {
    // let orderList = app.globalData.orderList;
    var status = e.target.dataset.status;
    console.log(status)
    // orderList.status = status;
    // this.saveOrderData(orderList, res => {
    //   if (!res.data.error) {
    //     wx.switchTab({
    //       url: '/pages/order/order',
    //     })
    //   }
    // })
  },
  cancel: function (e) {
    // let orderList = app.globalData.orderList;
    var status = e.target.dataset.status;
    console.log(status)
    // orderList.status = status;
    // this.saveOrderData(orderList, res => {
    //   if (!res.data.error) {
    //     wx.switchTab({
    //       url: '/pages/order/order'
    //     })
    //   }
    // })
  },
  
  saveOrderData: function (obj, callback) {
    // 保存数据
    // wx.request({
    //   url: `${appConfig.httpUrl}/checkOrder`,
    //   data: JSON.stringify(
    //     obj
    //   ),
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded' // 默认值
    //   },
    //   method: "post",
    //   success: function (res) {
    //     callback(res);
    //   }.bind(this)
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
