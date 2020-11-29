const assertEqual = require('../assertEqual');
const tail = require('../tail');


const result = tail(["Hello", "Lighthouse", "Labs"])
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"assertEqual("Lighthouse Labs", "Lighthouse Labs");
