import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const KEY_TO_LOCAL_STORAGE = "videoplayer-current-time";

player.on('timeupdate', throttle((data) => {
    localStorage.setItem(KEY_TO_LOCAL_STORAGE, data.seconds);
}, 1000));

player.setCurrentTime(localStorage.getItem(KEY_TO_LOCAL_STORAGE));
