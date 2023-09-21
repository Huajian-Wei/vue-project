<template>
    <div>Home</div>
    <div v-html="rawHtml"></div> 
    <img v-bind:src="src">
     <div>点赞数：{{ count }}</div>
    <button v-on:click="doFavor">点赞</button>
</template>
<script>
    export default{
        data(){
            return{
                rawHtml:'路上只我一个人，背着手踱着。这一片天地好像是我的;我也像超出了平常的自己，到了另一世界里。我爱热闹，也爱冷静;爱群居，也爱独处。像今晚上，一个人在这苍茫的月下，什么都可以想，什么都可以不想，便觉是个自由的人。白天里一定要做的事，一定要说的话，现在都可不理。这是独处的妙处，我且受用这无边的荷香月色好了。',
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