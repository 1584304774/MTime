<template>
    <div class="ads"  v-if="flag">
        <div class="adscon">
            <div class="disappear">
                <span @click="ChangeEvent()">✖</span>
            </div>
            <a href="https://applink.mtime.cn/?applinkData=%7B%22handleType%22%3A%22jumpPage%22%2C%22pageType%22%3A%22home%22%7D&amp;timeout=0&amp;t=1554089568403" class=" table_vh_c" id="downloadUrl" pan="M14_TOP_DOWNLOAD">
                <div class="linkTo">
                    <div class="linkTo_pic">
                        <img src="../../assets/index/share07.png">
                    </div>
                    <div class="linkTo_des">
                        <span>您已收到150元新人红包</span>
                        <span>下载时光网App查看（仅限新用户）</span>
                    </div>
                    <div class="linkTo_open">
                        <span>打开APP</span>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            flag:true
        }
    },
    methods: {
        ChangeEvent(){
            this.flag = false;
        }
    },
}
</script>
<style lang="scss" scoped>
$color: #1e2837;
.ads .adscon{
    width: 100%;
    height: 1.2rem;
    background: $color;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .disappear span{
        display: block;
        width: 0.6rem;
        height: 1.2rem;
        font-size: 0.5rem;
        color: #999;
        line-height: 1.2rem;
        text-align: center;
        font-weight: 100;
    }
    a .linkTo{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .linkTo_pic{
            width: 0.94rem;
            height: 0.94rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .linkTo_des{
            margin-left: 0.2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            span:nth-child(1){
                font-size: 0.34rem;
                color: #008ce3;
            }
            span:nth-child(2){
                font-size: 0.26rem;
                color: #a9dcff;
            }
        }
        .linkTo_open{
            span{
                margin-right: 0.1rem;
                display: block;
                width: 1.56rem;
                height: 0.6rem;
                font-size: 0.3rem;
                color:#fff;
                background: #0087dc;
                border:1px solid #0075c4;
                border-radius: 25px;
                line-height: 0.6rem;
                text-align: center;
                font-weight: 900;
            }
        }
    }
}

</style>