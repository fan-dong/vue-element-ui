<template>
    <div class="sidebar">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router router>
            <el-submenu index="1">
                <template slot="title"> <i class="el-icon-view"></i>表单</template>
                <el-menu-item index="tab">表格</el-menu-item>
                <el-submenu>
                    <template slot="title">表单</template>
                    <el-menu-item index="Radio">单选框</el-menu-item>
                    <el-menu-item index="Checkbox">复选框</el-menu-item>
                    <el-menu-item index="Input">输入框</el-menu-item>
                    <el-menu-item index="InputNumber">计数器</el-menu-item>
                    <el-menu-item index="Select">下拉框</el-menu-item>
                    <el-menu-item index="Cascader">级联选择器</el-menu-item>
                    <el-menu-item index="Switch">开关</el-menu-item>
                    <el-menu-item index="Slider">滑块</el-menu-item>
                    <el-menu-item index="TimePicker">时间选择器</el-menu-item>
                    <el-menu-item index="DatePicker">日期选择器</el-menu-item>
                    <el-menu-item index="DateTimePicker">日期时间选择器</el-menu-item>
                    <el-menu-item index="Upload">上传</el-menu-item>
                    <el-menu-item index="Rate">评分</el-menu-item>
                    <el-menu-item index="ColorPicker">颜色选择器</el-menu-item>
                    <el-menu-item index="Transfer">穿梭框</el-menu-item>
                    <el-menu-item index="Form">表单</el-menu-item>
                </el-submenu>
            </el-submenu>

             <el-submenu index="2">
                <template slot="title"> <i class="el-icon-view"></i>财务管理</template>
                <el-menu-item>财务管理</el-menu-item>
             </el-submenu>
           
        </el-menu>

    </div>
</template>
<style scoped>
.sidebar {
    display: block;
    position: absolute;
    width: 200px;
    left: 0;
    top: 70px;
    bottom: 0;
    background: #2e363f;
    overflow-y: auto;
    overflow-x: hidden;
}
.sidebar > ul {
    height: 100%;
}
el-menu-item{
    padding-left: 0 !important;
}
</style>
