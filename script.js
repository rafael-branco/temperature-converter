function calculate(from, to, value){

    if(from == 'celsius' && to == 'fahrenheit'){

        return (value * 1.8) + 32;

    }else if(from == 'celsius' && to == 'kelvin'){

        return value + 273.15;

    }else if(from == 'fahrenheit' && to == 'celsius'){

        return (value - 32) / 1.8;

    }else if(from == 'fahrenheit' && to == 'kelvin'){

        return ((value - 32) * (5/9)) + 273.15

    }else if(from == 'kelvin' && to == 'celsius'){

        return value - 273.15;

    }else if(from == 'kelvin' && to == 'fahrenheit'){

        return ((value - 273.15) * 1.8) + 32;
        
    }else{

        return value;
    
    }


}

function unit(option){
    if(option == 'fahrenheit'){
        return 'ºF';
    }else if(option == 'celsius'){
        return 'ºC';
    }else if(option == 'kelvin'){
        return 'K';
    }else{
        return '';
    }
}


function convert(){

    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;

    let value = document.getElementById('value').value;
    let resultElement = document.getElementById('result');

    document.getElementById('span-from').innerHTML = unit(from);
    document.getElementById('span-to').innerHTML = unit(to);


    
    if(value != ''){

       let result = calculate(from, to, parseFloat(value));

       resultElement.value = result;

    }else{
        resultElement.value = '';
    }

    

}