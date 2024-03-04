<script setup lang="ts">
</script>

<template>
  <div class='success-wrap'>
    <p class="title-message">
      000님의 임시 닉네임이<br />
      생성되었습니다.
    </p>
    <p class="setting-message">
      *닉네임은 내정보 > 프로필관리에서<br />
      재설정 가능합니다.
    </p>
    <div class="img-box"></div>
    <button class="start-button">
      미트매치 보러가기
    </button>
  </div>
</template>



<style>
.success-wrap{
  margin:0 auto;
  width:320px;
  height:95vh;
  text-align: left;
  position:relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border:1px solid red;
  font-family: Pretendard;
  letter-spacing: -0.02em;
}
.title-message{
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  margin-top:40px;
}
.setting-message{
  color:#575757;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;

}
.img-box{
  width:320px;
  height:250px;
  background:#d9d9d9;
}
.start-button{
  color:white;
  width:320px;
  height: 48px;
  line-height: 48px;
  background: #333333;
  border:none;
  border-radius: 50px;

  font-size: 16px;
  font-weight: 700;
  text-align: center;

}
</style>