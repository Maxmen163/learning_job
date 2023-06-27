let modalwindow = document.querySelector ('.modal_window1');
let button_call = document.querySelector('.button');
let button_sent = document.querySelector('.button_sent1');
let button_close = document.querySelector('.button_close1');
let modal_inner = document.querySelector ('.modal_inner1');
let textarea_1 = document.querySelector('.textarea_11');



button_call.onclick = function() {
  modalwindow.classList.toggle('modal_window');

};

button_sent.onclick = function() {
  modalwindow.classList.toggle ('modal_inner3');
};


button_close.onclick = function() {
  modalwindow.classList.add ('hide');
};
