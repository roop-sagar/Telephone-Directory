showData();
function addData() {
  let name, phone;
  name = document.getElementById("name").value;
  phone = document.getElementById("phone").value;

  let data = new Array();
  data = JSON.parse(localStorage.getItem("person"))
    ? JSON.parse(localStorage.getItem("person"))
    : [];
  if (
    data.some((x) => {
      return x.phone === phone;
    })
  ) {
    alert("already exists");
  } else {
    data.push({
      name: name,
      phone: phone,
    });
    localStorage.setItem("person", JSON.stringify(data));
  }
  showData();
}

function showData() {
  document.getElementById("showContacts").innerHTML = "";
  let data = new Array();
  data = JSON.parse(localStorage.getItem("person"))
    ? JSON.parse(localStorage.getItem("person"))
    : [];
  if (data) {
    for (let i = 0; i < data.length; i++) {
      let addDiv = document.createElement("div");
      addDiv.className="row";
      
    addDiv.innerHTML =
        ` <table> <tr><td>${data[i].name}</td><td>${data[i].phone}</td></tr></table>`;
      document.getElementById("showContacts").appendChild(addDiv);
    }
  }
}

function searchData() {
  document.getElementById("showSearch").innerHTML = "";
  let searchName = document.getElementById("search").value;
  let data = new Array();
  data = JSON.parse(localStorage.getItem("person"))
    ? JSON.parse(localStorage.getItem("person"))
    : [];

  let result = new Array();

  data.map((elem, i) => {
    if (searchName.toLowerCase() == data[i].name.toLowerCase()) {
      result.push(data[i]);
      localStorage.setItem("newperson", JSON.stringify(result));
    }
  });

  if (result.length !==0) {
    for (let i = 0; i < result.length; i++) {
      let addDiv = document.createElement("div");
      addDiv.className="row";
      addDiv.innerHTML =
      ` <table> <tr><td>
      ${result[i].name}</td>
     <td>${result[i].phone}</td></tr></table>`;
      document.getElementById("showSearch").appendChild(addDiv);
    }
  } else if (result.length === 0) {
    alert('No Record Found');
  }
  console.log(result.length);
}
