import Vue from 'vue';
import geCode from './src/index';

new Vue({
  el: '#app',
  template: '<ge-code :config="config" class="btn"/>',
  components:{
  	geCode
  },
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
	      	console.log('判断是否可以发送验证码',/^1[345678]\d{9}$/.test(15232509223))
	        return /^1[345678]\d{9}$/.test(15232509223);
	      },
	      //canTode验证成功后执行 发送短信验证码
	      todo: () => {
	        //这里写验证码的获取程序
	        console.log('发送验证码')
	      }
	    }
  	}
  }
})