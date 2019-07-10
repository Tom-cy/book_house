const app = getApp()
const api = app.globalData.apiUrl

var formatTime = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookDetailList: [],
    clickNum: 0,
    showCar: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    let bookDetailList = JSON.parse(options.goodList)
    this.setData({
      bookDetailList
    })
    console.log(app.globalData.loginUserInfo)
    if (!app.globalData.loginUserInfo) {
      wx.navigateTo({
        url: "/pages/login/login",
      })
    }

  },

  goshiopCar() {
     
    // var myDate = new Date();
    // let b = (myDate.getMonth() + 1).toString()
    // let a = myDate.getFullYear().toString()
    // let c = myDate.getDate().toString()
    // let d = myDate.getHours().toString()
    // let e = myDate.getMinutes().toString()
    // let f = myDate.getSeconds().toString()
    // let id = a + b + c + d + e + f

    let bookDetailList = this.data.bookDetailList
    let userInfo = wx.getStorageSync('loginUserInfo')
    bookDetailList.num = 1;
    bookDetailList.allprice = 0;
    bookDetailList.checked = 1;
    bookDetailList.owner = userInfo.userName;
    var bookDeta = JSON.stringify(bookDetailList)
    // 发送请求添加至购物车
    wx.request({
      url: `${api.apiUrl}/addshopCar`,
      data: {
        bookDeta
      },
      success: function(res) {
        console.log(res.data.data)
      }
    })


    wx.showToast({
      title: '成功加入购物车',
      icon: 'success',
      duration: 1000
    })
    setTimeout(() => {
      wx.navigateBack()
    }, 1200)

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

  onReachBottom: function() {
    console.log('上拉加载')
    // this.setData({
    //   showCar:false
    // })
  }
})