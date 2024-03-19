// ADD EVENT-LISTENERS
const buttons = document.querySelectorAll('.navbtn, .controls button');
const roundBtn = document.querySelectorAll('.notifications, .star, .eye, .share');

roundBtn.forEach(button => {
  button.addEventListener('mouseover', e => {
    button.style.backgroundColor = 'rgb(226, 232, 240)';
  });
  button.addEventListener('mouseout', e => {
    button.style.backgroundColor = 'rgb(255, 255, 255)';
  });
  button.addEventListener('mousedown', e => {
    button.style.backgroundColor = 'rgb(206, 212, 220)';
  });
  button.addEventListener('mouseup', e => {
    button.style.backgroundColor = 'rgb(226, 232, 240)';
  });
});

buttons.forEach(button => {
  button.addEventListener('mouseover', e => {
    button.style.backgroundColor = 'rgb(70, 175, 231)'
  });
  button.addEventListener('mouseout', e => {
    button.style.backgroundColor = 'rgb(26, 146, 211)'
  });
  button.addEventListener('mousedown', e => {
    button.style.backgroundColor = 'rgb(79, 187, 245)'
  });
  button.addEventListener('mouseup', e => {
    button.style.backgroundColor = 'rgb(70, 175, 231)'
  });
});


