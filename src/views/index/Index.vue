<template>
    <HeaderBar></HeaderBar>

    <div>
        <index-left :message="indexData"></index-left>
    </div>
</template>

<script>
import { reactive, onMounted } from 'vue'
import { indexResponse } from "@/network/index";
import HeaderBar from "@/components/common/headerbar/HeaderBar";
import indexLeft from '@/views/index/ChildComps/indexLeft'

export default {
    name: "Index",
    setup() {
        const indexData = reactive({});
        onMounted(() => {
            indexResponse().then(response => {
                indexData.result = response.results;
            }).catch(error => {
                console.log(error);
            })
        });
        return {
            indexData
        }

    },
    components: {
        HeaderBar,
        indexLeft,
    }
}
</script>

<style scoped>

</style>
