const app = getApp()
const api = app.globalData.apiUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allData: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  onShow: function() {
    let userName = app.globalData.loginUserInfo.userName
    let phoneNumber = app.globalData.loginUserInfo.phoneNumber
    wx.request({
      url: `${api.apiUrl}/getAdress`,
      data: {
        userName,
        phoneNumber,
      },
      success: res => {
        let address = res.data.data.filter(v => {
          return v.allData
        })
        let allData = address.map(v => {
          return JSON.parse(v.allData)
        })
        this.setData({
          allData
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  addNew(e) {
    wx.navigateTo({
      url: "/pages/adress/Addadress",
    })
  }
})