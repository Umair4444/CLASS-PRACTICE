function calculateTax(amount, format) {
    var calcAmount = amount * 1.2;
    return format ? "$".concat(calcAmount.toFixed(2)) : calcAmount;
}
var taxValue = calculateTax(100, false);
console.log(taxValue);
switch (typeof taxValue) {
    case "number":
        console.log("Number Value: ".concat(taxValue.toFixed(2)));
        break;
    case "string":
        console.log("String Value: ".concat(taxValue.charAt(0)));
        break;
    default:
        var value = taxValue;
        console.log("Unexpected type for value: ".concat(value));
}
var newResult = calculateTax(200, false);
var myNumber = newResult;
console.log("Number value: ".concat(myNumber.toFixed(2)));
console.log(typeof (myNumber));
