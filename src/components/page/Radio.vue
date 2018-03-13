<template>
    <div>
        <h2 class="title">单选框</h2>

        <div class="mb30">
            <h4 id="app1">单选框</h4>
            <el-radio v-model="radio" label="1">男</el-radio>
            <el-radio v-model="radio" label="2">女</el-radio>
        </div>
        <div class="mb30">
            <h4 id="app2">禁用状态</h4>
            <el-radio v-model="radio2" disabled label="禁用">禁用</el-radio>
            <el-radio v-model="radio2" disabled label="选中且禁用">禁用</el-radio>
        </div>
        <div class="mb30">
            <h4>单选框组</h4>
            <el-radio-group v-model="radio3">
                <el-radio :label="3">备选项1</el-radio>
                <el-radio :label="4">备选项2</el-radio>
                <el-radio :label="5">备选项3</el-radio>
            </el-radio-group>
        </div>
        <div class="mb30">
            <h4>按钮样式的单选组合</h4>
            <el-radio-group v-model="radio4">
                <el-radio-button label="上海"></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </div>
        <div class="mb30">
            <el-radio-group v-model="radio5" size="medium">
                <el-radio-button label="上海"></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </div>
        <div class="mb30">
            <el-radio-group v-model="radio6" size="small">
                <el-radio-button label="上海"></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </div>
        <div class="mb30">
            <el-radio-group v-model="radio7" size="mini" disabled>
                <el-radio-button label="上海"></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </div>
        <div class="mb30">
            <h4>带有边框</h4>
            <el-radio v-model="radio8" label="6" border>备选项1</el-radio>
            <el-radio v-model="radio8" label="7" border>备选项2</el-radio>
            <br><br>
        </div>
        <div class="mb30">
            <el-radio v-model="radio9" label="8" border size="small">备选项1</el-radio>
            <el-radio v-model="radio9" label="9" border size="small">备选项2</el-radio>
        </div>

    </div>
</template>
<script>
const cityOptions = ["上海", "北京", "广州", "杭州"];
export default {
    data() {
        return {
            radio: "1",
            radio2: "选中且禁用",
            radio3: 3,
            radio4: "上海",
            radio5: "上海",
            radio6: "上海",
            radio7: "上海",
            radio8: "6",
            radio9: "9"
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
