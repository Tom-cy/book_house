const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: [],
    userInfoList: [{
        id: 0,
        txt: '我的信息',
        imgUrl: "../../static/icon/my/info.png",
        goSrc: "/pages/login/login"
      },
      {
        id: 1,
        txt: '我的地址',
        imgUrl: "../../static/icon/my/adress.png"
      },
      {
        id: 2,
        txt: '我的钱包',
        imgUrl: "../../static/icon/my/mon.png"
      },
      {
        id: 3,
        txt: '客服电话',
        imgUrl: "../../static/icon/my/tel.png"
      }
    ],
    orderList: [{
        id: 0,
        txt: '待付款',
        imgUrl: "../../static/icon/my/waitPay.png",
        goSrc: "/pages/myInfo/myInfo"
      },
      {
        id: 1,
        txt: '待发货',
        imgUrl: "../../static/icon/my/waitfa.png",
        goSrc: "/pages/myInfo/myInfo"
      },
      {
        id: 2,
        txt: '待收货',
        imgUrl: "../../static/icon/my/waitshou.png",
        goSrc: "/pages/myInfo/myInfo"
      },
      {
        id: 3,
        txt: '待评价',
        imgUrl: "../../static/icon/my/waitping.png",
        goSrc: "/pages/myInfo/myInfo"
      },
      {
        id: 4,
        txt: '退款退货',
        imgUrl: "../../static/icon/my/waitout.png",
        goSrc: "/pages/myInfo/myInfo"
      },
      {
        id: 5,
        txt: '已确认',
        imgUrl: "../../static/icon/my/waitout.png",
        goSrc: "/pages/myInfo/myInfo"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.userInfo = app.globalData.userInfo
    //  判断用户是否登录，未登录进行login
    var value = wx.getStorageSync('loginUserInfo')
    if(!value){
        console.log('value不存在')
        wx.navigateTo({
          url: "/pages/login/login",
        })
    }



    

  },


goOrder(){
  wx.navigateTo({
    url: '/pages/order/order',
  })
},

  myInfo(e) {
    // let id = e.currentTarget.dataset.index
    // if (!this.data.login) {
    //   wx.navigateTo({
    //     url: '/pages/login/login'
    //   })
    // } else {
    // wx.navigateTo({
    //   url: "/pages/myInfo/myInfo?id="+id,
    // })
    // }
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