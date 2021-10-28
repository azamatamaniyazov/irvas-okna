const imagePopup = () => {
  const workSection = document.querySelector(".works"),
    imagePopup = document.createElement("div"),
    bigImg = document.createElement("img");

  imagePopup.classList.add("popup");
  workSection.appendChild(imagePopup);

  imagePopup.style.cssText =
    "justify-content: center; align-items: center; display: none;";

  workSection.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target;

    if (target && target.classList.contains("preview")) {
      let path = target.parentNode.getAttribute("href");
      bigImg.setAttribute("src", path);
      imagePopup.append(bigImg);
      imagePopup.style.display = "flex";
      document.body.style.overflow = "hidden";
    }

    if (target && target.classList.contains("popup")) {
      imagePopup.style.display = "none";
      document.body.style.overflow = "";
    }
  });
};

export default imagePopup;
