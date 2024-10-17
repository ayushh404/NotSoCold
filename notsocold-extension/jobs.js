const userAction = async () => {
  const response = await fetch(
    "https://yellowjobs-server-production.up.railway.app/api/tweets/?&types=internship&categories=Tech&limit=30&offset=0"
  );
  var myJson = await response.json();

  // remove duplicate tweets
  const unique = [...new Set(myJson.map((item) => item.text))];
  const uniqueTweets = unique.map((text) => {
    return myJson.find((item) => item.text === text);
  });

  myJson = uniqueTweets;

  // <li>
  //   <p class="ul-p">

  //   </p>
  //   <button id="myBtn">Quick Apply</button>
  //   <br />
  //  </li>


  for (const child of myJson) {
    var az = document.createElement("a");
    const li = document.createElement("li");
    const pz = document.createElement("p");
    const h2 = document.createElement("h2");
    const buttonz = document.createElement("button");
    const br = document.createElement("br");
    pz.classList.add("ul-p");
    buttonz.classList.add("myBtn");
    buttonz.innerHTML = "Quick Apply";
    // li.classList.add("liii");
  
    li.appendChild(h2);
    az.appendChild(pz);
    li.appendChild(az);
    li.appendChild(buttonz);
    li.appendChild(br);
    const a = li.querySelector("a");
    a.setAttribute("href", child.tweet_url);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noreferrer");

    // li.innerText = child.text;
    const p = li.querySelector(".ul-p");
    const button = li.querySelector(".myBtn");
    pz.innerHTML = child.text;
    h2.innerHTML = child.created_by;
    ul.appendChild(li);

    // <!-- Modal content -->
    // <div class="modal-content">
    //   <span class="close">&times;</span>
    //   <h2 class="tweeter">Tweeter</h2>
    //   <p class="tweet-text">Tweet Content</p>
    //   <button class="generate-reply">Generate Reply</button>
    //   <textarea class="reply-text" name="reply-text" id="reply-text" cols="30" rows="10"></textarea>
    //   <button class="send-reply">Copy and Send Reply</button>
    // </div>

    button.addEventListener("click", () => {
      modal.style.display = "block";
      const tweetText = modal.querySelector(".tweet-text");
      tweetText.innerHTML = child.text;
      const tweeter = modal.querySelector(".tweeter");
      tweeter.innerHTML = child.created_by;
    });
  }

  console.log(myJson);
};

userAction();

// function initModal() {
//   const openModal = document.querySelector('[data-modal="open"]');
//   const closeModal = document.querySelector('[data-modal="close"]');
//   const modalContainer = document.querySelector("[data-modal=container]");
//   const submitButton = document.querySelector(".submit-button");

//   if (modalContainer && openModal && closeModal) {
//     function toggleClick(e) {
//       e.preventDefault();
//       modalContainer.classList.toggle("ativo");
//     }

//     function outsideClick(e) {
//       if (e.target === this) {
//         toggleClick(e);
//       }
//     }

//     function preventSubmit(e) {
//       e.preventDefault();
//       alert("This is just an example of modal");
//     }

//     openModal.addEventListener("click", toggleClick);
//     closeModal.addEventListener("click", toggleClick);
//     modalContainer.addEventListener("click", outsideClick);
//     submitButton.addEventListener("click", preventSubmit);
//   }
// }

// initModal();

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  // console.log("close");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    // console.log("displayed none");
  }
};

modal.querySelector(".generate-reply").addEventListener("click", generateReply);

function generateReply() {
  var resume = localStorage.getItem("resume");
  var tweet = document.querySelector(".tweet-text");
  // var tweet =
  //   "Join our cross-functional and dynamic Fleet team! We're #hiring a Truck and Coach/Automotive Technician (310T &amp; 310S) and 310T Apprentice (Contract). See the detailed postings and apply by November 16 at https://t.co/j7Sr4O4npF. https://t.co/yO8ABDQbtc";

  var post_data = {
    candidateStr: resume,
    tweet: tweet,
  };
  var BASE_URL = "http://localhost:8081/";
  var url = BASE_URL + "coldTweet";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post_data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var reply_text = modal.querySelector(".reply-text");
      reply_text.innerHTML = data.message;
      modal.querySelector(".reply").style.display = "block";
      modal.querySelector(".generate-reply").style.display = "none";
    })
    .catch((err) => {
      console.log(err);
    });
}


// copy contents of coldmsg on click of copy button
modal.querySelector('.send-reply').addEventListener('click', function () {
  var coldmsg = modal.querySelector('.reply-text').value;
  navigator.clipboard.writeText(coldmsg);

  // convert document.querySelector('#copy').innerText to "Copied!" for 1 second
  // var copy = modal.querySelector('#send-reply');
  // copy.innerText = "Copied!";
  // setTimeout(function () {
  //   copy.innerText = "Copy";
  // }, 2000);

  // open a link
  window.open('https://twitter.com/intent/tweet?text=' + coldmsg, '_blank');
});
