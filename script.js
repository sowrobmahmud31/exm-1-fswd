// form 
let form = document.getElementById("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    // input nilam
    let key = document.getElementById("key").value;

    let student = {
      id: document.getElementById("id").value,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      course: document.getElementById("course").value,
    };

    // get old data
    let data = localStorage.getItem(key);

    if (data) {
      data = JSON.parse(data);
      data.push(student); 
    } else {
      data = [student]; 
    }

    // save
    localStorage.setItem(key, JSON.stringify(data));

    alert("Saved!");

    form.reset(); 
  });
}


// Data 


function loadData() {
  let key = document.getElementById("viewKey").value;

  let table = document.getElementById("table");

  table.innerHTML = "";

  let data = localStorage.getItem(key);

  if (!data) {
    alert("No data found");
    return;
  }

  data = JSON.parse(data);

  data.forEach(function (s) {
    let row = `
      <tr>
        <td>${s.id}</td>
        <td>${s.name}</td>
        <td>${s.email}</td>
        <td>${s.phone}</td>
        <td>${s.course}</td>
      </tr>
    `;

    table.innerHTML += row;
  });
}
