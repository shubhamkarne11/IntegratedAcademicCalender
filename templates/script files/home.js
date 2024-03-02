var menu = document.querySelector(".menubtn");
var ham = document.querySelector(".hammenu");
var closemenu = document.querySelector(".hamx");
var chatboticon = document.querySelector(".chatboticon");
var chatbot = document.querySelector(".full-page");
var chatclose = document.querySelector(".chatx");

menu.addEventListener("click", function (){
    ham.style.display = 'block'
});

closemenu.addEventListener("click", function(){
    ham.style.display = 'none'
})

chatboticon.addEventListener("click", function(){
    chatbot.style.display = 'block'
    chatboticon.style.display = 'none'
})

chatclose.addEventListener("click", function(){
    chatbot.style.display = 'none'
    chatboticon.style.display = 'block'
})