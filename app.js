Vue.createApp({
  data: () => {
    return {
      goals: [],
      enteredValue: "",
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");

// const buttonEll = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// buttonEll.addEventListener("click", () => {
//   const enterValue = inputEl.value;
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = enterValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = "";
// });
