let obj1 = {name : "person", age :5};
 let obj2 = {age : 5, name : "person"}; 
 let keys1 = Object.keys(obj1)
 let keys2 = Object.keys(obj2)
 const flag= true
 if(keys1.length== keys2.length){
    console.log("lengths are same")
 }else{
    flag= false
 }
