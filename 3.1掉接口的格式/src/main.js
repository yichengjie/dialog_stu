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
            width:300,
            height:200,
            handler:callback,
            content
        } ;
        
        $('.btn').click(()=>{
            new Window().alert(cfg) ;
        });
    }
}
new App() ;