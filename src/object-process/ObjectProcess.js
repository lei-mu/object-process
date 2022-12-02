// import cloneDeep from 'lodash-es/cloneDeep'
import defaultConfig from './config'
import ProcessModel from 'process-model'
// import isPlainObject from 'lodash-es/isPlainObject'
import { isEmpty as myIsEmpty, isPlainObject } from '../utils/check'
import {deepClone} from '../utils/index.js'
import {version} from '../../package.json'

export default class ObjectProcess {
  constructor (url, config = {}) {
    this._config = deepClone({ ...defaultConfig, ...config })
    this._process(url)
  }

  _config = null

  processModel

  VERSION = version

  /***
   * 设置默认参数
   * @param cb
   */
  setConfig (cb) {
    if (cb) {
      this._config = cb(this.config)
    }
  }

  get config () {
    return this._config
  }

  /***
   * 获取process 样式字符串
   * @return {*}
   */
  getStyle () {
    return this.processModel.toString()
  }

  // 获取searchParams 参数
  _processReg (searchUrl, name) {
    if (!searchUrl) return
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    const r = searchUrl.match(reg)
    if (r != null) {
      return decodeURIComponent(r[2])
    }
  }

  _process (url = '') {
    console.log(url)
    const processName = this.config.processName
    const urlSplit = url.split('?')
    const originalURL = urlSplit[0] || ''
    const searchURL = urlSplit[1] || ''
    console.log(searchURL)
    let modelString = ''
    const config = this._config
    const processType = config.processType
    if (this._config.keepParams && searchURL) {
      const processVal = this._processReg(searchURL, processName)
      console.log(processVal)
      if (processVal && processVal.startsWith(processType)) {
        modelString = processVal.replace(processType, '')
      }
    }
    this.processModel = new ProcessModel(modelString, config.processModelConfig || {})
    this._url = this._config.keepParams ? url : originalURL
    console.log('modelString')
    console.log(modelString)
  }

  /**
   * 任务流初始化
   * @param {string} url - url 字符串
   * @return
   */
  process (url = '') {
    this._process(url)
    return this
  }

  /***
   * 序列化
   * @return {string}
   */
  toString () {
    const processName = this.config.processName
    const url = this._url
    const urlSplit = url.split('?')
    const originalURL = urlSplit[0] || ''
    const searchURL = urlSplit[1] || ''
    const reg = new RegExp('(^|&)' + processName + '=([^&]*)(&|$)', 'i')
    /**
     * 考虑url 可能对数组参数有不同处理方式，所以暂时不考虑使用 类似URL api 去操作 searchParams
     * */
    const processQuery = this.processModel.toString()
    console.log('processQuery')
    console.log(processQuery)
    const processType = this._config.processType
    const processValue = encodeURIComponent(`${processType}${processQuery}`)
    console.log(processValue)
    if (searchURL) {
      if (processQuery) {
        const hasProcess = reg.test(searchURL)
        // TODO 会多个&
        if (hasProcess) {
          const replaceSearchURL = searchURL.replace(reg, `${processName}=${processValue}&`)
          return `${originalURL}?${replaceSearchURL}`
        } else {
          return `${url}&${processName}=${processValue}`
        }
      } else {
        const replaceSearchURL = searchURL.replace(reg, '&')
        return `${originalURL}?${replaceSearchURL}`
      }
    } else {
      return processQuery ? `${originalURL}?${processName}=${processValue}` : originalURL
    }
  }

  /***
   * 获取图片信息
   * @example
   * https://support.huaweicloud.com/fg-obs/obs_01_0410.html
   */
  info () {
    this.processModel.append('info')
    return this
  }

  /**
   * 设置缩略
   * @param {number,string, object} w - 图片宽度，或者resize 参数model
   * @param {number | string} h - 图片高度
   * @param {string} m [lfit|mfit|fill|pad]- 裁切模式。默认值为lfit
   * @param {Number} limit - limit 默认0
   * @example
   * https://support.huaweicloud.com/fg-obs/obs_01_0430.html
   * */
  resize (w, h, m, limit = 0) {
    // https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams
    if (isPlainObject(w)) {
      this.processModel.append('resize', w)
    } else {
      this.processModel.append('resize', {
        w,
        h,
        m,
        limit
      })
    }
    return this
  }

  /***
   * 旋转设置
   * @example
   * https://support.huaweicloud.com/fg-obs/obs_01_0441.html
   */
  rotate (value) {
    this.processModel.append('rotate', value)
    return this
  }

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
  crop (g, h, w, x, y) {
    if (isPlainObject(g)) {
      this.processModel.append('crop', g)
    } else {
      this.processModel.append('crop', {
        g,
        h,
        w,
        x,
        y
      })
    }
    return this
  }

  /***
   * 格式转换
   * @example
   * https://support.huaweicloud.com/fg-obs/obs_01_0471.html
   */
  format (value) {
    this.processModel.append('format', value)
    return this
  }

  /***
   * 渐进显示
   * @param value
   * @example
   * https://support.huaweicloud.com/fg-obs/obs_01_0472.html
   */
  interlace (value) {
    this.processModel.append('interlace', value)
    return this
  }

  /***
   * 质量变换
   * @param Q
   * @param q
   * @example
   * https://support.huaweicloud.com/fg-obs/obs_01_0480.html
   */
  quality (Q, q) {
    if (Q) {
      this.processModel.append('quality', {
        Q
      })
    } else {
      this.processModel.append('quality', {
        q
      })
    }
    return this
  }

  /***
   * 设置图片瘦身
   * @example
   * https://support.huaweicloud.com/fg-obs/obs_01_0411.html
   */
  imageslim () {
    this.processModel.append('imageslim')
    return this
  }

  /***
   * 转换成webP格式
   * @param {boolean} force - 是否强制转换webp格式，不考虑是否支持
   */
  webp (force = false) {
    if (force) {
      this.processModel.append('format', 'webp')
    } else {
      const isSupportWebp = this.config.isSupportWebp
      const valueIsEmpty = myIsEmpty(isSupportWebp)
      if (!valueIsEmpty) {
        if (typeof isSupportWebp === 'boolean') {
          if (isSupportWebp) {
            this.processModel.append('format', 'webp')
          }
        } else {
          if (isSupportWebp()) {
            this.processModel.append('format', 'webp')
          }
        }
      }
    }
    return this
  }

  /***
   * 追加参数。如果有同一个命令。参数会合并
   * @param name
   * @param value
   */
  append (name, value) {
    this.processModel.append(name, value)
    return this
  }

  /***
   * 设置参数，覆盖
   * @param name
   * @param value
   */
  set (name, value) {
    this.processModel.set(name, value)
    return this
  }

  /**
   * 删除指定命令
   * */
  delete (name) {
    this.processModel.delete(name)
    return this
  }

  /***
   * 指定name 是否存在
   * @param {string} name - 命令名称
   * @return {boolean}
   */
  has (name) {
    return this.processModel.has(name)
  }
}
