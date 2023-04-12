// xttp.open('https://automarine25.ru/';)
// xttp.send()
// https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino/related?hl=ru
fetch("http://127.0.0.1:5500/index.html")
  .then((data) => data.text())
  .then((data) => {
    console.log(data);
  });
let a = new Promise((resolve, reject) => {
  fetch("http://127.0.0.1:5500/index.html").then((data) => {
    resolve(data.text());
  });
});
let b = new Promise((resolve, reject) => {
  fetch("http://127.0.0.1:5500/index.html").then((data) => {
    resolve(data.text());
  });
});
Promise.all([a, b]).then((data) => {
  console.log(data);
});
