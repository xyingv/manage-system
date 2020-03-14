<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-warn"></i> 权限测试</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="permissionTop">
                <div class="PermissLeft imgMiddle">
                    <img class="imgMiddle" src="../../assets/img/tree.png" />
                </div>
                <div class="PermissRight">
                    <div class="PermissMiddle">
                        <h1>Learn How to improve Your Personal Business</h1>
                        <p>Li Jun, a China Acadermy of Engineering academician and also director of the alliance's experts' committee, said thar China will also launch design guidance for smart cars, smart map architecture and standards for test grounds.</p>
                    </div>
                </div>
            </div>
            <div class="permissionTop">
                <div class="PermissLeft">
                    <div class="PermissMiddle">
                        <h1>Choose Between Two Beautifully Designed Color Schemes.</h1>
                        <p>China will come up with its own smart car standards, traffic rules, laws and regulations relating to safety, according to the China industry Innovation Alliance for the Intelligent and Connected Vehicles.</p>
                    </div>
                </div>
                <div class="PermissRight imgMiddle">
                    <img class="imgMiddle" src="../../assets/img/bird.png" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: function () {
    return {}
  }
}
</script>

<style scoped>
.container {
    overflow: hidden;
}
.permissionTop {
    display: flex;
}
.PermissLeft {
    flex-basis:50%;
}
.PermissRight {
    flex:1;
}
.PermissMiddle{
    height: 15rem;
    width:25rem;
    margin: 0 auto;
}
.imgMiddle {
    text-align: center;
}
h1{
    text-align: center;
    margin: 30px 0;
}
p{
    line-height: 30px;
    margin-bottom: 10px;
    text-indent: 2em;
}
.logout{
    color: #409EFF;
}
</style>
