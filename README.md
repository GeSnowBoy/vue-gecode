# vue-gecode

## 基于Vue2.0获取手机验证码插件,可高度自定义.



[这里是可爱的Demo](https://quietboys.github.io/vue-input-code/)


## 安装和使用

```javascript
npm install vue-gecode --save-dev
```

- 作为全局组件使用

```javascript
//在项目入口文件
import Vue from 'vue'
import geCode from 'vue-gecode'
Vue.component('geCode', geCode)
```

- 作为局部组件

```javascript
//在某个组件中
import geCode from 'vue-gecode'
export default {
  components: {
    geCode
  }
}
```

HTML中使用:

```html
<template>
	<ge-code :config=config></ge-code>
</template>
<script>
	export default {
		data(){
			return {
				config:{
					
				}
			}
		}
	}
</script>
```

## API

### Props

| 参数    | 类型    | 说明   |  可选值 | 默认值 |
| ------------- |-------| -----| ----| -------|
| code | 数组 | 用户输入的验证码数组 | — | — |
| type | 字符串 | 用户输入类型 | number,text | number |
| getinput | 函数 | 用户每次输入后的回调函数,接受一个验证码字符串 | — | — |
| success | 函数 | 用户输入完成后的回调函数,接受一个验证码字符串 | — | — |
| span-size | 字符串 | 输入后的字体显示大小 | — | 20px |
| span-color | 字符串 | 输入后的字体显示颜色 | — | #f35252 |
| input-size | 字符串 | 输入框的字体显示大小 | — | 20px |
| input-color | 字符串 | 输入框的字体显示颜色 | — | #000 |
| number | 数字 | 验证码个数 | — | 6 |
| height | 字符串 | 整个框的显示高度 | — | 60px |
