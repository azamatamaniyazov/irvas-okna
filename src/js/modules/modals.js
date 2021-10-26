const modals = () => {
  function bindModals(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = modal.querySelector(closeSelector);

    trigger.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
      });
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
        document.body.style.overflow = "";
      }
    });

    close.addEventListener("click", () => {
      modal.classList.remove("show");
      document.body.style.overflow = "";
    });
  }

  function showModalbyTimer(selector, timer) {
    setTimeout(() => {
      document.querySelector(selector).classList.add("show");
      document.body.style.overflow = "hidden";
    }, timer);
  }

  bindModals(".popup_engineer_btn", ".popup_engineer", ".popup_close");
  bindModals(".phone_link", ".popup", ".popup_close");
  showModalbyTimer(".popup", 60000);
};

export default modals;
