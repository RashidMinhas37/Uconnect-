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
              
}
console.log(`To day is ${day}`);




//incomplete

let hours;

switch(new Date().getDay()){
      case 0:
      hours = '00';
      break;
      case 1:
      hours = '1';
      break;
      case 2:
      hours = '2';
      break;
      case 3:
      hours = '3';
      break;
      case 4:
      hours = '4';
      break;
      case 5:
      hours = '5';
      break;
      case 6:
      hours = '6';
      break;
      case 7:
      hours = '7';
      break;
      case 8:
      hours = '8';
      break;
      case 9:
      hours = '9';
      break;
      case 10:
      hours = '10';
      break;
      case 11:
      hours = '11';
      break;
      case 12:
      hours = '12';
      break;

      };
console.log(`the time is ${hours}`)