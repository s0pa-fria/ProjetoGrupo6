var data= {
    chatinit:{
        title:["Olá <span class='emoji'> </span>", "Eu sou o Sr. Chatbot", "Como posso te ajudar?"],
        options:["Pagamentos <span class='emoji'> </span>", "Entregas <span class='emoji'> </span>", "Cancelamento <span class='emoji'> </span>", "Rastreamento <span class='emoji'> </span>"]
    },
    pagamentos: {
        title:["Nossa loja virtual oferece diversas formas de pagamento para sua comodidade: cartão de crédito, boleto bancário, transferência bancária e pagamento via aplicativos de pagamento.", "Escolha a opção que mais se adequa a você e aproveite suas compras online de forma segura e prática!"],

    },
    entregas:{
        title:["Bem-vindo à Niker's Sports!", "Garantimos entregas rápidas e eficientes em um prazo de 3 a 5 dias úteis.", "Processamos seu pedido com agilidade e contamos com transportadoras confiáveis.","Acompanhe seu pacote através do rastreamento e entre em contato caso precise de suporte.", "Sua satisfação é nossa prioridade. Obrigado por escolher nossa loja!"],
        
    },   
    cancelamento:{
        title:["Em relação à nossa política de cancelamento, entendemos que imprevistos podem acontecer.","Caso deseje cancelar sua compra, você tem até 24 horas após a confirmação do pedido para solicitar o cancelamento.","Após esse prazo, o cancelamento estará sujeito a análise e possíveis taxas.","Entre em contato com nosso suporte para mais informações. Agradecemos sua compreensão e estamos à disposição para ajudar."],
    
    },
    rastreamento:{
        title:["Após a postagem do seu pedido, forneceremos um código de rastreamento exclusivo.", "Com esse código, você poderá acompanhar o status da sua entrega em tempo real. Basta acessar nosso site e inserir o código na página de rastreamento.", "Dessa forma, você terá total visibilidade sobre o trajeto do seu pacote até chegar em suas mãos.", "Mantenha-se informado e tranquilo com nosso sistema de rastreamento eficiente."],
        
    },    
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='INICIAR CHAT'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='FECHAR CHAT';
        initChat();     
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        showOptions(options,); 
    }
    else{
        console.log("end result");
            handleOptions(options,url); 
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}