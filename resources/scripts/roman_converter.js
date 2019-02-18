//roman/decimal converter by eljotem 2019 => https://github.com/ElJotEm/Roman-Decimal_Converter

// TODO: mapping arrays
const roman = new Array;
const decimal = new Array;

// TODO: converter functions
function toArabic(inputStr) {};
function toRoman(inputNum) {};

function convert() {
    var input = document.getElementById('converterValue'),
        inputValue = input.value.replace(/[,]|[.]/g, '').trim(); //clean up input

    if(!paseInt(inputValue,10)) {
        for(var i = 0; i < inputValue.length; i++) {
            var char = inputValue.charAt(i).toUpperCase();
            if(!roman.includes(char)) {
                alert('Roman numerals can only be I, V, X, L, C, D or M');
                return false;
            }
        }

        input.value = toArabic(inputValue);
    } else {
        input.value = toRoman(inputValue);
    }
}
