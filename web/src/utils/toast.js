// export default function toast({ type, text }) {
//   const event = new CustomEvent('addtoast', {
//     detail: {
//       type,
//       text,
//     },
//   });

//   document.dispatchEvent(event);
// }
import EventManager from '../lib/EventManager';

export const toastEventManager = new EventManager();

export default function toast({ type, text }) {
  toastEventManager.emit('addtoast', { type, text });
}
