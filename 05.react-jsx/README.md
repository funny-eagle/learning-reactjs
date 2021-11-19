> https://www.w3schools.com/REACT/react_jsx.asp

## What is JSX

JSX stand for javascript XML.

JSX allows us to write HTML in React.

JSX makes it easier to write and add HTML in React

## Coding JSX

JSX allows us to write HTML elements in javascript and place them in the DOM without any `createElement()` and `appendChild()` methods.

JSX converts HTML tags into react elements.

you are not required to use JSX, but JSX makes it easier to write React applications.

here are two example. the first uses JSX, and the second does not:

### Example 1

```javascript
const element = <h1>I love JSX!</h1>;

ReactDOM.render(element, document.getElementById("root"));
```

### Example 2

```javascript
const element = React.createElement('h1', {}, 'I do not use JSX!');

ReactDom.render(element, document.getElementById("root"));
```
JSX is an extension of the javascript lanuage based on ES6, and is tanslated to regular javascript at runtime.


## Expressions in JSX

with JSX, you can write expressions inside curly braces `{ }`.

the expressions can be a react variable, or property, or any other valid javascript expression.

JSX will execute the expression and return the result:

### Example 1

```javascript
const element = <h1>React is {5 + 5} times better with JSX</h1>;
```

## Inserting a large block of HTML

to write HTML on muliple lines, put the HTML inside parentheses;

create a list with three list items:

```javascript
const element = (
    <ul>
        <li>Jason</li>
        <li>Funny</li>
        <li>Seven</li>
    </ul>
);
```

## one top level element

the HTML code must e wrapped in ONE top level element.

so if you like to write two paragraphs, you must put them inside a parent element, like `div` element.

> JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.

you can use a fragment looks like an empty HTML tag `<>...</>`instead.

```javascript
const myelement = (
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </>
);
```

## elements must be closed

JSX will throw an error if the HTML is not properly closed.

## attribute class = className

you are not allowed to use `class` reserved word in JSX, use attribute `className` instead.

### example

```javascript
const element = <h1 className="myclass">Hello, world!</h1>;
```

## conditions - if statements

react supports `if` statements, but not inside JSX.

to be able to use conditional statements in JSX, you should put the `if` statements outside of JSX, or you could use a ternary expression instead.

write `if` statements outside of the JSX code:

## example

write "hello" if x is less than 10, otherwise "goodbye":

```javascript
const x =5;
let text = "goodbye";
if (x < 10) {
    text = "hello";
}

const element = <h1>{text}</h1>;
```

use ternary expressions instead:

```javascript
const x = 5;

const element = <h1>{x<10 ? "hello" : "goodbye"}</h1>;
```
