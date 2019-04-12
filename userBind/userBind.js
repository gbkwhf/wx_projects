var app = getApp();
Page({
  data: {
    loading: false,
    userToggle: false,  //手机号码占用
    errToggle: false,  //手机号输入错误
    codeToggle: false,  //验证码错误
    disabled: true,  //提交按钮是否禁用  
    inputVal: '',      //获得input框输入的值
    lostLimit: false,//是否多次点击
    yazBut: false,   //获取验证码的按钮是否禁用
    curCount: '',  //计数
    yzmFont: '获取验证码',//验证码文字的改变
    yzmCode: '',//获得的验证码


  },
  bindKeyInput: function (e) {   //手机号码正确和错误的验证
    var that = this;
    var reg = /^1[34578]\d{9}$/;  //验证手机号码正则表达式

    if (reg.test(e.detail.value)) {
      that.data.inputVal = e.detail.value;

      //做个验证
      that.data.lostLimit = true;    //保证手机的唯一的验证

      // console.log(e.detail.value);
    } else {

      that.setData({
        errToggle: true
      }),
        //延时出现的errToggle消失
        setTimeout(function () {
          that.setData({
            errToggle: false
          })
        }, 500)

    }

  },

  tapName: function (e) {
    var that = this;

    if ((that.data.lostLimit) && (that.data.inputVal != '')) {
      var phoneNum = that.data.inputVal;
      console.log(phoneNum);
      if (phoneNum == "") {
        that.setData({
          errToggle: true
        }),
          //延时出现的errToggle消失
          setTimeout(function () {
            that.setData({
              errToggle: false
            })
          }, 500)
      };
      var InterValObj; //timer变量，控制时间
      //间隔函数，1秒执行
      var count = 60;
      that.data.curCount = count;

      that.setData({    //文字的改变
        yzmFont: that.data.curCount + 's后获取'
      })

      that.setData({   //获取验证码按钮是否静止点击
        yazBut: true
      })


      //timer处理函数
      InterValObj = setInterval(function () {
        if (that.data.curCount == 0) {
          clearInterval(InterValObj);//停止计时器
          that.setData({   //获取验证码按钮是否静止点击
            yazBut: false
          })

          that.setData({    //文字的改变
            yzmFont: '获取验证码'
          })
          that.data.yzmCode = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效
        }
        else {
          that.data.curCount--;
          that.setData({   //获取验证码按钮是否静止点击
            yazBut: true
          })
          that.setData({    //文字的改变
            yzmFont: that.data.curCount + 's后获取'
          })
        }
      }, 1000)



      wx.request({
        url: 'https://cs.joinsilk.com/Api?appCode=silkPlatform&token=&url=/pfuser/sendVerCode',
        method: 'get',
        data: {
          mobilePhone: phoneNum
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data.data);

        }

      });

    }
  },
  yzmBlur: function (e) {
    var that = this;
    var yzCO = e.detail.value;
    that.data.yzmCode = yzCO; //验证码
  },
  bindKeyCodet: function (e) {   //请输入验证码输入完之后，光标离开
    var reg = /^1[34578]\d{9}$/;  //验证手机号码正则表达式
    var that = this;
    var val = that.data.inputVal;  //手机号
    var yzCO = e.detail.value;
    that.data.yzmCode = yzCO; //验证码

    console.log(val + 'ssssssssssss');
    console.log(e.detail.value);
    if ((e.detail.value != '') && (reg.test(val))) {
      console.log('ddddddddddddddddddddddddd');
      that.setData({    //提交按钮是否可以点击的设置
        disabled: false,
      }),
        that.setData({    //提交按钮是否可以点击的设置
          loading: false
        })
    } else {

      that.setData({    //提交按钮是否可以点击的设置
        loading: false
      })

    }

  },
  setLoading: function () {
    var that = this;
    console.log(app.globalData.wxAccount + 'oooooooooooooooooo');
    var reg = /^1[34578]\d{9}$/;  //验证手机号码正则表达式
    if (reg.test(that.data.inputVal) && (that.data.yzmCode != '') && (that.data.inputVal != '')) {
      console.log('ddddd');
      console.log(that.data.yzmCode);
      console.log(that.data.inputVal);

      wx.request({
        url: 'https://cs.joinsilk.com/Api?appCode=silkPlatform&token=&url=/pfuser/bindWxAndPhone',
        method: 'get',
        data: {
          weChat: app.globalData.wxAccount,         //微信号
          userMobile: that.data.inputVal,//手机号
          verfiyCode: that.data.yzmCode        //验证码
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          if (res.data.httpCode == 200) {
            console.log(res.data.data + "user-----------------")
            // wx.setStorage({
            //   key: "token",
            //   data: res.data.data
            // })
            wx.setStorageSync('token', res.data.data)   //同步保存token
            wx.showToast({   //提交成功提示框
              title: '提交成功',
              icon: 'success',
              duration: 2000
            })
            wx.navigateBack({   //返回上一个页面
              delta: 1
            })
          } else if (res.data.data == '验证码错误') {
            that.setData({
              codeToggle: true
            }),
              //延时出现的errToggle消失
              setTimeout(function () {
                that.setData({
                  codeToggle: false,
                })
              }, 500)
            that.setData({    //提交按钮loading是否可以点击的设置
              loading: false
            })
          } else if (res.data.data == '该手机号已经绑定微信号') {
            that.setData({
              userToggle: true
            }),
              //延时出现的errToggle消失
              setTimeout(function () {
                that.setData({
                  userToggle: false,
                })
              }, 500)
            that.setData({    //提交按钮loading否可以点击的设置
              loading: false
            })
          }
        }

      });
    }
    that.setData({    //提交按钮loading是否可以点击的设置
      loading: true
    })
  }
})