<template>
    <div>
        <nav-bar>
            <template v-slot:logo></template>
            <template v-slot:other></template>
            <template v-slot:default>
                <div id="box">
                    <input type="search" name="search" placeholder="请输入关键字">
                    <div id="search">搜索</div>
                </div>
            </template>
            <template v-slot:user>
                <nav-bar-login></nav-bar-login>
            </template>
        </nav-bar>
    </div>

</template>

<script>
import NavBar from "@/components/common/headerbar/NavBar";
import NavBarLogin from "@/components/common/headerbar/NavBarLogin";

export default {
    name: "HeaderBar",
    components: {
        NavBar,
        NavBarLogin,
    }
}
</script>

<style scoped>
#box {
    width: 100%;
    font-family: 'Microsoft YaHei';
    font-size: 14px;
    float: left;
}

input {
    width: 80%;
    border: 1px solid #e2e2e2;
    height: 30px;
    float: left;
    background-repeat: no-repeat;
    background-size: 25px;
    background-position:5px center;
    margin-top: 10px;
    padding:0 0 0 30px;
}

#search{
    width: 20%;
    height: 32px;
    float: right;
    background: #2e2513;
    color: white;
    text-align: center;
    line-height: 32px;
    margin-top: 10px;
    cursor: pointer;
 }
</style>
