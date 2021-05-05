<template>
    <div class="login-box">
        <div v-if="isLogin">
            <div class="user">

            </div>
            <div class="logout">

            </div>
        </div>
        <div v-else>
            <div class="login">
                <router-link to="/login">登录</router-link>
                <!--<router-view></router-view>-->
            </div>
            <div class="register">
                <router-link to="/register">注册</router-link>

            </div>
        </div>
    </div>
</template>

<script>
    import {onMounted, ref} from 'vue'

    export default {
        name: "Login",
        setup() {
            let isLogin = ref(false); // eslint-disable-line no-unused-vars
            onMounted(() => {
                const session = JSON.parse(sessionStorage.getItem("userInfo"));
                if (session != null) {
                    isLogin = true;
                }
            });
            return {
                isLogin
            }


        }
    }
</script>

<style scoped>
.login-box{
    height: 50px;
}
.login {
    border: 1px solid black;
    height: 50px;
    text-align: center;
    line-height: 50px;
    float: left;
    width: 50%;
}
.register {
    border: 1px solid black;
    height: 50px;
    line-height: 50px;
    float: right;
    width: 50%;
    text-align: center;
}
</style>