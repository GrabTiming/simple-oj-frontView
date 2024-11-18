<template>

  <div class="wrapper">
    <div class="login-box">
      <div style="flex: 1">
        <img src="@/assets/p1.jpg" alt="111" style="width: 50%">
      </div>

      <div class="login-card">
        <el-form v-model="user">
          <h2>Welcome</h2>
          <el-form-item prop="username" class="form-item">
            <el-input v-model="user.username"  type="text"></el-input>
          </el-form-item>

          <el-form-item class="form-item">
            <el-input v-model="user.password"  placeholder="password" type="password"></el-input>
          </el-form-item>

<!--          <el-form-item class="form-item">-->
<!--            <div style="display: flex">-->
<!--              <el-input :model="user.validateCode" placeholder="validateCode" type="text"></el-input>-->
<!--              <div style="flex:1"> 2333</div>-->
<!--            </div>-->
<!--          </el-form-item>-->

          <el-form-item class="form-item">
            <el-button type="primary" style="width: 100%" @click="login">Login</el-button>
          </el-form-item>

          <el-form-item class="form-item register-link">
            <p>Don't have an account ? <a href="#">Register</a></p>
          </el-form-item>

        </el-form>

      </div>

    </div>
  </div>

</template>


<script>

import {login} from "@/util/login";

export default {
  data(){
    return {
      code: '',
      user: {
        username: '',
        password: '',
        // validateCode: ''
      }
    }
  },
  created() {

  },
  methods: {
    login(){

      login(this.user);
    }
  }
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #55ff00, #00bbff) center;
  background-size: cover;
}

.wrapper{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: chartreuse;
}

.login-box{
  display: flex;
  background-color: white;
  height: auto;
  width: 50%;
  border-radius: 5px;
  overflow: hidden;
}

.login-box h2{
  font-size: 36px;
  text-align: center;
}

.form-item{
  margin-bottom: 10px;
}

.register-link p a {
  color: black;
  font-weight: 600;
  text-decoration: none;
}

.register-link p a:hover {
  text-decoration: underline;
}

.login-card{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px
}


</style>