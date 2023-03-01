<template>
    <div>
        <h1>Hello {{ueserNmae}}</h1>
        <p>{{message}}</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      ueserNmae: 'John Doe',
      message: 'welcom jjoons',
      arr: [],
      obj: {}
    }
  }
}
</script>
<style scoped>
    .text-red {
        color: red;
    }
</style>
