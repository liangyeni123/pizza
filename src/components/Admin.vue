<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <app-new-pizza></app-new-pizza>
    </div>

    <div class="col-sm-12 col-md-4">
      <h3 class="text-muted my-5">Menu</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>Category</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import NewPizza from './NewPizza.vue'
  export default{
    data(){
      return{
        //getMenuItems:[]
      }
    },

    components:{
      'app-new-pizza':NewPizza
    },
    computed:{
    getMenuItems:{
      get(){
        //return this.$store.state.menuItems
        return this.$store.getters.getMenuItems
      },
      set(){

      }
     }
    },

    created(){
      fetch("https://myblog-88888.firebaseio.com/menu.json")
          .then(res => {
            return res.json()
          })

          .then(data=>{
            let menuArray = []
            for(let key in data){
              data[key].id = key
              menuArray.push(data[key])
            }
            //数据同步
            this.$store.commit('setMenuItems', menuArray)
            //this.getMenuItems = menuArray
          })

    },

    methods:{
      deleteData(item){
       fetch("https://myblog-88888.firebaseio.com/menu/"+item.id+"/.json",{
        method:"DELETE",
        headers:{
          'Content-type':'application/json'

        }
       })
       .then(res => res.json())
       //.then(data=>this.$router.push({name:"menuLink"}))
       .then(data=>{
        this.$store.commit('removeMenuItems', item)
       })
      }
    }
    }

</script>
