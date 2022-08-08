import { knock, pikachuSound } from './audio.js';

const pikachu = () => {
  const data = './images/pikachu.gif';

  const shock = document.createElement('div');
  const img = new Image();
  img.src = data;
  img.style.pointerEvents = 'none';
  img.style.width = '250px';
  img.style.height = '149px';
  img.style.transition = '1s all';
  img.style.position = 'fixed';
  img.style.left = 'calc(50% - 125px)';
  img.style.bottom = '-149px';
  img.style.zIndex = 999999;

  document.body.appendChild(img);

  window.setTimeout(function () {
    img.style.bottom = '0px';
  }, 50);

  window.setTimeout(function () {
    shock.style.width = '100%';
    shock.style.height = '100%';
    shock.style.left = 0;
    shock.style.top = 0;
    shock.style.position = 'fixed';
    shock.style.zIndex = 9999999;
    shock.style.background = '#fffb95';
    shock.style.opacity = 0;

    document.body.appendChild(shock);

    for (let x = 0; x < 81; x++) {
      (function (x) {
        window.setTimeout(function () {
          if (x % 2 === 0) {
            shock.style.opacity = 0;
          } else {
            shock.style.opacity = 0.3;
          }
        }, x * 25);
      })(x);
    }
  }, 2500);

  window.setTimeout(function () {
    img.style.bottom = '-149px';
  }, 4300);
  window.setTimeout(function () {
    img.parentNode.removeChild(img);
    shock.parentNode.removeChild(shock);
  }, 5400);
  const sound = new Audio('data:audio/mp3;base64,' + pikachuSound);
  sound.play();
};

const sponge = () => {
  const data =
    'https://weichiachang.github.io/easter-eggs-mobile/images/spongebob.gif';

  const img = new Image();
  img.src = data;
  img.style.pointerEvents = 'none';
  img.style.width = '374px';
  img.style.height = '375px';
  img.style.transition = '6s all';
  img.style.position = 'fixed';
  img.style.right = '-374px';
  img.style.bottom = 'calc(-50% + 320px)';
  img.style.zIndex = 999999;

  document.body.appendChild(img);

  window.setTimeout(function () {
    img.style.right = 'calc(50% - 187px)';
  }, 50);

  window.setTimeout(function () {
    img.style.right = 'calc(100% + 375px)';
  }, 4300);
  window.setTimeout(function () {
    img.parentNode.removeChild(img);
  }, 7300);
};

const bicente = () => {
  const data = '/images/bice.gif';

  const img = new Image();
  img.src = data;
  img.style.width = '300px';
  img.style.height = '250px';
  img.style.transition = '1.1s all';
  img.style.position = 'fixed';
  img.style.left = 'calc(50% - 125px)';
  img.style.bottom = '-149px';
  img.style.zIndex = 999999;

  document.body.appendChild(img);

  window.setTimeout(function () {
    img.style.bottom = '0px';
  }, 50);

  window.setTimeout(function () {
    img.style.bottom = '-149px';
  }, 1700);
  window.setTimeout(function () {
    img.parentNode.removeChild(img);
    shock.parentNode.removeChild(shock);
  }, 1900);

  const sound = new Audio('data:audio/mp3;base64,' + knock);
  setTimeout(() => {
    sound.play();
  }, 550);
};

const koggy = () => {
  const data =
    'https://weichiachang.github.io/easter-eggs-mobile/images/koggy.gif';
  const img = new Image();
  img.src = data;
  img.style.pointerEvents = 'none';
  img.style.width = '250px';
  img.style.height = '149px';
  img.style.transition = '1s all';
  img.style.position = 'fixed';
  img.style.left = 'calc(50% - 125px)';
  img.style.bottom = '-149px';
  img.style.zIndex = 999999;

  document.body.appendChild(img);

  window.setTimeout(function () {
    img.style.bottom = '0px';
  }, 50);

  window.setTimeout(function () {
    img.style.bottom = '-149px';
  }, 4300);
  window.setTimeout(function () {
    img.parentNode.removeChild(img);
    shock.parentNode.removeChild(shock);
  }, 5400);
};

