// Edit Profile Modal

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

// Open Edit Profile Modal
editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal_is-opened");
});

// Close Edit Profile Modal
editProfileClose.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

// New Post Modal

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostClose = newPostModal.querySelector(".modal__close-btn");
const addCardFormElement = newPostModal.querySelector(".modal__form");
const nameInput = newPostModal.querySelector("#caption");
const linkInput = newPostModal.querySelector("#image-input");

// Open New Post Modal
newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

// Close New Post Modal
newPostClose.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

// Handle Edit Profile form submission

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

// Handle New Post form submission
function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log("Image Link:", linkInput.value);
  console.log("Caption:", nameInput.value);

  newPostModal.classList.remove("modal_is-opened");
}

addCardFormElement.addEventListener("submit", handleAddCardSubmit);
