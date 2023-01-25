# DOM:

`DOM (Document Object Modal)`
The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js.

# Virtual DOM:

React uses Virtual DOM exists which is like a lightweight copy of the actual DOM(a virtual representation of the DOM). So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. It is exactly the same, but it does not have the power to directly change the layout of the document. Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen. So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM. You may still wonder, “Aren’t we doing the same thing again and doubling our work? How can this be faster?” Read below to understand how things will be faster using virtual DOM.

# How Virtual DOM actually make things faster:

When anything new is added to the application, a virtual DOM is created and it is represented as a tree. Each element in the application is a node in this tree. So, whenever there is a change in the state of any element, a new Virtual DOM tree is created. This new Virtual DOM tree is then compared with the previous Virtual DOM tree and make a note of the changes. After this, it finds the best possible ways to make these changes to the real DOM. Now only the updated elements will get rendered on the page again.

# How Virtual DOM helps React:

In react, everything is treated as a component be it a functional component or class component. A component can contain a state. Each time we change something in our JSX file or let’s put it in simple terms, whenever the state of any component is changed react updates its Virtual DOM tree. Though it may sound that it is ineffective but the cost is not much significant as updating the virtual DOM doesn’t take much time. React maintains two Virtual DOM at each time, one contains the updated Virtual DOM and one which is just the pre-update version of this updated Virtual DOM. Now it compares the pre-update version with the updated Virtual DOM and figures out what exactly has changed in the DOM like which components have been changed. This process of comparing the current Virtual DOM tree with the previous one is known as ‘diffing’. Once React finds out what exactly has changed then it updated those objects only, on real DOM. React uses something called batch updates to update the real DOM. It just means that the changes to the real DOM are sent in batches instead of sending any update for a single change in the state of a component. We have seen that the re-rendering of the UI is the most expensive part and React manages to do this most efficiently by ensuring that the Real DOM receives batch updates to re-render the UI. This entire process of transforming changes to the real DOM is called Reconciliation

This significantly improves the performance and is the main reason why React and its Virtual DOM are much loved by developers all around.

# Diffing algorithm:

- Two elements of different types will produce different trees
- The developer can hint at what elements will remain stable across renders with a key props. (This is why React is always warning us to including keys in our props)

Vanilla JavaScript is much slower because making each update to the actual DOM requires many calculations. The browser will need to re-render the CSS and the layouts and margins all over again, which can be cumbersome, especially if the application is big. The virtual DOM updates only the nodes that need to be updated.

Wherever possible in its comparison of DOM trees, React leaves elements of the same type alone and updates only their properties
When comparing two React DOM elements of the same type, React looks at the attributes of both, keeps the same underlying DOM node, and only updates the changed attributes

<div className='before' title='stuff' />
<div className='after' title='stuff' />

If an updated node is found to be of different type than that on the actual DOM, React will stop its search, ignore whatever else may be going on down below on the lower branches, and re-render the entire sub-tree. This process is significantly faster than checking each of the subtree’s branches for individual discrepancies.

# Reconciliation

https://javascript.plainenglish.io/reacts-diffing-algorithm-1a64cfefa4e0
https://reactjs.org/docs/reconciliation.html

https://blog.bitsrc.io/how-react-renders-a-component-on-screen-da97c56caf71

Virtual DOM: React renders JSX components to the Browser DOM, but keeps a copy of the actual DOM to itself. This copy is the Virtual DOM. We can think of it as the twin brother of the real or Browser DOM. The following actions take place in React:

React stores a copy of Browser DOM which is called Virtual DOM.
When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one.
Comparison is done by Diffing Algorithm. The cool fact is all these comparisons take place in the memory and nothing is yet changed in the Browser.
After comparing, React goes ahead and creates a new Virtual DOM having the changes. It is to note that as many as 200,000 virtual DOM nodes can be produced in a second.
Then it updates the Browser DOM with the least number of changes possible without rendering the entire DOM again. (Ref: Fig.1) This changes the efficiency of an application tremendously

How does this Virtual DOM compare itself to its previous version?

This is where the Diffing Algorithm comes into play. Some concepts used by this Algorithm are:

Two elements of different types will produce different trees.
Breadth-First Search (BFS) is applied because if a node is found as changed, it will re-render the entire subtree hence Depth First Approach is not exactly optimal. (Ref: Fig.2)
When comparing two elements of the same type, keep the underlying node as same and only update changes in attributes or styles.
React uses optimizations so that a minimal difference can be calculated in O(N) efficiently using this Algorithm.

In simple words, virtual DOM is just a copy of the original DOM kept in the memory and synced with the real DOM by libraries such as ReactDOM. This process is called Reconciliation.
Virtual DOM has the same properties that of the Real DOM, but it lacks the power to directly change the content of the screen.
Think of Virtual DOM as the blueprint of a machine, changes made to the blueprint doesn't reflects on the machine itself.
