<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
    data() {
        return {}
    },
    computed: {
        key() {
            return this.$route.path
        }
    },
    mounted() {},
    methods: {}
}
</script>

<style scoped lang="scss">
.app-main {
  min-height: 100%;
  margin-left: 200px;
  overflow: hidden;
}
</style>
