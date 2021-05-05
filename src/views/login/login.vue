<template>
<Base>
    <template v-slot: default>
        <div id="account">
            <div class="input-box"><p>邮  箱</p><input type="text" placeholder="Please input email" id="email" v-model="email"></div>
            <div class="input-box"><p>密  码</p><input type="password" placeholder="Please input password" id="password" v-model="password"></div>

            <button class="login-btn" @click="putLogin">Sign In</button>
            <div id="footer">
                <a href="#">Forget Password?</a>
            </div>
        </div>
    </template>
</Base>
</template>

<script>
import { login } from "../../network/userOp";
import { useRouter } from 'vue-router'
import Base from './Base'
import { ref, getCurrentInstance } from 'vue'

export default {
    name: "login",
    setup() {
        const router = useRouter();
        const img = require('@/assets/login_p.jpeg');
        const email = ref(null);  // eslint-disable-line no-unused-vars
        const password = ref(null);  // eslint-disable-line no-unused-vars
        const { ctx } = getCurrentInstance();// eslint-disable-line no-unused-vars

        const putLogin = () => {
            login(email.value, password.value).then(response => {
                console.log(response.isFlush);
                if (response.isFlush) {
                    router.push(ctx.$router.currentRoute.value.fullPath);
                }else {
                    router.push('/');
                }
            }).catch(error => {
                console.log(error);
                console.log('123123123123')
            })
        };
        return {
            img,
            email,
            password,
            putLogin
        }
    },
    components: {
        Base
    }
}
</script>

<style scoped>

/*头像区*/
#avatar{
    width: 184px;
    height: 184px;
    background-size: cover;
    margin: 50px auto;
    border-radius: 50%;

}

#account .input-box{

    height: 50px;
    /*background: #ffbcdd;*/
}
#account .input-box input{
    height: 40px;
    width: calc(80% - 10px);
    border: none;
    outline: none;
    padding: 0 5px;
    background: rgba(0,0,0,0.5);
    color: #ffcae5;
    font-size: 16px;
    float: right;
}

#account .input-box p{
    float: left;
    height: 40px;
    text-align: center;
    line-height: 40px;

}
#account .input-box select{
    display: block;
    width: calc(80%);
    float: right;

}


/*登录按钮*/
.login-btn{
    width: 75%;
    height: 40px;
    display: block;
    margin: 30px auto;
    background:#ffc5d1 ;
    border: none;
    outline: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}
/*按下按钮*/
.login-btn:active{
    position: relative;
    top:2px;
}

/*登陆区底部*/
#footer{
    height: 50px;
    text-align: center;
    line-height: 50px;
    /*position: absolute;*/
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ccc;
}
#footer a{
    color: #ccc;
    text-decoration: none;
}

#footer a:hover{
    color: red;
}


</style>