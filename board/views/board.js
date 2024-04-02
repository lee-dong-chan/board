const tagElem = document.getElementsByClassName("h-tag");
const contentElem = document.getElementsByClassName("h-content");
const inlinkElem = document.getElementsByClassName("in-link");
const invenElem = document.getElementsByClassName("inven");
const benElem = document.getElementsByClassName("ben");
const poElem = document.getElementsByClassName("po-list");

const change = () => {
  benElem[0].onmouseover = () => {
    benElem[1].classList.remove("on");
    benElem[0].classList.add("on");
    poElem[1].classList.remove("on");
    poElem[0].classList.add("on");
  };
  benElem[1].onmouseover = () => {
    benElem[0].classList.remove("on");
    benElem[1].classList.add("on");
    poElem[0].classList.remove("on");
    poElem[1].classList.add("on");
  };
};
tagElem[0].onmouseover = () => {
  for (let i = 0; i < 5; i++) {
    tagElem[i].classList.remove("on");
    contentElem[i].classList.remove("on");
  }
  tagElem[0].classList.add("on");
  contentElem[0].classList.add("on");
};

tagElem[1].onmouseover = () => {
  for (let i = 0; i < 5; i++) {
    tagElem[i].classList.remove("on");
    contentElem[i].classList.remove("on");
  }
  tagElem[1].classList.add("on");
  contentElem[1].classList.add("on");
};

tagElem[2].onmouseover = () => {
  for (let i = 0; i < 5; i++) {
    tagElem[i].classList.remove("on");
    contentElem[i].classList.remove("on");
  }
  tagElem[2].classList.add("on");
  contentElem[2].classList.add("on");
};

tagElem[3].onmouseover = () => {
  for (let i = 0; i < 5; i++) {
    tagElem[i].classList.remove("on");
    contentElem[i].classList.remove("on");
  }
  tagElem[3].classList.add("on");
  contentElem[3].classList.add("on");
};

tagElem[4].onmouseover = () => {
  for (let i = 0; i < 5; i++) {
    tagElem[i].classList.remove("on");
    contentElem[i].classList.remove("on");
  }
  tagElem[4].classList.add("on");
  contentElem[4].classList.add("on");
};

inlinkElem[0].onmouseover = () => {
  inlinkElem[1].classList.remove("on");
  inlinkElem[0].classList.add("on");
  invenElem[1].classList.remove("on");
  invenElem[0].classList.add("on");
};
inlinkElem[1].onmouseover = () => {
  inlinkElem[0].classList.remove("on");
  inlinkElem[1].classList.add("on");
  invenElem[0].classList.remove("on");
  invenElem[1].classList.add("on");
};
change();

let page = 1;
let count = 47;

const getUsers = async () => {
  try {
    const usersRes = await fetch("http://localhost:3000/", {
      method: "post",
      mode: "no-cors",
      body: `page=${page}&count=${count}`,
    });
    console.log(usersRes);
    const usersData = await usersRes.text();
    console.log(usersData);
    const userArr = JSON.parse(usersData);
    //const userArr= Json.parse()
    console.log(userArr);
    const createDate = () => {
      const date = new Date();
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    };
    const today = createDate();
    const titleElem = document.getElementsByClassName("tit");
    const numElem = document.getElementsByClassName("num");
    const dateElem = document.getElementsByClassName("date");
    const writerElem = document.getElementsByClassName("user");

    if (page == 2 || page == 3 || page == 4 || page == 5) {
      for (let i = 0; i < 47; i++) {
        titleElem[i].innerHTML = " ";
        numElem[i].innerHTML = " ";
        dateElem[i].innerHTML = " ";
      }
    }

    userArr.forEach((item) => {
      for (let i = 0; i < 47; i++) {
        if (item.idx == i) {
          numElem[i].innerHTML = `<div>${item.idx + 1}<div>`;
          titleElem[i].innerHTML = `<a href = "/board/?id=${
            item.idx + 1
          }" >${item.title.replaceAll("+", " ")}</a>`;
          dateElem[i].innerHTML = `<div>${today}<div>`;
          writerElem[i].innerHTML = `<div>${item.writer.replaceAll(
            "+",
            " "
          )}<div>`;
        }
      }
    });
  } catch (err) {
    // console.log(err);
  }
};
getUsers();

console.log(location.search.slice(4));
const getPage = async () => {
  try {
    const pageCount = 5;

    const pagingElem = document.getElementById("paging");

    for (let i = 0; i < pageCount; ++i) {
      const tempLi = document.createElement("div");
      tempLi.innerHTML = i + 1;
      tempLi.onclick = () => {
        page = i + 1;
        getUsers();
      };
      // pagingElem.append(tempLi);
    }
  } catch (err) {
    console.error(err);
  }
};
getPage();
