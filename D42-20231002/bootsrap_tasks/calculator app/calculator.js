let outscreen = document.getElementById("outputscreen");

    function display(num){
     outscreen.value +=num;
    }
    function calculate(){
        try{
            outscreen.value=eval (outscreen.value);
        }
        catch(err)
        {
            alert("invalid")
        }
    }
    function clr(){
        outscreen.value="";
    }

    function del(){
        outscreen.value=outscreen.value.slice(0,-1);
    }