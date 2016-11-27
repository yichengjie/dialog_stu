import './style/base.css' ;
import './style/window.css' ;
import Window from './script/window.js' ;
import $ from 'jquery' ;
function callback (){
    console.info('you click the btn') ;
}
class App {
    constructor(){
        let content ="welcome !" ;
        let cfg = {
            width:200,
            height:150,
            hasCloseBtn:true,
            handler4AlertBtn(){
                console.info('你点击了确定按钮') ;
            },
            handler4CloseBtn(){
                console.info('你点击了关闭按钮') ;
            },
            content
        } ;
        
        $('.btn').click(()=>{
            new Window().alert(cfg) ;
        });
    }
}
new App() ;