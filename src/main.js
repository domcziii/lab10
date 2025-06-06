import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
const response = fetch('<https://bhkmazgvcrgqejvvmqmy.supabase.co>', {
 headers: {
 apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoa21hemd2Y3JncWVqdnZtcW15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NTM5NjAsImV4cCI6MjA2MzIyOTk2MH0.7PT8Y-oEaOLRjMUz2Vc4IL7Mh1bGNzLqK-2k1lx98Lk',
 },
});
console.log(response);

setupCounter(document.querySelector('#counter'))
