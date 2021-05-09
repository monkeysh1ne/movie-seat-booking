const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')

const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

let ticketPrice = +movieSelect.value //+ converts type to 'number' also, 'let' not 'const' as value of var is changed in script

// update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected')

  // store to local storage for persistence
  const seatsIndex = [...selectedSeats].map(function (seat) {
    return [...seats].indexOf(seat)
  })

  console.log(seatsIndex)

  const selectedSeatsCount = selectedSeats.length

  count.innerText = selectedSeatsCount
  total.innerText = selectedSeatsCount * ticketPrice
}

// movie select event
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value
  updateSelectedCount()
})

// seat click event
container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected') // adds or removes additional class 'selected'
    updateSelectedCount()
  }
})
