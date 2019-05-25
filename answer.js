document.getElementById('button').addEventListener('click', answer);

function answer() {
  const target = document.getElementById('answer');
  target.style.fontSize = '18pt';
  target.innerHTML = '42';
}
