<script setup lang="ts">
</script>

<template>
    <div class='view-wrap'>
        <div class="modal-wrap">
           <div class="text-box">
                <p class="modal-title">놓치지 마세요!</p>
                <p class="modal-text-value">000님 성공적인 거래를 위한<br />이벤트 소식을 선별해서 알려드릴게요.</p>
                <p class="notification-setting">*마케팅 정보 푸시 수신 동의 철회는<br /> 내 정보 > 설정 > 알림설정에서 변경 가능합니다.</p>
            </div>
            <div class="button-box">
                <button class="close-button">
                    괜찮아요
                </button>
                <button class="agree-button">
                    네, 알려주세요
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
        width: 120px;
        height: 40px;
        padding: 9px 0 9px 0;
        border:1px solid #cacaca;
        border-radius: 48px;
        background: #ffffff;

        color: #888888;
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
        padding: 9px, 19px, 9px, 19px;
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
