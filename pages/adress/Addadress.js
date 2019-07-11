const app = getApp()
const api = app.globalData.apiUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formname: '',
    formtel: '',
    fromAddress: '',
    fromDetailAdre: '',
    chosela: '',
    default: false,
    userInfo: ''
  },

  formSubmit: function(e) {
    let chosela = this.data.chosela
    let defa = this.data.default
    let userInfo = this.data.userInfo

    let userName = userInfo.userName
    let phoneNumber = userInfo.phoneNumber
    // 联系人所有的数据
    let allData = {
      adressName: e.detail.value.formname,
      adressTel: e.detail.value.formtel,
      adressAddres: e.detail.value.fromAddress,
      adressAdtail: e.detail.value.fromDetailAdre,
      adresssex: e.detail.value.radio_group,
      addressBal: chosela,
      addressDetail: defa,
    }
    // 将用户地址信息添加至数据库
    wx.request({
      url: `${api.apiUrl}/addAdress.js`,
      data: {
        userName,
        phoneNumber,
        allData
      },
      success: res => {
        console.log(res)
      }
    })
    wx.setStorageSync("allData", allData)
    wx.navigateBack()

  },
  formReset: function() {
    this.setData({
      formname: '',
      formtel: '',
      fromAddress: '',
      fromDetailAdre: '',
      chosela: '',
      default: false,
      snum: ''
    })
  },
  gotomap() {
    wx.navigateTo({
      url: "/pages/adress/map/map",
    })
  },
  choselabel(e) {
    this.setData({
      chosela: e.target.dataset.value,
      snum: e.target.dataset.num
    })
  },
  sureAdres(e) {
    let defau = this.data.default
    defau = !defau
    this.setData({
      default: defau
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
    let address = wx.getStorageSync("address")
    let userInfo = app.globalData.loginUserInfo
    this.setData({
      fromAddress: address,
      userInfo
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