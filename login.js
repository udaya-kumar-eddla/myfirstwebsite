function handleLogin(){
    const useRef=document.querySelector("body > p:nth-child(2) > input");
    const pwdRef=document.querySelector("body > p:nth-child(3) > input");
    const resultRef=document.querySelector("body > h3");
    const uid=useRef.value;
    const pwd=pwdRef.value;
    if(uid==="p1" && pwd==="p2"){
        alert("user id and pwd is correct");
    }else{
        resultRef.innerHTML="please check enter uid and password";
        setTimeout(()=>{
            resultRef.innerHTML=""
        },5000)
    }
}