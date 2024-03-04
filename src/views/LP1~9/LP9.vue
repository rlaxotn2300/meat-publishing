<script setup lang="ts">
import { defineProps } from 'vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  provider: String
});
const router = useRouter();
const logintype = router.currentRoute._value.query.provider
</script>

<template>
    <div class='already-wrap'>
        <div class="text-box">
            <p class="title">
                이미 가입한 계정이 있어요.
            </p>
            <p class="text-value">
                이전에 가입한 계정을 확인해주세요.
            </p>
         </div>
         <div class="login-information">
            <div>{{props.provider}}</div>
            <p class="email">Abcsd***@ka***.com</p>
            <img v-if="logintype === 'kakao'" src="../../images/svg/login-kakao.svg" alt="login-to-kakao"/>
            <img v-if="logintype === 'naver'" src="../../images/svg/login-naver.svg" alt="login-to-naver"/>
        </div>  
    </div>
</template>



<style>
.already-wrap{
    margin:0 auto;
    width:320px;
    height:95vh;
    text-align: left;
    position:relative;
    font-family: Pretendard;
}
.text-box{
    text-align: left;

    .title{
        font-size: 24px;
        font-weight: 700;
        line-height: 29px;
        letter-spacing: -0.02em;
    }
    .text-value{
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: -0.02em;
    }
}
.login-information{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:60px;

    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.02em;
    gap:20px;
}
</style>

