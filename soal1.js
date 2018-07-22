drawThreeColsBox = (idx)=>{
    let angka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    let tmp = []
    let arr1 = []
    let arr2 = []
    let arr3 = []
    let arr4 = []
    let arr5 = []
    for(let i =0; i <angka.length; i++){
        // for(let j=0; j<; j++){

            if(angka[i] <= 3){
                arr1.push(String(angka[i]))
                arr1.push(' ')
                // tmp += String(angka[i])
            }else if(angka[i] <= 6){
                arr2.push(String(angka[i]))
                arr2.push(' ')
            }else if(angka[i] <= 9){
                arr3.push(String(angka[i]))
                arr3.push(' ')
            }else if(angka[i] <= 12){
                arr4.push(String(angka[i]))
                arr4.push(' ')
            }else if(angka[i] <= 15){
                arr5.push(String(angka[i]))
                arr5.push(' ')
            }
        // }
        // tmp += '\n'
    }
    tmp.push(arr1)
    tmp.push(arr2)
    tmp.push(arr3)
    tmp.push(arr4)
    tmp.push(arr5)
    if(idx == '1'){
        console.log(tmp[0].join(''))
    }else if(idx == '2'){
        console.log(tmp[0].join(''))
        console.log(tmp[1].join(''))
    }else if(idx == '3'){
        console.log(tmp[0].join(''))
        console.log(tmp[1].join(''))
        console.log(tmp[2].join(''))
    }else if(idx == '3'){
        console.log(tmp[0].join(''))
        console.log(tmp[1].join(''))
        console.log(tmp[2].join(''))
    }else if(idx == '4'){
        console.log(tmp[0].join(''))
        console.log(tmp[1].join(''))
        console.log(tmp[2].join(''))
        console.log(tmp[3].join(''))
    }else if(idx == '5'){
        console.log(tmp[0].join(''))
        console.log(tmp[1].join(''))
        console.log(tmp[2].join(''))
        console.log(tmp[3].join(''))
        console.log(tmp[4].join(''))
    }
}

drawThreeColsBox(1)
console.log("======")
drawThreeColsBox(5)