<template>
  <div v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children, item)">
      <Menu-Item :name="onlyOneChild.meta && onlyOneChild.meta.title" :to="resolvePath(onlyOneChild.path)">
        <Icon type="md-document" />
        <span>{{onlyOneChild.meta && onlyOneChild.meta.title}}</span>
      </Menu-Item>
    </template>
    <template v-else>
        <Submenu :name="item.meta && item.meta.title">
            <template slot="title">
                <Icon type="ios-paper" />
                <span>{{item.meta && item.meta.title}}</span>
            </template>
            <siderItem v-for="(chil, index) in item.children" :item="chil" :key="index" :base-path="item.path"></siderItem>
        </Submenu>
    </template>
  </div>
</template>

<script>
import path from "path";

export default {
  name: "siderItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
        onlyOneChild: null
    };
  },
    watch: {
        onlyOneChild: function (v) {
            console.log(v)
        }
    },
  mounted() {},
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          this.onlyOneChild = item;
          return true;
        }
      });
      // 只有一个子元素
      if (showingChildren.length === 1) {
        return true;
      }
      // 没有子元素
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, noShowingChildren: true };
        return true;
      }

      return false;
    },
      resolvePath(routePath) {
          if (this.isExternal(routePath)) {
              return routePath
          }
          if (this.isExternal(this.basePath)) {
              return this.basePath
          }
          return path.resolve(this.basePath, routePath)
      },
      isExternal(path) {
          return /^(https?:|mailto:|tel:)/.test(path)
      }
  }
};
</script>

<style scoped lang="scss"></style>
