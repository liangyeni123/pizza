<template>
  <div class="row">
      <div id="home" class="col-sm-12 text-center">
        <div class="background">
          <h1>Welcome to try our pizza</h1>
          <h2>Let's order something delicious!</h2>
          <button @click="goToMenu" class="btn btn-success">Let's order!</button>
        </div>
      </div>
  </div>
</template>

<script>
  export default{
    methods:{
      goToMenu(){
        this.$router.push({name:'menuLink'})
      }
    }
  }
</script>

<style>
#home{
  background: url('http://liangyeni.com/wp-content/uploads/2020/04/pizza.jpg');
  height: 84vh;
  padding:10%;
}

h1,h2{
  margin:6%;
}

.background{
  background:#eee;
  opacity:0.8;
  max-width:70vw;
  margin:0 auto;
  padding: 20px 0;
}
</style>
