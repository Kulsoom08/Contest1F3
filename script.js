function addDetails(){
    let form = document.querySelector(".form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
    var name=document.querySelector("#name").value;
    var prof=document.querySelector("#profession").value;
    var age=document.querySelector("#age").value;
    if(name.trim()==="" || prof.trim()==="" || age.trim()==="")
    {
        var aalert=document.createElement("p");
        aalert.innerText="Error:Please Make sure All the fields are filled before adding in an employee!";
        aalert.style.color="red";
        document.querySelector(".message-alert-error").appendChild(aalert); 
    }
    else
    {
        var alt=document.createElement("p");
        alt.innerText="Success:Employee Added!";
        alt.style.color="green";
        document.querySelector(".message-alert").appendChild(alt); 
    }
    
    details(name,prof,age);
});
    function details(name,prof,age) {
       
       
                var darr=[name,prof,age];
                var lilist=document.querySelector(".added_emp");
                document.querySelector(".added_emp1").style.display="none";
                
                darr.forEach(function (curr) {
                  let li = document.createElement('li');
                  li.textContent = curr;
                  lilist.appendChild(li);
                });
                let btn = document.createElement('Button');
                btn.textContent = "Delete User";
                lilist.appendChild(btn);
                btn.setAttribute("onclick","dodelete()")
                function dodelete(){
                    var element = document.querySelector("btn");
                    element.remove();
                }
            }
}

    // let nameParagraph = document.createElement("p");
    // let ageParagraph = document.createElement("p");
    // let profParagraph = document.createElement("p");


    // nameParagraph.textContent = "Name: " + name;
    // console.log(`namefull ${name}`);
    // ageParagraph.textContent = "Age: " + age;
    // profParagraph.textContent = "prof: " + prof;
    // document.body.appendChild(nameParagraph);

    // let outputDiv = document.querySelector(".added");
    // outputDiv.appendChild(nameParagraph);
    // outputDiv.appendChild(ageParagraph);
    // outputDiv.appendChild(profParagraph);

        // let newLi = document.createElement("li");
        // newLi.textContent = "Name: " + name + ",  Profession: " + prof + ",  Age: " + age;
        // let deleteButton = document.createElement("button");
        // deleteButton.textContent = "Delete User";
        // deleteButton.setAttribute("onclick", "removeLi(this)");
        // newLi.appendChild(deleteButton);
        // let lilist = document.querySelector(".added_emp");
        // document.querySelector(".added_emp1").style.display = "none";
        // lilist.appendChild(newLi);
        // function removeLi(button) {
        //     button.parentNode.remove();


      




