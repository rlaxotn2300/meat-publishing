<script setup lang="ts">
import CancelModal from "./modal/PD20.vue";
import { ref } from 'vue';

const isMenuVisible = ref(false);
const activeTab = ref('');


const handleCloseModal = () => {
  activeTab.value = ''
}

function toggleMenu() {
  isMenuVisible.value = !isMenuVisible.value;
  return { isMenuVisible, activeTab, toggleMenu };
}
</script>

<template>
    <div>
      <button @click="toggleMenu" class="toggleTap">
        <img src="../images/svg/x-close.svg" alt="toggleTap" />
      </button>
  
      <div v-if="isMenuVisible" class="menu">
        <div class="tab" :class="{ active: activeTab === 'tab1', 'red-font': activeTab === 'tab1' }" @click="activeTab = 'tab1'">
          <img v-if="activeTab === 'tab1'" src="../images/svg/file-check-red.svg" alt="product-tap"/>
          <img v-if="activeTab !== 'tab1'" src="../images/svg/file-check.svg" alt="product-tap"/>품목표 글쓰기
        </div>
        <div class="tab" :class="{ active: activeTab === 'tab2','red-font': activeTab === 'tab2' }" @click="activeTab = 'tab2'">
          <img v-if="activeTab === 'tab2'" src="../images/svg/coins-hand-red.svg" alt="sell-tap"/>
          <img v-if="activeTab !== 'tab2'" src="../images/svg/coins-hand.svg" alt="sell-tap"/>팝니다 글쓰기
        </div>
        <div class="tab" :class="{ active: activeTab === 'tab3', 'red-font': activeTab === 'tab3' }" @click="activeTab = 'tab3'">
          <img v-if="activeTab === 'tab3'" src="../images/svg/shopping-cart-red.svg" alt="buy-tap"/>
          <img v-if="activeTab !== 'tab3'" src="../images/svg/shopping-cart.svg" alt="buy-tap"/>삽니다 글쓰기
        </div>
        
      </div>
    </div>
    <CancelModal v-if="activeTab === 'tab2'" :modalValue="`비회원은 글 쓰기를 이용할 수 없습니다.`" :resolveValue="'회원가입을 하러가시겠습니까?'" :modalFn="handleCloseModal" />
    <CancelModal v-if="activeTab === 'tab3'" :modalValue="'비즈인증이 되어있지 않아 품목표 등록을 할 수 없습니다.'" :resolveValue="'비즈인증을 하러가시겠습니까?'" :modalFn="handleCloseModal" />
  </template>
  
  <style>
  .toggleTap{
    width:54px;
    height:54px;
    border:none;
    border-radius: 50%;
    background:#ffffff;
    box-shadow: 0 5px 12px 5px rgba(0, 0, 0, 0.1);
    position:fixed;
    bottom:126px;
    right:20px;
    z-index:1;
  }
  .menu {
    width:156px;
    height:144px;
    box-shadow: 0 5px 12px 5px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    position: fixed;
    overflow: hidden  ;
    bottom: 192px; /* 좌측 하단으로 위치 조정할 수 있습니다. */
    right: 20px; /* 좌측 하단으로 위치 조정할 수 있습니다. */
    .red-font{
      color: var(--Primary-MEAT-500, #DD2C2F);
    }
  }
  
  .tab {
    cursor: pointer;
    width:132px;
    height: 20px;
    padding:14px 12px;
    background: white;
    display:flex;
    align-items: center;
    gap:8px;
    color: var(--Neutral-Neutral-400, #575757);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: -0.28px;
  }
  
  .tab.active {
    background-color: #f0f0f0;
  }
  </style>
