<script setup lang="ts">
</script>

<template>
    <div class='authentication-wrap'>
        <p class="title">
            휴대폰<br />
            본인 인증을해주세요.
        </p>
        <div class="authentication-icon">
            <img src="../../images/icon-authentication.png" alt="authentication-icon"/>
        </div>  
        <button class="to-authentication">
            본인 인증하러가기
        </button>
    </div>
</template>



<style>
    .authentication-wrap{
        margin:0 auto;
        width:360px;
        height:95vh;
        text-align: left;
        position:relative;
    }
    .title{
        font-family: Pretendard;
        font-size: 24px;
        font-weight: 700;
        line-height: 29px;
        letter-spacing: -0.02em;
        margin-left:20px;
    }
    .authentication-icon{
        margin-top: 100px;
        & > img{
            display: block;
            margin: 0 auto;
        }
    }
    .to-authentication{
        margin-left:20px;
        position:absolute;
        width:320px;
        height:48px;
        border: none;
        border-radius: 50px;
        background: #333333;
        bottom:10px;

        color:white;
        text-align: center;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: -0.02em;
    }
</style>import { VueElement } from "vue";
import { rewriteDefault } from 'vue/compiler-sfc';

