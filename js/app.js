var data = {
  items: [
    {text: "Banany", checked: true},
    {text: "Jabłka", checked: false},
    {text: "Zapałki", checked: true}
  ],
  title: "Moja lista zakupów",
  newItem: ""
};

new Vue({
  el: "#app",
  data: data,
  methods: {
    addItem: function(){
      var text;
      text = this.newItem.trim();
      if(text){
        this.items.push({
          text: text,
          checked: false
        });
        this.newItem = "";
      }
    }
  }
});
