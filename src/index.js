
  module.exports =  {
   template:`
    <div 
      :class="activeClass"
      @click="runtime">
      {{text}}
    </div>
  `,
    data: () => {
      return {
        time: '',
        isRun: false,
        isFirst: true,
        firstText: '',
        totalTime: 60,
        tickTime: 1,

      }
    },
    mounted(){
      this.firstText = this.config.startText || '获取验证码';
      this.totalTime = this.config.totalTime;
      this.tickTime = this.config.tickTime;
    },
    methods: {
      runtime(){
        let config = this.config;
        config.click && config.click(this.isRun);
        if (config.canUse && !this.isRun && (!config.canTodo || config.canTodo())) {

          this.isFirst = false;
          this.isRun = true;
          this.time = this.totalTime;
          config.todo && config.todo(config);
          this.timer = setInterval(() => {
            if (this.time == 0) {
              this.stop(0);
            } else {
              this.time -= this.tickTime;
            }
          }, 1000 * this.tickTime);
        }
      },
      stop(type){
        let config = this.config;
        config.endCallback && config.endCallback(type,config);
        this.isRun = false;
        clearInterval(this.timer);
      }
    },
    props: {
      config: {}
    },
    computed: {
      text(){
        if (this.isFirst) {
          return this.firstText;
        } else {
          if (this.isRun) {
            return this.config.computeText ? this.config.computeText(this.time) : this.time + 's';
          } else {
            return this.config.endText || this.firstText;
          }
        }
      },
      activeClass(){
        let config = this.config;
        return (config.canUse !== undefined && !config.canUse ? (config.noCanClass || 'no-use' ) : "" )
         + (this.isRun ? (config.activeClass || 'isRun') : '');
      }
    },
    watch: {
      time(val){
      }
    },
    filters: {}
  }

