var counter = 0;
function increase() {
  counter++;
  document.getElementById("counter").innerHTML = counter;
}
function decrease() {
  counter--;
  document.getElementById("counter").innerHTML = counter;
}
function reset() {
  counter = 0;
  document.getElementById("counter").innerHTML = counter;
}