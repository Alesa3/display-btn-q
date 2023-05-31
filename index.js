const button = document.createElement('button');
button.innerHTML = 'Click me for a random number!';

const randomNumberText = document.createElement('span');

button.addEventListener('click', function() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
  randomNumberText.innerHTML =  '<br>' + randomNumber;
});

document.body.append(button, randomNumberText);
