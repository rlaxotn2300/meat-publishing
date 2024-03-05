<script setup lang="ts">
</script>

<template>
  <div class='item-list-write'>
    <div class="header">
      <img src="../../images/svg/arrow-narrow-left.svg" alt="back">
      <div class="img-nav">
        <img src="../../images/svg/share.svg" alt="back">
        <img src="../../images/svg/search.svg" alt="back">
        <img src="../../images/svg/bell.svg" alt="back">
      </div>
    </div>
    <div class="info-wrap">
      <div class="title-box">
        <div>
          <p>(주)미트박스글로벌</p>
          <img src="../../images/check-mark.png" alt="global-logo" >
        </div>
        <div>
          <img src="../../images/svg/star.svg" alt="global-logo" >
          <p>5.0</p>
        </div>
      </div>
      <div class="tag-box">
        <div>#전품목</div>
        <div>#저렴하게</div>
        <div>#갖고있습니다.</div>
      </div>
      <div class="pop-box">
        <div class="viewers-box">
          <div class="viewers">
            <img src="../../images/svg/eye.svg" alt="views" >
            <p class="how">99,999</p>
          </div>
          <div class="viewers">
            <img src="../../images/svg/message.svg" alt="views" >
            <p class="how">99,999</p>
          </div>
        </div>
        <div class="time">1분전</div>
      </div>
    </div>
    <div class="pd22-content"></div>
    <button class="edit-button">
      수정하기
    </button>
  </div>
</template>



<style>
.item-list-write{
  font-family: Pretendard;
  margin:0 auto;
  width:360px;
  height:95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position:relative;
  .header{
    width:100%;
    height:56px;
    margin-top:44px;
    box-shadow: 0 5px 14px -5px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > img{
      margin-left: 16px;
    }
    .img-nav{
      display: flex;
      align-items: center;
      margin-right: 16px;
      gap: 16px;
    }
  }
  .info-wrap{
    display:flex;
    flex-direction: column;
    .title-box{
      width:320px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap:8px;
      & > div{
        display: flex;
        align-items: center;
      }
    }
    .tag-box{
      display: flex;
      gap:6px;
      color: var(--Neutral-Neutral-300, #888);
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: -0.28px;
      & > div{
        padding: 4px 10px;
        border-radius: 50px;
        background: var(--Neutral-Neutral-50, #F5F5F5);
      }
    }
    .pop-box{
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--Neutral-Neutral-300, #888);
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: -0.28px;
      .viewers-box{
        display: flex;
        align-items: center;
        gap:12px;
        .viewers{
          display:flex;
          align-items: center;
          gap:4px;
        }
      }
    }
  }
  .pd22-content{
    width:320px;
    height:547px;
    border-radius: 8px;
    background: var(--Neutral-Neutral-50, #F5F5F5);
  }
  .edit-button{
    position: fixed;
    bottom:97px;
    display: flex;
    width: 320px;
    height: 48px;
    padding: 13px 0px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 50px;
    border:none;
    background: var(--Primary-MEAT-500, #DD2C2F);

    color: var(--BW-WHITE, #FFF);
    text-align: center;

    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -0.32px;
  }
}
</style>