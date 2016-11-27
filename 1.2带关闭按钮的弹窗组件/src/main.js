import './style/base.css' ;
import './style/window.css' ;
import Window from './script/window.js' ;
import $ from 'jquery' ;

class App {
    constructor(){
        $('.btn').click(()=>{
            new Window().alert('welcome !',()=>{
                alert('you click the button !') ;
                //console.info('you click the button ..') ;
            }) ;
        });
    }
}
new App() ;