<template>
    <div>
        <h2 class="title">复选框</h2>
        <div class="mb30">
            <h4>基础用法</h4>
            <el-checkbox v-model="checked1">备选项1</el-checkbox>
            <el-checkbox v-model="checked2">备选项2</el-checkbox>
        </div>
        <div class="mb30">
            <h4>禁用状态</h4>
            <el-checkbox v-model="checked3" disabled>备选项1</el-checkbox>
            <el-checkbox v-model="checked4" disabled>备选项2</el-checkbox>
        </div>
        <div class="mb30">
            <h4>多选框组</h4>
            <el-checkbox-group v-model="checkList">
                <el-checkbox label="复选框A"></el-checkbox>
                <el-checkbox label="复选框B"></el-checkbox>
                <el-checkbox label="复选框C"></el-checkbox>
                <el-checkbox label="禁用" disabled></el-checkbox>
                <el-checkbox label="选中且禁用" disabled></el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="mb30">
            <h4>不确定状态</h4>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="checkAllChange" class="mb30">全选</el-checkbox>
            <el-checkbox-group v-model="checkedCities" @change="citiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="mb30">
            <h4>可选项目数量的限制</h4>
            <!-- <span>使用min和max 属性能够限制可以被勾选的项目数量</span> -->
            <el-checkbox-group v-model="checkedCities1" :min="1" :max="2">
                <el-checkbox v-for="city1 in citys1" :label="city1" :key="city1">{{city1}}</el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="mb30">
            <h4>多选按钮样式</h4>
            <el-checkbox-group v-model="checkboxGroup1">
                <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
            <br>
            <el-checkbox-group v-model="checkboxGroup2" size="mini">
                <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>

        </div>

        <div class="mb30">
            <h4>带有边框的</h4>
            <el-checkbox v-model="checked5" label="备选项1" border></el-checkbox>
            <el-checkbox v-model="checked6" label="备选项2" border></el-checkbox>
            <div class="mb30"></div>
            <el-checkbox v-model="checked7" label="备选项1" border size="small" disabled></el-checkbox>
            <el-checkbox v-model="checked8" label="备选项2" border size="small" disabled></el-checkbox>
        </div>
    </div>
</template>
<script>
const cityOptions = ["上海", "北京", "广州", "杭州"];
export default {
    data() {
        return {
            checked1: true,
            checked2: false,
            checked3: false,
            checked4: true,
            checkList: ["选中且禁用", "复选框A"],
            checkAll: false,
            checkedCities: ["上海", "杭州"],
            cities: cityOptions,
            isIndeterminate: true,
            checkedCities1: ["上海", "北京"],
            citys1: cityOptions,
            checkboxGroup1: ["上海"],
            checkboxGroup2: ["上海", "北京"],
            checked5: true,
            checked6: false,
            checked7: true,
            checked8: false
        };
    },
    methods: {
        checkAllChange(val) {
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
        },
        citiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cites.length;
            this.isIndeterminate =
                checkedCount > 0 && checkedCount < this.cites.length;
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


