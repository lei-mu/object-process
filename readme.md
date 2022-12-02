# ObjectProcess

obs,oss 等对象储存URL对象处理参数操作。提供一些别名是操作更加方便。



## 使用场景

[oss 数据处理](https://help.aliyun.com/document_detail/99372.html)

类似：`https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/crop,x_100,y_50`

[obs 图片处理](https://support.huaweicloud.com/fg-obs/obs_01_0001.html)

类似：`https://e-share.obs.cn-north-1.myhuaweicloud.com/example.jpg?x-image-process=image/resize,w_500,limit_0`

其他...



## 使用

### [npm](https://www.npmjs.com/package/process-model)

```` js
npm install object-process -S
````

### cdn

unpkg

```` js
https://www.unpkg.com/browse/object-process
````

jsdelivr

```` js
https://www.jsdelivr.com/package/npm/object-process
````



```` js
import ObjectProcess from 'object-process'

const imgURl = 'https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/crop,x_100,y_50'


const urlProcess = new ObjectProcess(imgURl, {
  processName: 'x-oss-process'
})

/***
 * or
 * const urlProcess = new ObjectProcess()
 * urlProcess.process(imgURl)
 */
urlProcess.resize({ w: 200 }).resize('h_100,m_fill').rotate(90).webp()
urlProcess.append('resize', {
  w: 200,
  height: 200
}).set('format', 'png')

urlProcess.delete('crop')

urlProcess.has('resize')

urlProcess.set('resize', {
  w: 300
})

urlProcess.append('resize', 'w_400,h_500,limit_0')


urlProcess.toString() // https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image%2Fresize%2Cw_400%2Ch_500%2Climit_0%2Frotate%2C90%2Fformat%2Cpng&
````



#### cdn使用

cdn 使用时必须在引入前引入`process-model` cdn,此插件依赖`process-model`;

```` js
  <script src="https://cdn.jsdelivr.net/npm/process-model@1/dist/process-model.umd.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/object-process@1/dist/object-process.umd.js"></script>
````

```` js
const imgURl = 'https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/crop,x_100,y_50'


const urlProcess = new ObjectProcess.default(imgURl, {
  processName: 'x-oss-process'
})

````





### 构造函数

```` js
ObjectProcess(url, config)
````

返回一个ObjectProcess对象

#### url

url 链接地址字符串

可以为空。



```` js
const imgURl = 'https://e-share.obs.cn-north-1.myhuaweicloud.com/example.jpg?x-image-process=image/resize,w_500,limit_0'
const urlProcess = new ObjectProcess()
urlProcess.process(imgURl)
````

#### config

默认参数

```` js
{
  // 当前环境是否支持webp 格式。boolean 或者 function
  isSupportWebp: isSupportWebp(),
  // process 类型；image,video,imm
  processType: 'image',
  // 如果是oss 将此值改为 x-oss-process
  processName: 'x-image-process',
  // 初始化是否保留url原始参数
  keepParams: true,
  // ProcessModel 初始化配置；参考 https://github.com/lei-mu/process-model#config
  processModelConfig: {}
}

````



### 方法



#### setConfig

修改全局配置

```` js
urlProcess.setConfig((defaultConfig) => {
defaultConfig.processName = 'video'
return defaultConfig
})
````





#### append
追加参数。如果有同一个命令，参数会合并；支持链式调用

```` js
urlProcess.append(name, value)
````

name： 命令名称；

value: 命令值；对象或者参数字符串；

````
urlProcess.append('resize', 'w_200,h_300,limit_0').rotate(30)
urlProcess.append('resize', {
	w: 400,
	h: 500,
	m: 'fill'
})
// 空值会被清除
urlProcess.append('resize', {
	m: null
})
urlProcess.append('format', 'png')
urlProcess.append('imageslim').webp()

urlProcess.toString() //  https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image%2Fresize%2Cw_400%2Ch_500%2Climit_0%2Fcrop%2Cx_100%2Cy_50%2Frotate%2C30%2Fformat%2Cwebp%2Fimageslim&
````



#### set

设置参数。如果有同一个命令，会覆盖；支持链式调用
```` js
urlProcess.set(name, value)
````

name： 命令名称；

value: 命令值；对象或者参数字符串；

````
urlProcess.set('resize', 'w_200,h_300,limit_0')
urlProcess.set('resize', {
	w: 400
})
urlProcess.set('info')
urlProcess.set('format', 'png')

urlProcess.toString()
````

#### delete

删除指定命令；支持链式调用
```` js
urlProcess.delete(name)
````

name： 命令名称；

````js
urlProcess.set('resize', 'w_200,h_300,limit_0')
urlProcess.set('resize', {
	w: 400
})
urlProcess.set('info')
urlProcess.set('format', 'png')

urlProcess.delete('resize')

urlProcess.toString()
````

#### has

判断是否存在指定命令

````js
urlProcess.has(name)
````

name： 命令名称；

````js
urlProcess.set('resize', 'w_200,h_300,limit_0')
urlProcess.set('resize', {
	w: 400
})
urlProcess.set('info')
urlProcess.set('format', 'png')

urlProcess.delete('resize')

urlProcess.has('resize') //  false
````



#### getStyle

获取process 样式字符串

```` js
urlProcess.append('resize', 'w_200,h_300,limit_0').rotate(30)
urlProcess.append('resize', {
	w: 400,
	h: 500,
	m: 'fill'
})
// 空值会被清除
urlProcess.append('resize', {
	m: null
})
urlProcess.append('format', 'png')
urlProcess.append('imageslim').webp()

urlProcess.getStyle() // /resize,w_400,h_500,limit_0/crop,x_100,y_50/rotate,30/format,webp/imageslim
````





#### toString

返回序列化字符串。在使用`append`、`set` 等命令时，无需关注顺序。

```` js
urlProcess.toString()
````



### 内置别名

#### resize

设置缩略；支持链式调用

```` js
  /**
   * 
   * @param {number,string, object} w - 图片宽度，或者resize 参数model
   * @param {number | string} h - 图片高度
   * @param {string} m [lfit|mfit|fill|pad]- 裁切模式。默认值为lfit
   * @param {Number} limit - limit 默认0
   * @example
   * https://support.huaweicloud.com/fg-obs/obs_01_0430.html
   * */
urlProcess.resize(w, h, m, limit = 0)
// or
urlProcess.resize({
	w: 200,
    h: 150
}).resize({
	m: 'fill',
    h: 150
})
````



#### rotate

旋转设置；支持链式调用

```` js
  /***
   * 旋转设置
   * @example
   * https://support.huaweicloud.com/fg-obs/obs_01_0441.html
   */
urlProcess.resize(30)
````

#### crop

普通剪切；支持链式调用

```` js
 /***
   * 普通剪切
   * @param g
   * @param h
   * @param w
   * @param x
   * @param y
   * @example
   * https://support.huaweicloud.com/fg-obs/obs_01_0451.html
   */
  urlProcess.crop(g, h, w, x, y)
// or
urlProcess.crop({
    g: 0,
    h: 20,
    w: 20
})

````

#### format

格式转换；支持链式调用

```` js
urlProcess.format('png')

// 不会检测当前环境是否支持webp
urlProcess.format('webp')
````





#### interlace

渐进显示；支持链式调用

````js
urlProcess.interlace(value)
````



#### quality

质量变换；支持链式调用

```` js
  /***
   * 质量变换
   * @param Q
   * @param q
   * @example
   * https://support.huaweicloud.com/fg-obs/obs_01_0480.html
   */
urlProcess.quality(Q, q)
````

#### imageslim

图片瘦身；支持链式调用

```` js
urlProcess.imageslim()
````



#### webp

转换成webP格式;支持链式调用

````js
  /***
   * 转换成webP格式
   * @param {boolean} force - 是否强制转换webp格式，不考虑是否支持;默认false
   */
// 会通过config.isSupportWebp 去检测当前环境是否支持webp,支持就会添加参数
urlProcess.webp(force = false)
// 强制将格式转换成webp,不考虑环境是否支持
urlProcess.webp(true)
````





### 属性

#### VERSION

返回版本号

```` js
model.VERSION // 1.0.0
````

#### processModel

当前实例的processModel实例;可使用`ProcessModel` 方法;

[ProcessModel文档](https://github.com/lei-mu/process-model)

```` js
const imgURl = 'https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/crop,x_100,y_50'


const urlProcess = new ObjectProcess(imgURl, {
  processName: 'x-oss-process'
})

urlProcess.processModel.append('resize', {w: 500})

````

