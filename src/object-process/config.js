import { isSupportWebp } from '../utils/check'
import { PROCESS_NAME } from '../types'

export default {
  // 是否支持webp 格式。boolean 或者 function
  isSupportWebp: isSupportWebp(),
  // process 类型；image,video,imm
  processType: 'image',
  processName: PROCESS_NAME,
  // 初始化是否保留原参数
  keepParams: true,
  // ProcessModel 初始化配置
  processModelConfig: {}
}
