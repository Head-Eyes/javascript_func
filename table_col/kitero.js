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

/**
 * @type { {author: string, era: string, loves: string[]}[] }
 */
 
const tableData = [
    {
        author: "Balassi Bálint",
        era: "reformáció",
        loves: [
            "Losonczy Anna",
            "Dobó Krisztina"
        ]
    },
    {
        author: "Csokonai Vitéz Mihály",
        era: "felvilágosodás",
        loves: [
            "Vajda Juliána"
        ]
    },
    {
        author: "Petőfi Sándor",
        era: "magyar romantika",
        loves: [
            "Mednyánszky Berta",
            "Szendrey Júlia"
        ]
    },
    {
        author: "Ady Endre",
        era: "20. század",
        loves: [
            "Léda",
            "Csinszka"
        ]
    }
]
 
document.body.appendChild(document.createElement('hr'));
 
// HF

const header =[
    'Szerző neve',
    'Korszak',
    'Szerelmek'
]



 
const table = document.createElement('table');
document.body.appendChild(table);
 
const thead = document.createElement('thead');
table.appendChild(thead);
 
const thead_tr = document.createElement('tr');
thead.appendChild(thead_tr);


 
for(const i of header)
{
    const cell = createCellElement("th", i ,thead_tr)

    if(i === header[2])
    {
        cell.colSpan=2
    }
}

const tbody = document.createElement('tbody');
table.appendChild(tbody);
 
for (const data of tableData) {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);
 
    createCellElement('td', data.author, tr )

 
    createCellElement('td', data.era, tr)

    if (data.loves.length > 1) {
        for (let i = 0; i < data.loves.length; i++) {
            createCellElement('td', data.loves[i], tr)

        }
    } else {
        const cell = createCellElement('td', data.loves[0], tr)
        cell.colSpan = 2;
    }
}

/**
 * 
 * @param {string} celltype meghatározza a cella típusát
 * @param {string} cellContent meghatározza a cella tartalmát
 * @param {HTMLTableRowElement} cellRow meghatározza a sort
 * @returns {HTMLTableCellElement}
 */
function createCellElement(celltype, cellContent, cellRow)
{
    const cell = document.createElement(celltype)
    cell.innerText = cellContent
    cellRow.appendChild(cell)

    return cell
}
