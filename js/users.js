elUsersList = document.querySelector(".users-list");
elUsersList2 = document.querySelector(".users-list2");
elUserTemplate = document.querySelector(".users__template").content;
elPostsTemplate2 = document.querySelector('.posts__template').content

async function fetchuser(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    console.log(data);
    renderUserItem(data, elUsersList);
}


function renderUserItem (arrey, element){

      arrey.forEach((elementt) =>{
          const template = elUserTemplate.cloneNode(true);

          template.querySelector('.users__template-id').textContent = elementt.id
          template.querySelector('.users__template-heading').textContent = elementt.name
          template.querySelector('.users__template-username').textContent = elementt.username
          template.querySelector('.users__template-email').textContent = elementt.email
          template.querySelector('.users__template-address-street').textContent = elementt.address.street

          const elLIstItem = template.querySelector('.users__template-item')
          elLIstItem.dataset.user_id = elementt.id

          elLIstItem.addEventListener('click',  (evt) => {
              const UserID = evt.currentTarget.dataset.user_id
              console.log(UserID);
        async function fetchPost(){
            const responsee = await fetch('https://jsonplaceholder.typicode.com/posts')
            const dataa = await responsee.json()

            const Post = dataa.filter((element)=> element.user_id == UserID)

 
            renderPosts(Post, elUsersList2 )
        }
        fetchPost()
            })
          element.appendChild(template);
      })
}

function renderPosts(arrey, element){
    arrey.forEach((elementtt) =>{
        const template2 = elPostsTemplate2.cloneNode(true);

        template2.querySelector('.posts__template-id').textContent = elementtt.title
    })
    element.appendChild(template2)
}

fetchuser()