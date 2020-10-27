var num = 5;
var arr = [num];
var n = 9;
for(var i = 0; i < 5; i++) {
  do {
    var randNum = Math.round( -0.5 + Math.random()*(n+1) );
  } while( arr.indexOf(randNum) !== -1);
  arr.push(randNum);
}
arr.sort(function(){ return Math.random()-0.5 });
arr.sort()
alert(arr);

// splice examples 

//1 способ
arr.splice(1,1);
alert(arr);

//arr.splice(0,1);
//alert(arr);

//2 example
//arr.splice(1,2,"2","6");
//arr.sort()
//alert(arr);

//3 example
//let removed = arr.splice(0,2);
//alert(arr);
//alert(removed);

//4 example
//arr.splice(2, 0, "8", "4");
//arr.sort()
//alert( arr ); 
//5 example
//arr.splice(-1, 0, 3, 4);
//arr.sort()
//alert( arr ); 

//slice examples

//1 example
//alert( arr.slice(1, 3) );

//2 example
//alert( arr.slice(-2) );

//3 example
//alert(arr.slice())


//4 example

//alert(arr.slice(1,3))
//arr.splice(0,1)
//alert(arr)
//?????????????????
//5 example
//----------
