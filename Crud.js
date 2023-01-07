
// Get Data---------------------------------------------------------
function getData(element) {
  
  fetch("https://localhost:5001/api/AddressBooks")
    .then((response) => response.json())
    .then((data) => {
      const userTBody = document.createElement("tbody");
      for (i = 0; i < data.length; i++) {
        const user = data[i];
        //console.log(user.name);
        const userTr = document.createElement("tr");
        
        const userName = document.createElement("td");
        userName.textContent = `${user.name}`;
        const userStreet = document.createElement("td");
        userStreet.textContent = `${user.street}`;
        const userStreetNo = document.createElement("td");
        userStreetNo.textContent = `${user.streetNo}`;
        const userCity = document.createElement("td");
        userCity.textContent = `${user.city}`;
        const userEmail = document.createElement("td");
        userEmail.textContent = `${user.email}`;
        const userPhoneNum = document.createElement("td");
        userPhoneNum.textContent = `${user.phoneNumber}`;
        
        //link for details
        const a = document.createElement("a");
        a.textContent = "Details";
        a.href = `./Details.html/${user.id}`;
//----------------------------------------------------------------------------------------------
        // Link for Delete AND Delete Function
        const d = document.createElement("a");
        d.textContent = "Delete";
        d.onclick = (() => {
          fetch(`https://localhost:5001/api/AddressBooks/${user.id}`, {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          }).then((res) => location.reload());
        });
        
//----------------------------------------------------------------------------------------------
        //link for Edit
        const e = document.createElement("a");
        e.textContent = "Edit";
        e.href = `./Edit.html/${user.id}`;

        userTr.appendChild(userName);
        userTr.appendChild(userStreet);
        userTr.appendChild(userStreetNo);
        userTr.appendChild(userCity);
        userTr.appendChild(userEmail);
        userTr.appendChild(userPhoneNum);

        //links
        userTr.appendChild(a);
        userTr.appendChild(d);
        userTr.appendChild(e);

        userTBody.appendChild(userTr);
      }
      element.appendChild(userTBody);
    });
}

document.addEventListener("DOMContentLoaded", () => {
const mainElement = document.querySelector("#tblData");
  getData(mainElement);
});

//------------------------------------------------------------------------------------------------




