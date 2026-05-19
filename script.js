function clockFunc() {
  const dateObject = new Date();

  // date
  document.querySelector('.day').textContent = `${dateObject.getDate()}, `;
  document.querySelector('.month').textContent =
    dateObject.getMonth() < 10 ? `0${dateObject.getMonth() + 1}, ` : `${dateObject.getMonth() + 1}, `;
  document.querySelector('.year').textContent = dateObject.getFullYear();

  // time
  let hour;

  if (dateObject.getHours() === 0) {
    hour = 12;
  } else if (dateObject.getHours() > 12) {
    hour = dateObject.getHours() < 10 ? `0${dateObject.getHours() - 12} :` : `${dateObject.getHours() - 12} :`
  } else {
    hour = dateObject.getHours() < 10 ? `0${dateObject.getHours()} :` : `${dateObject.getHours()} :`;
  }

  let m;

  if (dateObject.getHours() >= 12) {
    m = 'PM';
  } else {
    m = 'AM';
  }

  let minute = dateObject.getMinutes() < 10 ? `0${dateObject.getMinutes()} :` : `${dateObject.getMinutes()} :`;

  let second = dateObject.getSeconds() < 10 ? `0${dateObject.getSeconds()} :` : `${dateObject.getSeconds()} :`;

  document.querySelector('.hour').innerHTML = hour;
  document.querySelector('.minute').innerHTML = minute;
  document.querySelector('.second').innerHTML = second;
  document.querySelector('.am-pm').innerHTML = m;

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  document.querySelector('.weekday').innerHTML = weekDays[dateObject.getDay()];
}

clockFunc();
setInterval(() => clockFunc(), 1000);


// bar related code
setInterval(() => {
  let startBarBySecond = new Date().getSeconds() + 1;
  let progressPerSecond = startBarBySecond * (100 / 60);
  const bar = document.querySelector('#bar div');
  bar.style.width = `${progressPerSecond}%`;
}, 1000);