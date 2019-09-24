const app = getApp()
const api = app.globalData.apiUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formname: '',
    formtel: '',
    chosela: '',
    default: false,
    userInfo: ''
  },

  formSubmit: function(e) {
    let chosela = this.data.chosela
    if (chosela === 'company') {
      chosela = "上架"
    } else {
      chosela = "下架"
    }
    let defa = this.data.default
    let userInfo = this.data.userInfo

    let userName = userInfo.userName
    let phoneNumber = userInfo.phoneNumber
    // 定义一个时间戳
    var myDate = new Date();
    let aa = myDate.getFullYear().toString()
    let bb = (myDate.getMonth() + 1).toString()
    let cc = myDate.getDate().toString()
    let dd = myDate.getHours().toString()
    let ee = myDate.getMinutes().toString()
    let ff = myDate.getSeconds().toString()
    let id = aa + bb + cc + dd + ee + ff
    // 联系人所有的数据
    if (e.detail.value.radio_group2 === 'lang1') {
      e.detail.value.radio_group2 = 'Javascript'
    } else if (e.detail.value.radio_group2 === 'lang2') {
      e.detail.value.radio_group2 = 'Java'
    } else if (e.detail.value.radio_group2 === 'lang3') {
      e.detail.value.radio_group2 = 'Nodejs'
    } else if (e.detail.value.radio_group2 === 'lang4') {
      e.detail.value.radio_group2 = 'C++'
    } else {
      e.detail.value.radio_group2 = 'python'
    }
    if (e.detail.value.radio_group1 === 'zu1') {
      e.detail.value.radio_group1 = '前端组件'
    } else if (e.detail.value.radio_group1 === 'zu2') {
      e.detail.value.radio_group1 = '测试子组件'
    } else if (e.detail.value.radio_group1 === 'zu3') {
      e.detail.value.radio_group1 = '分布式工具'
    } else if (e.detail.value.radio_group1 === 'zu4') {
      e.detail.value.radio_group1 = '应用服务'
    } else {
      e.detail.value.radio_group1 = '数据存储'
    }
    let ms = {
      userName: userName,
      phoneNumber: phoneNumber,
      mingchen: e.detail.value.formname,
      banben: e.detail.value.formtel,
      fenlei: e.detail.value.radio_group1,
      lang: e.detail.value.radio_group2,
      zhuangtai: chosela,
      date: id
    }
    console.log(ms.fenlei)
    console.log(ms.lang)
    let msData = JSON.stringify(ms)
    // 将用户地址信息添加至数据库
    wx.request({
      url: `${api.apiUrl}/getMs`,
      data: {
        userName,
        phoneNumber,
        msData
      },
      success: res => {
        console.log(res.data.data)
      }
    })
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
    let userInfo = app.globalData.loginUserInfo
    this.setData({
      userInfo
    })

  },


})