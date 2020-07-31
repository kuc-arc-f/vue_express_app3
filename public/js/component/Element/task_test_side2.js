// task_test_side2

Vue.component('task_test_side2', {
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
    <div class="task_test_row_wap">
        {{ task.title }}<br />
        ID: {{ task.id}}
        <hr class="mt-2 mb-2" />
    </div>
    `,
    methods:{
        test1(id){
//            console.log(id)
        },

    },
});
