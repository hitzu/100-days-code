'use strict'

const sumaPares = (req, res) => {
    try{
        let {array1, k} = req.body;
        // let finalArray = [];
        // for (let i= 0; i<=array1.length; i++){
        //     for (let j = i+1; j <= array1.length; j++){
        //         if((array1[i]+array1[j])==k){
        //             finalArray.push([array1[i], array1[j]]);
        //         }
        //     }
        // }
        let finalArray = [];
        let savedNumber = {};
        array1.forEach((number,i) => {
            if (savedNumber[array1[i]] != undefined){
                finalArray.push(savedNumber[array1[i]], number);
                console.log(finalArray);
            }else{
                let auxNumber = k - number;
                savedNumber[auxNumber] = array1[i];
                console.log(savedNumber);
            }
        });
        res.status(200).send({array1 : finalArray});
    }catch(err){
        res.status(500).send(err);
    }
}

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

const order = (a, b) => a - b
const combinandoArray = async (req,res) => {
    try {
        // let array1 = req.body.array1;
        // let array2 = req.body.array2;
        let {array1, array2} = req.body;
        
        // const Arr1 = array1.sort(order);
        // const Arr2 = array2.sort(order);
        // console.log(Arr1);
        // console.log(Arr2);
        // const arrayNoDuplicates1 = new Set(Arr1);
        // const arrayNoDuplicates2 = new Set(Arr2);
        // console.log(arrayNoDuplicates1);
        // console.log(arrayNoDuplicates2);
        // const arregloSinDuplicados1 = [...arrayNoDuplicates1];
        // const arregloSinDuplicados2 = [...arrayNoDuplicates2];
        // console.log(arregloSinDuplicados1);
        // console.log(arregloSinDuplicados2);

        const newArray1 = [...new Set(array1.sort(order))];
        const newArray2 = [...new Set(array2.sort(order))];

        const combinedArray = [];
        while (newArray1.length && newArray2.length){
            if (newArray1[0] < newArray2[0]){
                combinedArray.push(newArray1.shift());
            }else{
                combinedArray.push(newArray2.shift());
            }
        }
        const finalArray = [...new Set(combinedArray.concat(newArray1).concat(newArray2))];
    
        res.status(200).send({mensaje : finalArray});
    } catch (error) {
        res.status(500).send(error)
    }
};

module.exports = {anagrama, combinandoArray, sumaPares};