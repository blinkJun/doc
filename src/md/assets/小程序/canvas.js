// 画布相关操作

// 获取一个可填充到画布的图片元素
export const loadCanvasImage = function (canvas, path) {
    return new Promise((resolve) => {
        const image = canvas.createImage()
        image.src = path
        image.onload = () => {
            resolve(image)
        }
    })
}

// 将画布转换为文件路径，微信画布使用canvasId，其余用canvas
export const canvasToFilePath = function (options,context) {
    return new Promise((resolve) => {
        wx.canvasToTempFilePath({
            ...options,
            success: (res) => {
                resolve(res.tempFilePath)
            }
        },context)
    })
}

// 重新设置画布大小，否则画布中的图片将会变形，生成海报专用
export const formatCanvasSize = function (element, ctx) {
    return new Promise((resolve) => {
        wx.getSystemInfo({
            success: (result) => {
                const pxRatio = result.pixelRatio
                const canvas = element.node
                canvas.width = element.width * pxRatio
                canvas.height = element.height * pxRatio
                ctx.scale(pxRatio, pxRatio)
                resolve()
            }
        })
    })
}

// 根据画布选择器选择画布，2d画布专用，canvas元素上需标识 type=2d
export const getCanvas = function (selector,component,fileds = {
    node: true,
    size: true,
    rect: true
}) {
    return new Promise((resolve, reject) => {
        wx.createSelectorQuery().in(component).select(selector).fields(fileds).exec((res) => {
            resolve(res[0])
        })
    })
}