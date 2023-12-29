<script setup>
// import commonMenu from "./components/CommonMenu.vue";
import RecommendView from '../views/RecommendView.vue';
</script>

<template>
  <body>
    <!-- login/register container -->
    <div :class="['container', { active: isActive }]">
      <!-- register -->
      <div class="form-container sign-up-container">
        <div class="form">
          <h2>sign up</h2>
          <input type="text" name="username" id="su_username" placeholder="Username..." />
          <input type="email" name="emal" id="su_email" placeholder="Email..." />
          <input type="password" name="password" id="su_password" placeholder="Password..." />
          <button class="signUp" @click="signUp">sign up</button>
        </div>
      </div>
      <!-- login -->
      <div class="form-container sign-in-container">
        <div class="form">
          <h2>sign in</h2>
          <input type="email" name="emal" id="si_email" placeholder="Email..." />
          <input type="password" name="password" id="si_password" placeholder="Password..." />
          <a href="#" @click="signUp" class="forget-password">forget your password</a>
          <button class="signIn" @click="signIn">sign in</button>
        </div>
      </div>
      <!-- overlay container -->
      <div class="overlay_container">
        <div class="overlay">
          <!-- overlay left -->
          <div class="overlay_panel overlay_left_container">
            <h2>welcome back!</h2>
            <p>To keep connected with us please login with your personal info</p>
            <button class="signIn" @click="signIn" id="sign-in">sign in</button>
          </div>
          <!-- overlay right -->
          <div class="overlay_panel overlay_right_container">
            <h2>hello friend!</h2>
            <p>Enter your personal details and start journey with us</p>
            <button class="signUp" @click="signUp" id="sign-up">sign up</button>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<style scoped>
@import '../assets/css/login.css';
</style>
<script>
export default {
  setup(){
    // const checkCredentials = () =>{
      
    // };
    // return {
    //   checkCredentials,
    // };
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    signUp() {
      this.isActive = true
    },
    signIn() {
      const si_email = document.getElementById("si_email").value;
      const si_password = document.getElementById("si_password").value;
      if(si_email==="root" && si_password==="root"){
        this.$router.push(RecommendView);
      }
      else{
        alert("你真是个傻逼");
      }
      this.isActive = false
    }
  }
}
</script>