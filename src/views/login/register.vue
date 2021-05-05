<template>

    <div id="main">
        <div id="avatar"></div>
        <div id="account">
            <div class="input-box"><p>用户名</p><input type="text" placeholder="Please input username" id="nick_name"></div>
            <div class="input-box"><p>密  码</p><input type="password" placeholder="Please input password" id="password"></div>
<!--            <div class="input-box"><p>手  机</p><input type="text" placeholder="Please input phone" id="phone"></div>-->
            <div class="input-box"><p>邮  箱</p><input type="email" placeholder="Please input email" id="email"></div>
            <div class="input-box"><p>学  校</p>
                <select class="select2 js-example-basic-single input-box" name="state" id="select">
                      <option value="AL">Alabama</option>
                      <option value="WY">Wyoming</option>
                        <!--{% for school in schools %}-->
                      <!--<option value="{{ school.name }}">{{ school.name }}</option>-->
                        <!--{% endfor %}-->

                </select>
            </div>

            <button class="login-btn" onclick="put_register()">Register</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "register"
    }
</script>

<style scoped>

/*登陆区主体*/
#main{
    width: 350px;
    height: 700px;
    background: rgba(0,0,0,0.5);
    margin: 40px auto;
    border-top: 8px solid #ffc5d1;
    position: relative;
}

/*头像区*/
#avatar{
    width: 184px;
    height: 184px;
    /*background: url("../login_p.jpeg") no-repeat;*/
    background-size: cover;
    margin: 50px auto;
    border-radius: 50%;

}

/*账号密码区*/
#account{
    width: 75%;
    /*height: 200px;*/
    /*background: #ffd1e4;*/
    margin: 0 auto;
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

#clearfixs {
    clear: both;
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