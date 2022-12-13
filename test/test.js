// const ObjectProcess = require('../dist/object-process.common.js')
import ObjectProcess from '../dist/object-process.esm.mjs'


console.log('ObjectProcess');
console.log(ObjectProcess);
const imgURL = 'https://e-share.obs.cn-north-1.myhuaweicloud.com/example.jpg'
const objectProcess = new ObjectProcess(imgURL, {
  isSupportWebp: true
})
const style = objectProcess.getStyle()
console.log('style')
console.log(style);
console.log('style 测试结果：', style === '')
objectProcess.resize(200, undefined, 'fill')
const resize1 = objectProcess.toString()
console.log('resize1')
console.log(resize1);
console.log('resize1 测试结果', resize1 === imgURL + `?x-image-process=image%2Fresize%2Cw_200%2Cm_fill%2Climit_0`)
objectProcess.resize(100, 300, 'fill')
const resize2 = objectProcess.toString()
console.log('resize2')
console.log(resize2);
console.log('resize2 测试结果', resize2 === imgURL + `?x-image-process=image%2Fresize%2Cw_100%2Cm_fill%2Climit_0%2Ch_300`)

objectProcess.webp()
const webpTest = objectProcess.toString()
console.log('webpTest')
console.log(webpTest);
console.log('webpTest 测试结果', webpTest === imgURL + `?x-image-process=image%2Fresize%2Cw_100%2Cm_fill%2Climit_0%2Ch_300%2Fformat%2Cwebp`)




objectProcess.resize({
  w: 150,
  h: 360
})
const resize3 = objectProcess.toString()
console.log('resize3')
console.log(resize3);
console.log('resize3 测试结果', resize3 ===  imgURL + `?x-image-process=image%2Fresize%2Cw_150%2Cm_fill%2Climit_0%2Ch_360%2Fformat%2Cwebp`)


const style2 = objectProcess.getStyle()
console.log('style2')
console.log(style2);
console.log('style2 测试结果：', style2 === '/resize,w_150,m_fill,limit_0,h_360/format,webp')




objectProcess.info()
const info = objectProcess.toString()
console.log('info')
console.log(info);
console.log('info 测试结果：', info === imgURL + '?x-image-process=image%2Fresize%2Cw_150%2Cm_fill%2Climit_0%2Ch_360%2Fformat%2Cwebp%2Finfo')
