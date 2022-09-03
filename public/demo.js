let birthYear=[1964, 2008, 1999, 2005, 1978, 1985, 1919];
console.log(birthYear.map(year=>2022-year));
let drive=birthYear.map(year=>2022-year>=17?`${year}: drive`:`${year}: drive`);
console.log(drive);
console.log("These are the birth years of people who can drive "+birthYear.filter(year=>2021-year>=18));
const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];
let findMe=(names,searchName)=>names.filter(name=>name===searchName)?"Not found":"Found";
console.log(findMe(names,"Daniel"));

function abracaFunction(yourFunc) {
    console.log(
      "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
    );
    const abracaArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const abracaOutput = yourFunc(abracaArray);
  
    return abracaOutput;
  }
  let yourFunc = (arr)=>{
    return arr.map((name)=>name.toUpperCase());
  }
    console.log(abracaFunction(yourFunc));

    let num=[1,2,3]
    console.log(num.map((num)=>num*2));