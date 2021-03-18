document.getElementById('button').addEventListener('click', displayMessage)

function displayMessage () {
  document.getElementById('paragraph').innerHTML = 'new text'
}