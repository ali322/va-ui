<template>
    <div class="example">
        <headers title="va-ui" :handleBack="handleBack" :backButton="true"/>
        <div class="example-component"><btn /></div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import headers from '../common/component/headers.vue'
    import vaui from '../../../../lib/va-ui.js'
    const {btn} = vaui

    export default {
        methods:{
            handleBack(){
                this.$router.back()
            }
        },
        computed:{
            ...mapState({
              route:"route"
            })
        },
        components:{
            btn,headers
        }
    }
</script>

<style lang="stylus">
    @import '../../../../lib/va-ui.css'

    .example-component{
        background:#f8f8f8;
        padding:8px 12px;
    }
</style>
