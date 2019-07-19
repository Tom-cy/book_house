const app = getApp()
const api = app.globalData.apiUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSelt: true,
    shopCarList: [],
    bookNum: 1,
    shopCarPrice: 0,
    shopCarNum: 0
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
    var that = this
    let loginUserInfo = wx.getStorageSync('loginUserInfo')
    // 小程序登录时候的用户名
    const userName = loginUserInfo.userName

    let shopCar = new Promise((resolve, reject) => {
      wx.request({
        url: `${api.apiUrl}/getShopCarList`,
        data: {
          owner: userName
        },
        success: function(res) {
          if (res.data.error === 0) {
            that.setData({
              shopCarList: res.data.data
            })
            resolve(res.data.data)
          }
          reject(res.data.data)
        }
      })
    })
    shopCar.then(respone => {
      let shopPrice = respone.map((v, i) => {
        return (+(v.price)) * (v.num)
      })
      let shopnum = respone.map((v, i) => {
        return (parseInt(v.num))
      })
      var i = 0
      var j = 0
      shopnum.forEach(v => {
        j += v
        that.setData({
          shopCarNum: j
        })
        wx.setTabBarBadge({
          index: 2,
          text: j + '',
        })
      })
      shopPrice.forEach(v => {
        i += v
        that.setData({
          shopCarPrice: i
        })
      })
    })
  },

  // 左侧判断是否选中
  isShowselect(e) {
    let shopCarPrice = this.data.shopCarPrice
    let shopCarNum = this.data.shopCarNum
    let isBN = e.currentTarget.dataset.isbn
    let shopCarList = this.data.shopCarList
    shopCarList.forEach(v => {
      if (v.isbn == isBN) {
        v.checked = v.checked === 1 ? 0 : 1
        if (v.checked) {
          shopCarNum += v.num
          shopCarPrice += v.num * +(v.price)
          shopCarPrice = Math.floor(shopCarPrice * 100) / 100;
          wx.setTabBarBadge({
            index: 2,
            text: shopCarNum + '',
          })

        } else {
          shopCarNum -= v.num
          shopCarPrice -= v.num * +(v.price)
          shopCarPrice = Math.floor(shopCarPrice * 100) / 100;
          wx.setTabBarBadge({
            index: 2,
            text: shopCarNum + '',
          })
        }
      }
    })
    this.setData({
      shopCarList,
      shopCarNum,
      shopCarPrice

    })
  },

  // 减少
  numjian(e) {
    let shopCarPrice = this.data.shopCarPrice
    let shopCarNum = this.data.shopCarNum
    let isBN = e.currentTarget.dataset.isbn
    let shopCarList = this.data.shopCarList
    shopCarList.forEach(v => {
      if (v.isbn == isBN) {
        if (v.num === 0) {
          return
        } else if (v.num >= 0) {
          shopCarNum -= 1
          shopCarPrice -= +(v.price)
          shopCarPrice = Math.floor(shopCarPrice * 100) / 100;
          v.num -= 1
          wx.setTabBarBadge({
            index: 2,
            text: shopCarNum + '',
          })
        } else {
          return
        }
      }
    })
    this.setData({
      shopCarList,
      shopCarNum,
      shopCarPrice
    })
  },
  // 增加
  numjia(e) {
    let shopCarPrice = this.data.shopCarPrice
    let shopCarNum = this.data.shopCarNum
    let shopCarList = this.data.shopCarList
    let isBN = e.currentTarget.dataset.isbn

    shopCarList.forEach(v => {
      if (v.isbn == isBN) {
        if (v.num >= 0) {
          shopCarNum += 1
          shopCarPrice += +(v.price)
          shopCarPrice = Math.floor(shopCarPrice * 100) / 100;
          v.num += 1
          wx.setTabBarBadge({
            index: 2,
            text: shopCarNum + '',
          })
        }
      }
    })
    this.setData({
      shopCarList,
      shopCarNum,
      shopCarPrice 
    })
  },

  // 点击全选
  allSelect(e) {
    var that = this
    let shopCarList = this.data.shopCarList
    let shopPrice = shopCarList.map((v, i) => {
      return (parseInt(v.price)) * (v.num)
    })
    let shopnum = shopCarList.map((v, i) => {
      return (parseInt(v.num))
    })
    var i = 0
    var j = 0
    shopnum.forEach(v => {
      j += v
      that.setData({
        shopCarNum: j
      })
      wx.setTabBarBadge({
        index: 2,
        text: j + '',
      })
    })
    shopPrice.forEach(v => {
      i += v
      that.setData({
        shopCarPrice: i
      })
    })


    // 左侧记录
    shopCarList.forEach(v => {
      if (v) {
        v.checked = 1
      }
    })
    this.setData({
      shopCarList
    })
  },
  // 清空订单
  clearSelect(){
    this.setData({
      shopCarList:[],
      shopCarPrice:0,
      shopCarNum: 0
    })
  },
  // 结算订单
  gotoOrder(e) {
    let shopCarPrice = this.data.shopCarPrice
    let shopCarNum = this.data.shopCarNum
    let shopCarList = this.data.shopCarList
    let shopdata = shopCarList.filter(v => v.checked)
    let dataNum = shopCarList.filter(v => v.num)
    wx.setStorageSync("shopCarPrice", shopCarPrice)
    wx.setStorageSync("shopCarNum", shopCarNum)
    wx.setStorageSync("shopdata", shopdata)
    if (!dataNum.length) {
      wx.showModal({
        title: '商品',
        content: '请选中商品',
      })
    } else {
      wx.navigateTo({
        url: "/pages/checkorder/checkorder"
      })
    }
  }
})