// task_test_button

Vue.component('task_test_button', {
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
    <span>
        <button class="ml-2">{{ task.title }}</button>
    </span>
    `,
});
