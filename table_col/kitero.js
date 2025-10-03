console.log("Hello World")

/**
 *  @type{string}
 */
const vmi = "ez egy string"

console.log(vmi)
/**
 *  @type{string[]}
 */
const tomb=["egy","kettő","három"]

console.log(tomb[0])

for(let i=0; i < tomb.length; i++)
{
    console.log(tomb[i])
}

/**
 * mindig új változó jön létre
 */

for(const a of tomb)
{
    console.log(a)
}

for(const a of tomb)
{
    console.log(`${a}:${tomb[a]}`)
} //a +":"+tomb[a]

/**
 *  @type{{nev:string, age:number}}
 */
const b ={
    nev:'gombszab',
    age:24
} //nev,age=key; gomszab,24=value

console.log(b)
console.log(b.nev)