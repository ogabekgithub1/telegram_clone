let tugmaBtn = document.querySelector(".tugma");
tugmaBtn.addEventListener("click",function (btn) {
    document.querySelector("#profilim").setAttribute("style","display:block;")
    }
);
let profilElem = document.querySelector("#profilim");
profilElem.addEventListener("mouseleave",function (MouseLeave) {
    profilElem.setAttribute("style","display:none;")
});

let rightBtn = document.querySelector(".rightBtn");

rightBtn.addEventListener("click",function () {
    document.querySelector(".information-menu").setAttribute("style","display:none;")
});

let dropdownElem = document.querySelector("#dropdownBtn");
dropdownElem.addEventListener("click",function () {
    document.querySelector(".dropdown-menu").setAttribute("style","display:block;")
});
document.querySelector(".dropdown-menu").addEventListener("mouseleave",function () {
    document.querySelector(".dropdown-menu").setAttribute("style","display:none;")
})

//rightBtn.addEventListener("click",function () {
//     document.querySelector(".information-menu").setAttribute("style","display:none;")
//
// });






let userId;
let DATA = {
    users: [
        {
            id: 0,
            first_name: "Azizbek",
            last_name: "Ibragimov",
            avatar: "./img/azizbek.jpg",
            bio: "Sabr ozroq.",
            number: "+998 91 970 44 55",
            username:"@azizbek",
            groups_common: 4,
            shared_links: 10,
            shared_photos: 40,
            shared_voice: 12,
            activity: "online",
            messages: [
                {
                    id: 1,
                    is_from_me: false,
                    text: "Assalomu alaykum, Yaxshimisiz 1",
                    time: "07:10",
                },
                {
                    id: 2,
                    is_from_me: true,
                    text: "lorem ipsum dolor sit amet...",
                    time: "07:20",
                },
            ],
        },
        {
            id: 1,
            first_name: "Salohiddin",
            last_name: "",
            avatar: "./img/salohiddin.jpg",
            bio: "Omad",
            number: "+998 91 970 44 66",
            username:"@salohiddin",
            groups_common: 4,
            shared_links: 15,
            shared_photos: 20,
            shared_voice: 15,
            activity: "Last seen recently",
            messages: [
                {
                    id: 1,
                    is_from_me: false,
                    text: "Assalomu alaykum, Yaxshimisiz 2",
                    time: "20:02",
                },
                {
                    id: 2,
                    is_from_me: true,
                    text: "lorem ipsum dolor sit amet...",
                    time: "20:23",
                },
            ],
        },
        {
            id: 2,
            first_name: "Lazy",
            last_name: "Girl",
            avatar: "./img/lazy.jpg",
            bio: "🌕🌖🌗🌘🌑🌒🌓🌔🌕",
            number: "+998 91 970 77 77",
            username:"@TerDU_204",
            groups_common: 4,
            shared_links: 12,
            shared_photos: 10,
            shared_voice: 19,
            activity: "Last seen at 11:25",
            messages: [
                {
                    id: 1,
                    is_from_me: false,
                    text: "Assalomu alaykum, Yaxshimisiz 3",
                    time: "22:10",
                },
                {
                    id: 2,
                    is_from_me: true,
                    text: "lorem ipsum dolor sit amet...",
                    time: "22:11",
                },
            ],
        },
        {
            id: 3,
            first_name: "Anonimis",
            last_name: "",
            avatar: "./img/anonimis.jpg",
            bio: "I'm anywhere",
            number: "+998 91 970 56 55",
            username:"@QWERT",
            groups_common: 4,
            shared_links: 15,
            shared_photos: 20,
            shared_voice: 15,
            activity: "Last seen recently",
            messages: [
                {
                    id: 1,
                    is_from_me: false,
                    text: "Assalomu alaykum, Yaxshimisiz 4",
                    time: "00:23",
                },
                {
                    id: 2,
                    is_from_me: true,
                    text: "lorem ipsum dolor sit amet...",
                    time: "08:01",
                },
            ],
        },
        {
            id: 4,
            first_name: "Botir",
            last_name: "Omondavlatov",
            avatar: "./img/botir.jpg",
            bio: "Beminnat ollohimga behisob shukur",
            number: "+998 91 970 99 55",
            username:"@qwerkjhgf",
            groups_common: 4,
            shared_links: 15,
            shared_photos: 20,
            shared_voice: 15,
            activity: "online",
            messages: [
                {
                    id: 1,
                    is_from_me: false,
                    text: "lorem ipsum dolor sit amet...5",
                    time: "20:61",
                },
                {
                    id: 2,
                    is_from_me: true,
                    text: "lorem ipsum dolor sit amet...",
                    time: "20:45",
                },
            ],
        },

    ],
};




let avatarElement = document.querySelector(".chat-content-group-list-profile");
let contactsList = document.querySelector(".chat-content-group-list-name");



