// weixin,qq,qq空间分享解决方案

/*

let shareConfig={
    title,    //标题
    summary,  //描述
    pic,      //封面
    url       //链接
}

window.setShareInfo({
    ...shareConfig,
    // 微信权限验证配置信息，若不在微信传播，可忽略
    WXconfig: {
        swapTitleInWX: false, // 是否标题内容互换（仅朋友圈，因朋友圈内只显示标题）
        appId: config.wxPublicAppId, // 公众号的唯一标识
        timestamp: data.timestamp, // 生成签名的时间戳
        nonceStr: data.nonceStr, // 生成签名的随机串
        signature: data.signature // 签名
    }
});

*/

(function () {
  var wxapi = '//res.wx.qq.com/open/js/jweixin-1.0.0.js',
    qqapi = '//open.mobile.qq.com/sdk/qqapi.js?_bid=152',
    qzapi =
      '//qzonestyle.gtimg.cn/qzone/phone/m/v4/widget/mobile/jsbridge.js?_bid=339';
  // 防止关键字冲突 require改为apiRequire
  var apiRequire;

  function _require(url, onload) {
    var doc = document;
    var head =
      doc.head || doc.getElementsByTagName('head')[0] || doc.documentElement;
    var node = doc.createElement('script');
    node.onload = onload;
    node.onerror = function () {};
    node.async = true;
    node.src = url[0];
    head.appendChild(node);
  }

  function _initWX(data) {
    if (!data.WXconfig) {
      return;
    }
    apiRequire([wxapi], function (wx) {
      if (!wx.config) {
        wx = window.wx;
      }
      var conf = data.WXconfig;
      wx.config({
        debug: false,
        appId: conf.appId,
        timestamp: conf.timestamp,
        nonceStr: conf.nonceStr,
        signature: conf.signature,
        jsApiList: [
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'onMenuShareQQ',
          'onMenuShareQZone',
        ],
      });
      wx.error(function (res) {});
      wx.ready(function () {
        var config = {
          title: data.title,
          desc: data.summary,
          link: data.url,
          imgUrl: data.pic,
          type: '',
          dataUrl: '',
          // 添加参数传递
          success: function (...params) {
            data.callback && data.callback(params);
          },
          cancel: function () {},
        };
        wx.onMenuShareAppMessage(config);
        wx.onMenuShareQQ(config);
        wx.onMenuShareQZone(config);
        if (conf.swapTitleInWX) {
          wx.onMenuShareTimeline({
            title: data.summary,
            desc: data.title,
            link: data.url,
            imgUrl: data.pic,
            type: '',
            dataUrl: '',
            // 添加参数传递
            success: function (...params) {
              data.callback && data.callback(params);
            },
            cancel: function () {},
          });
        } else {
          wx.onMenuShareTimeline(config);
        }
      });
    });
  }

  function _initQQ(data) {
    var info = {
      title: data.title,
      desc: data.summary,
      share_url: data.url,
      image_url: data.pic,
    };

    function doQQShare() {
      try {
        // 和微信回调冲突，qq需要白名单callback才可用
        if (data.qqCallback) {
          window.mqq.ui.setOnShareHandler(function (type) {
            if (
              type == 3 &&
              (data.swapTitle || (data.WXconfig && data.WXconfig.swapTitleInWX))
            ) {
              info.title = data.summary;
            } else {
              info.title = data.title;
            }
            info.share_type = type;
            info.back = true;
            window.mqq.ui.shareMessage(info, function (result) {
              data.callback && data.callback.call(this, result);
            });
          });
        } else {
          window.mqq.data.setShareInfo(info);
        }
      } catch (e) {}
    }
    if (window.mqq) {
      doQQShare();
    } else {
      try {
        apiRequire([qqapi], function () {
          doQQShare();
        });
      } catch (err) {
        alert(err);
      }
    }
  }

  function _initQZ(data) {
    function doQZShare() {
      if (QZAppExternal && QZAppExternal.setShare) {
        var imageArr = [],
          titleArr = [],
          summaryArr = [],
          shareURLArr = [];
        for (var i = 0; i < 5; i++) {
          imageArr.push(data.pic);
          shareURLArr.push(data.url);
          if (
            i === 4 &&
            (data.swapTitle || (data.WXconfig && data.WXconfig.swapTitleInWX))
          ) {
            titleArr.push(data.summary);
            summaryArr.push(data.title);
          } else {
            titleArr.push(data.title);
            summaryArr.push(data.summary);
          }
        }
        QZAppExternal.setShare(function (data) {}, {
          type: 'share',
          image: imageArr,
          title: titleArr,
          summary: summaryArr,
          shareURL: shareURLArr,
        });
      }
    }
    if (window.QZAppExternal) {
      doQZShare();
    } else {
      apiRequire([qzapi], function () {
        doQZShare();
      });
    }
  }

  function init(opts) {
    var ua = navigator.userAgent;
    var isWX = ua.match(/MicroMessenger\/([\d\.]+)/),
      isQQ = ua.match(/QQ\/([\d\.]+)/),
      isQZ = ua.indexOf('Qzone/') !== -1;
    isWX && _initWX(opts);
    isQQ && _initQQ(opts);
    isQZ && _initQZ(opts);
  }
  apiRequire = _require;
  window.setShareInfo = init;
  // 直接改为require模式
  module.exports = setShareInfo;
})();
