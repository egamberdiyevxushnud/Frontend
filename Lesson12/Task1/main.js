var clients=[];
  var myIndex;
   function addClient(){
    
    var newClient={
      firstname:document.getElementById("firstname").value,
      lastname:document.getElementById("lastname").value
    }
    clients.push(newClient)
    displayClients()
  }



  
  function displayClients(){
    document.getElementById("form-list-client-body").innerHTML=""
    for (i=0;i<clients.length;i++){
      var myTr=document.createElement("tr")
      for(a in clients[i]){
        var mytd=document.createElement("td")
        mytd.innerHTML=clients[i][a]
        myTr.appendChild(mytd)
      }
      var actionTd=document.createElement("td")
      var editBtn=document.createElement("button")
      editBtn.innerHTML="Edit"
      editBtn.setAttribute("class" , "btn btn-sm btn-primary")
      editBtn.setAttribute("onclick" , "editClient("+i+")")

      var deletebtn=document.createElement("button")
      deletebtn.innerHTML="Delete"
      deletebtn.setAttribute("class" , "btn btn-sm btn-danger")
      deletebtn.setAttribute("onclick" , "deleteClient("+i+")")

      actionTd.appendChild(editBtn)
      actionTd.appendChild(deletebtn)
      myTr.appendChild(actionTd)
      document.getElementById("form-list-client-body").appendChild(myTr)

      }
      document.getElementById("firstname").value="";
      document.getElementById("lastname").value=""
  }




  function editClient(i){
    console.log(clients[i])
    myIndex=i;
    var updatebtn=document.createElement("button")
    updatebtn.innerHTML="Update";
    updatebtn.setAttribute("class", "btn btn-sm btn-success")
    updatebtn.setAttribute("onclick","updClient()")
    document.getElementById("saveupdate").innerHTML=""
    document.getElementById("saveupdate").appendChild(updatebtn);
    document.getElementById("firstname").value=clients[i].firstname
    document.getElementById("lastname").value=clients[i].lastname
  }



  function updClient(){
    var updatedClient={
      firstname:document.getElementById("firstname").value,
      lastname:document.getElementById("lastname").value
    }
    clients[myIndex]=updatedClient;
    var crbtn=document.createElement("button")
    crbtn.innerHTML="Save";
    crbtn.setAttribute("onclick","addClient()")
    crbtn.setAttribute("class","btn btn-sm btn-success")
    document.getElementById("saveupdate").innerHTML=""
    
    document.getElementById("saveupdate").appendChild(crbtn);
    
    displayClients()
  }

  function deleteClient(i){
    clients.splice(i,1)
    displayClients()
  }