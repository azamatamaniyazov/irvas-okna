import "./slider";
import modals from "./modules/modals";
import timer from "./modules/timer";
import tabs from "./modules/tabs";

modals();
timer(".container1", "2021-12-31");
tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
tabs(
  ".decoration_slider",
  ".no_click",
  ".decoration_content > div > div",
  "after_click"
);

// const modalBtn = document.querySelector(".popup_engineer_btn"),
//   modalWindow = document.querySelector(".popup_engineer"),
//   callBtn = document.querySelectorAll("[data-call]"),
//   callModal = document.querySelector(".popup");

// function openModal(btnSelector, modalSelector) {
//   const showModal = () => {
//     modalSelector.classList.add("show");
//     document.querySelector("body").style.overflow = "hidden";
//   };

//   btnSelector.addEventListener("click", (e) => {
//     e.preventDefault();
//     showModal();
//   });
// }

// function closeModal(modalSelector) {
//   const hideModal = () => {
//     modalSelector.classList.remove("show");
//     document.querySelector("body").style.overflow = "";
//   };

//   modalSelector.querySelector(".popup_close").addEventListener("click", () => {
//     hideModal();
//   });

//   modalSelector.addEventListener("click", (e) => {
//     if (e.target === modalSelector) {
//       hideModal();
//     }
//   });
// }

// openModal(modalBtn, modalWindow);
// closeModal(modalWindow);

// callBtn.forEach((elem) => {
//   openModal(elem, callModal);
// });
// closeModal(callModal);

// const forms = document.querySelectorAll(".form");

// forms.forEach((form) => {
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const formData = new FormData(form);
//     const json = JSON.stringify(Object.fromEntries(formData));

//     const postData = async (url, data) => {
//       const res = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: data,
//       });

//       return await res.json();
//     };

//     postData("server.php", json).then((data) => console.log(data));
//   });
// });
