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
    props: ['obj'],
    template: `
        <div class="task_test_row_wap">
            <ul>
                <li v-for="task in obj" v-bind:key="task.id">
                    {{ task.title }} / id: {{ task.id }}
                </li>
            </ul>            
        </div>
    `,
});
