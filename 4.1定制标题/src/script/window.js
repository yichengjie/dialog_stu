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
        var str =  `<div class="window_boundingBox">
                        <div class="window_header">${CFG.title || '提示'}</div>
                        <div class="window_body">${CFG.content}</div>
                        <div class="window_footer">
                           <input type="button" value="确定"/>
                        </div>
                  </div>` ;
        console.info('str : ' + str) ;
        var boundingBox = $(str) ;
        boundingBox.appendTo('body') ;
        var btn = boundingBox.find('.window_footer input') ;
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