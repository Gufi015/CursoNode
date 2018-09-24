const asyncLog = x => setImmediate(() => console.log(x))
[1, 2, 3].map(asyncLog); console.log('After map')