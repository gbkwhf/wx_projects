//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // motto: '今天是星期一',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
    toView: 'conid',
    scrollTop: 100,
    shopNames:'',
    //-----------模拟商品列表---------
    con:[
      {
        "image1": "http://sctest.sckjshop.com/upload/image/1530167300626.jpg",
        "shopName": "内蒙特产套餐—（烤羊腿：1000g/盒*1+内蒙奶酪：450g/盒*1+风干牛肉：500g/袋*2）",
        "price": 1280.00,
        "markPrice": 2256.00
      },
      {
        "image1": "http://sctest.sckjshop.com/upload/image/1530167268983.jpg",
        "shopName": "老人保健按摩毯",
        "price": 1280.00,
        "markPrice": 2256.00
      },
      {
        "image1": "http://sctest.sckjshop.com/upload/image/1530061863864.jpg",
        "shopName": "詹姆士公爵干红葡萄酒VCE0137【750ml/瓶*3瓶】",
        "price": 1280.00,
        "markPrice": 2256.00
      },
      {
        "image1": "http://sctest.sckjshop.com/upload/image/1524880398675.jpg",
        "shopName": "泰国天然乳胶高低颈椎按摩枕（两个）",
        "price": 1280.00,
        "markPrice": 2256.00
      }
    ],
    //-----------------模拟一级分类---------
    goods_firstList:[
      {
        "category_icons":"../images/classifyImg1.png",
        "first_name":"食品土特产",
        "id":1
      },
      {
        "category_icons": "../images/classifyImg6.png",
        "first_name": "进口商品",
        "id":2
      },
      {
        "category_icons": "../images/classifyImg9.png",
        "first_name": "双创馆",
        "id":3
      },
      {
        "category_icons": "../images/classifyImg0.png",
        "first_name": "报单专区",
        "id":4
      },
      {
        "category_icons": "../images/classifyImg7.png",
        "first_name": "水墨丹青",
        "id":5
      },
      {
        "category_icons": "../images/classifyImg2.png",
        "first_name": "家居家装",
        "id":6
      },
      {
        "category_icons": "../images/classifyImg3.png",
        "first_name": "健康商城",
        "id":7
      },
      {
        "category_icons": "../images/classifyImg5.png",
        "first_name": "非遗景泰蓝",
        "id":8
      },
      {
        "category_icons": "../images/classifyImg4.png",
        "first_name": "生活用品",
        "id":9
      },
      {
        "category_icons": "../images/classifyImg8.png",
        "first_name": "积分商城",
        "id":10
      }
    ],
    //-----------模拟banner图-----------
    imgUrls: [
      'http://sctest.sckjshop.com/upload/image/1552291866921.png',
      'http://sctest.sckjshop.com/upload/image/1523242859470.jpg'
    ],
    circular: true,
    //是否显示画板指示点  
    indicatorDots: true,
    //选中点的颜色  
    //是否竖直  
    vertical: false,
    //是否自动切换  
    autoplay: true,
    //自动切换的间隔
    interval: 3000,
    //滑动动画时长毫秒  
    duration: 1000,
    //所有图片的高度  
    imgheights: [],
    //图片宽度 
    imgwidth: 750,
    //默认  
    current: 0
  },
  imageLoad: function (e) {//获取图片真实宽度  
    console.log(e);
    console.log(e.target.dataset.id);
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      //宽高比  
      ratio = imgwidth / imgheight;
    console.log(imgwidth, imgheight)
    //计算的高度值  
    var viewHeight = 750 / ratio;
    var imgheight = viewHeight;
    var imgheights = this.data.imgheights;
    //把每一张图片的对应的高度记录到数组里  
    imgheights[e.target.dataset.id] = imgheight;
    this.setData({
      imgheights: imgheights
    })
  },
  //----------获取搜索框的值-------
  shop:function(e){
    this.setData({
      shopNames:e.detail.value
    })
  },
  searchBtn:function(e){
    if(this.data.shopNames==''){
      wx.showToast({
        title: '商品名称不能为空',
        icon: 'none',
        duration: 2000
      })
    }else{
      console.log(this.data.shopNames);
    }
    
  },
  bindchange: function (e) {
    // console.log(e.detail.current)
    this.setData({ current: e.detail.current })
  },
  onPullDownRefresh() {
    // success(res)
    //   wx.showToast({
    //   title: '提交成功',
    //   icon: 'success',
    //   duration: 2000
    // })
   
    wx.stopPullDownRefresh()
  },
  /**
 * 用户点击右上角分享
 */
  onShareAppMessage: function () {
    return {
      title: '陇原特产',//分享内容
      path: '/pages/index/index',//分享地址
      imageUrl: 'http://sctest.sckjshop.com/upload/image/1552291866921.png',//分享图片
    }
  },



  //事件处理函数
  // bindViewTap: function () {
  //   wx.navigateTo({
  //     url: '../location/location'
  //   })
  // },
  //分类跳转到列表页面
  tabLine:function (e) {
    console.log(e);
    var dataid = e.currentTarget.dataset.postid;
    var firstName = e.currentTarget.dataset.postname;
    console.log(dataid + "dddddd" + firstName);
    wx.navigateTo({
      url: '../member_mall_list/member_mall_list?id=' + dataid + '&firstName=' + firstName
    })
    console.log("你点了我");
  },
  onLoad: function () {
    var token = wx.getStorageSync('token');   //获取token的方法
    console.log(token);
    console.log('dddddddddddddddddddddddddddddddddd');
    var that = this;
    // 轮播图接口
  // wx.request({
  //   url: 'http://gx.cigtb.cn/api/gxsc/get/banner/list?os_type=android&version=9.0.0',
  //   method: 'POST',
  //   dataType: 'json',
  //   header: {
  //     'content-type': 'application/json'
  //   },
  //   success: function (res) {
  //     console.log(res.data.result);
  //     that.setData({
  //       imgUrls: res.data.result
  //     })
  //   }

  // });
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse) {
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function (e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },
  // mapViewTap: function () {
  //   wx.getLocation({
  //     type: 'gcj02', //返回可以用于wx.openLocation的经纬度
  //     success: function (res) {
  //       console.log(res)
  //       wx.openLocation({
  //         latitude: res.latitude,
  //         longitude: res.longitude,
  //         scale: 28
  //       })
  //     }
  //   })
  //---------消息提示框-------
    // wx.showToast({
    //   title: '提交成功',
    //   icon: 'success',
    //   duration: 2000
    // }),
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
    //-----弹出框--------
      // wx.showModal({
      //   title: '温馨提示',
      //   content: '这是一个模态弹窗',
      //   success(res) {
      //     if (res.confirm) {
      //       console.log('用户点击确定')
      //     } else if (res.cancel) {
      //       console.log('用户点击取消')
      //     }
      //   }
      // })
      //----------动态设置当前页面的标题---------
    wx.setNavigationBarTitle({
      title: '首页'
    })
    //-----------滚动----------
    // wx.pageScrollTo({
    //   scrollTop: 200,
    //   duration: 300
    // })
  }
})
