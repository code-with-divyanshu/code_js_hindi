// switch case statement

// syntax

// switch (key) {
//   case value:
//     break;

//   default:
//     break;
// }

const month = 12;

switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("March");
    break;
  case 12:
    console.log("December");
    break;

  default:
    console.log("Month is not recoginized   ");
    break;
}

// * break -> is  use to statement is match than break a code
// if not use break statement it excuted all code after code match expect default case
