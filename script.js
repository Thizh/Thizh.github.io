window['webgl-fluid'].default(document.querySelector('canvas'));
document.querySelector('.wrapper')
  .addEventListener('mousemove', event => {
    console.log('move');
    newEvent = new event.constructor(
      event.type, event);
    document.querySelector('canvas')
      .dispatchEvent(newEvent);
});
document.querySelector('button')
  .addEventListener('click', event => {
    console.log('button clicked');
});
