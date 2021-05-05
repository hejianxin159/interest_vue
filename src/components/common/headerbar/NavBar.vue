<template>
    <div class="nav-bar">
        <div class="logo" @click="goIndex"><slot name="logo">兴趣圈子</slot></div>
        <div class="other"><slot name="other"></slot></div>
        <div class="search"><slot></slot></div>
        <div class="user">
            <slot name="user"></slot>
        </div>
    </div>

</template>

<script>
import { useRouter } from 'vue-router'
export default {
    name: "NavBar",
    setup() {
        const router = useRouter();
        const goIndex = () => {
            router.push({path: '/'})
        }
        return {
            goIndex
        }
    }
}
</script>

<style scoped lang="scss">
.nav-bar {
    display: flex;
    width: 84%;
    height: 50px;
    margin: 0 8%;
}
.logo {
    height: 50px;
    line-height: 50px;
    text-align: center;
    flex: 0.1;
    background: #42b983;
}
.other {
    flex: 0.4;
    //background: yellow;
}
.search {
    flex: 0.3;
}

.user {
    flex: 0.2;
    /*background: blue;*/
}
</style>
