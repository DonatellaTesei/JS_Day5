let people = [{

    fname: "Kate",
    lname: "Hudson",
    age: 43,
    like: 1,
    pic: "https://www2.pictures.stylebistro.com/gi/2019+Baby2Baby+Gala+Presented+Paul+Mitchell+yFW-rGtGJCPx.jpg"

}, {
    fname: "Jessica",
    lname: "Chastain",
    age: 45,
    like: 3,
    pic: "https://content5.promiflash.de/article-images/square600/jessica-chastain-schaut-ernst.jpg"

}, {
    fname: "Brad",
    lname: "Pitt",
    age: 59,
    like: 11,
    pic: "https://cdn.prod.www.spiegel.de/images/cac9f107-0001-0004-0000-000001495005_w1200_r1_fpx38_fpy45.jpg"

}, {
    fname: "Colin",
    lname: "Farrell",
    age: 46,
    like: 10,
    pic: "https://nationaltoday.com/wp-content/uploads/2022/05/84-Colin-Farrell.jpg"
}];

// for (let val of people) {
//     document.getElementById("result").innerHTML += `
//     <div>
//     <div class="card" style="width: 20rem;">
//     <img src="${val.pic}" class="card-img-top" alt="${val.fname}">
//     <div class="card-body">
//       <h5 class="card-title">${val.fname}</h5>
//       <p class="likes">${val.like}</p>
//       <a class="btn btn-success likeBtn">Like</a>
//       <a class="btn btn-danger showMore">Show more</a>
//       <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="">Open modal for @mdo</button>
//     </div>
//     </div>
//     </div>`;
// }

for (let val in people) {
    document.getElementById("result").innerHTML += `
    <div>
    <div class="card" style="width: 20rem;">
    <img src="${people[val].pic}" class="card-img-top" alt="${people[val].fname}">
    <div class="card-body">
      <h5 class="card-title">${people[val].fname}</h5>
      <p class="likes">${people[val].like}</p>
      <a class="btn btn-success likeBtn">Like</a>
      <a class="btn btn-danger showMore">Show more</a>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="${val}">Open modal for @mdo</button>
    </div>
    </div>
    </div>`;
}

let btns = document.getElementsByClassName("likeBtn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        people[i].like++;
        console.log(people[i].like);
        document.getElementsByClassName("likes")[i].innerHTML = people[i].like;
    })
}

let moreInfoBtns = document.getElementsByClassName("showMore");
for (let i = 0; i < moreInfoBtns.length; i++) {
    moreInfoBtns[i].addEventListener("click", function() {

        document.getElementById("info").innerHTML = `<div class="card" style="width: 50%;">
        <img src="${people[i].pic}" class="card-img-top" alt="${people[i].fname}">
        <div class="card-body">
          <h5 class="card-title">${people[i].fname} ${people[i].lname}</h5>
          <p class="card-text">${people[i].age} <br> ${people[i].like}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
    })
}

const exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
        // Extract info from data-bs-* attributes
    const index = button.getAttribute('data-bs-whatever')
        // If necessary, you could initiate an AJAX request here
        // and then do the updating in a callback.
        //
        // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBody = exampleModal.querySelector('.modal-body')

    modalTitle.textContent = `${people[index].fname}`
    modalBody.innerHTML = `<img src="${people[index].pic}" class="img-thumbnail" alt="${people[index].fname}">`
})