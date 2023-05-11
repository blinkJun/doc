// 通过地图选择具体位置
export const getLocation = () => {
  return new Promise((resolve, reject) => {
    wx.chooseLocation({
      success: (res) => {
        if (res.errMsg === 'chooseLocation:ok') {
          resolve(res);
        } else {
          wx.showToast({
            title: '选择失败：' + res.errMsg,
          });
          reject();
        }
      },
      fail: () => {
        reject();
      },
    });
  });
};

// 通过权限获取设备地理位置信息
export const gerSystemLocation = () => {
  return new Promise((resolve, reject) => {
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        resolve(res);
      },
      fail(res) {
        // 失败时检查原因
        wx.getSystemInfo({
          success({ locationEnabled, locationAuthorized }) {
            wx.hideLoading({
              success: (res) => {},
            });
            // 是否开启手机定位
            if (!locationEnabled) {
              reject(new Error('请开启手机定位使用行程'));
            }
            // 是否授权使用位置
            else if (!locationAuthorized) {
              reject(new Error('您拒绝了应用使用位置信息，暂时无法更新行程'));
            }
            // 其他错误
            else {
              wx.getSetting({
                success(res) {
                  if (!res.authSetting['scope.userLocation']) {
                    wx.showModal({
                      title: '提示',
                      content: '未开启位置信息权限，是否去设置？',
                      showCancel: true,
                      success(res) {
                        if (res.confirm) {
                          reject(new Error('正在打开设置授权'));
                          wx.openSetting({});
                        } else {
                          reject(new Error('拒绝授权使用位置信息'));
                        }
                      },
                    });
                  } else {
                    reject(new Error('获取定位信息失败'));
                  }
                },
              });
            }
          },
        });
      },
    });
  });
};
