<template>
    <div>{{htmlString}}</div>
    <div v-html="htmlString"></div>
</template>
<script>

export default {
  components: {},
  data() {
    return {
      htmlString: '<p style="color:red;">color select</p>'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
