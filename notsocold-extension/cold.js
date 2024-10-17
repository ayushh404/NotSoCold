coldmsg_data = JSON.parse(localStorage.getItem("cold_messages"));
console.log(coldmsg_data);

sidebar = document.querySelector(".sidebar_menu");

coldmsg_data.forEach((coldmsg) => {
    let button = document.createElement("button");
    button.innerHTML = `<span><img src="${coldmsg.profile_pic}"><span style="text-align: left; line-clamp: 1;">${coldmsg.recruiterName}</span></span>`;
    sidebar.appendChild(button);

    button.addEventListener("click", () => {
        document.querySelector(".coldmsg").innerHTML = coldmsg.cold_message.replaceAll("\n", "<br>");
        document.querySelector(".coldmsg_name").innerHTML = coldmsg.recruiterName;
        document.querySelector(".coldmsg_company").innerHTML = coldmsg.recruiterCompany;
        document.querySelector(".coldmsg_img").src = coldmsg.profile_pic;
    });
});
