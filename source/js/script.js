// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import TextAnimation from './modules/text-animation';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init()

new TextAnimation(`.rules__lead p`, {
  delay: 0.02,
  speed: 0.50,
  timingFunction: `ease`,
});

new TextAnimation(`.intro__label`, {
  delay: 0.02,
  speed: 0.50,
  timingFunction: `ease`,
});

window.onload = () => {
  document.body.classList.add(`loaded`);
};
