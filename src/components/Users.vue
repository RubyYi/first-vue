<template>
    <div class="users">
       <ul>
           <li v-for="(user,index) in users" v-bind:key="index">
               <div>{{user.name}}</div>
                <div>{{user.email}}</div>   
            </li>
       </ul>
    </div>
</template>


<script>
export default {
    name:'users',
    props:{
        users:{
            type:Array,
            required:true
        }
    },
    data(){
        return {           
        }
    },
}
</script>

<style scoped>

</style>