
<template>
    <div>About</div>
    <div>{{ useCounterStore.count }}</div>
</template>
<script>
    import {useCounterStore} from '@/stores/counter.js'
    export default{
        setup(){
            const mainStore = useCounterStore();
            console.log(mainStore.count);
            return{
                    mainStore
                }    
        }
    }
</script>