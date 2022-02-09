# react props

React Props 类似于 JavaScript 中的函数参数和 HTML 中的属性。

要将 props 传递到组件中，使用与 HTML 属性相同的语法:

例子

在 Car 元素中添加一个“ brand”属性:

```javascript
const myelement = <Car brand="Form"/>;
```

组件接收参数以一个 props 对象:

例子

```javascript
function Car(props) {
    return <h2>I am a {props.brand}!</h2>;
}
```

## 传递数据

props 将数据作为参数从一个组件传递到另一个组件

例子

将 brand 属性从 Garage 组件发送到 Car 组件:

```javascript
function Car(props){
    return <h2> I am a {props.brand} ! </h2>;
}

function Garage(){
    return (
        <>
            <h1> Who lives in my garage?</h1>
            <Car brand="Ford"/>
        </>
    );
}

ReactDOM.render(<Garage/>, document.getElementById('root'));
```

如果要传一个变量，而不是像上面的例子那样传一个字符串，只需要把变量名放在花括号里:

例子

创建一个名为 carName 的变量，并将其发送到 Car 组件:


```javascript

function Car(props){
    return <h2>I am a {props.brand}!</h2>;
}

function Garage(){
    const carName = "Ford";
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <Car brand={ carName }>
        </>
    );
}

ReactDOM.render(<Garage/>, document.getElementById('root'));
```

或者如果是一个对象

创建一个名为 carInfo 的对象，并将其传递到 Car 组件:

```javascript
function Car(props) {
  return <h2>I am a { props.brand.model }!</h2>;
}

function Garage() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={ carInfo } />
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));
```