<script setup lang="ts">
import RecentLogin from '../components/RecentlyLogin.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const showRecentLogin = ref(null);
const router = useRouter();

const toggleRecentLogin = (provider: string) => {
  showRecentLogin.value = showRecentLogin.value === provider ? null : provider;
  router.push({ path: '/LP9', query: { provider } });
};
</script>

<template>
  <div class="login-wrap">
    <main>
      <img src="../images/logo-lightBg.png" alt="logo" class="main-logo" />
      <div class="button-wrap">
        <div class="kakao-button oauthLogin" @click="toggleRecentLogin('kakao')">
          <RecentLogin v-if="showRecentLogin === 'kakao'" />
          <img src="../images/svg/login-kakao.svg" alt="kakao-login" class="kakao-login" />
        </div>
        <div class="naver-button oauthLogin" @click="toggleRecentLogin('naver')">
          <RecentLogin v-if="showRecentLogin === 'naver'" />
          <img src="../images/svg/login-naver.svg" alt="naver-login" class="naver-login" />
        </div>
      </div>
    </main>
  </div>
</template>



<style>
  .login-wrap {
    background: white;
    margin:0 auto;
    width:100%;
    height:98vh;
  }
  main{
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:70px;
  }
  .main-logo{
    width:auto;
    height:auto;
    padding-top:40px;
  }
  .button-wrap{
    width:88.9%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:10px;
  }
  .oauthLogin{
  }
</style>
