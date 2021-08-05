
<template>
 <div> _你好， {{ msg }}_



_当前计数为： {{ count }}_


<button @click="count++">点我！</button>
 </div>
</template>>
<script>
export default {
  components: {
  },
  data () {
    return {
      count: 0,
      msg: '123'
    }
  },
  setup() {
    const msg = 'Markdown 中的 Vue'
    const count = ref(0)

    return {
      msg,
      count,
    }
  }
}
</script>

<style>
.red-div {
  color: red;
}
</style>