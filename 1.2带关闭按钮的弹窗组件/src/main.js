import './style/base.css' ;
import './style/window.css' ;
import Window from './script/window.js' ;
import $ from 'jquery' ;

class App {
    constructor(){
        $('.btn').click(()=>{
            new Window().alert('welcome !') ;
        });
    }
}
new App() ;