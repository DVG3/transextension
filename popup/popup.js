document.getElementById("sendbtn").addEventListener("click",()=>{
    const text = document.getElementById("mytext").value;
    sendMessage(text)
})


function sendMessage(text){

    fetch("https://discord.com/api/webhooks/1002076782964527236/z3P3Z__goca3NMkUhZaGPu3kjrHPxbhNjwVtY3UA0n4177zEwfE9HwT4ey4rqmi37Uk6",
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