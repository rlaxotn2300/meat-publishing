<script setup lang="ts">
</script>

<template>
  <div class='view-wrap'>
    <div class="modal-wrap">
      <div class="text-box">
        <p class="modal-title">글 내용을 입력해주세요.</p>
      </div>
      <div class="button-box">
        <button class="close-button">
          확인
        </button>
      </div>
    </div>
  </div>
</template>



<style>
.view-wrap{
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left: 0;
  background: rgba(0, 0, 0, 0.5)
}
.modal-wrap{
  width:320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  padding:20px 0;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
}
.text-box{
  width:280px;
  margin-bottom: 20px;

  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: -0.02em;
  text-align: center;

}
.modal-title{
  color:#000000;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: center;

}
.modal-text-value{
  color:#575757;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-align: center;
}
.notification-setting{
  color:#888888;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: center;
}
.button-box{
  display: flex;
  gap:20px;
}
.close-button{
  width: 280px;
  height: 40px;
  padding: 9px 0 9px 0;
  border-radius: 48px;
  background: #dd2c2f;

  color: #ffffff;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
}
.agree-button{
  background:#dd2c2f;
  width: 120px;
  height: 40px;
  padding: 9px 19px 9px 19px;
  border:none;
  border-radius: 48px;

  color:white;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
}
</style>
