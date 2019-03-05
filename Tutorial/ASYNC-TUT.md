
# Async and Await in JS

### Introduction
JavaScript evolved in a very short time from callbacks to promises (ES2015), and since ES2017 asynchronous JavaScript is even simpler with the async/await syntax.

Async functions are a combination of promises and generators, and basically, they are a higher level abstraction over promises. 

*Let me repeat: async/await is built on promises.*

### Why were async/await introduced?
They reduce the boilerplate around promises, and the “don’t break the chain” limitation of chaining promises.

When Promises were introduced in ES2015, they were meant to solve a problem with asynchronous code, and they did, but over the 2 years that separated ES2015 and ES2017, it was clear that *promises could not be the final solution*.

Promises were introduced to solve the famous *callback hell problem*, but they introduced complexity on their own, and syntax complexity.

They were good primitives around which a better syntax could be exposed to developers, so when the time was right we got *async functions*.

*They make the code look like it’s synchronous, but it’s asynchronous and non-blocking behind the scenes*.

### How it works
An async function returns a promise, like in this example:

```javascript
const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 3000)
  })
}
```

```javascript
const doSomething = async () => {
  console.log(await doSomethingAsync())
}
```
### A quick example
This is a simple example of async/await used to run a function asynchronously:

```javascript
const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 3000)
  })
}

const doSomething = async () => {
  console.log(await doSomethingAsync())
}
```

The above code will print the following to the browser console:
```javascript
console.log('Before')
doSomething()
console.log('After')
```

### The code is much simpler to read
As you can see in the example above, our code looks very simple. 
Compare it to code using plain promises, with chaining and callback functions.

And this is a very simple example, the major benefits will arise when the code is much more complex.

For example here’s how you would get a JSON resource, and parse it, using promises:

```javascript
const getFirstUserData = () => {
  return fetch('/users.json') // get users list
    .then(response => response.json()) // parse JSON
    .then(users => users[0]) // pick first user
    .then(user => fetch(`/users/${user.name}`)) // get user data
    .then(userResponse => userResponse.json()) // parse JSON
}

getFirstUserData()
```

And here is the same functionality provided using await/async:

```javascript
const getFirstUserData = async () => {
  const response = await fetch('/users.json') // get users list
  const users = await response.json() // parse JSON
  const user = users[0] // pick first user
  const userResponse = await fetch(`/users/${user.name}`) // get user data
  const userData = await userResponse.json() // parse JSON
  return userData
}

getFirstUserData()
```

### Multiple async functions in series
Async functions can be chained very easily, and the syntax is much more readable than with plain promises:

```javascript
const promiseToDoSomething = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 10000)
  })
}

const watchOverSomeoneDoingSomething = async () => {
  const something = await promiseToDoSomething()
  return something + ' and I watched'
}

const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
  const something = await watchOverSomeoneDoingSomething()
  return something + ' and I watched as well'
}

watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
  console.log(res)
})
```

Will print:
```javascript
I did something and I watched and I watched as well
```

### Easier debugging
Debugging promises is hard because the debugger will not step over asynchronous code.

Async/await makes this very easy because to the compiler it’s just like synchronous code.

### Immediately Invoked Functions
In many cases we will see IIF's who call an async function like here:

```javascript
(async () => {
  const browser = await myAsyncFunction.launch()
})()
```

> Original article by Flavio Copes - https://flaviocopes.com // Thank you :)

