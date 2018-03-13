<template>
    <div class="home">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import vHead from "./Head";
import vSidebar from "./Sidebar";
export default {
    components: {
        vHead,
        vSidebar
    }
};
</script>
<style scoped>
    .content{
        width:auto;
        padding: 20px;
        overflow-y: auto;
        position: absolute;
        top:70px;
        left: 205px;
        box-sizing: border-box;
    }
</style>

