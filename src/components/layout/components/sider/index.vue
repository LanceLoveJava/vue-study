<template>
    <Sider v-model="siderOff" hide-trigger collapsible :collapsed-width="79" class="custom-sider">
      <Menu :active-name="activeName" theme="light" mode="vertical" width="auto" :class="menuitemClasses">
        <template v-for="(item, $index) in routes">
          <MenuGroup :title="item.meta && item.meta.title" :key="$index">
            <template v-for="(chil, index) in item.children">
              <siderItem :item="chil" :key="index" :base-path="item.path"></siderItem>
            </template>
          </MenuGroup>
        </template>
      </Menu>
    </Sider>
</template>

<script>
import { mapGetters } from 'vuex'
import siderItem from './siderItem'
export default {
    data() {
        return {
            menus: []
        }
    },
    components: {
        siderItem
    },
    computed: {
        ...mapGetters(['routes', 'siderOff']),
        activeName: function() {
            return this.$route.meta.title
        },
        menuitemClasses: function() {
            return [
                'menu-item',
                this.siderOff ? 'collapsed-menu' : ''
            ]
        }
    },
    mounted() {
        console.log(this.routes)
    },
    methods: {
        isCollapse() {
            return !this.siderOff
        }
    }
}
</script>

<style scoped lang="scss">
  .custom-sider {
    background-color: #fff;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
      ::v-deep .menu-item {
          span{
              display: inline-block;
              overflow: hidden;
              width: 69px;
              text-overflow: ellipsis;
              white-space: nowrap;
              vertical-align: bottom;
              transition: width .2s ease .2s;
          }
      }
      ::v-deep .collapsed-menu span{
          width: 0px;
          transition: width .2s ease;
      }
  }
  .menu-item i{
      transform: translateX(0px);
      transition: font-size .2s ease, transform .2s ease;
      vertical-align: middle;
      font-size: 16px;
  }

  .collapsed-menu i{
      transform: translateX(5px);
      transition: font-size .2s ease .2s, transform .2s ease .2s;
      vertical-align: middle;
      font-size: 22px;
  }
</style>
