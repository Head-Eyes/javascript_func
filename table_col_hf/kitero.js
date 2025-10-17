const szam = 6

/**
 *  Ez függvény kiírja 'Nembíírooom'
 * 
 *  @returns {void}
 */
function valami1()
{
    console.log('Nembíírooom')
}
valami1()

function valami2()
{
    console.log(szam)
}
valami2(szam)

/**
 *  Ez a függvény lokális változót fog tartalmazni
 */

function valami3()
{
    const v = 9
    console.log(v)
}

valami3()

/**
 * 
 * @param {number} param 
 * 
 * @returns {number}
 */
function valami4(param)
{
    const a = 6
    const c = a + param
    return c
}

const opszum = valami4(4)
console.log(opszum)