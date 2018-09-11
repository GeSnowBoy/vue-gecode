
let config = {
  startText: '获取验证码',
  endText: '再次获取',
  totalTime: 60,
  tickTime: 1,
  activeClass: 'isRun',
  computeText(num) {
    return '重新获取 ' + num + 's';
  },
  canTodo: () => true,
  todo: () => {},
  endCallback() {},
  click() {},
  canUse: true,
  noCanClass: 'no-can',
};
let geCode = {
  template: `
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
  created() {
    this.options = Object.assign({}, config);
  },
  methods: {
    runtime() {
      let config = this._config;
      config.click(this.isRun);
      if (config.canUse && !this.isRun && config.canTodo()) {
        this.isFirst = false;
        this.isRun = true;
        this.time = config.totalTime;
        config.todo(config);
        this.timer = setInterval(() => {
          if (this.time <= config.tickTime) {
            this.stop(0);
          } else {
            this.time -= config.tickTime;
          }
        }, 1000 * config.tickTime);
      }
    },
    stop(type) {
      let config = this._config;
      if (this.isRun)
        config.endCallback(type, config);
      this.isRun = false;
      clearInterval(this.timer);
    }
  },
  props: {
    config: {}
  },
  computed: {
    _config() {
      return Object.assign(this.options, this.config || {});
    },
    text() {
      let config = this._config;
      if (this.isFirst) {
        return config.startText;
      } else {
        if (this.isRun) {
          return config.computeText(this.time);
        } else {
          return config.endText;
        }
      }
    },
    activeClass() {
      let config = this._config;
      return (!config.canUse ? config.noCanClass + ' ': '') + (this.isRun ? config.activeClass : '');
    }
  }
}
geCode.options = config;
module.exports = geCode;