function sortDemo()
	{
	arr.sort()
	console.log(arr);
	}
var arr=[ 21,25,29,28,22,24,27,26,30];
sortDemo();


var arrSum=0;
   
   for(var i=0;i<arr.length;i++)
   {
       arrSum+=arr[i];  //find sum of array 
   } 



var e=arr[arr.length-1]; //find sequence end number 
	var sumOfN=(e*(e+1))/2; //find sum of end numbers 
	 console.log("1 to end numbers sum "+sumOfN);
var s=arr[0]-1;//find sequence start number
  var sumOf1=(s*(s+1))/2; //find sum of start numbers
     console.log("1 to start numbers sum "+sumOf1);
 
var sum=sumOfN-sumOf1;//find 1-n sequence sum
  console.log("1 to n numbers sum "+sum);
  
var missing=sum-arrSum;//find missing value
   console.log("A missing number in the sequence " + missing);
   
   if (missing==0)
   {
	 console.log("if start value missing = "+ s );
     console.log("or end value missing = " + (arr[arr.length-1]+1));	 
   }