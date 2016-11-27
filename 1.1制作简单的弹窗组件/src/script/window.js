import $ from 'jquery' ;
class Window{
    alert(content){
        var boundingBox = $('<div class="window_boundingBox"></div>') ;
        boundingBox.appendTo('body') ;
        boundingBox.html(content) ;
    }
    confirm(){

    }
    prompt(){

    }
}
export default Window ;