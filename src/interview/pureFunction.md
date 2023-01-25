# Side Effects

- if your component affects anything outside of itself, it's called a side effect
- side effects shouldn't happen during component render. Therefore they do not belong to the body of a functional component. React has a special place to them. It is inside useEffect

- bất kì những tương tác nào bên ngoài function

- Request Http
- Mutating data
- Console or printing to a screen
- Dom query/manipulation
- Math.random()
- Get current time

- In react, side effects usually belong inside event handlers. Event handlers are functions that React runs when you perform some action. Event though event handlers are defined inside your component, they don't run during rendering. So event handlers don't need to be pure

# Pure function

- does not change any objects or variables that existed before it was called
- is a function that always returns the same result if the same arguments are passed.
- does not depend on any state or data (variable outside function) change during a program's execution
- does not produce any observable side effects (`request network, input, output, data mutation`)

# Keep component pure

Writing pure functions takes some habit and discipline. But it also unlocks marvelous opportunities:

- Your components could run in a different environment—for example, on the server! Since they return the same result for the same inputs, one component can serve many user requests.
- You can improve performance by skipping rendering components whose inputs have not changed. This is safe because pure functions always return the same results, so they are safe to cache.
  = If some data changes in the middle of rendering a deep component tree, React can restart rendering without wasting time to finish the outdated render. Purity makes it safe to stop calculating at any time.
