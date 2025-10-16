const vmi = {}
const szam = 8


if (szam > 5)
{
    vmi.name = "BAAAAH"
    
}
else{
    vmi["name"] = "NAAAAAH"    
}
//console.log(vmi)
//onsole.log(vmi.name)

const szam2 = 6

if (vmi.age == undefined) // if(vmi.age)
{

}

/*
if (vmi.age == null) --> igaz
{}
if (vmi.age === null) --> hamis
{}
*/

/**
 * @type {{nemzetiség:string, szerzo1:string, mu1:string, szerzo2?:string, mu2?:string}}
 */
const array = [
    {
        nemzetiség: 'Orosz',
        szerzo1: 'Gogol',
        mu1: 'A köpönyeg',
        szerzo2: 'Csehov',
        mu2: 'A csinovnyik halála'
    },
    {
        nemzetiség: 'Cseh',
        szerzo1: 'Franz Kafka',
        mu1: 'Az átváltozás'
    },
    {
        nemzetiség: 'Magyar',
        szerzo1: 'Örkény István',
        mu1: 'Egyperces Novellák',
        szerzo2: 'József Attila',
        mu2:  'Klárisok'
    },
    {
        nemzetiség: 'Svájc',
        szerzo1: 'Friedrich Dürrenmatt',
        mu1: 'A fizikusok'
    }
]

const table = document.createElement("table")
document.body.appendChild(table)

const bah = [
    'Nemzetiség',
    'Szerző',
    'Mű'
]

const thead = document.createElement('thead')
table.append(thead)
const tr = document.createElement('tr')
thead.appendChild(tr)

for (const i of bah)
{
    const th = document.createElement('th')
    tr.appendChild(th)
    th.innerText = i  
}

const tbody = document.createElement('tbody')
table.appendChild(tbody)

for (const i of array) 
{
    const tr = document.createElement('tr')
    tbody.appendChild(tr)

    const td = document.createElement('td')
    tr.appendChild(td)
    td.innerText = i.nemzetiség

    const td2 = document.createElement('td')
    tr.appendChild(td2)
    td2.innerText = i.szerzo1

    const td3 = document.createElement('td')
    tr.appendChild(td3)
    td3.innerText = i.mu1
    if (i.szerzo2 && i.mu2) {
        const tr2 = document.createElement('tr')
        tbody.appendChild(tr2)
        const td4 = document.createElement('td')
        tr2.appendChild(td4)
        td4.innerText = i.szerzo2
        const td5 = document.createElement('td')
        tr2.appendChild(td5)
        td5.innerText = i.mu2
        
        td.rowSpan = 2
    }

    /*if(i.szerzo2 && i.mu2)
    {
        td.rowSpan=2
    }*/
}