import $ from 'jquery' ;
class Window{
    alert(content,handler){
        var boundingBox = $('<div class="window_boundingBox"></div>') ;
        boundingBox.appendTo('body') ;
        boundingBox.html(content) ;
        var btn = $('<input type ="button" value ="确定" />')
        btn.appendTo(boundingBox) ;
        btn.click(()=>{
            handler && handler() ;
            boundingBox.remove() ;
        }) ;
    }
    confirm(){

    }
    prompt(){

    }
}
export default Window ;