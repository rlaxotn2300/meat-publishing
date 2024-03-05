<script setup lang="ts">
import { ref } from 'vue'
import TagTip from '../../components/TagTip.vue';
import CancelModal from '@/components/modal/PD20.vue';
const showTagTip = ref(true);

const hideTagTip = () => {
  showTagTip.value = false;
}
const stateModal = ref('');
const handleCloseModal = () => {
  stateModal.value = '';
}
</script>

<template>
  <div class='item-list-write'>
    <CancelModal v-if="stateModal === 'back'" :modalValue="'작성중인 글은 삭제됩니다.'" :modalFn="handleCloseModal" />
    <CancelModal v-if="stateModal === 'registration'" :modalValue="'글을 올리시겠습니까?.'" :modalFn="handleCloseModal" />
    <div class="header">
      <img src="../../images/svg/arrow-narrow-left.svg" alt="back" @click="stateModal = 'back'">
      <p>판매상품 글쓰기</p>
    </div>
    <div class="section-wrap">
      <div class="logo-box">
        <img src="../../images/icon-global.png" alt="global-logo" >
        <p>(주)미트박스글로벌</p>
      </div>
      <div class="imgList-wrap">
        <div class="addImg-button">
          <img src="../../images/svg/NoneImg.svg" alt="addImg" />
          <p>1/10</p>
        </div>
        <div class="img-card">
          <div>대표사진</div>
          <img src="../../images/svg/x-close2.svg" alt="delete" class="delete-img" />
        </div>
      </div>
      <div class="registration-box">
        <div class="content">
          <div class="input-text-box">
            <p class="registration-title">
              글 제목
            </p>
          </div>
          <p class="essential">* 필수 입력</p>
        </div>
        <input placeholder="제목을 입력해주세요!"  class="input-keyword" />
      </div>
      <div class="registration-box">
        <div class="content">
          <div class="input-text-box">
            <p class="registration-title">
              판매할 상품에 대해 양식에 맞게 작성해주세요.
            </p>
          </div>
          <p class="essential">* 필수 입력</p>
        </div>
        <div class="PD24-form">
          <div>품 목:<input /></div>
          <div>브랜드:<input /></div>
          <div>등급 및 스펙:<input /></div>
          <div>수량:<input /></div>
          <div>원산지:<input /></div>
          <div>창고:<input /></div>
          <div>연락처:<input /></div>
          <div>메시지 가능 여부:<input /></div>
          <div>상세설명:<input /></div>
        </div>
      </div>
      <div class="tag-box">
        <div class="content">
          <div class="input-text-box">
            <p class="registration-title">
              태그 입력
            </p>
            <p class="tag-length">1/1</p>
            <img src="../../images/svg/help-circle.svg" alt="explanation" @click="showTagTip = true" />
            <TagTip v-if="showTagTip" @click="hideTagTip"/>
          </div>
          <p class="essential">* 필수 입력</p>
        </div>
        <div class="tag-list">
          <div>
            #갈메기살
            <img src="../../images/svg/x-close2.svg" alt="delete" class="delete-img" />
          </div>
          <input placeholder="핵심 키워드를 입력해주세요!" type="text" class="input-tag" />
        </div>
      </div>
    </div>
<!--    style 에 registration-button.active 버튼활성화 css 있습니다.-->
    <button class="registration-button" @click="stateModal= 'registration'">
      작성완료
    </button>
  </div>
</template>



<style>
.item-list-write{
  font-family: Pretendard;
  margin:0 auto;
  width:360px;
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
    justify-content: flex-start;
    img{
      margin:0 87px 0 16px
    }
    p{
      color: #575757;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: -0.28px;
    }
  }
  .section-wrap{
    width:320px;
    display: flex;
    flex-direction: column;
    gap:10px;
  }
  .logo-box{
    display: flex;
    align-items: center;
    margin-top:10px;
    img{
      margin-right:8px;
    }
  }
  .imgList-wrap{
    width:100%;
    display: flex;
    align-items: center;
    gap:10px;
    .addImg-button{
      width:70px;
      height:70px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap:6px;
      border-radius: 4px;
      border: 1px solid #E8E8E8;

      p{
        margin:0;
        color: var(--Neutral-Neutral-300, #888);
        font-size: 11px;
        line-height: 140%;
        letter-spacing: -0.22px;
      }
    }
    .img-card{
      width:70px;
      height:70px;
      border-radius: 4px;
      background: #D9D9D9;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      position:relative;
      div{
        width:70px;
        height:21px;
        background: var(--Neutral-Neutral-300, #888);
        text-align: center;
        border-radius:0 0 4px 4px;

        color: #ffffff;
        font-size: 11px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: -0.22px;
      }
      .delete-img{
        width:18px;
        height:18px;
        display: block;
        background: #dd2c2f;
        border-radius: 50%;
        position:absolute;
        top:-4px;
        right:-4px;
      }
    }
  }
  .registration-title{
    color:#333333;
    font-size: 14px;
    font-weight: 700;
  }
  .tag-length{
    color:#888888;
    font-size: 14px;
    font-weight: 400;
  }
  .input-keyword{
    display: flex;
    width: 296px;
    padding: 12px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 8px;
    border: 1px solid #E8E8E8;
  }
  textarea{
    max-width:310px;
    min-width:310px;
    border:1px solid #e8e8e8;
    border-radius: 8px;
    min-height: 92px;
    padding:12px 5px;
    text-align: left;
    font-size: 14px;
    font-weight: 400;
  }
  .tag-box{

    .tag-list{
      width:296px;
      padding:12px;
      border-radius: 8px;
      border: 1px solid #E8E8E8;
      display: flex;
      align-items: center;
      div{
        position:relative;
        border-radius: 50px;
        background:#F5F5F5;
        text-align: center;
        padding: 4px 10px;

        color: var(--Neutral-Neutral-300, #888);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        letter-spacing: -0.28px;
        img{
          display: block;
          position:absolute;
          width:12.5px;
          height:12.5px;
          background: #dd2c2f;
          border-radius: 50%;
          top:-3px;
          right:-3px;
        }
      }
      input{
        display: none;
      }
    }
  }
  .content{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .input-text-box{
    display: flex;
    gap:5px;
    position: relative;
  }
  .essential{
    color:#E45659;
    font-size: 11px;
    font-weight: 500;
    line-height: 15px;
    margin-right: 5px;
  }
  .registration-box{
  }
  .PD24-form{
    width:296px;
    padding: 12px;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 8px;
    border: 1px solid var(--Neutral-Neutral-150, #E8E8E8);
    background: var(--BW-WHITE, #FFF);

    color: var(--Neutral-Neutral-300, #888);
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.32px;
    div{
      display: flex;
    }
    input{
      border: none;
      color: var(--Neutral-Neutral-300, #888);
      font-size: 16px;
      line-height: 140%;
      letter-spacing: -0.32px;
    }
  }
  .registration-button{
    display: block;
    width:320px;
    height: 48px;
    line-height: 48px;
    border: none;
    border-radius: 50px;

    color:white;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.02em;
    text-align: center;
    margin-top:120px;
  }
  .registration-button.active{
    display: block;
    width:320px;
    height: 48px;
    line-height: 48px;
    border: none;
    border-radius: 50px;
    background: #dd2c2f;

    color:white;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.02em;
    text-align: center;
    margin-top:180px;
  }
}
</style>

