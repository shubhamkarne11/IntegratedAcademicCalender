var menu = document.querySelector(".menubtn");
var ham = document.querySelector(".hammenu");
var closemenu = document.querySelector(".hamx");
var chatboticon = document.querySelector(".chatboticon");
var chatbot = document.querySelector(".full-page");
var chatclose = document.querySelector(".chatx");
var unibtn = document.querySelector(".unibtn");
var unilist = document.querySelector(".unilist");
var flag = 0;

menu.addEventListener("click", function (){
    ham.style.display = 'block'
});

closemenu.addEventListener("click", function(){
    ham.style.display = 'none'
});

chatboticon.addEventListener("click", function(){
    chatbot.style.display = 'block'
    chatboticon.style.display = 'none'
});

chatclose.addEventListener("click", function(){
    chatbot.style.display = 'none'
    chatboticon.style.display = 'block'
});

unibtn.addEventListener("click", function(){
    if(flag==0)
    {
        unilist.style.display = 'block'
        flag = 1;
    }
    else if (flag==1)
    {
        unilist.style.display = 'none'
        flag = 0;
    }
});