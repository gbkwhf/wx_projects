Page({
  locationViewTap: function () {
    wx.navigateTo({
      url: '../location/location'
    })
  },
  mapViewTap: function () {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        console.log(res)
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
          name:res.name,
          address: res.address,
         
          scale: 28
        })
        console.log(res.address);
      }
    })
  },
  chooseMapViewTap:function(){
    wx.chooseLocation({
      success: function(res) {
        console.log(res)
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
          name: res.name,
          address: res.address,

          scale: 28
        })
      },
    })
  },
  // requests:function(){
  //   wx.request({
  //     url: 'http://gxdev2.yxjk99.com/api/gxsc/bannergoods?banner_id=9',
  //     // dataType:json,
  //      method:'POST',
  //     data:{
  //       banner_id:9
  //     },
  //     header: {
  //       'content-type': 'application/json' // 默认值
  //     },
  //     success(res) {
  //       console.log(res.data)
  //     }
  //   })
  // }
})