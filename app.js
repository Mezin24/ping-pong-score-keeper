const p1 = {
  score: 0,
  button: document.getElementById('p1btn'),
  display: document.getElementById('p1Score'),
}

const p2 = {
  score: 0,
  button: document.getElementById('p2btn'),
  display: document.getElementById('p2Score'),
}

const playToElement = document.getElementById('scoreSelect')
const resetBtn = document.getElementById('resetBtn')

let playTo = 5
let isGameOver = false

playToElement.value = playTo

playToElement.addEventListener('change', function () {
  resetGame()
  playTo = +this.value
})

p1.button.addEventListener('click', function () {
  if (isGameOver) return
  addOne(p1, p2)
})
p2.button.addEventListener('click', function () {
  if (isGameOver) return
  addOne(p2, p1)
})

resetBtn.addEventListener('click', resetGame)

function addOne(current, opponent) {
  current.score++

  if (current.score === playTo) {
    isGameOver = true
    current.button.disabled = true
    opponent.button.disabled = true
    current.display.classList.add('has-text-success')
    opponent.display.classList.add('has-text-danger')
  }
  current.display.textContent = current.score
}

function resetGame() {
  isGameOver = false
  ;[p1, p2].forEach((p) => {
    p.score = 0
    p.button.disabled = false
    p.display.classList.remove('has-text-success', 'has-text-danger')
    p.display.textContent = 0
  })
}
