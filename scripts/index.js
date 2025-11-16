// ===== Initial Cards Data =====
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

// ===== Cards Container =====
const cardsList = document.querySelector(".cards__list");

// ===== Function to create a card element =====
function createCard(cardData) {
  const card = document.createElement("li");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${cardData.link}" alt="${cardData.name}" class="card__image" />
    <div class="card__content">
      <h2 class="card__title">${cardData.name}</h2>
      <button class="card__like-btn" aria-label="Like this card"></button>
    </div>
  `;

  // Add like button functionality
  const likeBtn = card.querySelector(".card__like-btn");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("card__like-btn_liked");
  });

  return card;
}

// ===== Render Initial Cards =====
initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData);
  cardsList.appendChild(cardElement);
});

// ===== Reusable Modal Functions =====
function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

// ===== Edit Profile Modal =====
const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileClose = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

editProfileBtn.addEventListener("click", () => {
  // Preload current info into input fields
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editProfileModal);
});

editProfileClose.addEventListener("click", () => closeModal(editProfileModal));

editProfileForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  if (
    !editProfileNameInput.value.trim() ||
    !editProfileDescriptionInput.value.trim()
  )
    return;

  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;

  closeModal(editProfileModal);
});

// ===== New Post Modal =====
const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostClose = newPostModal.querySelector(".modal__close-btn");
const addCardFormElement = newPostModal.querySelector(".modal__form");
const nameInput = newPostModal.querySelector("#caption");
const linkInput = newPostModal.querySelector("#image-input");

newPostBtn.addEventListener("click", () => openModal(newPostModal));
newPostClose.addEventListener("click", () => closeModal(newPostModal));

addCardFormElement.addEventListener("submit", (evt) => {
  evt.preventDefault();

  if (!nameInput.value.trim() || !linkInput.value.trim()) return;

  const newCardData = {
    name: nameInput.value,
    link: linkInput.value,
  };

  const newCardElement = createCard(newCardData);
  cardsList.prepend(newCardElement);

  addCardFormElement.reset();
  closeModal(newPostModal);
});
