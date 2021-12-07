// https://www.youtube.com/watch?v=yX0bB9-Rzbw&list=PLyjjOwsFAe8ITIDUNsU_x4XNbPJeOvs-b&index=2
<template>
    <div>
        <table>
            <tr>
                <td>글쓴이</td>
                <td>제목</td>
                <td>내용</td>
                <td>가격</td>
            </tr>
            <tr :key="index" v-for="(value,index) in data" @click="detail(index)">
                <td>{{value.writer}}</td>
                <td>{{value.title}}</td>
                <td>{{value.content}}</td>
                <td>{{value.price | comma}}</td>
            </tr>
        </table> 
        <button @click="write">글쓰기</button>   
    </div>
</template>
<script>
import data from '@/data'

export default {
    name :'Read',
    data(){
        return {
            data:data
        }
    },
    methods: {
        write(){
            this.$router.push({
                path:'create'
            })
        },
        detail(index){
            this.$router.push({
                name:'Detail',
                params:{
                    contentId : index
                }
            })
        }
    },
    filters: {
        comma(val) {
            return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
    }
}
</script>