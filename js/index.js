import {
  radioPlayerInit
} from './radioPlayer.js';

import {
  videoPlayerInit
} from './videoPlayer.js';


import {
  musicPlayerInit
} from './musicPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

const deactivationPlayer = () => {
  temp.style.display = 'none';
  playerBtn.forEach(item => item.classList.remove('active'));
  playerBlock.forEach(item => item.classList.remove('active'));

  radioPlayerInit.stop();
  musicPlayerInit.stop();
  videoPlayerInit.stop();
};

playerBtn.forEach((btn, i) => btn.addEventListener('click', event => {
  deactivationPlayer();
  btn.classList.add('active');
  playerBlock[i].classList.add('active');
}));


radioPlayerInit();
musicPlayerInit();
videoPlayerInit();