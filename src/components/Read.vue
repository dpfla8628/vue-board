// https://www.youtube.com/watch?v=yX0bB9-Rzbw&list=PLyjjOwsFAe8ITIDUNsU_x4XNbPJeOvs-b&index=2
<template>
    <div>
        <table>
            <h1>{{now}}</h1>
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
        <!-- <button @click="closeToday">팝업 창 닫기</button>    -->
    </div>
</template>
<script>
import data from '@/data'
const moment = require('moment')
export default {
    name :'Read',
    data(){
        return {
            data: data,
            now: 0
        }
    },
    mounted () {
        this.date()
        setInterval(this.date.bind(this), 1000)
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
        },
        date () {
            this.now = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
        },
        setCookie (name, value, expiredays) {
        var todayDate = new Date()
        todayDate.setHours(22,0,0,0)
        // cookie Time test
        document.cookie = name + '=' + value + '; path=/; expires=' + todayDate.toUTCString()
        },
        closeToday () {
        this.setCookie('popToday', 'close', 1)
        },
    },
    filters: {
        comma(val) {
            return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
    }
}
</script>