const refs = {
  startBtnEl: document.querySelector('button[data-start]'),
  stopBtnEl: document.querySelector('button[data-stop]'),
  bodyEl: document.querySelector('body'),
};

let intervalId = null;

refs.stopBtnEl.setAttribute('disabled', '');

refs.startBtnEl.addEventListener('click', onClickStart);
refs.stopBtnEl.addEventListener('click', onClickstop);

function onClickStart() {
  console.log('start');
  refs.startBtnEl.setAttribute('disabled', '');
  refs.stopBtnEl.removeAttribute('disabled');
  intervalId = setInterval(() => {
    changeBackroundColor(getRandomHexColor());
  }, 1000);
}

function onClickstop() {
  console.log('stop');
  refs.startBtnEl.removeAttribute('disabled');
  refs.stopBtnEl.setAttribute('disabled', '');
  clearInterval(intervalId);
}

function changeBackroundColor(callback) {
  refs.bodyEl.style.backgroundColor = `${callback}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
