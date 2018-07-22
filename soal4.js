function getReport(studentGrades) {
    // only code here..
    let tmp = []
    let objA = {}
    let objB = {}
    let objC = {}
    let failedA = []
    let failedB = []
    let failedC = []
    let passedA = []
    let passedB = []
    let passedC = []
    for(let i=0; i < studentGrades.length; i++){
        if(studentGrades[i].classCode == 'A'){
            objA.classCode = 'A'
            if(studentGrades[i].score < 70){
                failedA.push(studentGrades[i].name)
            }else{
                passedA.push(studentGrades[i].name)
            }

        }else if(studentGrades[i].classCode == 'B'){
            objB.classCode = 'B'
            if(studentGrades[i].score < 70){
                failedB.push(studentGrades[i].name)
            }else{
                passedB.push(studentGrades[i].name)
            }
        }else if(studentGrades[i].classCode == 'C'){
            objC.classCode = 'C'
            if(studentGrades[i].score < 70){
                failedC.push(studentGrades[i].name)
            }else{
                passedC.push(studentGrades[i].name)
            }
        }
    }
    objA.failed = failedA
    objA.passed = passedA

    objB.failed = failedB
    objB.passed = passedB

    objC.failed = failedC
    objC.passed = passedC
    tmp.push(objA)
    tmp.push(objB)
    tmp.push(objC)
    return tmp
}

var grades1 = [
    { name: 'John', score: 80, classCode: 'A' },
    { name: 'Mike', score: 60, classCode: 'B' },
    { name: 'Budi', score: 70, classCode: 'C' },
    { name: 'Siti', score: 50, classCode: 'A' },
    { name: 'Aaron', score: 10, classCode: 'A' },
    { name: 'Arthur', score: 10, classCode: 'C' },
    { name: 'Osass', score: 10, classCode: 'B' },
    { name: 'Yolo', score: 90, classCode: 'C' },
];

console.log(getReport(grades1));

  /*
  [
    { classCode: 'A', failed: [ 'Siti', 'Aaron' ], passed: [ 'John' ] },
    { classCode: 'B', failed: [ 'Mike', 'Osass' ], passed: [] },
    { classCode: 'C', failed: [ 'Arthur' ], passed: [ 'Budi', 'Yolo' ] },
  ]
  */
