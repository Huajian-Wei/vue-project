
<template>
    <div>About</div>
    <div v-html="book"></div>
    <div v-html="author"></div>
    
</template>
<script>
    export default{
        data(){
            return{
                book:'摘抄自：《荷塘月色》',
                author:'作者：朱自清'
            }
            
        }
    }
</script>