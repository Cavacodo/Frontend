<script setup>
// import commonMenu from "./components/CommonMenu.vue";
// import RecommendView from '../views/RecommendView.vue';
</script>

<template>
  <body>
    <!-- login/register container -->
    <div :class="['container', { active: isActive }]">
      <!-- register -->
      <div class="form-container sign-up-container">
        <div class="form">
          <h2>注册</h2>
          <input type="text" name="username" id="su_username" placeholder="Username..." />
          <input type="email" name="emal" id="su_email" placeholder="Email..." />
          <input type="password" name="password" id="su_password" placeholder="Password..." />
          <button class="signUp" @click="signUp">sign up</button>
        </div>
      </div>
      <!-- login -->
      <div class="form-container sign-in-container">
        <div class="form">
          <h2>登陆</h2>
          <input type="email" name="emal" id="si_email" placeholder="Email..." />
          <input type="password" name="password" id="si_password" placeholder="Password..." />
          <a href="#" @click="signUp" class="forget-password">老登是不是忘了密码？</a>
          <button class="signIn" @click="validation">sign in</button>
        </div>
      </div>
      <!-- overlay container -->
      <div class="overlay_container">
        <div class="overlay">
          <!-- overlay left -->
          <div class="overlay_panel overlay_left_container">
            <h2>欢迎回来!</h2>
            <p>To keep connected with us please login with your personal info</p>
            <button class="signIn" @click="signInC" id="sign-in">sign in</button>
          </div>
          <!-- overlay right -->
          <div class="overlay_panel overlay_right_container">
            <h2>欢迎！</h2>
            <p>Enter your personal details and start journey with us</p>
            <button class="signUp" @click="signUpC" id="sign-up">sign up</button>
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
import axios from 'axios'
export default {
  setup() {
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
    validation() {
      const account = document.getElementById('si_email')
      const acval = account.value
      const passwd = document.getElementById('si_password')
      const passwdval = passwd.value
      const res = {
        account: acval,
        passwd: passwdval
      };
      console.log(res)
      let data = axios.post('/isValid', res).then(response => {
        const isTrue = response.data.isTrue;
        console.log(isTrue)
        if (isTrue == true) {
          window.location.href = 'http://localhost:8080';
        } else {
          alert('我测你们码')
        }
      });

    },
    signUpC() {
      this.isActive = true
    },
    signInC() {
      this.isActive = false
    },
    signUp() {

    },
    signIn() {

      const si_email = document.getElementById("si_email").value;
      const si_password = document.getElementById("si_password").value;
      console.log(si_email);
      if (si_email === "root" && si_password === "root") {
        window.location.href = 'http://localhost:8080';
      }
      else {
        alert("滚！😡");
      }
    }
  }
}
</script>