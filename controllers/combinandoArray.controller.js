'use strict'

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

module.exports = {combinandoArray}