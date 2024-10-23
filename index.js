var data = [];
var currentEditIndex = -1;

function showForm() {
    document.getElementById("addnewbt").style.display = "none";
    document.getElementById("formcontent").style.display = "block";
}

function cancelForm() {
    document.getElementById("addnewbt").style.display = "block";
    document.getElementById("formcontent").style.display = "none";
    clearForm();
    currentEditIndex = -1; 
}


function clearForm() {
    document.getElementById("employeeForm").reset();
}


function saveEmployee() {
    var empname = document.getElementById("nameinput").value;
    var empdesig = document.getElementById("desiginput").value;
    var empjoindate = document.getElementById("dateinput").value;
    var empage = document.getElementById("ageinput").value;

    if (empname === "" || empdesig === "" || empjoindate === "" || empage === "") {
        alert("Please fill all Details.");
        return;
    }

    if (currentEditIndex !== -1) {
        
        data[currentEditIndex] = {
            name: empname,
            designation: empdesig,
            joiningDate: empjoindate,
            age: empage
        };
        currentEditIndex = -1;
        document.querySelector('.btn-success').innerText = 'Save';
    } else {
        data.push({
        name: empname,
        designation: empdesig,
        joiningDate: empjoindate,
        age: empage
        });
    }


    renderTable();
    cancelForm();
}


function renderTable() {
    var dataset = "";
    for (var i = 0; i < data.length; i++) {
        dataset += `<tr>
            <td>${data[i].name}</td>
            <td>${data[i].designation}</td>
            <td>${data[i].joiningDate}</td>
            <td>${data[i].age}</td>
            <td><div>
                <button class="btn btn-danger" onclick="deleteRow(${i})">Delete</button>
                <button class="btn btn-primary" onclick="editRow(${i})">Edit</button>
            </div></td>
        </tr>`;
    }
    document.getElementById("newdata").innerHTML = dataset;
}


function deleteRow(index) {
    data.splice(index, 1); 
    renderTable(); 
}


function editRow(index) {
    
    document.getElementById("nameinput").value = data[index].name;
    document.getElementById("desiginput").value = data[index].designation;
    document.getElementById("dateinput").value = data[index].joiningDate;
    document.getElementById("ageinput").value = data[index].age;

    
    document.querySelector('.btn-success').innerText = 'Update';

 
    currentEditIndex = index;


    showForm();
}
