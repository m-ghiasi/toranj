export function startCountdown(targetDate, elementId) {
  const element = document.getElementById(elementId);

  if (!element) {
    console.error("Element not found!");
    return;
  }

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      element.innerHTML = "Countdown Ended!";
      clearInterval(intervalId);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    element.innerHTML = `
    <div><span class="number">${seconds}</span><span class="time">ثانیه</span></div> <span class="dut">:</span> 
    <div><span  class="number">${minutes}</span><span class="time">دقیقه</span></div><span class="dut">:</span>
    <div><span  class="number">${hours}</span><span class="time">ساعت</span></div><span class="dut">:</span>
      <div><span  class="number">${days}</span><span class="time">روز</span></div> 
        
      `;
  }

  const intervalId = setInterval(updateCountdown, 1000);
  updateCountdown(); // Initialize immediately
}
