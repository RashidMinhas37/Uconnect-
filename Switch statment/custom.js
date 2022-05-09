//SWITCH STATMENT

const color = 'red';


switch(color){
  case 'golden':
      console.log('color is golden');
      break;
 case 'red':
     console.log('color is red');
     break;
 case 'blue':
     console.log('color is blue');
     break;
 default :
    console.log('not any color is occur');
    break;
};


// date functiom for switch statment

let day;

switch(new Date().getTime()){
  case 0:
    day = 'sunday';
    break;
  case 1:
    day = 'monday';
    break;
  case 2:
    day = 'tuesday';
    break;
  case 3:
    day = 'wednesday';
    break;
  case 4:
    day = 'thursday';
     break;
  case 5:
     day = 'friday';
     break;
  case 6:
     day = 'saturday';
    break;
    default :
    console.log('invalid Day!');
    break;
              
}
console.log(`To day is ${day}`);


