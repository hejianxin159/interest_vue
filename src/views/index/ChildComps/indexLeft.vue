<template>
    <div class="left-box">
        <div class="left-bar">
            <ul style="overflow: hidden">
                <li><p><a href="">热门动态</a></p></li>
                <li><p><a href="">学校动态</a></p></li>
                <li><p><a href="">关注圈子</a></p></li>
            </ul>
        </div>
        <div class="left-message" v-for="item in message.result" :key="item.id">
            <div class="message-info">
                <div class="message-title">{{ item.title }}</div>
                <div class="message-body">{{ item.body }}</div>
                <div class="message-bottom">
                    <!--<div class="support" @click="isSupport = !isSupport">-->
                    <!--<p class="iconfont icon-zan" v-if="isSupport"> 赞 ({{ computeFabulous(item.fabulous+1) }})</p>-->
                    <!--<p class="iconfont icon-zan1" v-else> 赞 ({{ computeFabulous(item.fabulous) }})</p>-->
                    <!--</div>-->
                    <div class="support" @click="support(item)">
                        <p class="iconfont icon-zan" v-if="item.isSupport"> 赞 ({{ item.fabulous+1 }})</p>
                        <p class="iconfont icon-zan1" v-else> 赞 ({{ item.fabulous }})</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: "indexLeft",
    setup() {
        const support = (item) => {
            if (!item.isSupport) {
                item.isSupport = ref(true);
            } else {

                item.isSupport = !item.isSupport;
            }
        };
      return {
          support
          // computeFabulous,
      }
    },
    props: {
        message: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style scoped lang="scss">

.left-box {
    width: 50%;
    border-top: 1px solid #E2E3E9;
    border-left: 1px solid #E2E3E9;
    border-right: 1px solid #E2E3E9;
    margin: 20px 0 0 10%;
    .left-bar {
        height: 45px;
        border-bottom: 1px solid #E2E3E9;
        li {
            margin: 0 20px 0 20px;
            text-align: center;
            width: 75px;
            line-height: 45px;
            list-style: none;
            float: left;
            a:hover {
                /*text-decoration:none;*/
                color: #2b669a;
            }
        }
    }
}


.left-message {

    .message-info {
        width: 100%;
        height: 180px;
        border-bottom: 1px solid #DAE0F5;
        overflow: hidden;
        .message-title {
            text-align: left;
            height: 50px;
            line-height: 50px;
            font-size: var(--font-size-title);
            font-weight: var(--font-weight-title);
            padding: 0 20px;
        }
        .message-body {
            height: 50px;
            line-height: 28px;
            font-size: var(--font-size-message);
            padding:0 20px;
            text-align: left;


        }
        .message-bottom {
            height: 80px;
            width: 100%;
            line-height: 80px;
            overflow: hidden;
            .support {
                height: 20px;
                margin-top: 30px;
                margin-left: 30px;
                width: 90px;
                line-height: 20px;
                text-align: center;
                p {
                    display: inline-block;
                }
            }
        }
    }
}



</style>
