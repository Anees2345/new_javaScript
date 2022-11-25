const api_url="https://jsonplaceholder.typicode.com/posts";
 async function getapi(url){

    const response=await fetch(url);
    var data=await response.json();
    console.log(data);
    if(response){
        hideloader();
    }
    show(data);
 }
 getapi(api_url);

 function hideloader(){
    document.getElementById("loading").style.display="none";
 }
  function show(data){
    let tab = 
        `<tr>
         <th>userId</th>
          <th>id</th>
          <th>title</th>
          <th>body</th>
         </tr>`;

         for(let r of data.list){
            tab +=`<tr>
            <td>${r.userId}
            <td>${r.id}</td>
            <td>${r.title}</td>
            <td>${r.body}</td>
            </tr>`;
         }
         document.getElementById("tab1").innerHTML = tab;
 }