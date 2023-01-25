# UseEffect and UseLayoutEffect

`useEffect`: a hook that helps us to perform mutations, subscriptions, timers, logging, and other side effects after all the components has been created.

- bất đồng bộ

- event (state, props change ...)
- render component
- ui update
- run useEffect

`useLayoutEffect`: đồng bộ

- event (state, props change...)
- render component
- run useLayoutEffect
- ui update

# UseState

`https://reactjs.org/docs/hooks-reference.html#lazy-initial-state`

const [count, setCount] = useState(0)

- function setCount sẽ nhận value or function
- trong setCount sẽ sử dụng thuật toán Object.is để check between current state and new state
- same value when:

  - both undefined
  - both null
  - both true or both false
  - both strings of the same lenght with the same characters in the same order
  - both the same object (meaning both values reference the same object in memory)
  - both numbers and (+both +0, -0, Nan, or both non-zero and both not Nan and both have the same value)

- if current state and new state same -> do not update state and do not re-render component
- trong setCount react có 1 hàm để xử lý re-render component nên ko thể update state directly
- before react 18, react will batch (gộp re-render khi update nhiều state) khi handle event
- from react 18, batching í enabled for all updates by default

# UseMemo and UseCallback

- useMemo: memoized value returned by the passed function (should use when function calculate heavy -> prevent function recalculate)
- useCallback: memoized callback function
- the passed function in useCallback can receive parameters but useMemo cann't
- use with React.memo to prevent child component re-render when props (is reference type) not change

#
