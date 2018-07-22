digitsGrouper = (angka) => {
    let tmp = []
    let arr1 = []
    let arr2 = []
    let arr3 = []
    let arr4 = []
    for(let i =0; i < angka.length; i++){
        if(angka[i] < 10){
            arr1.push(angka[i])
        }else if(angka[i] > 10 && angka[i] < 100){
            arr2.push(angka[i])
        }else if(angka[i] > 100 && angka[i] < 1000){
            arr3.push(angka[i])
        }else if(angka[i] > 1000 && angka[i] < 10000){
            arr4.push(angka[i])
        }
    }
    tmp.push(arr1)
    tmp.push(arr2)
    tmp.push(arr3)
    tmp.push(arr4)
    // console.log(tmp)
    return tmp
}

console.log(digitsGrouper([1, 12, 13, 0, 88, 123, 456])); // [ [ 1, 0 ], [ 12, 13, 88 ], [ 123, 456 ], [] ]
console.log(digitsGrouper([1234, 8, 2, 543, 1, 11, 222, 7654])); // [ [ 8, 2, 1 ], [ 11 ], [ 543, 222 ], [ 1234, 7654 ] ]
console.log(digitsGrouper([1111, 1, 6, 5, 5, 555, 111, 11, 55, 5555])); // [ [ 1, 6, 5, 5 ], [ 11, 55 ], [ 555, 111 ], [ 1111, 5555 ] ]
console.log(digitsGrouper([])); // [ [], [], [], [] ]
console.log(digitsGrouper([0, 00, 000, 0000])); // [ [ 0, 0, 0, 0 ], [], [], [] ]
