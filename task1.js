/* Take n as input from user(for i 1 to n)
if n is even--> calculate factorial
if n is odd--> skip since i is odd */
let n =parseInt(prompt('Enter a number:'));
for(let i=1;i<=n;i++)
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
