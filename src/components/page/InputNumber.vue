<template>
    <div>
        <h2>InputNumber 计数器</h2>
        <div class="mb30">
            <h4>基础用法</h4>
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        </div>

        <div class="mb30">
            <h4>禁用状态</h4>
            <el-input-number v-model="num2" disabled="true"></el-input-number>
        </div>

        <div class="mb30">
            <h4>步数</h4>
            <el-input-number v-model="num3" step="2"></el-input-number>
        </div>

        <div class="mb30">
            <h4>尺寸</h4>
            <el-input-number v-model="num4" size="medium"></el-input-number>
            <el-input-number v-model="num5" size="small"></el-input-number>
            <el-input-number v-model="num6" size="mini"></el-input-number>
        </div>

        <div class="mb30">
             <h4>按钮位置</h4>
            <el-input-number v-model="num10" controls-position="right" @change="handleChange2" :min="1" :max="10"></el-input-number>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num1: 1,
            num2: 0,
            num3: 5,
            num4 :1,
            num5 :1,
            num6 :1,
            num7 :1,
            num8 :1,
            num9 :1,
            num10 :1,
            num11 :1,
            num12 :1,
        };
    },
    methods: {
        handleChange(value) {
            console.log(value);
        },
        handleChange2(value){
            console.log(value);
        }
    }
};
</script>

<style scoped>
h2,
h4 {
    margin-bottom: 30px;
}
.mb30 {
    margin-bottom: 30px;
}
</style>

