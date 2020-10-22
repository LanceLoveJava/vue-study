<template>
    <div class="content-padding">
        <Card :bordered="false">
            <p slot="title">CSS3盒子模型</p>
            <p></p>
        </Card>
    </div>
</template>

<script>
export default {
    name: 'Faq',
    data() {
        return {}
    },
    mounted() {
    },
    methods: {}
}
</script>

<style scoped lang="scss">
    .content-padding {
        padding: 20px;
        width: 100%;
        height: 100%;
    }
</style>
