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
    poElem[i].classList.remove("on");
    poElem[0].classList.add("on");
  };
  benElem[1].onmouseover = () => {
    benElem[0].classList.remove("on");
    benElem[1].classList.add("on");
    poElem[0].classList.remove("on");
    poElem[1].classList.add("on");
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
};
change();
