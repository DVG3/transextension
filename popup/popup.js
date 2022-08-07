const CuliAPI = "https://discord.com/api/webhooks/1002076782964527236/z3P3Z__goca3NMkUhZaGPu3kjrHPxbhNjwVtY3UA0n4177zEwfE9HwT4ey4rqmi37Uk6"
const TestAPI = "https://discord.com/api/webhooks/1001883425915011114/9PPvecn4YjWwr5jwo9GmiBNNOB-h4t9ueK8Vh7v1H1YR5vok9s6RZrYREf0-rWnrRdD6"

document.getElementById("sendbtn").addEventListener("click",()=>{
    const text = document.getElementById("mytext").value;
    sendMessage(text)
})


function sendMessage(text){
    fetch(TestAPI,
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