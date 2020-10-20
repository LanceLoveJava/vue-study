<template>
  <div class="">
    <Sider hide-trigger class="custom-sider">
      <Menu active-name="1" theme="light" width="auto" :open-names="['1']">
        <template v-for="(group, $index) in routes">
          <MenuGroup :title="group.meta && group.meta.title" :key="$index">
            <template v-if="group.children && group.children.length > 0">
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-cog" />
                  动画效果
                </template>
                <MenuItem name="4-4" to="/css/zhuang">旋转</MenuItem>
              </Submenu>
            </template>
            <MenuItem name="3" v-else :to="group.path">
              <Icon type="md-document" />
              FAQ
            </MenuItem>
          </MenuGroup>
        </template>
      </Menu>
    </Sider>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
export default {
  name: "index",
  data() {
    return {
      menus: [

      ]
    };
  },
  computed: {
    ...mapGetters([ 'routes' ])
  },
  mounted() {
    console.log(this.routes)
  },
  methods: {}
};
</script>

<style scoped lang="scss">
  .custom-sider {
    background-color: #fff;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
