const txtInput = document.querySelector("#txtInput");
      const send = document.querySelector(".send");
      const  universities = document.querySelector(".option1");
      const search_activity = document.querySelector(".option2");
      const info = document.querySelector(".option3");
      const chatBody = document.querySelector(".chatbox");
      const chatbot_img = new Image(40, 40);
      chatbot_img.src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png";
      const user_img = new Image(40, 40);
      user_img.src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png";
      let UserclassName = "user-message";
      let BotclassName = "chatbot-message";
      let aboutClassName='aboutus-message';
      const setScrollPosition = () => {
        if (chatBody.scrollHeight > 0) {
            chatBody.scrollTop = chatBody.scrollHeight;
          }
        };
      
      
      send.addEventListener("click", () => {
      if(txtInput.value!=""){
          renderUserMessage();
      }
      });
      universities.addEventListener("click", () => universitiesF());
      search_activity.addEventListener("click", () => search_activityF());
      info.addEventListener("click", () => infoF());

        const infoF = () => {
        let userMessageText = 'Tell me about your website';
        const userMessage = document.createElement("div");
        let userTextNode = document.createTextNode(userMessageText);
        userMessage.classList.add(UserclassName);
        userMessage.appendChild(user_img);
        userMessage.appendChild(userTextNode);
        chatBody.appendChild(userMessage);
      
        setTimeout(()=>{
        const botMessageText = 'This website provides an academic calendar of top 21 universities in India. Users can also download the PDF of the calendar and view the most current location of the universities.<br><br>The Search Activity tab allows users to filter the activities of all the universities. We also provide our contact information publicly in case of any queries.';
        const botMessage = document.createElement("div");
        botMessage.classList.add(aboutClassName);
        botMessage.appendChild(chatbot_img);
        const botMessageContainer = document.createElement("div");
        botMessageContainer.style.display = "flex";
        botMessageContainer.style.flexDirection = "column";
        const botMessageLines = botMessageText.split("<br><br>");
        botMessageLines.forEach((line) => {
          const lineElement = document.createElement("div");
          const lineTextNode = document.createTextNode(line);
          lineElement.style.color = "white";
          lineElement.appendChild(lineTextNode);
          botMessageContainer.appendChild(lineElement);
        });
        botMessage.appendChild(botMessageContainer);
        chatBody.appendChild(botMessage);
      }, 600);
      } 

      const universitiesF=()=>{
        setScrollPosition();
        const Universities_name=["IIS university","Jawaharlal Nehru University",'Jamia Millia Islamia University','Jadavpur University','Amrita Vishwa Vidyapeetham','Vellore Institute of Technology','Delhi University, Post Graduate','Delhi University, Under Graduate','Banaras Hindu University','University of Hyderabad','Amity','Bharathiar University','Panjab University','Mysore University','Chandigarh University','Andhra University','Guru Nanak Dev University','University Of Kashmir','University Of Jammu','Pondicherry University','Tezpur University',"Gauhati University"];
        const Universities_link=['http://127.0.0.1:8000/Universities/IIS-Bangalore/',"http://127.0.0.1:8000/Universities/Jawaharlal-Nehru-University/","http://127.0.0.1:8000/Universities/Jamia-Millia-Islamia-University/",'http://127.0.0.1:8000/Universities/Jadavpur-University/','http://127.0.0.1:8000/Universities/Amrita-Vishwa-Vidyapeetham/','http://127.0.0.1:8000/Universities/VIT/','http://127.0.0.1:8000/Universities/DUpost/','http://127.0.0.1:8000/Universities/DUunder/','http://127.0.0.1:8000/Universities/BHU/','http://127.0.0.1:8000/Universities/University-Of-Hyderabad/','http://127.0.0.1:8000/Universities/Amity/','http://127.0.0.1:8000/Universities/Bharathiar-University/','http://127.0.0.1:8000/Universities/Panjab-University/','http://127.0.0.1:8000/Universities/Mysore-University/','http://127.0.0.1:8000/Universities/Chandigarh-University/','http://127.0.0.1:8000/Universities/Andhra-University/','http://127.0.0.1:8000/Universities/Guru-Nanak-Dev-University/','http://127.0.0.1:8000/Universities/University-Of-Kashmir/','http://127.0.0.1:8000/Universities/University-Of-Jammu/','http://127.0.0.1:8000/Universities/Pondicherry-University/','http://127.0.0.1:8000/Universities/Tezpur-University/','http://127.0.0.1:8000/Universities/Gauhati-University/'];
        var result='';
        let UniText='What are the name of available Universities?';
        const userMessage = document.createElement("div");
        let txtNode = document.createTextNode(UniText);
        userMessage.classList.add(UserclassName);
        userMessage.appendChild(user_img);
        userMessage.append(txtNode);
        chatBody.append(userMessage);
        
        setTimeout(()=>{
   
        let BotMessage= document.createElement("div");
        BotMessage.classList.add(BotclassName);
        BotMessage.appendChild(chatbot_img);
        
      
        for (var i = 0; i < Universities_link.length; i++) {
          console.log(result);
          result = " <a href='" + Universities_link[i] + "' style='color:white'>"+ Universities_name[i] + "</a>  ";
          let p = document.createElement("p");
          p.innerHTML= result;
          BotMessage.appendChild(p);
          BotMessage.appendChild(document.createElement("br"));
      }
      chatBody.append(BotMessage);
       BotMessage= document.createElement("div");
      BotMessage.classList.add(BotclassName);
      BotMessage.appendChild(chatbot_img);
     p = document.createElement("p");
    let askUserForUni = "If you would like to visit a particular university's page, please enter its name separated by spaces.";
    p.innerHTML=askUserForUni;
    BotMessage.appendChild(p);
    chatBody.append(BotMessage);
      }, 600);
      }
      function unisByText(){
        setScrollPosition();
        const Universities_name=["IIS university","Jawaharlal Nehru University",'Jamia Millia Islamia University','Jadavpur University','Amrita Vishwa Vidyapeetham','Vellore Institute of Technology','Delhi University, Post Graduate','Delhi University, Under Graduate','Banaras Hindu University','University of Hyderabad','Amity','Bharathiar University','Panjab University','Mysore University','Chandigarh University','Andhra University','Guru Nanak Dev University','University Of Kashmir','University Of Jammu','Pondicherry University','Tezpur University',"Gauhati University"];
          const Universities_link=['http://127.0.0.1:8000/Universities/IIS-Bangalore/',"http://127.0.0.1:8000/Universities/Jawaharlal-Nehru-University/","http://127.0.0.1:8000/Universities/Jamia-Millia-Islamia-University/",'http://127.0.0.1:8000/Universities/Jadavpur-University/','http://127.0.0.1:8000/Universities/Amrita-Vishwa-Vidyapeetham/','http://127.0.0.1:8000/Universities/VIT/','http://127.0.0.1:8000/Universities/DUpost/','http://127.0.0.1:8000/Universities/DUunder/','http://127.0.0.1:8000/Universities/BHU/','http://127.0.0.1:8000/Universities/University-Of-Hyderabad/','http://127.0.0.1:8000/Universities/Amity/','http://127.0.0.1:8000/Universities/Bharathiar-University/','http://127.0.0.1:8000/Universities/Panjab-University/','http://127.0.0.1:8000/Universities/Mysore-University/','http://127.0.0.1:8000/Universities/Chandigarh-University/','http://127.0.0.1:8000/Universities/Andhra-University/','http://127.0.0.1:8000/Universities/Guru-Nanak-Dev-University/','http://127.0.0.1:8000/Universities/University-Of-Kashmir/','http://127.0.0.1:8000/Universities/University-Of-Jammu/','http://127.0.0.1:8000/Universities/Pondicherry-University/','http://127.0.0.1:8000/Universities/Tezpur-University/','http://127.0.0.1:8000/Universities/Gauhati-University/'];
          var result='';
          
          
          setTimeout(() => {
            let BotMessage= document.createElement("div");
           
            BotMessage.classList.add(BotclassName);
            BotMessage.appendChild(chatbot_img);
            
           for (var i = 0; i < Universities_link.length; i++) {
            console.log(result);
              result = " <a href='" + Universities_link[i] + "' style='color:white'>"+ Universities_name[i] + "</a>  ";
              let p = document.createElement("p");
              if(result!=undefined){
              p.innerHTML= result;
              BotMessage.appendChild(p);
              BotMessage.appendChild(document.createElement("br"));
              chatBody.append(BotMessage);
           }
            }
             BotMessage= document.createElement("div");
            BotMessage.classList.add(BotclassName);
            BotMessage.appendChild(chatbot_img);
           p = document.createElement("p");
          let askUserForUni = "If you would like to visit a particular university's page, please enter its name separated by spaces.";
          p.innerHTML=askUserForUni;
          BotMessage.appendChild(p);
          chatBody.append(BotMessage);
            
     }, 600);
        }
        function getAboutUsByText(){
          setTimeout(()=>{
            const botMessageText = 'This website provides an academic calendar of top 21 universities in India. Users can also download the PDF of the calendar and view the most current location of the universities.<br><br>The Search Activity tab allows users to filter the activities of all the universities. We also provide our contact information publicly in case of any queries.';
            const botMessage = document.createElement("div");
            botMessage.classList.add(aboutClassName);
            botMessage.appendChild(chatbot_img);
            const botMessageContainer = document.createElement("div");
            botMessageContainer.style.display = "flex";
            botMessageContainer.style.flexDirection = "column";
            const botMessageLines = botMessageText.split("<br><br>");
            botMessageContainer.style.color = "white";
            botMessageLines.forEach((line) => {
              const lineElement = document.createElement("div");
              const lineTextNode = document.createTextNode(line);
              lineElement.appendChild(lineTextNode);
              botMessageContainer.appendChild(lineElement);
            });
            botMessage.appendChild(botMessageContainer);
            chatBody.appendChild(botMessage);
          }, 600);
        }
      function getDateActivity(myDate){
        setTimeout(()=>{
        fetch('/filter-by-date/' + myDate)
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            
            if ('message' in data) { // check if the response has a message key
              let BotMessage = document.createElement("div");
              BotMessage.classList.add(BotclassName);
              BotMessage.appendChild(chatbot_img);
              const message = document.createElement("p");
              message.innerText = data.message; // get the message value from the response
              BotMessage.appendChild(message);
              chatBody.append(BotMessage);
            } else {
              let BotMessage = document.createElement("div");
              BotMessage.classList.add(BotclassName);
              BotMessage.appendChild(chatbot_img);
              const table = document.createElement("table");
              table.classList.add("activity-table");
              const tableHead = document.createElement("thead");
              tableHead.style.textAlign = "center";
              const tableHeadRow = document.createElement("tr");
              const tableHeadDate = document.createElement("th");
              tableHeadDate.innerText = "Date";
              tableHeadDate.style.border = "1px solid black";
              const tableHeadEndDate = document.createElement("th");
              tableHeadEndDate.style.border = "1px solid black";
              tableHeadEndDate.innerText = "End Date";
              const tableHeadUniName = document.createElement("th");
              tableHeadUniName.innerText = "University Name";
              tableHeadUniName.style.border = "1px solid black";
              const tableHeadActivity = document.createElement("th");
              tableHeadActivity.innerText = "University Activity";
              tableHeadActivity.style.border = "1px solid black";
              tableHeadRow.appendChild(tableHeadDate);
              tableHeadRow.appendChild(tableHeadEndDate);
              tableHeadRow.appendChild(tableHeadUniName);
              tableHeadRow.appendChild(tableHeadActivity);
              tableHead.appendChild(tableHeadRow);
              table.appendChild(tableHead);      
              const tableBody = document.createElement("tbody");
              data.forEach((activity) => {
                const tableRow = document.createElement("tr");
                const tableDate = document.createElement("td");
                const tableEndDate = document.createElement("td");
                const tableUniName = document.createElement("td");
                const tableActivity = document.createElement("td");
                tableDate.style.border = "1px solid black";
                tableEndDate.style.border = "1px solid black";
                tableUniName.style.border = "1px solid black";
                tableActivity.style.border = "1px solid black";
                tableDate.style.textAlign = "center";
                tableEndDate.style.textAlign = "center";
                tableUniName.style.textAlign = "center";
                tableActivity.style.textAlign = "center";
                tableDate.innerText = activity.date;
                tableEndDate.innerText = activity.end_date;
                tableUniName.innerText = activity.university_name;
                tableActivity.innerText = activity.university_activity;
                tableRow.appendChild(tableDate);
                tableRow.appendChild(tableEndDate);
                tableRow.appendChild(tableUniName);
                tableRow.appendChild(tableActivity);
                tableBody.appendChild(tableRow);
                table.appendChild(tableBody);
                BotMessage.appendChild(table);
                chatBody.append(BotMessage);
              })
            }
          })
          .catch(function(error) {
            console.log('Error fetching activities data: ', error);
          });
        }, 600);
      }
      
      const search_activityF = () => {
        setScrollPosition();
        let SAText = 'I want to search activities of universities by date ';
        const userMessage = document.createElement('div');
        let txtNode = document.createTextNode(SAText);
        userMessage.classList.add(UserclassName);
        userMessage.appendChild(user_img);
        userMessage.append(txtNode);
        chatBody.append(userMessage);

        setTimeout(()=>{
      
        const promptUserForDate = () => {
          const dateAsk = 'Please enter the date in YYYY-MM-DD format:';
          const BotMessage = document.createElement('div');
          txtNode = document.createTextNode(dateAsk);
          BotMessage.classList.add(BotclassName);
          BotMessage.appendChild(chatbot_img);
          BotMessage.append(txtNode);
          chatBody.append(BotMessage);
        };
        promptUserForDate();
        
        const handleKeyDown = (e) => {
          if (e.key === 'Enter') {
            const userInput = txtInput.value.trim();
            const response = getChatbotResponse(userInput);
            const BotMessage = document.createElement('div');
            txtNode = document.createTextNode(response);
            BotMessage.classList.add(BotclassName);
            BotMessage.appendChild(chatbot_img);
            BotMessage.append(txtNode);
            chatBody.append(BotMessage);
            txtInput.removeEventListener('keydown', handleKeyDown);
            txtInput.value = null;
          }
        };
      
        txtInput.addEventListener('keydown', handleKeyDown);
      }, 600);
      };
      
      
      txtInput.addEventListener("keyup", (event) => {
          if (event.keyCode === 13) {
              if(txtInput.value!=""){
                  renderUserMessage();
              }
          } 
      });
      
      const renderUserMessage = () => {
          const userInput = txtInput.value;
          console.log(userInput.toLowerCase());
          renderMessageEle(userInput, "user");
          txtInput.value = "";
          setTimeout(()=>{
              renderChatbotResponse(userInput);
          }, 600);

          setScrollPosition();
        };
      
        const renderChatbotResponse = (userInput) => {
          const res = getChatbotResponse(userInput, responseObj);
          renderMessageEle(res);
        };
      
      
        const renderMessageEle = (txt, type) => {
      
          if (type !== "user") {
              const messageEle = document.createElement("div");
              const txtNode = document.createTextNode(txt);
              messageEle.classList.add(BotclassName);
              messageEle.appendChild(chatbot_img);
              messageEle.append(txtNode);
              chatBody.append(messageEle);
          }
          else{
              const messageEle = document.createElement("div");
              const txtNode = document.createTextNode(txt);
              messageEle.classList.add(UserclassName);
              messageEle.appendChild(user_img);
              messageEle.append(txtNode);
              chatBody.append(messageEle);
          }
      
      };
      const universitiesAndLinks = [
  { name: "iis bangalore", url: "http://127.0.0.1:8000/Universities/IIS-Bangalore/" },
  { name: "jawaharlal nehru university", url: "http://127.0.0.1:8000/Universities/Jawaharlal-Nehru-University/" },
  { name: "jamia millia islamia university", url: "http://127.0.0.1:8000/Universities/Jamia-Millia-Islamia-University/" },
  { name: "jadavpur university", url: "http://127.0.0.1:8000/Universities/Jadavpur-University/" },
  { name: "amrita vishwa vidyapeetham", url: "http://127.0.0.1:8000/Universities/Amrita-Vishwa-Vidyapeetham/" },
  { name: "vit", url: "http://127.0.0.1:8000/Universities/VIT/" },
  { name: "bhu", url: "http://127.0.0.1:8000/Universities/BHU/" },
  { name: "university Of hyderabad", url: "http://127.0.0.1:8000/Universities/University-Of-Hyderabad/" },
  { name: "amity", url: "http://127.0.0.1:8000/Universities/Amity/" },
  { name: "amity university", url: "http://127.0.0.1:8000/Universities/Amity/" },
  { name: "bharathiar university", url: "http://127.0.0.1:8000/Universities/Bharathiar-University/" },
  { name: "panjab university", url: "http://127.0.0.1:8000/Universities/Panjab-University/" },
  { name: "mysore university", url: "http://127.0.0.1:8000/Universities/Mysore-University/" },
  { name: "chandigarh university", url: "http://127.0.0.1:8000/Universities/Chandigarh-University/" },
  { name: "andhra university", url: "http://127.0.0.1:8000/Universities/Andhra-University/" },
  { name: "guru nanak dev university", url: "http://127.0.0.1:8000/Universities/Guru-Nanak-Dev-University/" },
  { name: "guru nanak university", url: "http://127.0.0.1:8000/Universities/Guru-Nanak-Dev-University/" },
  { name: "gndu", url: "http://127.0.0.1:8000/Universities/Guru-Nanak-Dev-University/" },
  { name: "university of kashmir", url: "http://127.0.0.1:8000/Universities/University-Of-Kashmir/" },
  { name: "uok", url: "http://127.0.0.1:8000/Universities/University-Of-Kashmir/" },
  { name: "kashmir university", url: "http://127.0.0.1:8000/Universities/University-Of-Kashmir/" },
  { name: "university of jammu", url: "http://127.0.0.1:8000/Universities/University-Of-Jammu/" },
  { name: "uoj", url: "http://127.0.0.1:8000/Universities/University-Of-Jammu/" },
  { name: "jammu university", url: "http://127.0.0.1:8000/Universities/University-Of-Jammu/" },
  { name: "pondicherry university", url: "http://127.0.0.1:8000/Universities/Pondicherry-University/" },
  { name: "tezpur university", url: "http://127.0.0.1:8000/Universities/Tezpur-University/"},
  { name: "tu", url: "http://127.0.0.1:8000/Universities/Tezpur-University/"},
  { name: "tezpur", url: "http://127.0.0.1:8000/Universities/Tezpur-University/"},
  {name: "gauhati university", url: "http://127.0.0.1:8000/Universities/Gauhati-University/"},
  {name: "gu", url: "http://127.0.0.1:8000/Universities/Gauhati-University/"},
  {name: "gauhati", url: "http://127.0.0.1:8000/Universities/Gauhati-University/"},
  {name: "iis", url: "http://127.0.0.1:8000/Universities/IIS-Bangalore/" },
  {name: "jnu", url: "http://127.0.0.1:8000/Universities/Jawaharlal-Nehru-University/" },
  {name: "jamia", url: "http://127.0.0.1:8000/Universities/Jamia-Millia-Islamia-University/" },
  {name: "jamia university", url: "http://127.0.0.1:8000/Universities/Jamia-Millia-Islamia-University/" },
  {name: "jmiu", url: "http://127.0.0.1:8000/Universities/Jamia-Millia-Islamia-University/" },
  { name: "avv", url: "http://127.0.0.1:8000/Universities/Amrita-Vishwa-Vidyapeetham/" },
  { name: "vellore university", url: "http://127.0.0.1:8000/Universities/VIT/" },
  { name: "delhi university pg", url: "http://127.0.0.1:8000/Universities/DUpost/" },
  { name: "delhi university ug", url: "http://127.0.0.1:8000/Universities/DUunder/" },
  { name: "banaras university", url: "http://127.0.0.1:8000/Universities/BHU/" },
  { name: "hyderabad university", url: "http://127.0.0.1:8000/Universities/University-Of-Hyderabad/" },
  ]

      
      const responseObj = {
        hello: "Hey ! How are you doing ?",
        hey: "Hey! What's Up",
        name: "Nice to meet you",
        hi: "Hi! How are you?",
        bye: "Good Bye!",
        fine: "Thats Great! How can I help you today?",
        good: "Thats Great! How can I help you today?",
        today: new Date().toDateString(),
        time: new Date().toLocaleTimeString(),
        date: new Date().toISOString().slice(0, 10),
      };
      function getNames(universitiesAndLinks) {
        return universitiesAndLinks.map((university) => university.name);
      } 
      function getUniLink(userInput){
        const resultUni = universitiesAndLinks.find(u => u.name.toLowerCase() === userInput.toLowerCase());
          const link = document.createElement("a");
          link.href = resultUni.url;
          link.target = "_blank";
          link.innerHTML = userInput.toUpperCase();
          const output = document.createElement("div");
          output.classList.add(BotclassName);
          output.appendChild(chatbot_img);
          output.innerHTML = `Here's the URL for ${userInput.toUpperCase()}: `;
          output.appendChild(link);
          chatBody.append(output);
      }
      const getChatbotResponse = (userInput, responseObj) => {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (getNames(universitiesAndLinks).includes(userInput.toLowerCase())) {
          getUniLink(userInput);
          return "Can I help you with anything else?";
        }
        else if(userInput.toLowerCase().includes('univer')||userInput.toLowerCase().includes('coll')||userInput.toLowerCase().includes('list')){
          unisByText();
          return 'Loading Universities...';
        } else if(userInput.toLowerCase().includes("about")||userInput.toLowerCase().includes("use")){
          getAboutUsByText();
          return "Sure, here is some information about this website";
        } else if (userInput.toLowerCase().includes('activit')||userInput.toLowerCase().includes('event')||userInput.toLowerCase().includes(' on ')) {
          return 'Please enter the date in the format "YYYY-MM-DD".';
        }
        else if(userInput.toLowerCase().replace(/\s+/g, '').includes("no")||userInput.toLowerCase().replace(/\s+/g, '').includes("nah")){
          return "Okay, feel free to ask if you need something!";
        }
        else if(userInput.toLowerCase().replace(/\s+/g, '').includes("sure")||userInput.toLowerCase().replace(/\s+/g, '').includes("ido")||userInput.toLowerCase().replace(/\s+/g, '').includes("something")){
          return "Great! What would you like to do?";
        }
        else if(userInput.toLowerCase().replace(/\s+/g, '').includes("thank")||userInput.toLowerCase().replace(/\s+/g, '').includes("appreci")){
          return "No problem! Can I help you with anything else?";
        }
        else {
          const userInputArray = userInput.split(" ");
          const responseKeys = Object.keys(responseObj);
          for (let i = 0; i < responseKeys.length; i++) {
            if (` ${userInputArray.join(' ')} `.toLowerCase().includes(` ${responseKeys[i]} `)) {
              return responseObj[responseKeys[i]];
            }
          }
          if (dateRegex.test(userInput)) {
            getDateActivity(userInput);
            return 'Searching for activities of universities on ' + userInput + '...';
          } else {
            return "Im sorry, i didn't understand.";
          }
        }
        
       
      };