"use strict"

const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j', '2', '3', '5', '6', '7'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
});

document.addEventListener('keydown', e => {
  if(e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if(whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if(blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

function playNote(key) {
  console.log(`Nota tocada: ${key.dataset.note}`)
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0.05;
  noteAudio.play();
  key.classList.add('active');
  setTimeout(() => {
    key.classList.remove('active')
  }, 400);
}