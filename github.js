class Github{
 constructor(){
  this.clientID = 'c38b3da4fc173046b888';
  this.clientSecret = '5f0d26501b6713d1df183bfbabcbeaefc6227e24';
  this.reposCount= 5;
  this.reposSort= 'created: asc'
 }

 async getUser(userInput){
  let user = userInput;

  let response = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);
  
  let resData= await response.json();

  let reposResponse = await fetch(`https://api.github.com/users/${user}/repos?sort=${this.reposSort}&per_page=${this.reposCount}&client_id=${this.clientID}&client_secret=${this.clientSecret}`);
  
  let reposData= await reposResponse.json();

   return {
     resData,
     reposData
    }
  
  
 }
}