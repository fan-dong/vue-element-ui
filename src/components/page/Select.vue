<template>
    <div>
        <h2>Select 选择器</h2>
        <div class="mb30">
            <h4>基础用法</h4>
            <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>

        <div class="mb30">
            <h4>可清空的单选</h4>
            <el-select v-model="value2" clearable placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>

        <div class="mb30">
            <h4>有禁用选项</h4>
            <el-select v-model="value3" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.value" :value="item.value" :disabled="item.disabled"></el-option>
            </el-select>
        </div>

        <div class="mb30">
            <h4>禁用状态</h4>
            <el-select placeholder="请选择" disabled>
                <el-option></el-option>
            </el-select>
        </div>

        <div class="mb30">
            <h4>基础多选</h4>
            <el-select v-model="value4" placeholder="请选择" multiple>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>

            <el-select v-model="value5" multiple collapse-tags placeholder="请选择" style="margin-left: 20px;">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>

        <div class="mb30">
            <h4>自定义模板</h4>
            <el-select v-model="value6" placeholder="请选择">
                <el-option v-for="city in cities" :key="city.value" :label="city.value" :value="city.value">
                    <span style="float: left">{{city.label}}</span>
                    <span style="float: right; color: #8492a6; font-size: 13px">{{city.value}}</span>
                </el-option>
            </el-select>

        </div>

        <div class="mb30"></div>

        <div class="mb30"></div>

        <div class="mb30"></div>

        <div class="mb30"></div>
    </div>
</template>

<script>
const options = [
    { value: "选项1", label: "黄金糕" },
    { value: "选项2", label: "面条" },
    { value: "选项3", label: "米饭" },
    { value: "选项4", label: "披萨" },
];
const cities = [
    {value:'Beijing', label: '北京'},
    {value:'Shanghai', label: '上海'},
    {value:'Guanzhou', label: '广州'},
    {value:'Hangzhou', label: '杭州'},
];
export default {
    data() {
        return {
            options: options,
            value: "",
            value2: "",
            value3: "",
            value4: "",
            value5: "",
            value6: "",
            value7: "",
            value8: "",
            cities: cities
        };
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

