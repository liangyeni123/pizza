<template>
  <form>
    <h3 class="text-muted my-5">Add New Pizza!</h3>
    <div class="form-group row">
      <label class="col-sm-1">Name</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.name">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">Info</label>
      <div class="col-sm-11">
        <textarea row="5" class="form-control" v-model="newPizza.description"></textarea>
      </div>
    </div>
    <p><strong>Option 1</strong>
    <div class="form-group row">
      <label class="col-sm-1">Size</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.size1">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">Price</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.price1">
      </div>
    </div>

    <p><strong>Option 2</strong>
    <div class="form-group row">
      <label class="col-sm-1">Size</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.size2">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">Price</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.price2">
      </div>
    </div>
    <div class="form-group-row">
      <button @click="addMenuItem" type="button" class="btn btn-success btn-block">Add</button>
    </div>
  </form>
</template>

<script>
  export default{
    data(){
      return{
        newPizza:{}
      }
    },

    methods:{
      addMenuItem(){
        let data = {
          name:this.newPizza.name,
          description:this.newPizza.description,
          options:[
            {
              size:this.newPizza.size1,
              price:this.newPizza.price1
            },
            {
              size:this.newPizza.size2,
              price:this.newPizza.price2
            }
          ]
        }

      //fetch("https://myblog-88888.firebaseio.com/menu.json",{
        //method:"POST",
        //headers:{
          //"Content-type":'application/json'
        //},
        //body:JSON.stringify(data)
      //})
        //.then(res=>res.json())
        //.then(data=>this.$router.push({name:"menuLink"}))
        //.catch(err=>console.log(err))
        //this.http.post("menu.json",data)
          //.then(res=>this.$router.push({name:"menuLink"}))
        //数据同步到vuex中
        this.http.post("menu.json",data)
          .then(res=>this.$store.commit("pushToMenuItems", data))
      }
    }

  }
</script>
