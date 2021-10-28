const checkInput = (selector) => {
  selector.forEach((elem) => {
    elem.addEventListener("input", () => {
      elem.value = elem.value.replace(/\D/, "");
    });
  });
};

export default checkInput;
