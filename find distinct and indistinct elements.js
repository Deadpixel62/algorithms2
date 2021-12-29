let arr1 = [3, 1, 7, 9];
let arr2 = [2, 4, 1, 9, 3];
let array = [];

function ara() {
  let sum = 0;
  let trouv = 0;
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        trouv = 1;
      }
    }
    if (trouv == 0) {
      sum += arr1[i];
    }
    trouv = 0;
  }

   for (i = 0; i < arr2.length; i++) {
     for (j = 0; j < arr1.length; j++) {
       if (arr2[i] == arr1[j]) {
         trouv = 1;
       }
     }
     if (trouv == 0) {
       sum += arr2[i];
     }
     trouv = 0;
   }

  return sum;
}


console.log(ara());

let differentArray = [] ;

function different(){
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            
            if (arr1[i] == arr2[j]) {
              differentArray.push(arr1[i]);
            }
            
        }
        
    }
    return differentArray;
}




console.log(different());