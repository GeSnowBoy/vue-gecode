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
      //开始时候的文本
      startText: '获取验证码',
      //获取验证码结束后文本
      endText: '再次获取',
      //验证码倒计时总时间(秒)
      totalTime: 60,
      //验证码每次隔多久变一次(秒)
      tickTime: 1,
      //自定义倒计时期间文本的显示内容
      computeText(num){
        return '重新获取 ' + num + 's';
      },
      //是否可以发送 
      canTodo: () => {
        return /^1[345678]\d9$/.test(15232509223);
      },
      //canTode验证成功后执行 发送短信验证码
      todo: () => {
        //这里写验证码的获取程序
      }
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
