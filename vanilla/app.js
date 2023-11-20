function submit(event, num) {

  const input = document.getElementsByClassName('input')[num];

  if (input.value != '') {

    if (event.key === 'Enter') {
      input.readOnly = true;

      input.classList.add('filled');

      localStorage.setItem(`input-${num}`, input.value);
    }
  }
}

function empty(num) {
  const input = document.getElementsByClassName('input')[num];

  if (input.value == '') {
    localStorage.setItem(`input-${num}`, input.value);
  } else if (input.value != '') {
    localStorage.setItem(`input-${num}`, input.value);
    input.classList.add('filled');
  }
} 


function doubleClick(num) {
  const input = document.getElementsByClassName('input')[num];
  input.readOnly = false;
  input.classList.remove('filled');
}

window.addEventListener('DOMContentLoaded', () => {
  for (let num = 0; num < 39; num++) {
    const input = document.getElementsByClassName('input')[num];
    const savedValue = localStorage.getItem(`input-${num}`);
    if (savedValue) {
      input.value = savedValue;
      input.classList.add('filled');
      input.readOnly = true;
    }
  }
  })


  document.body.addEventListener('keydown', (event) => {
    if (event.key === '!') {
      const inputElements = document.getElementsByClassName('input');
      for (let i = 0; i < inputElements.length; i++) {
        const input = inputElements[i];
        input.classList.remove('filled');
        input.value = '';
        input.readOnly = false;
        localStorage.setItem(`input-${i}`, input.value);
      }
    }
  });
  


