<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :class="{active:collapse}"
      :collapse="!collapse"
      background-color="rgb(113,150,159)"
      text-color="white"
      active-text-color="white"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu
          :index="item.index"
          :key="item.index"
          >
            <template slot="title">
              <i style="color:white" :class="item.icon"></i>
              <span slot="title">{{  item.title  }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu
                  v-if="subItem.subs"
                  :index="subItem.index"
                  :key="subItem.index"
              >
                  <template slot="title">{{ subItem.title }}</template>
                  <el-menu-item
                      v-for="(threeItem,i) in subItem.subs"
                      :key="i"
                      :index="threeItem.index"
                  >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item
                  v-else
                  :index="subItem.index"
                  :key="subItem.index"
              >{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
              <i  style="color:white" :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
          </el-menu-item>
      </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from './bus'
export default {
  name: 'Sidebar',
  data () {
    return {
      collapse: false,
      items: [
        {
          icon: 'el-icon-tickets',
          index: 'table',
          title: '基础表格'
        },
        {
          icon: 'el-icon-document-checked',
          index: 'tabs',
          title: 'tab选项卡'
        },
        {
          icon: 'el-icon-document-copy',
          index: '3',
          title: '表单相关',
          subs: [
            {
              index: 'form',
              title: '基本表单'
            },
            {
              index: '3-2',
              title: '三级菜单',
              subs: [
                {
                  index: 'permission',
                  title: '权限测试'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  // computed: {
  //   onRoutes () {
  //     return this.$route.path.replace('/', '')
  //   }
  // },
  mounted () {
    bus.$on('collapse', msg => {
      this.collapse = msg
      bus.$emit('collapse-content', msg)
    })
  }
}
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
