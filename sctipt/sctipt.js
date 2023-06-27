let modalwindow = document.querySelector ('.modal_window1');
let button_call = document.querySelector('.button');
let button_sent = document.querySelector('.button_sent');
let button_close = document.querySelector('.button_close');
let modal_inner1 = document.querySelector('.modal_inner2')

button_call.onclick = function() {
  modalwindow.classList.toggle ('modal_window');
};

button_sent.onclick = function() {
  modalwindow.classList.toggle ('modal_inner3');
};

button_close.onclick = function() {
  modalwindow.classList.remove ('modal_window');
};

