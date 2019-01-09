
var app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    addItem: function (event) {
      alert("ログインさせるためのモーダルウィンドウを出したい");
    },
    addVimrc: function(event) {
      alert("ファイルをアップロードさせたい");
    }
  }
})

