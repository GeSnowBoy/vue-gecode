<template>
   <div style="max-width:1200px;margin:auto;padding:20px;">
	  <input  v-model="phone"/>
		<ge-code :config="config" class="btn" ref="geCode"/>
		<button @click=closeCode>
			关闭倒计时
		</button>
		<br/>
	     <div v-for="i in 10" class="btn" :style="{margin:'10px',background:'hsla('+i*10+', 100%, 40%, 2)'}">
			 <ge-code></ge-code>	
		 </div>
	</div>
</template>
<script>
import GeCode from '../src';

export default {
    
components:{GeCode},
created(){
			//修改全局配置参数
			GeCode.options.totalTime = 20;//总时间修改成20秒
	},
	data() {
		return {
			config: {
				//开始时候的文本
				startText: '获取验证码(自定义)',
				//获取验证码结束后文本
				endText: '再次获取',
				//验证码倒计时总时间(秒)
				totalTime: 60,
				//验证码每次隔多久变一次(秒)
				tickTime: 1,
				//倒计时执行期添加的class 默认 isRun
				activeClass: 'isRun',
				//自定义倒计时期间文本的显示内容
				computeText(num) {
					//num 倒计时时间
					return '重新获取 ' + num + 's';
				},
				//是否可以发送 
				canTodo: () => {
					//返回值判定是否可以发送
					let result = /^1[345678]\d{9}$/.test(this.phone);
					console.log('判断是否可以发送验证码',result);
					if(!result){
						alert('手机号格式不正确');
					}
					return result;
				},
				//canTode验证成功后执行 发送短信验证码
				todo: () => {
					//这里写验证码的获取程序
					console.log('发送验证码')
				},
				//发送完成后的回调
				endCallback(type, config) {
					//type 回调产生原因  0: 时间结束   其他值由this.$refs.geCode.stop(1)调入自定义
					//config config配置  
					console.log('发送完成后的回调', type, config);

				},
				//每次点击都会被调用
				click(isRun) {
					//isRun 是否在运行中
					console.log(`当前验证码状态是:${isRun ? '发送中' : '可发送'}状态`)
				},
				//是否可用   默认ture
				canUse: true,
				//不可用时的类名  默认no-can
				noCanClass: 'no-can',
			},
			phone: '15232509344'
		}
	},
	methods: {
		closeCode() {
			console.log('关闭');
			this.$refs.geCode.stop(1);
		}
	}
}
</script>
