//Ajax-Prototype-Callback


    document.getElementById("translate-form").addEventListener("submit",translateWord);
    //change
    document.getElementById("language").onchange=function(){
        ui.changeUI();
//UI work

    }
    const ui=new UI();

const translator = new Translate(document.getElementById("word").value ,"tr", document.getElementById("language").value);

function translateWord(e){

translator.changeWord(document.getElementById("word").value , document.getElementById("language").value);
  translator.translateWord(function(err,response){
    if(err){
        console.log(err)
    }else{
        ui.displayTranslate(response)
    }
  });


   e.preventDefault();
}
