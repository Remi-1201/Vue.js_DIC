new Vue({
  // このelにHTMLのidを指定することで、そのidのDOMでVue.jsのインスタンスがインポートされる
  el: '#app',
  // dataは、定義されたVue.jsのインスタンスが持つ属性（値）
  data: {
    addName: '',
    addCourse: '',
    addPeriod: '',
    list: [],
  },
  // methodsに、Vue.jsのインスタンスに使用させたいメソッドを記載する
  methods: {
    addToDo() {
        // この function() { } の中にaddStudentメソッド
        // （入力欄に入力された値と、ID値（最後に登録されたID値+1の値）が新たに出現する機能）の処理を書く
        if (!this.addName.length) {
          return
        }else if(!this.addCourse.length) {
          return
        }else if(!this.addPeriod.length) {
          return
        }
        this.list.push({
          name: this.addName,
          course: this.addCourse,
          period: this.addPeriod
        });
        this.addName = '',
        this.addCourse = '',
        this.addPeriod = ''
    }
  }
})