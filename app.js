const app = Vue.createApp({
  //data, function

  data() {
    return {
      url: "http://www.netninja.co.uk",
      books: [
        { title: "Elrond uram", author: "Patric Swasey", img: "assets/1.png" },
        { title: "Dementorcsók", author: "Patric Warrd", img: "assets/2.png" },
        { title: "Tűzkő", author: "Patric Cloth", img: "assets/3.png" },
      ],
      showBooks: true,
      name: "Keri",
      EYE_name: "Omnituens",
      title: "SEMPITERNAL",

      author: "Posty",
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeTitle() {
      this.title = "Magic The Gathering";
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
