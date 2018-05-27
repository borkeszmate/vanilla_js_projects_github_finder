const github = new Github;
const ui = new UI;

// Get input value

let searchField = document.querySelector('#searchField');

// searchFieldValue= searchField.value;

searchField.addEventListener('keyup', (e) => {
 
 const userInput = e.target.value;
 if(userInput != ""){

  // Do the http fetch
   github.getUser(userInput)
    .then(data =>{
     // console.log(data);
     if (data.resData.message === 'Not Found'){
      document.getElementById('profile').innerHTML= 
      `<div class="alert alert-danger">${userInput} is not found </div>`; 
     }else{
      // Showing profile
      ui.showProfile(data.resData);
      ui.showRepos(data.reposData)
     }
     })
    .catch(err => console.log(err));

    // document.getElementById('profile').innerHTML= userName;
 } else{
  ui.clearProfile();
 }
})