var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+918600765857'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>8600765857</label></div> </a> <a href='mailto:patilvinu777@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/Vinayak-09'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/918600765857'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/vinayak_09'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/vinayak_patil_09'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/vinayak-patil-793bb5206/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "Do you want help with<br> <span class ='bold'>'spoken english'</span>,<br><span class ='bold'>'Grammar'</span>or<br><span class ='bold'>'Reading and Comprehension'</span><br> ?";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.63833262443757!2d74.19014864534314!3d16.865338763272877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1a7dcf40f5dd7%3A0xd7b69fe1fcfa9877!2zMTbCsDUxJzU1LjQiTiA3NMKwMTEnMjUuMyJF!5e0!3m2!1sen!2sin!4v1645079906766!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>B2 'Asara'<br>Kodoli<br>Kolhapur, Maharashtra, INDIA 416114</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>I am your <span class='bold'><a class='alink'>TLM AID</a>.</span><br><br>I am a Computerised teacing assistant.<br><br>I am here to help you teach better.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send subject you want help with...<br><span class='bold'>'Hindi'</span><br><span class='bold'>'Social Studies'</span><br><span class='bold'>'English'</span><br><span class='bold'>'Science'</span><br><span class='bold'>'Maths'</span><br><br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "hindi":
            sendTextMessage("<span class='sk'>Do you want help with....<br><span class='bold'>likhit hindi</span> or<br><span class='bold'>Mokhik hindi</span></span> ");
            break;
        case "english":
            sendTextMessage("<span class='sk'>Do you want help with <br><span class='bold'>'Spoken English'</span><br><span class='bold'>'Reading and comprehension'</span> or <br><span class='bold'>'Grammar'</span></span>");
            break;
        case "english":
            sendTextMessage("<span class='sk'>Do you want help with <br><span class='bold'>'geography'</span><br><span class='bold'>'history'</span> or <br><span class='bold'>'civics'</span></span>");
            break;
        case "clear":
            clearChat();
            break;
        case "grammar":
            sendTextMessage("You can check the Youtube link given below.<br><br><div class='social'><a target='_blank' href='https://youtube.com'> <div class='socialItem'><img class='socialItemI' src='images/youtube.svg' alt=''></div> </a></div>");
            break;
        case "spoken english":
            sendTextMessage("You can check the Youtube link given below.<br><br><div class='social'><a target='_blank' href='https://youtube.com'> <div class='socialItem'><img class='socialItemI' src='images/youtube.svg' alt=''></div> </a></div>");
            break;
        case "reading and comprehension":
            sendTextMessage("You can check the Youtube link given below.<br><br><div class='social'><a target='_blank' href='https://youtube.com'> <div class='socialItem'><img class='socialItemI' src='images/youtube.svg' alt=''></div> </a></div>");
            break;
        case "likhit hindi":
            sendTextMessage("You can check the Youtube link given below.<br><br><div class='social'><a target='_blank' href='https://youtube.com'> <div class='socialItem'><img class='socialItemI' src='images/youtube.svg' alt=''></div> </a></div>");
            break;
        case "mokhik hindi":
            sendTextMessage("You can check the Youtube link given below.<br><br><div class='social'><a target='_blank' href='https://youtube.com'> <div class='socialItem'><img class='socialItemI' src='images/youtube.svg' alt=''></div> </a></div>");
            break;
        case "history":
            sendTextMessage("You can check the Youtube link given below.<br><br><div class='social'><a target='_blank' href='https://youtube.com'> <div class='socialItem'><img class='socialItemI' src='images/youtube.svg' alt=''></div> </a></div>");
            break;
        case "civics":
            sendTextMessage("You can check the Youtube link given below.<br><br><div class='social'><a target='_blank' href='https://youtube.com'> <div class='socialItem'><img class='socialItemI' src='images/youtube.svg' alt=''></div> </a></div>");
            break;
        case "geography":
            sendTextMessage("You can check the Youtube link given below.<br><br><div class='social'><a target='_blank' href='https://youtube.com'> <div class='socialItem'><img class='socialItemI' src='images/youtube.svg' alt=''></div> </a></div>");
            break;

        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
