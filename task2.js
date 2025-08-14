/* Take n as input from user
sumAll(n) - print sum from 1 to n
productodd(n) - product of even num from 1 to n
fact2(n) for 1 to n
{if n is even--> calculate factorial
if n is odd--> skip since i is odd }
fact(n) print factorial of n*/
function sumAll(num)
{
    let sum =0;
    for(let i=1;i<=num;i++)
    {
        sum +=i;
    }
    return sum;
}
function productodd(num)
{
    let pd=1;
    for(let i=1;i<=num;i++)
    {
  if(i%2==0)
  {
      pd *=i;
  }
    }
console.log("Poduct of even numbers :",pd);
}
function fact2(num)
{
for(let i=1;i<=num;i++)
{
    let fact =1;
    if(i%2==0)
    {
        for(let j=1;j<=i;j++)
        {
        fact = fact*j;
        }
        console.log('Factorial of',i,"is:",fact);
    }
    else
    {
        console.log('Skip since',i,' is odd');
    }
}
return fact;
}
function fact(num)
{
    let ft=1;
    for(let i=1;i<=num;i++)
    {
         ft *= i;
    }
console.log("factorial of",num,ft);
}
let num=parseInt(prompt("Enter a number:"));
let ans=sumAll(num);
console.log("sum :",ans);
productodd(num);
fact2(num);
fact(num);
