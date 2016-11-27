import $ from 'jquery' ;
class Window{
    constructor(){
        this.cfg = {
            width:500,
            height:300
        } ;   
    }
    alert(cfg){
        var CFG = Object.assign({},this.cfg,cfg) ;
        console.info('CFG : ' , CFG) ;
        var boundingBox = $('<div class="window_boundingBox"></div>') ;
        boundingBox.appendTo('body') ;
        boundingBox.html(CFG.content) ;
        var btn = $('<input type ="button" value="确定">')
        btn.appendTo(boundingBox) ;
        btn.click(()=>{
            CFG.handler && CFG.handler() ;
            boundingBox.remove() ;
        }) ;
        boundingBox.css({
            width:CFG.width +"px",
            height:CFG.height +"px",
            left:(CFG.x ||(window.innerWidth - CFG.width)/2 ) +"px",
            top:(CFG.y || (window.innerHeight - CFG.height )/2 ) + "px"
        }) ;

    }
    confirm(){

    }
    prompt(){

    }
}
export default Window ;