import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './index.css';

class Demo extends Component{
    funcThree = () => {
        console.log('箭头函数调用法')
    }
    funcDemo(num){
        console.log("111",num);
    }
    render(){
        return (
            <div id="demo">
                <h1 onClick={this.funcDemo.bind('111','222')}>Hello world</h1>
            </div>
        )
    }
}

ReactDom.render(
    <Demo />,
    document.getElementById("root")
)