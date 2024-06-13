const COLORS = ["#fdf2b3", "#d1eaed", "#ffdada", "#ffd4a9"];
let listsCounter = 0;

const container = document.getElementById("container");

container.style.border = "1px solid #ebebeb";
container.style.borderRadius = "8px";
container.style.padding = "32px";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.gap = "24px";

const addNewListBtn = document.getElementById("addNewList");

addNewListBtn.style.backgroundColor = "#ebebeb";
addNewListBtn.style.border = "none";
addNewListBtn.style.width = "300px";
addNewListBtn.style.height = "300px";
addNewListBtn.style.borderRadius = "8px";
addNewListBtn.style.fontSize = "80px";
addNewListBtn.style.cursor = "pointer";

addNewListBtn.addEventListener(
  "mouseover",
  () =>
    (addNewListBtn.style.boxShadow =
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)")
);

addNewListBtn.addEventListener(
  "mouseleave",
  () => (addNewListBtn.style.boxShadow = "none")
);

const addNewListTitle = (listNumber) => {
  const titleEl = document.createElement("h2");

  titleEl.textContent = `To do List ${listNumber}`;
  titleEl.style.textAlign = "center";
  titleEl.style.marginBottom = "16px";

  return titleEl;
};

const addListInput = () => {
  const newInput = document.createElement("input");
  newInput.type = "text";

  return newInput;
};

const addItemBtnHandler = (listInput, ulEl) => {
  if (listInput.value === "") {
    alert("Cannot be empty Errors");
    return;
  }

  const liEl = document.createElement("li");

  liEl.textContent = listInput.value;

  liEl.addEventListener("click", () => {
    liEl.style.textDecoration === "line-through"
      ? (liEl.style.textDecoration = "none")
      : (liEl.style.textDecoration = "line-through");
  });

  ulEl.appendChild(liEl);

  listInput.value = "";
};

const addNewListHandler = () => {
  const ulEl = document.createElement("ul");

  ulEl.style.backgroundColor =
    COLORS[Math.floor(Math.random() * COLORS.length)];
  ulEl.style.width = "300px";
  ulEl.style.height = "300px";
  ulEl.style.borderRadius = "8px";
  ulEl.style.cursor = "pointer";
  ulEl.style.padding = "8px 16px";

  container.appendChild(ulEl);
  listsCounter++;

  const newListTitle = addNewListTitle(listsCounter);

  ulEl.appendChild(newListTitle);

  const listInput = addListInput();

  const addItemBtn = document.createElement("button");
  addItemBtn.textContent = "Add Item";

  ulEl.appendChild(listInput);
  ulEl.appendChild(addItemBtn);

  addItemBtn.addEventListener("click", () =>
    addItemBtnHandler(listInput, ulEl)
  );
};

addNewListBtn.addEventListener("click", addNewListHandler);
