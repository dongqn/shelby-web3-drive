async function connect(){

 if(!window.aptos){
  alert("Install Petra Wallet")
  return
 }

 const res = await window.aptos.connect()

 alert("Wallet: " + res.address)

}

async function upload(){

 const file = document.getElementById("file").files[0]

 const form = new FormData()
 form.append("file",file)

 const res = await fetch("http://localhost:8787/upload",{
  method:"POST",
  body:form
 })

 const data = await res.json()

 alert("Uploaded: " + data.url)

}
