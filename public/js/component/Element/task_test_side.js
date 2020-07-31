// task_test_side

Vue.component('task_test_side', {
    created(){
//console.log(obj)
    },
    data: function () {
        return {
            count: 0
        }
    },
    props: ['task'],
    template: `
    <div class="task_test_row_wap" v-on:click="test1( task.id)">
        {{ task.title }}<br />
        id: {{ task.id }}
    </div>
    `,
    methods:{
        test1(id){
            console.log(id)
//            alert('t:' + id)
        },

    },
});
