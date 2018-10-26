<template>
    <section class="download clr">
        <div class="logo">
            <img src="../assets/6.png">
        </div>
        <a class="download-btn app-open">App打开</a>
        <div class="download-btn js-download">下载</div>
    </section>
</template>

<script>
</script>

<style>
.download {
    padding: 9px;
    background-color: #fff;
    display: box;
    display: -webkit-box;
    display: -moz-box;
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    -webkit-box-orient: horizontal;
    box-orient: horizontal;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    justify-content: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    align-content: center;
    -webkit-align-content: center;
    -moz-align-content: center;
    box-align: center;
    -moz-box-align: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-align-items: center;
    -moz-align-items: center;
}
.clr {
    zoom: 1;
}
.download .logo {
    display: block;
    flex: 2;
    -webkit-box-flex: 2;
    float: left;
    width: 50%;
}
.download .logo img {
    width: 95%;
}
.download-btn {
    display: block;
    flex: 1;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    border-radius: 3px;
    border: 1px solid #f25555;
    color: #f25555;
    font-size: 12px;
    text-align: center;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    width: 21%;
}
.foot-btn,.download-btn {
    margin-left: 11px;
    height: 32px;
    line-height: 32px;
    float: left;
}
.download-btn.js-download {
    background-color: #f25555;
    color: #fff;
}
.download-btn {
    display: block;
    flex: 1;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    border-radius: 3px;
    border: 1px solid #f25555;
    color: #f25555;
    font-size: 12px;
    text-align: center;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    width: 21%;
}
.foot-btn,.download-btn {
    margin-left: 11px;
    height: 32px;
    line-height: 32px;
    float: left;
}

</style>
