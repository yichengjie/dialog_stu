import './style/base.css' ;
import './style/window.css' ;
import Window from './script/window.js' ;
import $ from 'jquery' ;

class App {
    constructor(){
        let cfg = {
            width:300,
            height:200
        } ;
        function callback (){
            console.info('you click the btn') ;
        }
        $('.btn').click(()=>{
            new Window().alert('welcome !',callback,cfg) ;
        });
    }
}
new App() ;