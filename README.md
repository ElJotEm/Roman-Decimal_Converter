# Roman/Decimal Converter

A simple function which converts roman numerals to decimals and vise versa.

This project is a practice task made by [eljotem](http://eljotem.de) 2019.



## Explanation

The basic rules for converting decimals to roman numerals are as following:

### General mapping
I = 1;

V = 5;

X = 10;

L = 50;

C = 100;

D = 500;

M = 1000;

### No more than three letters

A special rule for roman numerals is to not use more than three of the same letters. As of this rule, for every 4\*10^n and 9\*10^n decimals, special cases are needed.

### Subtractive Principle

Regarding the "No more than three letters" rule, those special cases are created by subtracting the respectively 1\*10^n roman numeral from the numeral representing the 5\*10^n or 10\*10^n decimal. Subtraction is symbolized by using the lower worth numeral before the higher one.

**Example:**

4 = 5 - 1 => 4 = IV;
90 = 100 - 10 => 90 = XC;

Although here is one more rule: Only the numerals that are max. 2 numerals apart can be subtracted. So one can subtract I from V or X, but not from L, C, D or M.

### High values

The common known roman numerals are only useful for decimal values up to 3.999. Higher values were represented by reusing the numerals but with a dash on top or round brackets around. This enables to count up to 

### Convert the rules to code

To achieve a working converter, a mapping between all roman numeral cases and their respective decimals is needed. As of the subtractive principle, there are also special cases, which can be simply added to the mapping to simplify the code. The mapping can be done in at least two ways:

1. Create an object with keys (decimals) & values (roman numerals) as mapping and iterate over the keys to get the needed values or vise versa. Problem here is, you need one object per function (for romanising, keys must be decimals. for deromanising, keys must be the roman numerals).

2. Create two arrays as constants for all functions to use. One array containing the decimals, the other one the roman numerals with matching indices. Iterate over one of these to fetch the index and use the item with the same index of the other array.

3. Use switch cases to map the roman numerals to arabic

### Final code result

For the final code of the converter I decided to stick to solution #2. This is very easy to implement and very easy to read. Using cases is kind of a messy way. Using arrays gives also the possibility to alter the arrays if necessary (not in this case, but for general use). The User Interface is kept clear and simple by adding a text input field for the user to enter decimals or roman numerals between 1 - 3.999 and a button to convert the value of the text field. Error messages inform the user about invalid inputs.
