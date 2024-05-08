function addToDisplay(value) {
  // Tab to edit
  const display = document.getElementById('display').value += value
}

function calculate() {
  // Tab to edit
  display = document.getElementById('display').value
  try {
    display = eval(display)
  document.getElementById('display').value = display}
  catch (error) {
    document.getElementById('display').value = 'Error'
  }
}