let chatElem = document.querySelector(".chat-content")
function htmlElemnts(array) {
    array.forEach((element) => {




        let ulElem = document.createElement("ul");
        ulElem.className += "chat-content-group";
        let liElem = document.createElement("li");
        liElem.className += "chat-content-group-list";
        liElem.setAttribute("user_id", element.id);
        let div1Elem = document.createElement("div");
        div1Elem.className += "chat-content-group-list-menu";
        let avatarElem = document.createElement("img");
        avatarElem.className += "chat-content-group-list-profile";
        avatarElem.src = `${element.avatar}`;
        let div2Elem = document.createElement("div");
        div2Elem.className += "chat-content-group-list-element";
        let nameElem = document.createElement("div");
        nameElem.className += "chat-content-group-list-name";

        let messageElem = document.createElement("div");
        messageElem.className += "chat-content-group-list-message"
        let div3Elem = document.createElement("div");
        div3Elem.className += "chat-content-group-list-end";
        let timeElem = document.createElement("div");
        timeElem.className += "chat-content-group-list-end-time";
        timeElem.innerHTML = "22:00";
        let iconElem = document.createElement("i");
        iconElem.className += "fas fa-check";
        nameElem.textContent = element.first_name + " " + element.last_name;
        messageElem.textContent = `${element.messages[
        element.messages.length - 1
            ].text.slice()}`;
        chatElem.appendChild(ulElem);
        ulElem.appendChild(liElem);
        liElem.appendChild(div1Elem);
        liElem.appendChild(div2Elem);
        liElem.appendChild(div3Elem);
        div1Elem.appendChild(avatarElem);
        div2Elem.appendChild(nameElem);
        div2Elem.appendChild(messageElem);
        div3Elem.appendChild(timeElem);
        div3Elem.appendChild(iconElem)
    });
}
htmlElemnts(DATA.users);


let text = [];
let textInput = document.querySelector(".message-menu-input-go");
let sendBtn = document.querySelector(".send-button");
let textArea = document.createElement("p");
let text__arae = document.querySelector(".message-menu-chat");
text__arae.appendChild(textArea);
text.push(textArea);
sendBtn.addEventListener("click", () => {
    let newMessage = document.querySelector(".message-menu-input-go").value;
    textInput.value = "";
    for (let tabs in DATA) {
        DATA[tabs].forEach((chatItem, index) => {
            if (index === userId) {
                chatItem.messages.push({
                    id: chatItem.messages[chatItem.messages.length - 1].id + 1,
                    is_from_me: true,
                    text: newMessage,
                    time: new Date(),
                });
            }
        });
    }
    renderMessage(userId);
});



let chats = document.querySelectorAll(".chat-content-group-list");
let nameBio = document.querySelector(".message-menu-user");
let nameBio2 = document.querySelector(".information-menu-user-name");
let activityElem = document.querySelector(".information-menu-user-online");
let activityElem2 = document.querySelector(".message-menu-online");
let biography = document.querySelector(".biografiya");
let mobile = document.querySelector(".mobile");
let userName = document.querySelector(".username");
let media = document.querySelector("#media");
let file = document.querySelector("#file");
let voice = document.querySelector("#voice");
let group = document.querySelector("#group");

let imgElem = document.querySelector(".information-menu-profil");
chats.forEach(function (chat) {
    chat.addEventListener("click", function () {
        userId = chat.getAttribute("user_id");
        console.log(userId);
        userId = userId - 0;

        let user = DATA.users[userId];
        

        nameBio.innerHTML = user.first_name + " " + user.last_name;
        nameBio2.innerHTML = user.first_name + " " + user.last_name;
        activityElem.innerHTML = user.activity;
        activityElem2.innerHTML = user.activity;
        biography.innerHTML = user.bio;
        mobile.innerHTML = user.number;
        userName.innerHTML = user.username;
        media.innerHTML = user.shared_photos;
        file.innerHTML = user.shared_links;
        voice.innerHTML = user.shared_voice;
        group.innerHTML = user.groups_common;
        imgElem.src = user.avatar;
        renderMessage(userId);
    });
});


function renderMessage(userId) {
    let textArea = document.querySelector(".message-menu-chat");
    // console.log(true);
    textArea.innerHTML = "";
    for (let tabs in DATA) {
        DATA[tabs].forEach((chatItem, index) => {
            if (index === userId) {
                chatItem.messages.forEach((messages) => {
                    textArea.innerHTML += `<li class=" ${
                        messages.is_from_me ? "message-menu-chat-content-left" : "message-menu-chat-content-right"
                    }">
                  <span class="${messages.is_from_me ? "message-menu-chat-content-send":"message-menu-chat-content"}">
                  <span class="message-menu-chat-content-text">${messages.text}</span>
                  <span class="message-menu-chat-content-time">${messages.time}</span>
                  </span>
          </li>`;
                });
            }
        });
    }
}


