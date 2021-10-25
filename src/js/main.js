const modalBtn = document.querySelector(".popup_engineer_btn"),
  modalWindow = document.querySelector(".popup_engineer"),
  callBtn = document.querySelectorAll("[data-call]"),
  callModal = document.querySelector(".popup");

function openModal(btnSelector, modalSelector) {
  const showModal = () => {
    modalSelector.classList.add("show");
    document.querySelector("body").style.overflow = "hidden";
  };
  btnSelector.addEventListener("click", (e) => {
    e.preventDefault();
    showModal();
  });
}

function closeModal(modalSelector) {
  const hideModal = () => {
    modalSelector.classList.remove("show");
    document.querySelector("body").style.overflow = "";
  };
  modalSelector.querySelector(".popup_close").addEventListener("click", () => {
    hideModal();
  });
  modalSelector.addEventListener("click", (e) => {
    if (e.target === modalSelector) {
      hideModal();
    }
  });
}

openModal(modalBtn, modalWindow);
closeModal(modalWindow);
// modalBtn.addEventListener("click", () => {
//   modalWindow.classList.add("show");
// });

// modalWindow.querySelector(".popup_close").addEventListener("click", () => {
//   modalWindow.classList.remove("show");
// });

// modalWindow.addEventListener("click", (e) => {
//   if (e.target === modalWindow) {
//     modalWindow.classList.remove("show");
//   }
// });

// const callBtn = document.querySelectorAll("[data-call]"),
//   callModal = document.querySelector(".popup");

callBtn.forEach((elem) => {
  openModal(elem, callModal);
  //   elem.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     callModal.classList.add("show");
  //   });
});
closeModal(callModal);
