import $ from 'jquery' ;
class Window{
    alert(content,handler){
        var boundingBox = $('<div class="window_boundingBox"></div>') ;
        boundingBox.appendTo('body') ;
        boundingBox.html(content) ;
        var btn = $('<button type ="button">确定</button>')
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