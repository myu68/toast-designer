<template>
  <div class="demo-container">
    <div class="title-section">
      <span class="demo-title">Toast designer for Vue.js</span>
      <!-- <div class="title-links">
        <a href='javascript:;' target='_blank'>Readme</a>
        <a href='javascript:;' target='_blank'>Issues</a>
      </div> -->
    </div>
    <div>
      <div class="props-item">
        <label class="toast-label">Toast Icon</label>
        <select class="demo-select" v-model="type">
          <option v-for="item in iconList" :key="item">{{ item.name }}</option>
        </select>
        <!-- <input type="text" class="demo-input" v-model="type"> -->
      </div>
      <div class="props-item">
        <label class="toast-label">Toast message</label>
        <input type="text" class="demo-input" v-model="msg">
      </div>
      <div class="props-item">
        <label class="toast-label">Toast duration</label>
        <input type="text" class="demo-input" v-model.number="duration">
      </div>
      <div class="props-item">
        <label class="toast-label">Toast position</label>
        <Position ref="position" />
      </div>
      <div class="props-item">
        <label class="toast-label">Full width</label>
        <label class="position-label" v-for="item in booleanList" :key="item.label">
          <input type="radio" :value="item.value" v-model="fullWidth">
          {{ item.label }}
        </label>
      </div>
    </div>
    <div class="division"></div>
    <div>
      <div class="props-item">
        <label class="toast-label">View Code</label>
      </div>
      <CodeBlock />
      <div class="props-item">
        <button class="btn" @click="handleClick(type, msg, duration, fullWidth)">View Toast</button>
      </div>
    </div>
  </div>
</template>

<script>
import Position from './position.vue';
import CodeBlock from './codeBlock.vue';

export default {
  name: 'demo',
  components: {
    Position, CodeBlock,
  },
  data() {
    return {
      iconList: [{
        name: 'success',
        value: 'success',
      }, {
        name: 'danger',
        value: 'danger',
      }, {
        name: 'loading',
        value: 'loading',
      }, {
        name: 'question',
        value: 'question',
      }, {
        name: 'refresh',
        value: 'refresh',
      }, {
        name: 'like',
        value: 'like',
      }, {
        name: 'warning',
        value: 'warning',
      }],
      // type: 'success',
      msg: 'Fight!',
      duration: 3,
      position: 'top-left',
      fullWidth: false,
      booleanList: [
        { label: 'off', value: false },
        { label: 'on', value: true },
      ],
    };
  },
  methods: {
    handleClick(type, msg, duration, fullWidth) {
      const options = {
        type,
        msg,
        duration,
        position: this.$refs.position.value,
        fullWidth,
      };
      this.$bus.$emit('change', options);
      this.$toast(options);
    },
  },
};
</script>

<style lang="less" scoped>
.demo-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10%;
}
.title-section {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
}
.demo-title {
    font-weight: 200;
    font-size: 24px;
}
.title-links {
  text-align: center;
}
.division {
  display: block;
  border-left: solid 1px #eee;
  margin: 0 35px;
  height: 350px;
  align-self: center;
}
.props-item {
  box-sizing: border-box;
  max-width: 200px;
  min-width: 150px;
  margin: 10px;
}
.toast-label {
  display: block;
  font-weight: 800;
  font-size: 14px;
  word-spacing: 2px;
}
.position-label {
  font-size: 12px;
}
.btn {
  width: 80%;
  height: 30px;
  font-size: 14px;
  font-weight: 400;
  word-spacing: 2px;
  border-radius: 2px;
  background-color: #fff;
  border-color: rgb(180, 180, 180);
  color: rgb(61, 61, 61);
  cursor: pointer;

   &:hover {
    background-color:  rgb(255, 255, 255);
    border-color: rgb(39, 39, 39);
    color: #333;
    transition: all .5s ease;
   }
}

.demo-select {
  width: 216px;
  height: 30px;
  padding-left: 10px;
}

.demo-input {
  width: 200px;
  height: 25px;
  padding-left: 10px;
}

@media (max-width: 799px) {
  .demo-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30%;
  }

  .division {
    display: none;
  }
}
</style>
