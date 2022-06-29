const model = document.querySelectorAll(".model-1");
const paragraph = document.querySelector(".para-graph");
const paragraph1 = document.querySelector(".para-2");
const hidden = document.querySelector(".hidden");
const closemodel = document.querySelector(".close-modal");

const add_hidden = function () {
  paragraph.classList.add("hidden");
  paragraph1.classList.add("hidden");
};

for (let index = 0; index < model.length; index++) {
  model[index].addEventListener("click", function () {
    paragraph.classList.remove("hidden");
    paragraph1.classList.remove("hidden");
  });
}

closemodel.addEventListener("click", add_hidden);
paragraph1.addEventListener("click", add_hidden);

// closemodel.addEventListener("click", function () {
//   paragraph.classList.add("hidden");
//   paragraph1.classList.add("hidden");
// });

// paragraph1.addEventListener("click", function () {
//   paragraph.classList.add("hidden");
//   paragraph1.classList.add("hidden");
// });
