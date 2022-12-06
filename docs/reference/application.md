
## oss

```` js
/***
 * 如果使用cdn
 * const urlProcess = new ObjectProcess.default()
 */
import ObjectProcess from 'object-process'

const imgURl = 'https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg'

const urlProcess = new ObjectProcess(imgURl, {
  processName: 'x-oss-process'
}).append('resize', {
  w: 400,
  h: 500,
  m: 'fill',
  limit: 0
}).webp()


urlProcess.toString() //  https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image%2Fresize%2Cw_400%2Ch_500%2Cm_fill%2Climit_0%2Fformat%2Cwebp
````





## obs



```` js
/***
 * 如果使用cdn
 * const urlProcess = new ObjectProcess.default()
 */
import ObjectProcess from 'object-process'

const imgURl = 'https://e-share.obs.cn-north-1.myhuaweicloud.com/example.jpg'

const urlProcess = new ObjectProcess(imgURl).append('resize', {
  w: 400,
  h: 500,
  m: 'fill',
  limit: 0
}).webp()


urlProcess.toString() //  https://e-share.obs.cn-north-1.myhuaweicloud.com/example.jpg?x-image-process=image%2Fresize%2Cw_400%2Ch_500%2Cm_fill%2Climit_0%2Fformat%2Cwebp
````



## 小程序

```` js
/***
 * 如果使用cdn
 * const urlProcess = new ObjectProcess.default()
 */
import ObjectProcess from 'object-process'

const imgURl = 'https://e-share.obs.cn-north-1.myhuaweicloud.com/example.jpg'

const urlProcess = new ObjectProcess(imgURl, {
    // 小程序支持webp
    isSupportWebp: true
}).append('resize', {
  w: 400,
  h: 500,
  m: 'fill',
  limit: 0
}).webp()


urlProcess.toString() //  https://e-share.obs.cn-north-1.myhuaweicloud.com/example.jpg?x-image-process=image%2Fresize%2Cw_400%2Ch_500%2Cm_fill%2Climit_0%2Fformat%2Cwebp
````



## vue 组件(vue2)

obs-img

```` vue
<template>
  <img :src="imgSrc">
</template>

<script>
import ObjectProcess from 'object-process'
export default {
  name: 'obs-image',
  props: {
    // 原始url
    url: {
      type: String,
      default: () => ''
    },
    /***
     * resize 参数
     * w_400,h_500
     * {w: 400, h: 500}
     */
    resize: {
      type: [String, Object],
      default: () => ''
    },
    /***
     * resize m 参数。默认fill
     */
    resizeMode: {
      type: String,
      default: () => 'fill'
    },
    /***
     * 是否转换webp 格式。
     * 默认是
     */
    webp: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    imgSrc () {
      if (this.url) {
        const urlProcess = new ObjectProcess(this.url)
        if (this.resize) {
          // urlProcess.resize(this.resize)
          urlProcess.append('resize', this.resize)
          if (this.resizeMode) {
            urlProcess.resize({
              m: this.resizeMode,
              limit: 0
            })
          }
        }
        if (this.webp) {
          urlProcess.webp()
        }
        return urlProcess.toString()
      } else {
        return ''
      }
    }
  }
}
</script>

````

```` vue
 <ObsImage url="https://e-share.obs.cn-north-1.myhuaweicloud.com/example.jpg" resize="w_400,h_500"></ObsImage>
 <ObsImage url="https://e-share.obs.cn-north-1.myhuaweicloud.com/example.jpg" :resize="obsImgResize"></ObsImage>

/***
obsImgResize = {
 	w: 500,
    h: 400
}
*/
````

