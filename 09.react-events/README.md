# react events

就像 HTML DOM 事件一样，React 可以根据用户事件执行操作。

React 与 HTML 具有相同的事件: click、 change、 mouseover 等。

## 添加事件

React 事件使用驼峰语法，`onClick`取代`onclick`，`onClick={shoot}`取代`onclick="shoot()"`。

React写法

```javascript
<button onClick={shoot}>Take the Shot!</button>
```
HTML写法

```javascript
<button onclick="shoot()">Take the Shot!</button>
```

例子

```javascript

function Football(){
    const shoot = () => {
        alert("Great shoot!");
    }

    return (
        <button onClick={shoot} >Tanke the shoot!</button>
    );
}

ReactDOM.render(<Football/>, document.getElementById('root'));
```

## 传递参数

若要将参数传递给事件处理程序，请使用箭头函数。

例子

```javascript
function Football(){
    const shoot = (a) => {
        alert(a);
    }

    return (
        <button onClick={shoot("Goal!")}>Take the shot!</button>
    );
}

ReactDOM.render(<Footbal/>, document.getElementById('root'));
```


