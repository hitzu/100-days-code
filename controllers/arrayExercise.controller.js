'use strict'

const anagrama = (req, res) => {
    try{
        let {string1, string2} = req.body;
        let cadena1 = clearString(string1);
        let cadena2 = clearString(string2);
        let flag = true;
        const cad1 = cadena1.split("").sort().join("");
        const cad2 = cadena2.split("").sort().join("");
        
        //array1.forEach((element,i) => {
          //  if (element != array2[i]){
            //    flag = false;
            //}
        //});
        if (cad1 != cad2){
            flag = false;
        }
        res.status(200).send({isAnagram : flag});

    }catch (err){
        res.status(500).send(err);
    }
}

const clearString = (sentence) => {
    return sentence.replace(/ /g, "").toLowerCase();
}

module.exports = {anagrama};