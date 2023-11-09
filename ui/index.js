function handleSubmit(){
  let ID = document.getElementById("ID").value;
  let Name = document.getElementById("Name").value;
  let CName = document.getElementById("CName").value;
  let Grade = document.getElementById("Grade").value;
  let Date = document.getElementById("Date").value;
   
  let jsonData = {
    ID: ID,
    Name: Name,
    CourseName: CName,
    Grade: Grade,
    Date: Date
  };

  let jsonString = JSON.stringify(jsonData);

  fetch('http://127.0.0.1:3000/issue',{
         method:'POST',
         headers: {
            'Content-Type': 'application/json'
          },
          body: jsonString
        })
        
}

async function handleSearch(){
  const result = await fetch('http://127.0.0.1:3000/view');
  console.log(result);
  // Document.getElementById("demo").innerHTML = result;
}