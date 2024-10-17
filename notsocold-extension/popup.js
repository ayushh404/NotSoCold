function onWindowLoad() {
  getDetails();
  var message = document.querySelector('#message');
  var name1 = document.querySelector('#name');

  chrome.tabs.query({ active: true, currentWindow: true }).then(function (tabs) {
    var activeTab = tabs[0];
    var activeTabId = activeTab.id;

    return chrome.scripting.executeScript({
      target: { tabId: activeTabId },
      // injectImmediately: true,  // uncomment this to make it execute straight away, other wise it will wait for document_idle
      func: DOMtoString,
      args: [['.text-heading-xlarge', 'div.pv-text-details__left-panel div.text-body-medium.break-words', 'div.inline-show-more-text.full-width span', 'button.pv-text-details__right-panel-item-link.text-align-left span.pv-text-details__right-panel-item-text.hoverable-link-text.break-words.text-body-small.t-black', 'span.mr1.t-bold span', 'div.pvs-entity.pvs-entity--padded.pvs-list__item--no-padding-when-nested a.optional-action-target-wrapper.display-flex', 'button.pv-top-card-profile-picture.pv-top-card-profile-picture__container.display-block.pv-top-card__photo.presence-entity__image.EntityPhoto-circle-9 img.pv-top-card-profile-picture__image.pv-top-card-profile-picture__image--show.ember-view', 'div.entry-point a.message-anywhere-button.pvs-profile-actions__action.artdeco-button.artdeco-button--secondary']]
    });

  }).then(function (results) {
    name1.innerHTML = results[0].result[0];
    bio.innerHTML = results[0].result[1];
    // job.innerHTML = results[0].result[6];
    company.innerHTML = results[0].result[3];
    message.innerText = results[0].result[2];
    profile_pic.src = results[0].result[4];
    console.log(bio.innerHTML)
  }).catch(function (error) {
    message.innerText = 'There was an error injecting script : \n' + error.message;
  });
}

window.onload = onWindowLoad;

function DOMtoString(selectors) {
  // console.log(selectors);
  var results = []
  selectors.forEach(selector => {
    if (selector) {
      selector = document.querySelector(selector);
      if (!selector) return "ERROR: querySelector failed to find node"
    } else {
      selector = document.documentElement;
    }
    if (selector.getAttribute('href') != null) {
      results.push(selector.getAttribute('href'));
      // open the website to get the info about the company and return back

    }
    else if (selector.getAttribute('src') != null) {
      results.push(selector.getAttribute('src'));
    }
    else
      results.push(selector.innerText);
  });

  // console.log(results);
  return results;
}

// json body format
// {
//   "candidateStr": "",
//   "requiredRole": "",
//   "recruiterName": "",
//   "recruiterRole": "",
//   "recruiterCompany": "",
//   "linkedInBio": "",
//   "linkedInAbout": ""
//  }


// response format
// "lalala"

function getColdMessage() {
  document.querySelector('#submit').innerText = "Crafting...";
  // document.querySelector('#submit').style.cursor = "wait";
  var name = document.querySelector('#name').innerText;
  var message = document.querySelector('#message').innerText;
  var bio = document.querySelector('#bio').innerText;
  var job = document.querySelector('#job').innerText;
  var company = document.querySelector('#company').innerText;

  var resume = document.querySelector('#resume').value;
  var role = document.querySelector('#role').value;
  var openai_api = document.querySelector('#openai_api').value;

  // create a JSON object to send to the server
  var post_data = {
    candidateStr: resume,
    requiredRole: role,
    recruiterName: name,
    recruiterRole: job,
    recruiterCompany: company,
    linkedInBio: bio,
    linkedInAbout: message,
    openai_api: openai_api
  }

  // console.log(post_data);

  var BASE_URL = "http://localhost:8081/";
  var url = BASE_URL + "cold";

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post_data)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // save all of the data
      post_data.profile_pic = document.querySelector('#profile_pic').src;
      console.log(post_data.profile_pic)
      // get active tab link
      chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        post_data.linkedin_link = tabs[0].url;
    });
      post_data.cold_message = data.message;
      console.log("post_data:", post_data);
      try {
        var ls = JSON.parse(localStorage.getItem('cold_messages'))
        ls.push(post_data);
        localStorage.setItem('cold_messages', JSON.stringify(ls));
      } catch (e) {
        localStorage.setItem('cold_messages', JSON.stringify([post_data]));
      }
      console.log("local", localStorage.getItem('cold_messages'));

      var coldmsg_box = document.querySelector('#coldmsg');

      //  display the Cold DMs
      coldmsg_box.value = data.message;
      document.querySelector('.cold').style.display = "block";

      // hide other things
      document.querySelector('.send').style.display = "none";
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

document.querySelector('#submit').addEventListener('click', getColdMessage);

// save desired role and resume in local storage
function save() {
  console.log('saving');
  var resume = document.querySelector('#resume').value;
  var role = document.querySelector('#role').value;
  localStorage.setItem('resume', resume);
  localStorage.setItem('role', role);
}

// get the saved resume and role from local storage
function getDetails() {
  try {
    var resume = localStorage.getItem('resume');
    var role = localStorage.getItem('role');
    var openai_api = localStorage.getItem('openai_api');
    document.querySelector('#resume').value = resume;
    document.querySelector('#role').value = role;
    document.querySelector('#openai_api').value = openai_api;

  } catch (e) {
    console.log(e);
  }
}

document.querySelector("#resume").addEventListener("change", save);
document.querySelector("#role").addEventListener("change", save);

// copy contents of coldmsg on click of copy button
document.querySelector('#copy').addEventListener('click', function () {
  var coldmsg = document.querySelector('#coldmsg').value;
  navigator.clipboard.writeText(coldmsg);

  // convert document.querySelector('#copy').innerText to "Copied!" for 1 second
  var copy = document.querySelector('#copy');
  copy.innerText = "Copied!";
  setTimeout(function () {
    copy.innerText = "Copy";
  }, 2000);
});


// open background.html on click of portal button
document.querySelector('#portal').addEventListener('click', function () {
  chrome.runtime.openOptionsPage();
});
