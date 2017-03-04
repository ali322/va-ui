<template>
    <div class="btn-comp">
        <button @click="increase">im a button</button>
        <p>clicked {{count}} times</p>
    </div>
</template>
<script>
    export default {
        data(){
            return {count:0}
        },
        methods:{
            increase(){
                this.count += 1
            }
        }
    }
</script>
<style lang="scss" scoped>
    .btn-comp{
        button {
            background: #CCC;
            border: 1px solid #666;
            font-size:14px;
        }
        p {
            margin: 8px 0;
            line-height: 22px;
        }
    }
</style>