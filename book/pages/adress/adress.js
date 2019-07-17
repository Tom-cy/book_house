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
        console.log(allData)
        this.setData({
          allData
        })
      }
    })
  },
  gobackOrder(e) {
    let allData = this.data.allData
    let id = e.currentTarget.dataset.id
    let data = allData.filter(v => {
      return v.addressId === id
    })
    wx.setStorageSync("adress", data)
    wx.navigateTo({
      url: "/pages/checkorder/checkorder"
    })
  },
  addNew(e) {
    wx.navigateTo({
      url: "/pages/adress/Addadress",
    })
  },
  close(e) {
    let userName = app.globalData.loginUserInfo.userName
    let phoneNumber = app.globalData.loginUserInfo.phoneNumber
    let allData = this.data.allData
    let id = e.currentTarget.dataset.id
    let data = allData.filter(v => {
      return v.addressId !== id
    })
    this.setData({
      allData: data
    })
    wx.request({
      url: `${api.apiUrl}/deleteAdress`,
      data: {
        data,
        userName,
        phoneNumber
      },
      success: (res) => {
        console.log(res)
      }
    })
  }
})