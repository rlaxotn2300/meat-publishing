<template>
  <div class="tag-Recentlybox">
    <ul>
      <li>태그를 등록 하면 검색 노출에 용이합니다.</li>
      <li>강조하고 싶은 품목 or 거래가능 지역 등<br /> 거래 시 필요한 나만의 특징을 단어로 적어주세요.</li>
    </ul>
    <div class="tag-triangle"></div>
  </div>
</template>

<style>
.tag-Recentlybox{
  background: #090A0A;
  margin:0 auto;
  width:241px;
  border-radius: 4px;
  padding:8px 12px;
  position:absolute;
  top:45px;
  left:0px;
  z-index: 1;

  color:#ffffff;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: -0.02em;
  text-align: left;

  ul{
    padding:0;
    margin:5px 0 0 10px;
  }
  li{

  }
}
.tag-triangle{
  width:0px;
  height:0px;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 16.5px solid #090A0A;
  transform: scale(0.8);
  position:absolute;
  top:-10px;
  left: 80px;
}
</style>
<script setup>
</script>