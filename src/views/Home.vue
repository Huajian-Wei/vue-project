<template>
    <div>Home</div>
    <!-- 以html标签显示出来的文本 -->
    <div v-html="rawHtml"></div> 
     <!-- 以纯文本显示出  -->
    <div v-text="rawHtml"></div> 
    <img v-bind:src="src">
     <div>点赞数：{{ count }}</div>
    <button v-on:click="doFavor">点赞</button>
</template>
<script>
    export default{
        data(){
            return{
                rawHtml:'<h3>测试</h3>',
                src:"https://th.bing.com/th/id/OIP.tmvIu57hTRpXhPRWkBDDEQHaEK?w=328&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                count:0
            }
        },
        methods:{
            doFavor(){
                this.count++
            }
        }
    }
</script>