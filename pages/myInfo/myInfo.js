const app = getApp()
const api = app.globalData.apiUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 运营方
    formname: '58同城',
    // 楼盘名称
    formhouse:'万达广场',
    // 项目代理
    formdaili:'中欧',
    // 项目名称
    formxiangmu:'万达',
    // 项目管理人
    formPeo:'陈***',
    // 项目管理人电话
    formtel: '********',
    // 状态
    chosela: '',
    default: false,
    userInfo: ''
  },

  formSubmit: function (e) {
    let chosela = this.data.chosela
    if (chosela === 'company') {
      chosela = true
    } else {
      chosela = false
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
    // if (e.detail.value.radio_group2 === 'lang1') {
    //   e.detail.value.radio_group2 = 'Javascript'
    // } else if (e.detail.value.radio_group2 === 'lang2') {
    //   e.detail.value.radio_group2 = 'Java'
    // } else if (e.detail.value.radio_group2 === 'lang3') {
    //   e.detail.value.radio_group2 = 'Nodejs'
    // } else if (e.detail.value.radio_group2 === 'lang4') {
    //   e.detail.value.radio_group2 = 'C++'
    // } else {
    //   e.detail.value.radio_group2 = 'python'
    // }
    if (e.detail.value.radio_group1 === 'zu1') {
      e.detail.value.radio_group1 = '江西省南昌'
    } else if (e.detail.value.radio_group1 === 'zu2') {
      e.detail.value.radio_group1 = '江西省九江'
    } else if (e.detail.value.radio_group1 === 'zu3') {
      e.detail.value.radio_group1 = '江西省上饶'
    } else if (e.detail.value.radio_group1 === 'zu4') {
      e.detail.value.radio_group1 = '江西省景德镇'
    } else {
      e.detail.value.radio_group1 = '安徽省合肥'
    }
    let ms = {
      // userName: userName,
      // phoneNumber: phoneNumber,


      formname: e.detail.value.formname,
      formhouse: e.detail.value.formhouse,
      formdaili: e.detail.value.formdaili,
      formxiangmu: e.detail.value.formxiangmu,
      formPeo: e.detail.value.formPeo,
      formtel: e.detail.value.formtel,
      formquyu: e.detail.value.radio_group1,
      zhuangtai: chosela,
      date: id
    }
    let msData = JSON.stringify(ms)
    // 将用户地址信息添加至数据库
    wx.request({
      url: `${api.apiUrl}/getFLM`,
      data: {
        userName,
        phoneNumber,
        msData
      },
      success: res => {
        console.log(res)
      }
    })
    wx.navigateBack()

  },
  formReset: function () {
    this.setData({
      formname: '',
      formhouse: '',
      formdaili: '',
      formxiangmu: '',
      formPeo: '',
      formtel: '',
      formquyu: '',
      formquyu: '',
      zhuangtai: '',
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
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let userInfo = app.globalData.loginUserInfo
    this.setData({
      userInfo
    })

  },


})