const forms = () => {
  const form = document.querySelectorAll("form"),
    phoneInput = document.querySelectorAll("input[name='user_phone']");

  phoneInput.forEach((elem) => {
    elem.addEventListener("input", () => {
      elem.value = elem.value.replace(/\D/, "");
    });
  });

  const message = {
    loading: "Загрузка...",
    success: "Данные успешно отправлены!",
    failure: "Что-то пошло не так",
  };

  const postData = async (url, data) => {
    document.querySelector(".status").textContent = message.loading;

    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: data,
    });

    return await res.json();
  };

  form.forEach((elem) => {
    elem.addEventListener("submit", (e) => {
      e.preventDefault();

      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      elem.appendChild(statusMessage);

      const formData = new FormData(elem);

      postData(
        "http://localhost:3000/posts",
        JSON.stringify(Object.fromEntries(formData))
      )
        .then((res) => {
          console.log(res);
          statusMessage.textContent = message.success;
        })
        .catch(() => {
          statusMessage.textContent = message.failure;
        })
        .finally(() => {
          elem.reset();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });
};

export default forms;
