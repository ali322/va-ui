<template>
    <div class="example">
        <headers title="va-ui" :backButton="false" :handleBack="handleBack"/>
        <ul>
            <li v-for="v in components">
                <router-link v-bind:to="{path:v.path}">{{v.name}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    import headers from '../../common/component/headers.vue'

    export default {
        data(){
            let components = ['button'].map(v=>({name:v,path:`/example/${v}`}))
            return {
                components
            }
        },
        methods:{
            handleBack(){
            }
        },
        components:{
            headers
        }
    }
</script>

<style lang="stylus">
.example{
    width:640px;
    margin:0 auto;
    background: #F8F8F8;
    ul{
        margin:0;
        li{
            padding:12px 0;
            line-height:25px;
            text-align:center;
        }
    }
}
</style>

