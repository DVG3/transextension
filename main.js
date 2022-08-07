const CuliAPI = "https://discord.com/api/webhooks/1002076782964527236/z3P3Z__goca3NMkUhZaGPu3kjrHPxbhNjwVtY3UA0n4177zEwfE9HwT4ey4rqmi37Uk6"
const TestAPI = "https://discord.com/api/webhooks/1001883425915011114/9PPvecn4YjWwr5jwo9GmiBNNOB-h4t9ueK8Vh7v1H1YR5vok9s6RZrYREf0-rWnrRdD6"


document.body.addEventListener("click",()=>{
    document.querySelectorAll(".TestButton").forEach(btn=>{
        console.log("Removed")
        btn.remove();
    })
})

running = setInterval(function() {
    const messages = document.querySelectorAll("[data-testid=solid-message-bubble]")
    messages.forEach(message=>{
        if (message.classList.contains("added_transfer_button")) return;
        message.classList.add("added_transfer_button")
        
        message.addEventListener("click",(e)=>{
            btn = document.createElement("button")
            btn.style.position = "absolute"
            btn.style.top = e.clientY + "px"
            btn.style.left = e.clientX + "px"
            btn.style.width = "50px"
            btn.style.height = "50px"
            btn.innerText = "Send to culi"
            btn.addEventListener("click",()=>{
                let text = message.querySelector(".hzawbc8m.ii04i59q.jq4qci2q.g9io39s2.oo9gr5id")
                if (!text) 
                {
                    text = message.querySelector(".hzawbc8m.ii04i59q.jq4qci2q.g9io39s2.ljqsnud1")
                }
                text = text.innerText
                sendMessage(text)
            })
            btn.classList.add("TestButton")
            setTimeout(()=>{
                document.body.appendChild(btn)
                console.log(btn)
            },500)
            
        })
    })
},1000)

function sendMessage(text){
    fetch(CuliAPI,
    {
        method:"post",
        headers:{
            "Content-Type": "application/json",
        },
        
        body:JSON.stringify({
            content: text, 
            embeds: null,
            attachments: []
        })
    })
}