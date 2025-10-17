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
 
const table = document.createElement('table');
document.body.appendChild(table);
 
const thead = document.createElement('thead');
table.appendChild(thead);
 
const thead_tr = document.createElement('tr');
thead.appendChild(thead_tr);
 
const th = document.createElement('th');
th.innerText = "Szerző neve";
thead_tr.appendChild(th);
 
const th2 = document.createElement('th');
th2.innerText = "Korszak";
thead_tr.appendChild(th2);
 
const th3 = document.createElement('th');
th3.innerText = "Szerelmek";
th3.colSpan = 2;
thead_tr.appendChild(th3);
 
const tbody = document.createElement('tbody');
table.appendChild(tbody);
 
for (const data of tableData) {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);
 
    const td = document.createElement('td');
    td.innerText = data.author;
    tr.appendChild(td);
 
    const td2 = document.createElement('td');
    td2.innerText = data.era;
    tr.appendChild(td2);
 
    if (data.loves.length > 1) {
        for (let i = 0; i < data.loves.length; i++) {
            const td3 = document.createElement('td');
            td3.innerText = data.loves[i];
            tr.appendChild(td3);
        }
    } else {
        const td3 = document.createElement('td');
        td3.innerText = data.loves[0];
        td3.colSpan = 2;
        tr.appendChild(td3);
    }
}

/**
 * 
 * @param {string} celltype meghatározza a cella típusát
 * @param {string} cellContent meghatározza a cella tartalmát
 * @param {HTMLTableRowElement} cellRow meghatározza a sort
 */
function createCellElement(celltype, cellContent, cellRow)
{
    const cell = document.createElement(celltype)
    cell.innerText = cellContent
    cellRow.appendChild(cell)
}