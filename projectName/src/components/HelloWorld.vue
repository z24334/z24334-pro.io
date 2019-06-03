<template>
  <div class="hello">
    1
  </div>
</template>

<script>
export default {
  name: 'HelloWorld1111111',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    this.aa();
  },
  methods: {
    aa: function () {
      this.$router.post('/add', (req ,res) => {
        console.log(req);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
