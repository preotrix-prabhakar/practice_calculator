var str=''
var result='0'
var screen=document.querySelector('.screen p')

const display=()=>{
    screen.innerText=str;
}
const getInput=(event)=>{
    var input=event.target.innerText;
    
     if(input!=='=' &&  input !=='RESET' && input!=='DEL'){
        if(str.length===1 && str[0]==='0' && input !=='.'){
            str=''
        }
        str+=(input);
        display();
        console.log(str);
    }
    else if(input =='='){
        try {
            result = eval(str);
            if (Number.isInteger(result)) {
                str = result.toString(); 
            } else {
                str = Number(result).toFixed(2); 
            }
        screen.innerText=str
        console.log(`result is ${result}`)
        } catch {
            screen.innerText='Error';
            str='0';
        }
    }
    else if(input=='DEL'){
        
        str = str.slice(0, -1);
        if(str==='')str='0'
        display();
        console.log(str)

    }
    else if(input=='RESET'){
        str="0"
        display()
    }
}

var loop=document.querySelectorAll('button');
[...loop].forEach(element=>{
    element.addEventListener('click',(e)=>{getInput(e)})
} );


