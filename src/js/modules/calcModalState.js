import checkInput from "./checkInput";

const calcModalState = (state) => {
  const windowForm = document.querySelectorAll(".balcon_icons_img"),
    windowWidth = document.querySelectorAll("#width"),
    windowHeight = document.querySelectorAll("#height"),
    windowType = document.querySelectorAll("#view_type"),
    windowProfile = document.querySelectorAll(".checkbox");

  checkInput(windowHeight);
  checkInput(windowWidth);

  function setDataToState(elem, event, prop) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "SPAN":
            state[prop] = i;
            break;
          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              elem.forEach((box, j) => {
                box.checked = false;
                if (i === j) {
                  box.checked = true;
                }
              });
              i === 0 ? (state[prop] = "Холодное") : (state[prop] = "Теплое");
            } else {
              state[prop] = item.value;
            }
            break;
          case "SELECT":
            state[prop] = item.value;
            break;
        }
        console.log(state);
      });
    });
  }
  setDataToState(windowForm, "click", "form");
  setDataToState(windowWidth, "input", "width");
  setDataToState(windowHeight, "input", "height");
  setDataToState(windowProfile, "change", "profile");
  setDataToState(windowType, "change", "type");
};

export default calcModalState;
