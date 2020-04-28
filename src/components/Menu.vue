<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>Size</th>
            <th>Price</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td><strong>{{item.name}}</strong></td>
          </tr>
          <tr v-for="option in item.options" :key="option.size">
            <td>{{option.size}}</td>
            <td>{{option.price}}</td>
            <td>
            <button
              @click="addToBasket(item,option)"
              class="btn btn-sm btn-outline-success">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="col-sm-12 col-md-4">
     <div v-if="baskets.length > 0">
       <table class="table">
         <thead class="thead-default">
           <tr>
             <th>quantity</th>
             <th>category</th>
             <th>price</th>
           </tr>
         </thead>
         <tbody v-for="item in baskets" :key="item.name">
           <tr>
             <td>
               <button @click="decreaseQuantity(item)" class="btn btn-sm">-</button>
               <span>{{item.quantity}}</span>
               <button @click="increaseQuantity(item)" class="btn btn-sm">+</button>
             </td>
             <td>{{item.name}}{{item.size}}</td>
             <td>{{item.price * item.quantity}}</td>
           </tr>
         </tbody>
       </table>
       <p>Total:{{"$" + total}}</p>
       <button class="btn btn-success btn-block">Place Order</button>
     </div>

     <div v-else>
     {{basketText}}
    </div>
</div>
  </div>
</template>


<script>
  export default{
    data(){
      return{
      baskets:[],
      basketText:"basket is empty.",
      //getMenuItems:{}
      }
    },

    computed:{
      getMenuItems(){
        //return this.$store.state.menuItems
        //通过getters获取数据
        return this.$store.getters.getMenuItems
      },
      total(){
        let totalCost = 0
        for(let index in this.baskets){
          let individualItem = this.baskets[index]
          totalCost += individualItem.quantity * individualItem.price
        }

        return totalCost

      }
    },
    created(){
      this.fetchData()
    },



    methods:{

    fetchData(){
      //fetch("https://myblog-88888.firebaseio.com/menu.json")
          //.then(res => {
            //return res.json()
          //})
          //.then(data => {
            //this.getMenuItems = data
          //})

          this.http.get("menu.json")
            .then(res=>this.$store.commit("setMenuItems", res.data))
          },

      addToBasket(item,option){
        let basket = {

          name:item.name,
          size:option.size,
          price:option.price,
          quantity:1
        }

        if(this.baskets.length > 0){
            let result = this.baskets.filter( (basket) =>{
              return (basket.name === item.name & basket.price === option.price)
            })

            if(result !=null && result.length>0){
              result[0].quantity++
            }else{
              this.baskets.push(basket)
            }


            }else{
              this.baskets.push(basket)
            }
        },


      decreaseQuantity(item){
        item.quantity--

        if(item.quantity <= 0){
          this.removeFromBasket(item)
        }
      },

      increaseQuantity(item){
        item.quantity++
      },

      removeFromBasket(item){
        this.baskets.splice(this.baskets.indexOf(item), 1)
      }
    }
  }
</script>
