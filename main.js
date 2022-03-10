const main = document.querySelector(".title");
main.addEventListener("click", () => {
  refreshPage();
});

function refreshPage() {
  window.location.reload();
}

//navbar toggle 버튼
const btnContainer = document.querySelector(".category");
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  btnContainer.classList.toggle("open");
  console.log("누름");
});

const projects = document.querySelectorAll(".Project");
btnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  setTimeout(() => {
    projects.forEach((project) => {
      console.log(project.dataset.type);
      if (filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
  }, 300);
});

const Egg = document.querySelector(".fa-dice-three");
let count = 1;
Egg.addEventListener("click", () => {
  if (count === 1) {
    alert("방문해 주셔서 갑사합니다. 계속해서 발전하는 개발자가 되겠습니다.");
  } else if (count === 2) {
    alert("두번 누르시다니 호기심이 많으시군요.");
  } else if (count === 3) {
    alert("정말 감사합니다ㅎㅎ 4번째는 없습니다.");
  } else if (count > 3) {
    alert("뻥ㅎㅎ");
    newPage();
  }
  console.log(count);
  count++;
});

function newPage() {
  location.href = "https://ydk1204.github.io/game";
}
