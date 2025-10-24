// ===== Reusable Modal Functions =====
function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

// ===== Edit Profile Modal =====

// DOM Elements
const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileClose = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");

// Profile Elements
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

// Input Fields
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

// Open Edit Profile Modal
editProfileBtn.addEventListener("click", function () {
  // Preload current info into input fields
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;

  openModal(editProfileModal);
});

// Close Edit Profile Modal
editProfileClose.addEventListener("click", function () {
  closeModal(editProfileModal);
});

// Handle Edit Profile Form Submit
function handleEditProfileSubmit(evt) {
  evt.preventDefault();

  // ✅ Basic input validation
  if (
    !editProfileNameInput.value.trim() ||
    !editProfileDescriptionInput.value.trim()
  ) {
    return; // Stop if either input is empty
  }

  // Update profile info
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;

  closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

// ===== New Post Modal =====

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostClose = newPostModal.querySelector(".modal__close-btn");
const addCardFormElement = newPostModal.querySelector(".modal__form");
const nameInput = newPostModal.querySelector("#caption");
const linkInput = newPostModal.querySelector("#image-input");

// Open New Post Modal
newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

// Close New Post Modal
newPostClose.addEventListener("click", function () {
  closeModal(newPostModal);
});

// Handle New Post Form Submit
function handleAddCardSubmit(evt) {
  evt.preventDefault();

  console.log("Image Link:", linkInput.value);
  console.log("Caption:", nameInput.value);

  // ✅ Clear the form inputs
  addCardFormElement.reset();

  closeModal(newPostModal);
}

addCardFormElement.addEventListener("submit", handleAddCardSubmit);
