import { get, post } from './request'
import urls from './urls'

// http调用方法
const demo_get = params => get(urls.demo, params) // demo
const demo_post = params => post(urls.demo, params) // demo

export { demo_get, demo_post }
