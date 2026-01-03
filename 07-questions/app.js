//using selectors inside the element
const questions = document.querySelectorAll(".question");
// console.log(questions);

questions.forEach((question) => {
  //   console.log(question);

  const btn = question.querySelector(".question-btn");
  console.log(btn);

  btn.addEventListener("click", function () {
    questions.forEach((article) => {
      console.log(article);

      if (article !== question) {
        article.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

// traversing the dom
// const btns = document.querySelectorAll(".question-btn");
// console.log(btns);
// btns.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     console.log(event.currentTarget);
//     console.log(event.currentTarget.parentElement);
//     console.log(event.currentTarget.parentElement.parentElement);

//     const question = event.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
