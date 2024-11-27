const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
const input = form.querySelector('input[name = "email"]');
const textArea = form.querySelector('textarea[name = "message"]');
form.addEventListener('input', handleInput);
function handleInput(event) {
  if (event.target.name === 'email') {
    formData.email = event.target.value.trim();
  }
  if (event.target.name === 'message') {
    formData.message = event.target.value.trim();
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
window.addEventListener('load', function () {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    input.value = parsedData.email;
    textArea.value = parsedData.message;
    formData.email = parsedData.email;
    formData.message = parsedData.message;
  } else {
    input.value = '';
    textArea.value = '';
  }
});
form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  input.value = '';
  textArea.value = '';
});
