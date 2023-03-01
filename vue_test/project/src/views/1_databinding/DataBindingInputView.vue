<template>
    <div>
        <input type="text" v-model="userId" />
        <button @click="myFunction">click</button>
        <button @click="changeData">changeData</button>
        <br>
        <input type="text" v-model="num1" /> +
        <input type="text" v-model="num2" /> =
        <span></span>
    </div>
</template>
<script>

export default {
  components: {},
  data() {
    return {
      userId: 'input Test', // value 값 동일 (양방향 데이터 - 사용자가 값을 바꾸면 userId 값도 동잃하게 반영된다)
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    myFunction() {
      console.log(this.userId)
    },
    changeData() {
      this.userId = "jjoons"
    }
  }
}
</script>
