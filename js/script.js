const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

// Мобильное меню
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav--open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Закрыть меню" : "Открыть меню",
    );
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav--open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Открыть меню");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      nav.classList.remove("nav--open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Открыть меню");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      nav.classList.remove("nav--open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Открыть меню");
    }
  });
}

// Выбор тарифа
const ticketButtons = document.querySelectorAll(".ticket-select");
const ticketType = document.querySelector("#ticket-type");
const ticketOrder = document.querySelector("#ticket-order");

ticketButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTicket = button.dataset.ticket;

    if (ticketType) {
      ticketType.value = selectedTicket;
    }

    if (ticketOrder) {
      ticketOrder.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Демонстрационная форма
const ticketForm = document.querySelector("#ticket-form");
const formMessage = document.querySelector("#form-message");

if (ticketForm && formMessage) {
  ticketForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formMessage.textContent =
      "Это демонстрация: заявка не отправлена, оплата не производится, данные никуда не передаются.";

    ticketForm.reset();
  });
}
