function ContactManager(){
let work = true;
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];
let userName = "";
let userPhone = "";
let userEmail = "";
let newcontact = "";
while (work){
let choice = prompt("Please input your choice: 'first', 'last', 'all', 'new' or 'exit'")

if (choice.length > 0) {
    switch (choice){
        case "first": alert(`Name: ${contacts[0].name}, Phone: ${contacts[0].phone}, Email: ${contacts[0].email}`); 
        break;
        case "last": alert(`Name: ${contacts[contacts.length -1].name}, Phone: ${contacts[contacts.length -1].phone}, Email: ${contacts[contacts.length -1].email}`); 
        break;
        case "all": for (let contact of contacts) {
            alert(`Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`)
        };
        break;
        case "new": userName = prompt("Please enter the name"), 
        userPhone = prompt("Please enter the phone"), 
        userEmail = prompt("Please enter the email");
        if ((userName.length > 0 ) && (userPhone.length > 0) && (userEmail.length > 0)) {
            newcontact = {
                name: userName,
                phone: userPhone,
                email: userEmail
            };
                contacts.push(newcontact);
                alert("New contact added:");
                alert(`Name: ${contacts[contacts.length -1].name}, Phone: ${contacts[contacts.length -1].phone}, Email: ${contacts[contacts.length -1].email}`);
        } else {
            alert("Error");
        }
        break;
        case "exit": work = false;
        break;
        default: console.log("Error: invalid input"); 
        break;
    }
} else {
    alert("Error: invalid input");
}
}
}