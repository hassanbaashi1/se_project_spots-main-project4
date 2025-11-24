// ===== Initial Cards =====
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

// ===== Select DOM Elements =====
const profileEditButton = document.querySelector(".profile__edit-btn");
const cardModalButton = document.querySelector(".profile__add-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

// Modals
const editModal = document.querySelector("#edit-profile-modal");
const cardModal = document.querySelector("#new-post-modal");
const previewModal = document.querySelector("#preview-modal");

// Modal close buttons
const editModalCloseBtn = editModal.querySelector(".modal__close-btn");
const cardModalCloseBtn = cardModal.querySelector(".modal__close-btn");
const previewModalCloseBtn = previewModal.querySelector(".modal__close-btn");

// Modal forms
const editFormElement = editModal.querySelector(".modal__form");
const cardForm = cardModal.querySelector(".modal__form");

// Form inputs
const editModalNameInput = editModal.querySelector("#profile-name-input");
const editModalDescriptionInput = editModal.querySelector(
  "#profile-description-input"
);

const cardNameInput = cardModal.querySelector("#caption");
const cardLinkInput = cardModal.querySelector("#image-input");

// Preview modal elements
const previewModalImageEl = previewModal.querySelector(".modal__image");
const previewModalCaptionEl = previewModal.querySelector(".modal__caption");

// Cards
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

// ===== Functions =====

// Open modal
function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscClose);
}

// Close modal
function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscClose);
}

// Close modal on ESC
function handleEscClose(event) {
  if (event.key === "Escape") {
    const openModalEl = document.querySelector(".modal_opened");
    if (openModalEl) closeModal(openModalEl);
  }
}

// Close modal when clicking overlay
function handleOverlayClose(event) {
  if (event.target.classList.contains("modal")) {
    closeModal(event.target);
  }
}

// Add overlay close listeners
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("mousedown", handleOverlayClose);
});

// ===== Create card element =====
function createCard(data) {
  // Clone template
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const likeBtn = cardElement.querySelector(".card__like-btn");
  const deleteBtn = cardElement.querySelector(".card__delete-btn");

  // Set content
  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  // Like button functionality
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("card__like-btn_like");
    likeBtn.style.opacity = likeBtn.classList.contains("card__like-btn_like")
      ? "1"
      : "0.4";
  });

  // Delete card
  deleteBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  // Image preview
  cardImage.addEventListener("click", () => {
    previewModalImageEl.src = data.link;
    previewModalImageEl.alt = data.name;
    previewModalCaptionEl.textContent = data.name;
    openModal(previewModal);
  });

  return cardElement;
}

// ===== Render initial cards =====
initialCards.forEach((cardData) => {
  cardsList.prepend(createCard(cardData));
});

// ===== Event Handlers =====

// Open Edit Profile modal
profileEditButton.addEventListener("click", () => {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  openModal(editModal);
});

// Edit profile form submit
editFormElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModal(editModal);
});

// Open New Post modal
cardModalButton.addEventListener("click", () => {
  cardNameInput.value = "";
  cardLinkInput.value = "";
  openModal(cardModal);
});

// New card form submit
cardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newCardData = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };

  cardsList.prepend(createCard(newCardData));
  closeModal(cardModal);
  cardForm.reset();
});

// Modal close buttons
editModalCloseBtn.addEventListener("click", () => closeModal(editModal));
cardModalCloseBtn.addEventListener("click", () => closeModal(cardModal));
previewModalCloseBtn.addEventListener("click", () => closeModal(previewModal));
