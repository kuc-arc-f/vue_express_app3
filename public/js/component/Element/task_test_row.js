// task_test_row

Vue.component('task_test_row', {
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
        <li>
            <div class="task_test_row_wap">
                <h3>{{ task.title }} </h3><br />
                {{ task.content }} / id: {{ task.id }}
            </div>
        </li>
    `,
});
