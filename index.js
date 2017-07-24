import Vue from 'vue';
import geCode from './src/index';

new Vue({
  el: '#app',
  template: `
	<div>
		<ge-code :config="config" class="btn" ref="geCode"/>
		<button @click=closeCode>
			关闭倒计时
		</button>
	</div>

  `,
  components:{
  	geCode
  },
  data(){
  	return {
  		config:{
	      //开始时候的文本
	      startText: '获取验证码(自定义)',
	      //获取验证码结束后文本
	      endText: '再次获取',
	      //验证码倒计时总时间(秒)
	      totalTime: 60,
	      //验证码每次隔多久变一次(秒)
	      tickTime: 1,
	      //倒计时执行期添加的class 默认 isRun
	      activeClass:'isRun',
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
	      },
	      //发送完成后的回调
	      endCallback(type,config){
	      	console.log('发送完成后的回调',type,config);

	      },
	      //每次点击都会被调用
	      click(isRun){
	      	console.log(`当前验证码状态是:${isRun ? '发送中' : '可发送'}状态`)
	      },
	      //是否可用   m默认ture
	      canUse:true,
	      //不可用时的类名  默认no-can
	      noCanClass:'no-can',
	      //强行停止倒计时 到可用状态
	      // stop:
	    }
  	}
  },
  methods:{
  	closeCode(){
  		console.log('guanbi');
  		this.$refs.geCode.stop(1);
  	}
  }
})