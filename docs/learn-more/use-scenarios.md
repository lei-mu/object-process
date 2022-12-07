---
title: 常见使用场景
---


## 使用场景

用户上传的图片长宽比例往往是不固定的，但是我们显示的区域又是固定的，或者上传了一个100 * 100 的图片，实际体积却有5M,所以需要我们对图片进行处理，一方面，可以避免图片变形，另一方面，可以加快图片加载速度。

### 列表封面

![https://e-share.obs.cn-north-1.myhuaweicloud.com/example.jpg?x-image-process=image%2Fresize%2Cw_400%2Ch_400%2Cm_fill%2Climit_0%2Fformat%2Cwebp](https://e-share.obs.cn-north-1.myhuaweicloud.com/example.jpg?x-image-process=image%2Fresize%2Cw_400%2Ch_400%2Cm_fill%2Climit_0%2Fformat%2Cwebp)

```` js
const imgURl = 'https://e-share.obs.cn-north-1.myhuaweicloud.com/example.jpg'

const urlProcess = new ObjectProcess(imgURl).append('resize', {
  w: 400,
  h: 400,
  m: 'fill',
  limit: 0
}).webp()
````

toString

```` js
https://e-share.obs.cn-north-1.myhuaweicloud.com/example.jpg?x-image-process=image%2Fresize%2Cw_400%2Ch_400%2Cm_fill%2Climit_0%2Fformat%2Cwebp
````

getStyle

```` js
/resize,w_400,h_400,m_fill,limit_0/format,webp
````

不论用户上传何种尺寸的图片，始终裁切为400*400的图片

### 商品放大镜轮播图

在商品放大镜轮播图区域，显示区域固定，图片尺寸不固定，应始终保证图片完整展示

![https://e-share.obs.cn-north-1.myhuaweicloud.com/example.jpg?x-image-process=image%2Fresize%2Cw_400%2Ch_400%2Cm_lfit%2Climit_0%2Fformat%2Cwebp](https://e-share.obs.cn-north-1.myhuaweicloud.com/example.jpg?x-image-process=image%2Fresize%2Cw_400%2Ch_400%2Cm_lfit%2Climit_0%2Fformat%2Cwebp)

```` js
const imgURl = 'https://e-share.obs.cn-north-1.myhuaweicloud.com/example.jpg'

const urlProcess = new ObjectProcess(imgURl).append('resize', {
  w: 400,
  h: 400,
  m: 'lfit',
  // 保证有一边的长度是400。如果原图小于400，等比例放大到400
  limit: 0
}).webp()
````

toString

```` js
https://e-share.obs.cn-north-1.myhuaweicloud.com/example.jpg?x-image-process=image%2Fresize%2Cw_400%2Ch_400%2Cm_lfit%2Climit_0%2Fformat%2Cwebp
````

getStyle

```` js
/resize,w_400,h_400,m_lfit,limit_0/format,webp
````

不论用户上传何种尺寸的图片，始终裁切为最大尺寸400*400的图片，保证图片完整显示

### 商品详情页图片

在商品详情页区域，应保证图片显示的最大宽度，高度自适应。如果有点击查看大图，应该在点击时再显示原图。

![https://e-share.obs.cn-north-1.myhuaweicloud.com/example.jpg?x-image-process=image%2Fresize%2Cw_400%2Cm_lfit%2Climit_1%2Fformat%2Cwebp](https://e-share.obs.cn-north-1.myhuaweicloud.com/example.jpg?x-image-process=image%2Fresize%2Cw_400%2Cm_lfit%2Climit_1%2Fformat%2Cwebp)

```` js
const imgURl = 'https://e-share.obs.cn-north-1.myhuaweicloud.com/example.jpg'

const urlProcess = new ObjectProcess(imgURl).append('resize', {
  w: 400,
  m: 'lfit',
  limit: 1
}).webp()
````

toString

```` js
https://e-share.obs.cn-north-1.myhuaweicloud.com/example.jpg?x-image-process=image%2Fresize%2Cw_400%2Cm_lfit%2Climit_1%2Fformat%2Cwebp
````

getStyle

```` js
/resize,w_400,m_lfit,limit_1/format,webp
````

不论用户上传何种尺寸的图片，始终裁切为最大宽度为400的图片，如果宽度不足400，则显示实际宽度


### oss 视频截帧
imm:文档预览/人脸识别/图片识别

```` js
const videoURL = 'https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg'

const urlProcess = new ObjectProcess(videoURL, {
  processType: 'video',
  processName: 'x-oss-process'
}).append('snapshot', {
  t: 7000,
  f: 'jpg',
  w: 800,
  h: 600,
  m: 'fast'
})
````

toString

```` js
https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=video%2Fsnapshot%2Ct_7000%2Cf_jpg%2Cw_800%2Ch_600%2Cm_fast
````

getStyle

```` js
/snapshot,t_7000,f_jpg,w_800,h_600,m_fast
````


## 和css object-fit 有什么区别

[moz object-fit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit)



object-fit CSS 属性指定可替换元素的内容应该如何适应到其使用高度和宽度确定的框。



图片本身尺寸和体积不会变。
