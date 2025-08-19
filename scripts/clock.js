const options = {
  timeZone: 'Europe/Belgrade',
  timeStyle: 'long',
  hour12: false
}
const formatter = new Intl.DateTimeFormat([], options)

setInterval(() => {
  document.querySelector('#time').innerText = formatter.format(new Date())
}, 1000)
