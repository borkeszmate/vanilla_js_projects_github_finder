class UI{
 constructor() {
  this.profile = document.getElementById('profile');
  this.repositoriesSection= document.getElementById('repositories');
 }
 showProfile(user){
  console.log(user);
    this.profile.innerHTML=
    `

    <!-- User profile -->
      <div id="profile" class="my-5">
        <div class="card">
          <div class="card-header">Profile</div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-3">
                <img src="${user.avatar_url}" class="img-fluid" alt="">
              </div>
              <div class="col-md-9">
                
                <!-- Badges -->
                <div class="row">  
                  <div class="col-md-3 px-1">
                    <span class="badge badge-primary p-2 d-block">Public repos: ${user.public_repos}</span>
                  </div>
                  <div class="col-md-3 px-1">
                    <span class="badge badge-warning p-2 d-block" >Public gists: ${user.public_gists}</span>
                  </div>
                  <div class="col-md-3 px-1">
                    <span class="badge badge-success p-2 d-block">Followers: ${user.followers}</span>
                  </div>
                  <div class="col-md-3 px-1">
                    <span class="badge badge-danger p-2 d-block">Following: ${user.following}</span>
                  </div> 
                </div>

                <!-- List group -->
                <ul class="list-group my-4">
                <li class="list-group-item my-1"> Name: ${user.name}</li>  
                <li class="list-group-item my-1"> Company: ${user.company}</li>
                  <li class="list-group-item my-1"> City: ${user.location}</li>
                  <li class="list-group-item my-1"> Created at: ${user.created_at}</li>
                </ul>
                <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">View profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
    </div>    
    `;


   }

  clearProfile(){
   this.profile.innerHTML= "";
   this.repositoriesSection.innerHTML= "";
  }

  showRepos(repos){
   let repositoryDiv = '<h1 class="text-center mb-4">Users\'\s  repositories</h1>';
   let numberOfRes=1;
   repos.forEach((repository) => {
    
    repositoryDiv += 
     `
     <ul class="list-group my-5">
     <h3>${numberOfRes++}. repository </h3>
      <li class="list-group-item">Repository name: ${repository.name}</li>
      <li class="list-group-item">Description: ${repository.description}</li>
     </ul>
     <a href="${repository.html_url}" class="btn btn-outline-success" target="_blank">Go to project</a>  
    `;

   });
   this.repositoriesSection.innerHTML = repositoryDiv;
  }

}


