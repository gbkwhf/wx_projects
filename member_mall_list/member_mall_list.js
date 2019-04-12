Page({

  /**
   * 页面的初始数据
   */
  data: {
    // --------二级分类---------
    first_names:[
      {
        "id":1,
        "goods_name":"食品土特产"
        },
      {
        "id":2,
         "goods_name": "健康器械"
          },
      { 
        "id":3,
        "goods_name": "营养保健" 
        
        },
      {
        "id": 4,
        "goods_name": "健康调理"

      },
      {
        "id": 5,
        "goods_name": "保护眼睛"

      },
      {
        "id": 6,
        "goods_name": "骨骼健康"

      },
      {
        "id": 7,
        "goods_name": "滋补养生"

      },
      {
        "id": 8,
        "goods_name": "增强免疫"

      },
      {
        "id": 9,
        "goods_name": "国内旅游"

      },
    ],
     first_id:0,
    //-----------模拟商品列表---------
    con: [
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
    goods_firstList: [
      {
        "category_icons": "../images/classifyImg1.png",
        "first_name": "食品土特产",
        "id": 1
      },
      {
        "category_icons": "../images/classifyImg6.png",
        "first_name": "进口商品",
        "id": 2
      },
      {
        "category_icons": "../images/classifyImg9.png",
        "first_name": "双创馆",
        "id": 3
      },
      {
        "category_icons": "../images/classifyImg0.png",
        "first_name": "报单专区",
        "id": 4
      },
      {
        "category_icons": "../images/classifyImg7.png",
        "first_name": "水墨丹青",
        "id": 5
      },
      {
        "category_icons": "../images/classifyImg2.png",
        "first_name": "家居家装",
        "id": 6
      },
      {
        "category_icons": "../images/classifyImg3.png",
        "first_name": "健康商城",
        "id": 7
      },
      {
        "category_icons": "../images/classifyImg5.png",
        "first_name": "非遗景泰蓝",
        "id": 8
      },
      {
        "category_icons": "../images/classifyImg4.png",
        "first_name": "生活用品",
        "id": 9
      },
      {
        "category_icons": "../images/classifyImg8.png",
        "first_name": "积分商城",
        "id": 10
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
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
   //动态设置页面标题
    var that = this;
    that.setData({
      firstName: options.firstName//options为页面路由过程中传递的参数
    })
    wx.setNavigationBarTitle({
      title: that.data.firstName//页面标题为路由参数
    })

  },
  // -------动态切换class---------
  menuClick: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    console.log(index);
    console.log(e.currentTarget.dataset.postname);
    that.setData({
      first_id: index
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})