const boku = () => {
  const data = '/images/boku.gif';
  const img = new Image();
  img.src = data;
  img.style.pointerEvents = 'none';
  img.style.width = '350px';
  img.style.height = '500px';
  img.style.transition = '4s all linear';
  img.style.position = 'fixed';
  img.style.right = '-400px';
  img.style.bottom = 'calc(-30% + 330px)';
  img.style.zIndex = 999999;

  document.body.appendChild(img);

  window.setTimeout(function () {
    img.style.right = 'calc(100% + 500px)';
  }, 50);

  window.setTimeout(function () {
    img.parentNode.removeChild(img);
  }, 6000);
};

const nyancat = () => {
  const data = '/images/nyancat.gif';
  const img = new Image();
  img.src = data;
  img.style.pointerEvents = 'none';
  img.style.width = '228px';
  img.style.height = '228px';
  img.style.transition = '7s all linear';
  img.style.position = 'fixed';
  img.style.left = '-400px';
  img.style.bottom = 'calc(-30% + 330px)';
  img.style.zIndex = 999999;

  document.body.appendChild(img);

  window.setTimeout(function () {
    img.style.left = 'calc(100% + 500px)';
  }, 50);

  window.setTimeout(function () {
    img.parentNode.removeChild(img);
  }, 6000);
};

const handsome = () => {
  const data = './images/handsome.gif';
  const img = new Image();
  img.src = data;
  img.style.pointerEvents = 'none';
  img.style.width = '350px';
  img.style.height = '350px';
  img.style.transition = '6s all linear';
  img.style.position = 'fixed';
  img.style.left = '-400px';
  img.style.bottom = 'calc(-10% + 350px)';
  img.style.zIndex = 999999;

  document.body.appendChild(img);

  window.setTimeout(function () {
    img.style.left = 'calc(100% + 500px)';
  }, 50);

  window.setTimeout(function () {
    img.parentNode.removeChild(img);
  }, 6000);
};

const allMight = () => {
  const data = './images/all.gif';

  const img = new Image();
  img.src = data;
  img.style.pointerEvents = 'none';
  img.style.width = '650px';
  img.style.height = '500px';
  img.style.transition = '1s all';
  img.style.position = 'fixed';
  img.style.left = 'calc(50% - 250px)';
  img.style.bottom = '-600px';
  img.style.zIndex = 999999;

  document.body.appendChild(img);

  window.setTimeout(function () {
    img.style.bottom = '0px';
  }, 30);

  window.setTimeout(function () {
    img.style.bottom = '-600px';
  }, 2900);
  window.setTimeout(function () {
    img.parentNode.removeChild(img);
    shock.parentNode.removeChild(shock);
  }, 3100);
};

const listenKeyPress = () => {
  let keysPressed = [];
  const MAX_KEY_REGISTER = 8;
  const easterEggs = [
    {
      keySequence: 'pikachu',
      animation: pikachu,
    },
    {
      keySequence: 'sponge',
      animation: sponge,
    },
    {
      keySequence: 'koggy',
      animation: koggy,
    },
    {
      keySequence: 'boku',
      animation: boku,
    },
    {
      keySequence: 'handsome',
      animation: handsome,
    },
    {
      keySequence: 'allmight',
      animation: allMight,
    },
    {
      keySequence: 'bicente',
      animation: bicente,
    },
    {
      keySequence: 'nyancat',
      animation: nyancat,
    },
  ];

  window.addEventListener('keyup', (e) => {
    keysPressed.push(e.key.toLowerCase());
    keysPressed.splice(0, keysPressed.length - MAX_KEY_REGISTER);

    const query = keysPressed.join('');

    const filteredItems = easterEggs.find((egg) =>
      query.match(`${egg.keySequence}`, 'ig')
    );

    if (!!filteredItems) {
      filteredItems.animation();
      keysPressed = [];
    }
  });
};

listenKeyPress();
