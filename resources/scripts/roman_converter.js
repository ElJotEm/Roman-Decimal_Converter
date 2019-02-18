//roman/decimal converter by eljotem 2019 => https://github.com/ElJotEm/Roman-Decimal_Converter

const roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
const decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1]

function toArabic(inputStr) {
    var converted = 0;
    for (var i = 0; i <= decimal.length; i++) {
        while (inputStr.indexOf(roman[i]) === 0){
            converted += decimal[i];
            inputStr = inputStr.replace(roman[i],'');
        }
    }
    return converted;
}

function toRoman(inputNum) {
    var converted = '';
    for (var i = 0; i <= decimal.length; i++) {
        while (inputNum%decimal[i] < inputNum) {
            converted += roman[i];
            inputNum -= decimal[i];
        }
    }
    return converted;
}

function convert() {
    var input = document.getElementById('converterValue'),
        inputValue = input.value.replace(/[,]|[.]/g, '').trim();

    if(inputValue != parseInt(inputValue,10)) {
        for(var i = 0; i < inputValue.length; i++) {
            var char = inputValue.charAt(i).toUpperCase();
            if(!roman.includes(char)) {
                alert('Roman numerals can only be I, V, X, L, C, D or M');
                return false;
            }
        }
        input.value = toArabic(inputValue);
    } else if(inputValue < 4000 && inputValue > 0) {
        input.value = toRoman(inputValue);
    } else {
        alert('Values other than 1 to 3.999 are not supported for the common roman numerals.')
    }
}
