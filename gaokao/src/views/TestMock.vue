<template>
    <div>
        <button @click="sendback">anniu</button>
    </div>
</template>
<script>
import axios from 'axios';
export default{
    data() {
        // const isTrue = false;
    },
    methods: {
        sendback() {
            const res = {
                account: 'root',
                passwd: 'root'
            };
            const isTrue = false;
            let data = axios.post('/isValid',res);
            
            if(data) {
                console.log(data.isTrue);
            }
        }
    }
}
</script>