import $ from 'jquery' ;
class Window{
    constructor(){
        this.cfg = {
            width:500,
            height:300
        } ;   
    }
    alert(content,handler,cfg){
        var boundingBox = $('<div class="window_boundingBox"></div>') ;
        boundingBox.appendTo('body') ;
        boundingBox.html(content) ;
        var btn = $('<input type ="button" value="确定">')
        btn.appendTo(boundingBox) ;
        btn.click(()=>{
            handler && handler() ;
            boundingBox.remove() ;
        }) ;
        Object.assign(this.cfg,cfg) ;

        console.info('this.cfg : ' , this.cfg) ;
        boundingBox.css({
            width:this.cfg.width +"px",
            height:this.cfg.height +"px",
            left:(this.cfg.x ||(window.innerWidth - this.cfg.width)/2 ) +"px",
            top:(this.cfg.y || (window.innerHeight - this.cfg.height )/2 ) + "px"
        }) ;

    }
    confirm(){

    }
    prompt(){

    }
}
export default Window ;