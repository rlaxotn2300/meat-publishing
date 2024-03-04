<template>
  <div class="Recentlybox">
    <ul>
      <li>품목표 업체당 1개의 글만 등록할 수 있습니다.</li>
      <li>최초 등록이라면, PC버전으로 등록해주시기 바랍니다.</li>
      <li>이미지보다 엑셀의 표를 복사해서 붙여 넣으시면 검색 노출이 더 잘 됩니다.</li>
      <li>이전 글을 기록되기 때문에 수정이 편리합니다.</li>
    </ul>
    <div class="triangle"></div>
  </div>
</template>

<style>
.Recentlybox{
  background: #090A0A;
  margin:0 auto;
  width:287px;
  border-radius: 4px;
  padding:8px 12px;
  position:absolute;
  top:45px;
  left:0px;

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
.triangle{
  width:0px;
  height:0px;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 16.5px solid #090A0A;
  transform: scale(0.8);
  position:absolute;
  top:-10px;
  left: 65px;
}
</style>
<script setup>
</script>