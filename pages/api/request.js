 const axios = (option) => {
   let {
     data,
     method,
     url
   } = { ...option
   }
   return new Promise((resolve, reject) => {
     if (method === 'post') {
       param = JSON.stringify(param)
     }
     wx.request({
       url,
       data,
       method,
       header: {
         'content-type': 'application/json'
       },
       success: function(res) {
         resolve(res.data)
       },
       reject: function(res) {
         reject(res.data)
       }
     })
   })
 }
 module.exports = {
   axios
 }