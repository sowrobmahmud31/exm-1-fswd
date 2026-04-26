// form ধরলাম
let form = document.getElementById("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // page reload বন্ধ

    // input থেকে value নিচ্ছি
    let key = document.getElementById("key").value;

    let student = {
      id: document.getElementById("id").value,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      course: document.getElementById("course").value,
    };

    // পুরানো data আনছি
    let data = localStorage.getItem(key);

    if (data) {
      data = JSON.parse(data); // string → array
      data.push(student); // নতুন data যোগ
    } else {
      data = [student]; // প্রথম data
    }

    // save করছি
    localStorage.setItem(key, JSON.stringify(data));

    alert("Saved!");

    form.reset(); // ফর্ম খালি
  });
}

// =====================
// Data দেখানো
// =====================

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
