const layoutModal = `
<button class="close_modal"><i class="fa-solid fa-xmark"></i>
</button>
<img src=""/>
`;

export function renderModal(img) {
  const modal = document.createElement("dialog");
  modal.className = "modal";
  modal.innerHTML = layoutModal;

  const image = modal.querySelector("img");
  image.src = img.src;
  image.alt = img.alt;
  document.body.append(modal);
  modal.showModal();

  modalEvents();
}




export function setupModal(img) {
    img.addEventListener("click", () => renderModal(img));
    img.style.cursor = "pointer";
  }
  
  export function modalEvents() {
    const closeButton = document.querySelector(".close_modal");
    document.addEventListener("click", clickOutside);
    document.addEventListener("keydown", escapeClick);
    closeButton.addEventListener("click", removeModal);
  }

  function escapeClick(event) {
    if (event.key === "Escape") {
      removeModal();
    }
  }

  function clickOutside(event) {
    if (event.target.classList.contains("modal")) {
      removeModal();
    }
  }
  
  function removeModal() {
    const modal = document.querySelector(".modal");
    modal.remove();
    document.removeEventListener("click", clickOutside);
    document.removeEventListener("keydown", escapeClick);
  }

