import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
};

refs.formEl.addEventListener('submit', onClickFormBtn);

function onClickFormBtn(e) {
  e.preventDefault();
  let delays = Number(refs.formEl.elements.delay.value);
  let step = Number(refs.formEl.elements.step.value);
  let amount = Number(refs.formEl.elements.amount.value);
  for (let i = 1; i <= amount; i++) {
    createPromise(i, delays)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delays += step;
  }
  refs.formEl.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}