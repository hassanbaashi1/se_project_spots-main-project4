// ===== Initial cards =====
const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

// ===== DOM Elements =====
const profileEditButton = document.querySelector(".profile__edit-btn");
const newPostButton = document.querySelector(".profile__add-btn");
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

// Modals
const editModal = document.querySelector("#edit-profile-modal");
const newPostModal = document.querySelector("#new-post-modal");
const previewModal = document.querySelector("#preview-modal");

// Modal close buttons
const editModalCloseBtn = editModal.querySelector(".modal__close-btn");
const newPostModalCloseBtn = newPostModal.querySelector(".modal__close-btn");
const previewModalCloseBtn = previewModal.querySelector(".modal__close-btn");

// Forms & inputs
const editForm = editModal.querySelector(".modal__form");
const editNameInput = editModal.querySelector("#profile-name-input");
const editDescriptionInput = editModal.querySelector(
  "#profile-description-input"
);

const newPostForm = newPostModal.querySelector(".modal__form");
const newPostImageInput = newPostModal.querySelector("#image-input");
const newPostCaptionInput = newPostModal.querySelector("#caption-input");

// Preview modal internals
const previewImageEl = previewModal.querySelector(".modal__image");
const previewCaptionEl = previewModal.querySelector(".modal__caption");

// Cards
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

// ===== Modal Functions =====
function openModal(modal) {
  if (!modal) return;
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscClose);
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscClose);
}

function handleEscClose(e) {
  if (e.key === "Escape") {
    const openedModalEl = document.querySelector(".modal_opened");
    if (openedModalEl) closeModal(openedModalEl);
  }
}

function handleOverlayClose(e) {
  if (e.target.classList.contains("modal")) {
    closeModal(e.target);
  }
}

document
  .querySelectorAll(".modal")
  .forEach((m) => m.addEventListener("mousedown", handleOverlayClose));

// ===== Card Functions =====
function getCardElement(data) {
  const fragment = cardTemplate.content.cloneNode(true);
  const cardEl = fragment.querySelector(".card");

  const imgEl = cardEl.querySelector(".card__image");
  const titleEl = cardEl.querySelector(".card__title");
  const likeBtn = cardEl.querySelector(".card__like-btn");
  const deleteBtn = cardEl.querySelector(".card__delete-btn");

  imgEl.src = data.link;
  imgEl.alt = data.name;
  titleEl.textContent = data.name;

  likeBtn.addEventListener("click", (evt) => {
    evt.stopPropagation();
    likeBtn.classList.toggle("card__like-btn_like");
  });

  deleteBtn.addEventListener("click", (evt) => {
    evt.stopPropagation();
    cardEl.remove();
  });

  imgEl.addEventListener("click", () => {
    previewImageEl.src = data.link;
    previewImageEl.alt = data.name;
    previewCaptionEl.textContent = data.name;
    openModal(previewModal);
  });

  return cardEl;
}

// ===== Render initial cards =====
initialCards.forEach((item) => {
  const card = getCardElement(item);
  cardsList.prepend(card);
});

// ===== Profile Modal =====
profileEditButton.addEventListener("click", () => {
  editNameInput.value = profileNameEl.textContent;
  editDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editModal);
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileNameEl.textContent = editNameInput.value;
  profileDescriptionEl.textContent = editDescriptionInput.value;
  closeModal(editModal);
});

// ===== New Post Modal =====
newPostButton.addEventListener("click", () => {
  newPostImageInput.value = "";
  newPostCaptionInput.value = "";
  openModal(newPostModal);
});

newPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newCardData = {
    name: newPostCaptionInput.value,
    link: newPostImageInput.value,
  };
  const cardEl = getCardElement(newCardData);
  cardsList.prepend(cardEl);
  closeModal(newPostModal);
});

// ===== Close buttons =====
editModalCloseBtn.addEventListener("click", () => closeModal(editModal));
newPostModalCloseBtn.addEventListener("click", () => closeModal(newPostModal));
previewModalCloseBtn.addEventListener("click", () => closeModal(previewModal));
