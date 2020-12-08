'use strict'

const anagrama = (req, res) => {
    try{
        let {string1, string2} = req.body;
        let cadena1 = clearString(string1);
        let cadena2 = clearString(string2);
        let flag = true;
        const array1 = cadena1.split("").sort();
        const array2 = cadena2.split("").sort();
        array1.forEach((element,i) => {
            if (element != array2[i]){
                flag = false;
            }
        });
        res.status(200).send({isAnagram : flag});

    }catch (err){
        res.status(500).send(err);
    }
}

const clearString = (sentence) => {
    return sentence.replace(/ /g, "").toLowerCase();
}

module.exports = {anagrama};