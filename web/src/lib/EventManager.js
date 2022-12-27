export default class EventManager {
  constructor() {
    this.listeners = {};
  }

  on(event, listener) {
    if (listener instanceof Function) {
      if (this.listeners[event]) {
        this.listeners[event].push(listener);
      } else {
        this.listeners = {
          [event]: [listener],
        };
      }
    } else {
      throw new Error('listener should be a function');
    }
  }

  emit(event, payload) {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event].forEach((listener) => {
      listener(payload);
    });
  }
}

const toastEvent = new EventManager();
toastEvent.on('addtoast', (event) => {
  console.log(event);
});

toastEvent.emit('addtoast', { type: 'danger', text: 'Toast message' });
