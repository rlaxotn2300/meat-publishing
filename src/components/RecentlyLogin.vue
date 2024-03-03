<template>
    <div class="Recentlybox">
        <p class="text">최근에 로그인했어요</p>
        <div class="triangle"></div>
    </div>
</template>

<style>
.Recentlybox{
    background: #333333;
    margin:0 auto;
    width:126px;
    height:28px;
    border-radius: 50px;
    padding:2px 5px;
    position:relative;
    font-family: Pretendard;
    color:white;
    font-size: 13px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.02em;
    text-align: center;

}
.text{
    line-height: 2px;
}
.triangle{
    width:0px;
    height:0px;
    border-left: 9.5px solid transparent;
    border-right: 9.5px solid transparent;
    border-top: 16.5px solid #333333;
    position:absolute;
    top:25px;
    left: 60px;
}
</style>
