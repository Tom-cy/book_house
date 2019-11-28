const app = getApp()
const api = app.globalData.apiUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    snu: 2,
    snum: 1,
    userInfo: '',
    role:'rolemin',
    // 编号
    id: '',
    //   公司姓名
    companyName: '',
    // 法人
    companyFaRen: '',
    // 行业类型
    companyWork: '',
    // 归属地
    companyWhere: '',
    // 员工规模
    companyPeo: '',
    //   创建时间
    companyTime: '',
    //   管理员
    adminManage: '',
    //   上级公司
    companyLast: '',
    // 公司状态
    companyZhuangtai: '',
    // 权限最大
    roleMax: ''
  },
  formSubmit: function(e) {
    let roleMax = this.data.role
    if (roleMax == 'rolemax') {
      roleMax = true
    } else {
      roleMax = false
    }
    let companyZhuangtai = this.data.companyZhuangtai
    if (companyZhuangtai === 'close') {
      companyZhuangtai = false
    } else {
      companyZhuangtai = true
    }
    let userInfo = this.data.userInfo
    let userName = userInfo.userName
    let phoneNumber = userInfo.phoneNumber
    // // 定义一个时间戳
    var myDate = new Date();
    let aa = myDate.getFullYear().toString()
    let bb = (myDate.getMonth() + 1).toString()
    let cc = myDate.getDate().toString()
    let dd = myDate.getHours().toString()
    let ee = myDate.getMinutes().toString()
    let ff = myDate.getSeconds().toString()
    let onlyId = aa + bb + cc + dd + ee + ff
    let companyTime = aa + "/" + bb + "/" + cc
    // // 联系人所有的数据
    if (e.detail.value.radio_group2 === 'lang1') {
      e.detail.value.radio_group2 = '盈科行'
    } else if (e.detail.value.radio_group2 === 'lang2') {
      e.detail.value.radio_group2 = '万科地产'
    } else if (e.detail.value.radio_group2 === 'lang3') {
      e.detail.value.radio_group2 = '中环地产'
    } else if (e.detail.value.radio_group2 === 'lang4') {
      e.detail.value.radio_group2 = '自如网'
    } else {
      e.detail.value.radio_group2 = '贝克找房'
    }
    if (e.detail.value.radio_group1 === 'zu1') {
      e.detail.value.radio_group1 = '江西省'
    } else if (e.detail.value.radio_group1 === 'zu2') {
      e.detail.value.radio_group1 = '上海市'
    } else if (e.detail.value.radio_group1 === 'zu3') {
      e.detail.value.radio_group1 = '北京市'
    } else if (e.detail.value.radio_group1 === 'zu4') {
      e.detail.value.radio_group1 = '安徽省'
    } else {
      e.detail.value.radio_group1 = '浙江省'
    }


    if (e.detail.value.radio_group3 === 'zu1') {
      e.detail.value.radio_group3 = '盈科行'
    } else if (e.detail.value.radio_group3 === 'zu2') {
      e.detail.value.radio_group3 = '贝克找房'
    } else if (e.detail.value.radio_group3 === 'zu3') {
      e.detail.value.radio_group3 = '万科地产'
    } else if (e.detail.value.radio_group3 === 'zu4') {
      e.detail.value.radio_group3 = '中环地产'
    } else if (e.detail.value.radio_group3 === 'zu5') {
      e.detail.value.radio_group3 = '绿地集团'
    } else if (e.detail.value.radio_group3 === 'zu6') {
      e.detail.value.radio_group3 = '中原地产'
    } else if (e.detail.value.radio_group3 === 'zu7') {
      e.detail.value.radio_group3 = '上海建工'
    } else if (e.detail.value.radio_group3 === 'zu8') {
      e.detail.value.radio_group3 = '新力地产'
    } else if (e.detail.value.radio_group3 === 'zu9') {
      e.detail.value.radio_group3 = '南天阳光'
    } else {
      e.detail.value.radio_group3 = '搜房网'
    }
    let ms = {
      userName: userName,
      phoneNumber: phoneNumber,
      // 唯一值
      onlyId: onlyId,
      // 编号
      numberId: e.detail.value.numberId,
      //   公司姓名
      companyName: e.detail.value.radio_group3,
      // 法人
      companyFaRen: e.detail.value.companyFaRen,
      // 行业类型
      companyWork: e.detail.value.companyWork,
      // 归属地
      companyWhere: e.detail.value.radio_group1,
      // 员工规模
      companyPeo: e.detail.value.companyPeo,
      //   创建时间
      companyTime: companyTime,
      //   管理员
      adminManage: e.detail.value.adminManage,
      //   上级公司
      companyLast: e.detail.value.radio_group2,
      // 公司状态
      companyZhuangtai: companyZhuangtai,
      // 权限最大值
      roleMax: roleMax
    }
    let msData = JSON.stringify(ms)
    // 将用户地址信息添加至数据库
    wx.request({
      url: `${api.apiUrl}/getFLMPtai`,
      data: {
        userName,
        phoneNumber,
        msData
      },
      success: res => {
        console.log(res.data.data)
      }
    })
  },


  choselabel(e) {
    this.setData({
      companyZhuangtai: e.target.dataset.value,
      snum: e.target.dataset.num
    })
  },
  choserole(e) {
    this.setData({
      role: e.target.dataset.value,
      snu: e.target.dataset.num
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