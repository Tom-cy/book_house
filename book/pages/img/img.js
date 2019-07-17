  
Page({
  onLoad: function () {
    wx.chooseLocation({
      success: function(res) {
        console.log(res)  
      },
    })
    
  },
})