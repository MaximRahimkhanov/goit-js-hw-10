
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

iziToast.settings({
//   position: 'bottomLeft',
  timeout: 3000,
  progressBar: true
});


const formElem = document.querySelector('.form');

formElem.addEventListener('submit', (e) => {
  e.preventDefault();

  const delay = Number(formElem.elements.delay.value);
  const state = formElem.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  promise
  .then(result => iziToast.success({ message: result ,position: 'topCenter'
 }))
  .catch(error => iziToast.error({ message: error, position: 'topCenter'
 }));

});

