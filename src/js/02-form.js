const feedbackForm = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

checkStorage();
feedbackForm.addEventListener('input', fieldForm);
feedbackForm.addEventListener('submit', sendForm);

function checkStorage() {
  const localInfo = JSON.parse(localStorage.getItem(localStorageKey)) ?? '';
  feedbackForm.elements.email.value = localInfo.email || '';
  feedbackForm.elements.message.value = localInfo.message || '';
}

function fieldForm() {
  const formData = {
    email: feedbackForm.elements.email.value.trim(),
    message: feedbackForm.elements.message.value.trim(),
  };

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function sendForm(event) {
  event.preventDefault();

  const email = feedbackForm.elements.email.value.trim();
  const message = feedbackForm.elements.message.value.trim();

  if (!email || !message) {
    alert('Please fill in the required fields');
    return;
  }

  const userInfo = { email: email, message: message };
  feedbackForm.reset();
  localStorage.clear();
}
