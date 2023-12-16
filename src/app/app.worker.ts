/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  if (data.type === 'one') {
    one(data.data)
  }
  if (data.type === 'two') {
    two(data.data)
  }
});

function one(data: any) {
  data.push('anu')
  postMessage({ type: 'one', data: data });
}

function two(data: any) {
  data['name'] = 'paul'
  postMessage({ type: 'two', data: data });
}
