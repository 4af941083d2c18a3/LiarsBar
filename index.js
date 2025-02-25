setting=(selector)=>{
    const wrap=document.createElement('div')
    const shootBtn=document.createElement('button')
    const status=document.createElement('p')
    const reset=document.createElement('button')
    const revoler=document.createElement('img')
    revoler.src="./리볼버.png"
    revoler.style.width="80px"
    wrap.append(shootBtn)
    wrap.append(status)
    wrap.classList.add("player")
    shootBtn.innerText="Shoot"
    shootBtn.append(revoler)
    status.innerText="남은 탄창 : 6"
    var count=6
    const shoot=()=>{
        const bool=Math.ceil(6-Math.random()*6)>=count
        if (bool) {
            shootBtn.remove()
            status.innerText="DEAD"
            status.style.color="#f00"
            status.style.fontSize="32px"
            wrap.append(reset)
        } else {
            count--
            status.innerText="남은 탄창 : "+count
        }
    }
    const resetFunc=()=>{
        count=6
        status.innerText="남은 탄창 : 6"
        wrap.innerText=""
        wrap.append(shootBtn)
        wrap.append(status)
    }
    shootBtn.addEventListener('click',shoot)
    reset.addEventListener('click',resetFunc)
    document.querySelector(selector).innerText=''
    document.querySelector(selector).append(wrap)

    return 0
}

centerSet=(arr)=>{
    document.querySelector('.center').innerHTML=""
    const wrap=document.createElement('div')
    wrap.classList.add("center-wrap")
    const end=document.createElement('button')
    const table=document.createElement('button')
    const card=document.createElement('p')
    const deck=document.createElement('img')
    const choose=()=>{
        const chosen=arr[Math.floor(Math.random()*arr.length)]
        card.innerText="뽑는 중."
        setTimeout(()=>{
            card.innerText="뽑는 중.."
            setTimeout(() => {
                card.innerText="뽑는 중..."
                setTimeout(()=>{
                    card.innerText=chosen+"'s Table"
                },250)
            },250);
        },250)
    }
    const endFunc=()=>{
        wrap.innerHTML=""
        wrap.append(basicBtn)
        wrap.append(devilBtn)
        wrap.append(chaosBtn)
        document.querySelector('.top').innerText='Player1'
        document.querySelector('.left').innerText='Player2'
        document.querySelector('.bottom').innerText='Player3'
        document.querySelector('.right').innerText='Player4'
    }
    end.addEventListener('click',endFunc)
    table.addEventListener('click',choose)
    table.classList.add("deck")
    end.classList.add("end")
    deck.src="./덱.png"
    deck.style.width="50px"
    end.innerText="END"
    table.append(deck)
    table.append("카드 뽑기")
    card.innerText="대기 중"
    wrap.append(table)
    wrap.append(card)
    wrap.append(end)
    document.querySelector('.center').append(wrap)
    return 0
}

basic=()=>{
    setting('.top')
    setting('.left')
    setting('.right')
    setting('.bottom')
    centerSet(["Spade","Heart","Diamond"])
}
devil=()=>{
    setting('.top')
    setting('.left')
    setting('.right')
    setting('.bottom')
    centerSet(["Spade","Heart","Diamond"])
}
chaos=()=>{
    setting('.top')
    setting('.left')
    setting('.right')
    setting('.bottom')
    centerSet(["Spade","Diamond"])
}
const basicBtn=document.createElement('button')
const devilBtn=document.createElement('button')
const chaosBtn=document.createElement('button')
basicBtn.addEventListener('click',basic)
devilBtn.addEventListener('click',devil)
chaosBtn.addEventListener('click',chaos)
basicBtn.innerText="Basic"
devilBtn.innerText="Devil"
chaosBtn.innerText="Chaos"
devilBtn.style.margin="10px 0px"
document.querySelector('.center').append(basicBtn)
document.querySelector('.center').append(devilBtn)
document.querySelector('.center').append(chaosBtn)