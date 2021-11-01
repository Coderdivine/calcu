export function calcu(a){
  let arr = [1,2,3,4,5,6,7,6,7,8,9,10,11,12,13,14,15,16];
  let random = Math.random(a);
  let init = Math.floor(random * arr.length);
  let initS = init.toString()
  if(b){
    console.log(initS)
    return initS;
  }else{
    console.log("b is undefined...")
  }
  
}
export function calcu2(a){
  let arr = [1,2,3,4,5,6,7,6,7,8,9,10,11,12,13,14,15,16];
  let random = Math.random(a);
  let init = Math.floor(random * arr.length);
  
  if(a){
   var reduce = arr.reduce(x=> x * init)
   
   if( reduce !== 1 || reduce !== 0){
   return reduce.toString();
   }else{
    arr.reduce(x=> x * init)
   console.log(reduce);  
   }
  }else{
    console.log(" a is undefined...")
  }
  
}
export function calcu3(a){
  let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  let arr2 = ["a","b","c","d","e","f","g","h"];
  let random = Math.random(arr2[a]);
  let floors = Math.floor(random * arr2.length)
  console.log(random);
  console.log(floors)
  let xxhd = arr.reduce(x=> x * floors);
  var join = arr2[floors ] + arr2[floors ] + arr2[floors];
  var joins = arr2[floors ] + arr2[floors ] + arr2[floors];
  console.log(join);
  var returns = join + xxhd + joins;
  console.log(returns.toString())
  return returns.toString();
 }
 export function calcuD(){
   var d = new Date();
   var years =d.getFullYear();
   var month = d.getMonth();
   var days = d.getDay();
   var hours = d.getHours();
   var sec = d.getSeconds();
   var time = years + "/" + month + "/" + days + "/" + hours + "/" + sec;
   var getime = time.toString();
   console.log(time)
   return getime;
  
 }

