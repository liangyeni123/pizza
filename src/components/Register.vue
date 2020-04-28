<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="../../src/assets/icon.png" alt="">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" v-model="email">
            </div>

            <div class="form-group">
              <label for="password">password</label>
              <input type="password" class="form-control" v-model="password">
            </div>

            <div class="form-group">
              <label for="confirm-password">re-enter password</label>
              <input type="password" class="form-control" v-model="confirmPassword">
            </div>

            <button type="submit" class="btn btn-block btn-success">Sign-up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

  export default{
    data(){
      return {
        email:'',
        password:'',
        confirmPassword:''
      }
    },

    methods:{
      onSubmit(){
        if(this.password === this.confirmPassword){
          const formData = {
            email:this.email,
            password:this.password,
            confirmPassword:this.confirmPassword
          }

          axios.post('/users.json', formData)
            .then(res => this.$router.push({name:'loginLink'}))

            }else{
              alert("The password doesn't match!")
            }

        }
      }
    }

</script>
