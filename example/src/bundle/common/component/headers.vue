<template>
    <div class="header">
        <span class="back-button" v-if="backButton">
        <button @click="handleBack">Back</button>
        </span>
        <h3>{{title}}</h3>
        <span class="more-button" v-if="backButton"></span>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            backButton: Boolean,
            handleBack: Function
        }
    }
</script>

<style lang="stylus">
.header {
    line-height: 40px;
    background-color: #F1F1F1;
    border-bottom: 1px solid #DDD;
    padding: 12px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .back-button,
    .more-button {
        width: 50px;
        text-align: center;
        button {
            background-color: inherit;
            font-size: 14px;
            border: 0 none;
            color: #999;
        }
    }
    h3 {
        flex: 1;
        text-align: center;
        font-size:16px;
    }
}
</style>
