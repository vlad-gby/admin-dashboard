// ADD EVENT-LISTENERS
const buttons = document.querySelectorAll('.navbtn, .controls button');
const bell = document.querySelector('.notifications');

bell.addEventListener('mouseover', e => {
  bell.style.backgroundColor = 'rgb(226, 232, 240)';
});
bell.addEventListener('mouseout', e => {
  bell.style.backgroundColor = 'rgb(255, 255, 255)';
});

buttons.forEach(button => {
  button.addEventListener('mouseover', e => {
    button.style.backgroundColor = 'rgb(70, 175, 231)'
  });
  button.addEventListener('mouseout', e => {
    button.style.backgroundColor = 'rgb(26, 146, 211)'
  });
  button.addEventListener('mousedown', e => {
    button.style.backgroundColor = 'rgb(89, 197, 255)'
  });
  button.addEventListener('mouseup', e => {
    button.style.backgroundColor = 'rgb(70, 175, 231)'
  });
});


