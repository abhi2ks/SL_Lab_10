let num = 1;
console.log(num);
num = 30;
console.log(num);

const myFunction = () => {
  console.log("This is from myFunction!!");
};

myFunction();

const studentObject = {
  name: "Monirul",
  age: "20",
  rollNo: "18",
  address: {
    city: "Bongaigaon",
    state: "Assam",
  },
};
console.log("This is student object: ");
console.log(studentObject);

console.log(studentObject.address.city);
