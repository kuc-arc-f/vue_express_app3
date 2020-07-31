// TaskTest

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  props: ['title'],
  template: `
    <div class="blog-post">
      <h3>GG</h3>
      <div>title : {{title}}</div>
    </div>
  `
});


