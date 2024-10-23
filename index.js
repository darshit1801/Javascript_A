function showForm(){
    document.getElementById("addnewbt").style.display = "none";
    document.getElementById("formcontent").style.display = "block";

}

function cancelForm(){
    document.getElementById("addnewbt").style.display = "block";
    document.getElementById("formcontent").style.display = "none";
    clearForm();
}

function clearForm(){
    document.getElementById("employeeForm").reset()
}

function saveEmployee(){
    var empname = document.getElementById("nameinput").value;
    var empdesig = document.getElementById("desiginput").value;
    var empjoindate = document.getElementById("dateinput").value;
    var empage = document.getElementById("ageinput").value;

    if(empname === "" || empdesig === "" || empjoindate === "" || empage === ""){
        alert("Please fill all Details.");
        return
    }

    var newData = document.getElementById("newdata")
    var newRow =`<tr>
        <td>${empname}</td>
        <td>${empdesig}</td>
        <td>${empjoindate}</td>
        <td>${empage}</td>
        <td><button class="btn btn-danger" onclick="deleteRow(this)">Delete</button></td>
    </tr>`;
    newData.innerHTML += newRow;

    cancelForm();
}

function deleteRow(button){
    const row = button.parentElement.parentElement;
    row.remove()
}

