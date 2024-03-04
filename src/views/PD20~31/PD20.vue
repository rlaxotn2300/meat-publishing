<script setup lang="ts">
import { ref, computed } from 'vue';
import TipText from '../../components/TipText.vue';
import TagTip from '../../components/TagTip.vue';
import CancelModal from '@/components/modal/CancelModal.vue'

//버튼 활성화
const textAreaValue = ref('');
const inputValue = ref('');
const isInputNotEmpty = computed(() => {
  return textAreaValue.value.trim() !== '' && inputValue.value.trim() !== '';
});

//말풍선 끄고켜기
const showRegistrationTip = ref(true)
const showTagTip = ref(true);
const hideTagTip = () => {
  showTagTip.value = false;
}
const hideRegistrationTip = () => {
  showRegistrationTip.value = false;
}

const stateRegistrationModal = ref(false);
const handleOpenModal = () => {
  stateRegistrationModal.value = true;
}
const handleCloseModal = () => {
  stateRegistrationModal.value = false;
}

const butttonEvent = () => {
  if(textAreaValue.value.trim() !== '' && inputValue.value.trim() !== ''){
    return handleOpenModal()
  }
}

const modalValue = "글을 올리시겠습니까?"
</script>

<template>
  <div class='item-list-write'>
    <div class="header">
      <img src="../../images/svg/arrow-narrow-left.svg" alt="back">
      <p>품목표 글쓰기</p>
    </div>
    <div class="section-wrap">
      <div class="logo-box">
        <img src="../../images/icon-global.png" alt="global-logo" >
        <p>(주)미트박스글로벌</p>
      </div>
      <CancelModal v-if="stateRegistrationModal" :modalFn="handleCloseModal" :modalValue="'글을 올리시겠습니까?'"/>
      <div class="registration-box">
        <div class="content">
          <div class="input-text-box">
            <p class="registration-title">
              품목표 등록
            </p>
            <img src="../../images/svg/help-circle.svg" alt="explanation" @click="showRegistrationTip = true"/>
            <TipText v-if="showRegistrationTip" @click="hideRegistrationTip"/>
          </div>
          <p class="essential">* 필수 입력</p>
        </div>
        <textarea v-model="textAreaValue" placeholder="품목표를 최초 1회만 등록하시면,이후 불러오기를 통해 간편하게 수정할 수 있어요!" />
      </div>
      <div class="tag-box">
        <div class="content">
          <div class="input-text-box">
            <p class="registration-title">
              태그 입력
            </p>
            <p class="tag-length">0/6</p>
            <img src="../../images/svg/help-circle.svg" alt="explanation" @click="showTagTip = true" />
            <TagTip v-if="showTagTip" @click="hideTagTip"/>
          </div>
          <p class="essential">* 필수 입력</p>
        </div>
        <input v-model="inputValue" placeholder="핵심 키워드를 입력해주세요!" type="text" class="input-keyword"/>
      </div>
    </div>
    <button class="registration-button" :class="{ active: isInputNotEmpty }" @click="butttonEvent">
      작성완료
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
    justify-content: flex-start;
    img{
      margin:0 97px 0 10px
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
    margin-top:10px
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
    .input-keyword{
      max-width:310px;
      min-width:310px;
      height:46px;
      border:1px solid #e8e8e8;
      border-radius: 8px;
      padding:0 5px;
      text-align: left;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .content{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .input-text-box{
    display: flex;
    margin-left: 5px;
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
  .registration-button{
    display: block;
    width:320px;
    height: 48px;
    line-height: 48px;
    border: none;
    border-radius: 50px;

    color:#cacaca;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.02em;
    text-align: center;
    margin-top:180px;
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
