<template>
  <div id="zhuang"></div>
</template>

<script>
export default {
  name: "shan",
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
#zhuang {
  height: 100px;
  width: 100px;
  background: green;
  transition: transform 0.3s ease-in 0.8s;
}

#zhuang:hover {
  transform: rotate(180deg) scale(0.5, 0.5);
}
</style>
