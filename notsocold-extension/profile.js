var name1 = document.querySelector("#name");
var role = document.querySelector("#role");
var resume = document.querySelector("#resume");
var openai_api = document.querySelector("#openai_api");

// load the data from localStorage
try {
    var name_val = localStorage.getItem('name1');
    name1.value = name_val;
} catch (e) {
    console.log(e);
}
try {
    var resume_val = localStorage.getItem('resume');
    resume.value = resume_val;
} catch (e) {
    console.log(e);
}
try {
    var role_val = localStorage.getItem('role');
    role.value = role_val;
} catch (e) {
    console.log(e);
}
try {
    var openai_api_val = localStorage.getItem('openai_api');
    openai_api.value = openai_api_val;
} catch (e) {
    console.log(e);
}

// save the data to localStorage on click of #submit
document.querySelector("#submit").addEventListener("click", function () {
    try {
        localStorage.setItem('name1', name1.value);
    } catch (e) {
        console.log(e);
    }
    try {
        localStorage.setItem('resume', resume.value);
    } catch (e) {
        console.log(e);
    }
    try {
        localStorage.setItem('role', role.value);
    } catch (e) {
        console.log(e);
    }
    try {
        localStorage.setItem('openai_api', openai_api.value);
    } catch (e) {
        console.log(e);
    }

    document.querySelector("#submit").innerHTML = "Updated!";
    setTimeout(function () {
        document.querySelector("#submit").innerHTML = "Update Profile";
    }, 2000);

});
