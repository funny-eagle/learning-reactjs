# React Components

Components 像方法一样返回HTML元素。

Components 是独立的、可重用的。它们的作用与js function 类似，但是独立工作并返回 HTML。

Components 有两种类型，Class Components 和 Function Compoments。

> 在较老的React中，你可能会发现主要使用的是Class组建。现在建议使用Function组件和Hooks，它们是在React16.8中添加的。


React组件的名称必须以大写字母开头。

### Class Component

类组件必须包含extends React.Component 语句。这个语句创建一个React.Component的继承者，可以访问React.Component的方法。

组件还需要一个render()方法，该方法返回HTML。

创建一个名为Car的类组件：

```javascript

class Car extends React.Component {

    render(){
        return <h2>Hi, I am a Car!</h2>;
    }
}
```

### Function Component

Function 组件也返回HTML，它的行为与类组件非常类似，但是Function组件可以用更少的代码实现，更容易理解。

创建一个名为Car的Function组件

```javascript
function Car(){
    return return <h2>Hi, I am a Car!</h2>;
}
```

### Rendering a Component

现在有一个名为Car的组件，返回一个<h2>元素。

在程序中使用这个组件爱你，语法类似HTML:`<Car/>`

```javascript
ReactDOM.render(<Car/>, document.getElementById('root'));
```

### Props

组件可以作为`props`传递，代表properties。

Props 类似于方法参数，可以将它们作为属性传递到组件中。

```javascript
function Car(props){
    return <h2>I am a {props.color} Car!</h2>
}

ReactDOM.render(<Car color="red"/>, document.getElementById('root'))
```

### Components in Components

我们可以引用其他组件中的组件

使用Garage组件中的Car组件
```javascript
function Car(){
    return <h2>I am a Car!</h2>
}

// 车库
function Garage(){
    return (
        <>
            <h1>Who lives in my Garage?</h1>
            <Car />
        </>
    );
}

ReactDOM.render(<Garage/>, document.getElementById('root'));
```

### Components in Files

React 都是关于重用代码，并且建议将组件拆分到单独的文件中。

为此，创建一个扩展名为js的新文件，并将代码放进去。


创建一个Car.js文件

```javascript
function Car(){
    return <h2>Hi , I am a Car!</h2>
}

export default Car;
```

为了能够使用Car组件，必须在程序import这个文件。

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Car from './Car.js';

ReactDOM.render(<Car/>, document.getElementById('root'));
```

