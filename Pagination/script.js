let div = document.createElement("div");
div.classList.add("container");
div.innerHTML = "<h1>Pagination task</h1>";
document.body.append(div);

let list = [
  {
    id: "1",
    name: "Lura Senger",
    email: "Xander_Collier@yahoo.com",
  },
  {
    id: "2",
    name: "Wilburn Weber",
    email: "Bennett_Kreiger11@yahoo.com",
  },
  {
    id: "3",
    name: "Tyrique Hahn",
    email: "Juston.Altenwerth@yahoo.com",
  },
  {
    id: "4",
    name: "Lenny Bailey",
    email: "Guiseppe_Hegmann@yahoo.com",
  },
  {
    id: "5",
    name: "Vladimir Keeling",
    email: "Louisa_Walsh18@hotmail.com",
  },
  {
    id: "6",
    name: "Kellie Crona",
    email: "Chandler_Abernathy@yahoo.com",
  },
  {
    id: "7",
    name: "Carolina White",
    email: "Royal50@hotmail.com",
  },
  {
    id: "8",
    name: "Alfredo Conn",
    email: "Clarabelle34@hotmail.com",
  },
  {
    id: "9",
    name: "Stan Shanahan",
    email: "Lamar.McClure@hotmail.com",
  },
  {
    id: "10",
    name: "Marvin Fay",
    email: "Osbaldo58@hotmail.com",
  },
  {
    id: "11",
    name: "Torrance Rau",
    email: "Orin45@gmail.com",
  },
  {
    id: "12",
    name: "Harold Gutmann MD",
    email: "Alyce.Stracke37@yahoo.com",
  },
  {
    id: "13",
    name: "Taryn Torphy",
    email: "Dean_Breitenberg71@hotmail.com",
  },
  {
    id: "14",
    name: "Bryana Lang",
    email: "Tatum.Ullrich@yahoo.com",
  },
  {
    id: "15",
    name: "Nyasia Green DDS",
    email: "Dino83@gmail.com",
  },
  {
    id: "16",
    name: "Nasir Gerhold",
    email: "Lilian_Bashirian8@hotmail.com",
  },
  {
    id: "17",
    name: "Raymundo Ritchie PhD",
    email: "Antwan.Schoen15@yahoo.com",
  },
  {
    id: "18",
    name: "Delmer Marvin",
    email: "Kiera62@yahoo.com",
  },
  {
    id: "19",
    name: "Rachel Wilkinson",
    email: "Foster_Conroy@gmail.com",
  },
  {
    id: "20",
    name: "Gladys Howell",
    email: "Constance.Labadie10@yahoo.com",
  },
  {
    id: "21",
    name: "Ciara Klocko",
    email: "Harvey76@yahoo.com",
  },
  {
    id: "22",
    name: "Quentin O'Kon",
    email: "Amely_Cummings2@yahoo.com",
  },
  {
    id: "23",
    name: "Ms. Gabriella Kunde",
    email: "Lorenza_Cummerata@hotmail.com",
  },
  {
    id: "24",
    name: "Gerald Reilly",
    email: "Lia_Konopelski@gmail.com",
  },
  {
    id: "25",
    name: "Brody Carter I",
    email: "Colten.Wilderman90@hotmail.com",
  },
  {
    id: "27",
    name: "Caroline Miller",
    email: "Delaney.Kozey74@gmail.com",
  },
  {
    id: "28",
    name: "Ms. Merritt McClure",
    email: "Wendy.Zieme@gmail.com",
  },
  {
    id: "29",
    name: "Jovani Schoen",
    email: "Norval_Zieme@hotmail.com",
  },
  {
    id: "30",
    name: "Berniece Bradtke",
    email: "Okey.Fisher39@hotmail.com",
  },
  {
    id: "31",
    name: "Hanna Gottlieb",
    email: "Edna62@hotmail.com",
  },
  {
    id: "32",
    name: "Christiana Bergnaum",
    email: "Donnie.Paucek22@gmail.com",
  },
  {
    id: "33",
    name: "Reid Stehr",
    email: "Hiram69@gmail.com",
  },
  {
    id: "34",
    name: "Evans Ward",
    email: "Liliane72@hotmail.com",
  },
  {
    id: "35",
    name: "Miss Enos Davis",
    email: "Kolby.Grady@hotmail.com",
  },
  {
    id: "36",
    name: "Mathew Lueilwitz",
    email: "Mariah.Hagenes@yahoo.com",
  },
  {
    id: "37",
    name: "Romaine Robel",
    email: "Sheila19@yahoo.com",
  },
  {
    id: "38",
    name: "Immanuel Aufderhar",
    email: "Aileen32@hotmail.com",
  },
  {
    id: "39",
    name: "Julius Reilly Jr.",
    email: "Santa89@yahoo.com",
  },
  {
    id: "40",
    name: "Linnea Borer",
    email: "Jarrett_Hegmann2@hotmail.com",
  },
  {
    id: "41",
    name: "Misael Abernathy IV",
    email: "Robbie42@yahoo.com",
  },
  {
    id: "42",
    name: "Mr. Gerda Jerde",
    email: "Gustave36@hotmail.com",
  },
  {
    id: "43",
    name: "Easton Daugherty",
    email: "Malcolm.Schuster11@hotmail.com",
  },
  {
    id: "44",
    name: "Leanna Gutkowski",
    email: "Chelsea9@gmail.com",
  },
  {
    id: "45",
    name: "Rollin Trantow",
    email: "Marques_Hickle26@gmail.com",
  },
  {
    id: "46",
    name: "Heaven Luettgen",
    email: "Lonnie.Greenfelder95@hotmail.com",
  },
  {
    id: "47",
    name: "Gilda Huel",
    email: "Stephania.Hintz@gmail.com",
  },
  {
    id: "48",
    name: "Javon Walker",
    email: "Lamar_Bailey39@yahoo.com",
  },
  {
    id: "49",
    name: "Stewart King",
    email: "Chasity_Jenkins82@gmail.com",
  },
  {
    id: "50",
    name: "Cortez Lueilwitz",
    email: "Lelia.Mitchell43@gmail.com",
  },
];

let div1 = document.createElement("div");
div1.classList.add("main");
div1.innerHTML = `<div>
<div class='table'>
  </div>
</div>
<div class='Paginator'>
  <a href="#">1</a>
  <a href="#">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
</div>
</div>`;

document.body.append(div1);
const tableEl = document.querySelector(".table");
const paginate = document.querySelector(".Paginator");

Display(list, tableEl, 10, 1);
paginate.addEventListener("click", (e) => {
  let currentPage = e.target.textContent;
  let row = 10;

  Display(list, tableEl, row, currentPage);
});

function Display(items, wrapper, RowsPerPage, page) {
  wrapper.innerHTML = "";
  page--;
  let start = RowsPerPage * page;
  let end = start + RowsPerPage;
  let paginatedItem = items.slice(start, end);
  let tr1 = document.createElement("tr");
  tr1.innerHTML = `<th>Id</th>
<th>Name</th>
<th>Email</th>`;
  tableEl.append(tr1);

  for (let i = 0; i < paginatedItem.length; i++) {
    let item = paginatedItem[i];
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${item.id}</td>
  <td>${item.name}</td>
  <td>${item.email}</td>`;
    tableEl.append(tr);
  }
}
