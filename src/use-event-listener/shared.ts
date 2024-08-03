export type Fn = () => void
export type Arrayable<T> = T[] | T
export const noop = () => {}
export const isObject = (val: any): val is object => toString.call(val) === '[object Object]'
