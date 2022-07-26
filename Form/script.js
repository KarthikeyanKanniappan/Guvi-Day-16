let container = document.querySelector(".container");
container.innerHTML = `<h1>Form Submission:</h1>
<p>DOM manipulation form</p>`;
let form = document.createElement("form");
form.classList.add("ui");
form.classList.add("form");
form.innerHTML = `<h4 class="ui dividing header">Client Information</h4>`;
container.append(form);

// div-firstName
let div = document.createElement("div");
div.classList.add("field");
div.innerHTML = `<label>Name</label>
<div class="two fields">
  <div class="six wide field">
    <input type="text" name="shipping[first-name]" placeholder="First Name">
  </div>
  <div class="six wide field">
    <input type="text" name="shipping[last-name]" placeholder="Last Name">`;
form.append(div);

// div-address

let div1 = document.createElement("div");
div1.classList.add("field");
div1.innerHTML = ` <label>Address</label>
<div class="two fields">
<div class="four wide field">
  <input type="text" name="shipping[address]" placeholder="Street Address">
</div>
<div class="two wide field">
  <input type="text" name="shipping[address-2]" placeholder="Pincode">
`;
form.append(div1);

let div2 = document.createElement("div");
div2.classList.add("field");
div2.innerHTML = `
<div class="four wide field">
  <input type="text" name="shipping[address]" placeholder="State">
</div>
<div class="four wide field">
  <input type="text" name="shipping[address-2]" placeholder="Country">
</div>`;
form.append(div2);

let div3 = document.createElement("div");
div3.classList.add("inline");
div3.classList.add("field");
div3.innerHTML = `<label for="Gender">Gender</label>
<div class="field">
  <div class="ui radio checkbox">
    <input type="radio" name="Gender" value="Male" checked="">
    <label>Male</label>
  </div>
  <div class="field">
  <div class="ui radio checkbox">
    <input type="radio" name="Gender"  value="Female" checked="">
    <label>Female</label>
  </div>
  <div class="field">
  <div class="ui radio checkbox">
    <input type="radio" name="Gender"  value="Others" checked="">
    <label>Other</label>
  </div>`;
form.append(div3);

let div4 = document.createElement("div");
div4.classList.add("field");
div4.innerHTML = `
<label for="food">Choice of food(Must Select 2 of 4)</label>
<div class="field">
<div class="ui checkbox">
<input type="checkbox" name="food" value="South Indian">
<label>South Indian</label>
</div>
</div>
<div class="field">
<div class="ui checkbox">
<input type="checkbox" name="food" value="North Indian">
<label>North Indian</label>
</div>
</div>
<div class="field">
<div class="ui checkbox">
<input type="checkbox" name="food" value="Continental">
<label>Continental</label>
</div>
</div>
<div class="field">
<div class="ui checkbox">
<input type="checkbox" name="food" value="Oriental">
<label>Oriental</label>
</div>
</div>`;
form.append(div4);

let button = document.createElement("button");
button.classList.add("ui");
button.classList.add("button");
button.type = "submit";
button.textContent = `Submit`;
form.append(button);

let tab = document.querySelector(".tab");
tab.innerHTML = `<p><h4 class="ui dividing header">Table</h4></p>`;
let table = document.createElement("table");
table.classList.add("ui");
table.classList.add("celled");
table.classList.add("table");
table.innerHTML = `
<thead>
<tr>
<th>First Name</th>
<th>Last Name</th>
<th>Address</th>
<th>Pin code</th>
<th>State</th>
<th>Country</th>
<th>Gender</th>
<th>Food</th>
</tr>
</thead>`;
tab.append(table);

let former = document.querySelector(".form");
let btn = document.querySelector(".button");
let gender = document.getElementsByName("Gender");
let food = document.getElementsByName("food");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let tbody = document.createElement("tbody");
  table.append(tbody);
  let tr = document.createElement("tr");
  //   checkbox-value for Gender
  let genderSel = [];
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      genderSel.push(gender[i].value);
      gender[i].checked = false;
    }
  }
  //   checkbox-value for Food
  let favFood = [];
  for (let i = 0; i < food.length; i++) {
    if (food[i].checked) {
      favFood.push(food[i].value);
      food[i].checked = false;
    }
  }
  if (favFood.length < 2) {
    alert("Please select atleast two food");
    return;
  }
  tr.innerHTML = `
  <td data-label="First Name">${former.elements[0].value}</td>
  <td data-label="Last Name">${former.elements[1].value}</td>
      <td data-label="Address">${former.elements[2].value}</td>
      <td data-label="Pin code">${former.elements[3].value}</td>
      <td data-label="State">${former.elements[4].value}</td>
      <td data-label="Country">${former.elements[5].value}</td>
      <td data-label="Gender">${genderSel[0]}</td>
      <td data-label="Food">${favFood.join(" , ")}</td>
      `;

  tbody.append(tr);
});
