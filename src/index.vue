<template>
  <div class="btn"
       :class="{isRun:isRun}"
       @click="runtime">
    {{text}}
  </div>
</template>
<script>
  export default {
    components: {},
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
      this.firstText = this.config.startText;
      this.totalTime = this.config.totalTime;
      this.tickTime = this.config.tickTime;
    },
    methods: {
      runtime(){
        let config = this.config;
        if (!this.isRun && (!config.canTodo || config.canTodo())) {

          this.isFirst = false;
          this.isRun = true;
          this.time = this.totalTime;
          config.todo && config.todo().catch(() => {
            //发送失败 停止
            this.stop();
          });
          this.timer = setInterval(() => {
            if (this.time == 0) {
              this.stop();
            } else {
              this.time -= this.tickTime;
            }
          }, 1000 * this.tickTime);
        }
      },
      stop(){
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
      }
    },
    watch: {
      time(val){
      }
    },
    filters: {}
  }
</script>
<style scoped lang="scss">
  @import "~@/../static/css/gemixin.scss";

  .btn {
    @include ge-btn();

  }
</style>
