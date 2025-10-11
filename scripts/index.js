// Edit Profile Modal

const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileClose = editProfileModal.querySelector(".modal__close-btn");

// Open Edit Profile Modal
editProfileBtn.addEventListener("click", () => {
  editProfileModal.classList.add("modal_is-opened");
});

// Close Edit Profile Modal
editProfileClose.addEventListener("click", () => {
  editProfileModal.classList.remove("modal_is-opened");
});

// New Post Modal

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostClose = newPostModal.querySelector(".modal__close-btn");

// Open New Post Modal
newPostBtn.addEventListener("click", () => {
  newPostModal.classList.add("modal_is-opened");
});

// Close New Post Modal
newPostClose.addEventListener("click", () => {
  newPostModal.classList.remove("modal_is-opened");
});
