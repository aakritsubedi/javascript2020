//Array of numbers and name in random order
let numbers = [1,25,6,7,10,12,46,102,3,8,9,15];
let names= ['Suyog','Utsav','Aakrit','Sadikshya','Yukti','Amrit','Anish','Samir']

let sortAsc = no => {
  for(let i=0; i<no.length; i++){
    for(let j=0; j<no.length; j++){
      if(no[i] < no[j]){
        //swap
        let temp = no[i];
        no[i] = no[j];
        no[j] = temp;
      }
    }
  }

  console.log('In ascending order: ', no);
}

let sortDesc = no => {
  for(let i=0; i<no.length; i++){
    for(let j=0; j<no.length; j++){
      if(no[i] > no[j]){
        //swap
        let temp = no[i];
        no[i] = no[j];
        no[j] = temp;
      }
    }
  }

  console.log('In descending order: ', no);
}

let sortArray = (no, method, sortAsc, sortDesc) => {
  switch(method){
    case 'asc':
    case 'ASC':
      sortAsc(no);
      break;
    case 'desc':
    case 'DESC':
      sortDesc(no);
      break;
    default:
      return(`The ${method} is not supported. Use ASC/asc to sort the array in ascending order or DESC/desc to sort the array in descending order.`);
  }
}

sortArray(numbers, 'asc', sortAsc, sortDesc); //[ 1, 3, 6, 7, 8, 9, 10, 12, 15, 25, 46, 102 ]
sortArray(numbers, 'desc', sortAsc, sortDesc); //[ 102, 46, 25, 15, 12, 10, 9, 8, 7, 6, 3, 1 ]

sortArray(names, 'asc', sortAsc, sortDesc); //[ 'Aakrit','Amrit','Anish','Sadikshya','Samir','Suyog', 'Utsav','Yukti']
sortArray(names, 'desc', sortAsc, sortDesc); //[ 'Yukti','Utsav','Suyog','Samir','Sadikshya','Anish','Amrit','Aakrit' ]