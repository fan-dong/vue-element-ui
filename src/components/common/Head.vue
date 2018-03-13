<template>
    <div class="header">
        <img  class="logo" src="../../assets/logo.png" alt="">
        <span>ElementUI</span>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../assets/img.jpg" alt="">
                    {{username}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name: 'Fancy'
        }
    },
    computed:{
        username(){
            let username = localStorage.getItem('ms_username');
            return username ? username :this.name;
        }
    },
    methods:{
        handleCommand(command) {
            if(command == 'loginout'){
                localStorage.removeItem('ms_username')
                this.$router.push('./login');
            }
        }
    }
}
</script>

<style scoped>
.header {
    width: 100%;
    height: 70px;
    line-height: 70px;
    position: absolute;
    top: 0;
    left: 0;
    /* background: green; */
}
.logo{
    width: 50px;
    display: inline-block;
    position: absolute;
    top:12px;
    margin-left: 20px;

}
.header span {
    display: inline-block;
    width: 200px;
    text-align: center;
    margin-left: 50px;
    font-size: 22px;
    color: #fff;
}
.user-info{
    float: right;
    padding-right: 50px;
    font-size: 16px;
    color: #fff;
}
.user-info .el-dropdown-link{
    position: relative;
    display: inline-block;
    color: #fff;
    cursor: pointer;
    vertical-align: middle;
}
.user-info .user-logo{
    position: absolute;
    left: 0;
    top:15px;
    width:40px;
    height: 40px;
    border-radius: 50%;
}
</style>
