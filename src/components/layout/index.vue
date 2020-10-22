<template>
  <div class="layout">
    <Layout style="height: 100%;">
      <Header>
        <Nav></Nav>
      </Header>
      <Content class="war-content">
        <Sider></Sider>
        <AppMain></AppMain>
      </Content>
    </Layout>
  </div>
</template>

<script>
import { AppMain, Nav, Sider } from './components'
export default {
    name: 'Index',
    data() {
        return {}
    },
    components: {
        AppMain, Nav, Sider
    },
    mounted() {},
    methods: {}
}
</script>

<style scoped lang="scss">
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
  .war-content {
    position: relative;
  }
</style>
