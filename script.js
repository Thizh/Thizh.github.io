window['webgl-fluid'].default(document.querySelector('canvas'));
document.querySelector('.wrapper')
  .addEventListener('mousemove', event => {
    newEvent = new event.constructor(
      event.type, event);
    document.querySelector('canvas')
      .dispatchEvent(newEvent);
});

document.querySelector('.wrapper')
  .addEventListener('touchmove', event => {
    newEvent = new event.constructor(
      event.type, event);
    document.querySelector('canvas')
      .dispatchEvent(newEvent);
});
