/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  console.log('data', data)
  data.push('sayari')
  postMessage(data);
});
