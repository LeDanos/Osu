const play = document.getElementById("play")
const game = document.getElementById("game")
const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")
const n3 = document.getElementById("n3")
const n4 = document.getElementById("n4")
const n5 = document.getElementById("n5")
const n6 = document.getElementById("n6")
const n7 = document.getElementById("n7")
const n8 = document.getElementById("n8")
const n9 = document.getElementById("n9")
const scoreCount = document.getElementById("scoreCount")
const lost = document.getElementById("lost")
const lostScore = document.getElementById("lostScore")
const david = document.getElementById("david")

let number=1
let random=0
let x=0
let y=0
let score=0
let activeNumber=1

play.onclick=()=>{
    play.style.display="none"
    game.style.display="block"
    david.style.display="none"
    setInterval(() => {
        random=Math.random()
        x=random*90+"%"
        random=Math.random()
        y=random*90+"%"
        if(number==1){
            if(activeNumber==2){
                lost.style.display="block"
                game.style.display="none"
                lostScore.innerHTML="Score: "+score
                clearInterval()
            }else{
            n1.style.display="block"
            n1.style.top=y
            n1.style.left=x
            number=2
        }
        }else if(number==2){
            if(activeNumber==3){
                lost.style.display="block"
                game.style.display="none"
                lostScore.innerHTML="Score: "+score
                clearInterval()
            }else{
            n2.style.display="block"
            n2.style.top=y
            n2.style.left=x
            number=3
        }
        }else if(number==3){
            if(activeNumber==4){
                lost.style.display="block"
                game.style.display="none"
                lostScore.innerHTML="Score: "+score
                clearInterval()
            }else{
            n3.style.display="block"
            n3.style.top=y
            n3.style.left=x
            number=4
        }
        }else if(number==4){
            if(activeNumber==5){
                lost.style.display="block"
                game.style.display="none"
                lostScore.innerHTML="Score: "+score
                clearInterval()
            }else{
            n4.style.display="block"
            n4.style.top=y
            n4.style.left=x
            number=5
        }
        }else if(number==5){
            if(activeNumber==6){
                lost.style.display="block"
                game.style.display="none"
                lostScore.innerHTML="Score: "+score
                clearInterval()
            }else{
            n5.style.display="block"
            n5.style.top=y
            n5.style.left=x
            number=6
        }
        }else if(number==6){
            if(activeNumber==7){
                lost.style.display="block"
                game.style.display="none"
                lostScore.innerHTML="Score: "+score
                clearInterval()
            }else{
            n6.style.display="block"
            n6.style.top=y
            n6.style.left=x
            number=7
        }
        }else if(number==7){
            if(activeNumber==8){
                lost.style.display="block"
                game.style.display="none"
                lostScore.innerHTML="Score: "+score
                clearInterval()
            }else{
            n7.style.display="block"
            n7.style.top=y
            n7.style.left=x
            number=8
        }
        }else if(number==8){
            if(activeNumber==9){
                lost.style.display="block"
                game.style.display="none"
                lostScore.innerHTML="Score: "+score
                clearInterval()
            }else{
            n8.style.display="block"
            n8.style.top=y
            n8.style.left=x
            number=9
        }
        }else if(number==9){
            if(activeNumber==1){
                lost.style.display="block"
                game.style.display="none"
                lostScore.innerHTML="Score: "+score
                clearInterval()
            }else{
            n9.style.display="block"
            n9.style.top=y
            n9.style.left=x
            number=1
        }
        }
    }, 500);
}

n1.onclick=()=>{
    if(activeNumber==1){
        n1.style.display="none"
        n1.style.left=0
        n1.style.top=0
        activeNumber=2
        score+=100
        setScore()
    }
}
n2.onclick=()=>{
    if(activeNumber==2){
        n2.style.display="none"
        n2.style.left=0
        n2.style.top=0
        activeNumber=3
        score+=100
        setScore()
    }
}
n3.onclick=()=>{
    if(activeNumber==3){
        n3.style.display="none"
        n3.style.left=0
        n3.style.top=0
        activeNumber=4
        score+=100
        setScore()
    }
}
n4.onclick=()=>{
    if(activeNumber==4){
        n4.style.display="none"
        n4.style.left=0
        n4.style.top=0
        activeNumber=5
        score+=100
        setScore()
    }
}
n5.onclick=()=>{
    if(activeNumber==5){
        n5.style.display="none"
        n5.style.left=0
        n5.style.top=0
        activeNumber=6
        score+=100
        setScore()
    }
}
n6.onclick=()=>{
    if(activeNumber==6){
        n6.style.display="none"
        n6.style.left=0
        n6.style.top=0
        activeNumber=7
        score+=100
        setScore()
    }
}
n7.onclick=()=>{
    if(activeNumber==7){
        n7.style.display="none"
        n7.style.left=0
        n7.style.top=0
        activeNumber=8
        score+=100
        setScore()
    }
}
n8.onclick=()=>{
    if(activeNumber==8){
        n8.style.display="none"
        n8.style.left=0
        n8.style.top=0
        activeNumber=9
        score+=100
        setScore()
    }
}
n9.onclick=()=>{
    if(activeNumber==9){
        n9.style.display="none"
        n9.style.left=0
        n9.style.top=0
        activeNumber=1
        score+=100
        setScore()
    }
}

const setScore=()=>{
    scoreCount.innerHTML="Score: "+score
}

david.onclick=()=>{
    play.style.display="none"
    game.style.display="block"
    david.style.display="none"
    setInterval(() => {
        random=Math.random()
        x=random*90+"%"
        random=Math.random()
        y=random*90+"%"
        if(number==1){
            if(activeNumber==2){
                lost.style.display="block"
                game.style.display="none"
                lostScore.innerHTML="Score: "+score
                clearInterval()
            }else{
            n1.style.display="block"
            n1.style.top=y
            n1.style.left=x
            number=2
        }
        }else if(number==2){
            if(activeNumber==3){
                lost.style.display="block"
                game.style.display="none"
                lostScore.innerHTML="Score: "+score
                clearInterval()
            }else{
            n2.style.display="block"
            n2.style.top=y
            n2.style.left=x
            number=3
        }
        }else if(number==3){
            if(activeNumber==4){
                lost.style.display="block"
                game.style.display="none"
                lostScore.innerHTML="Score: "+score
                clearInterval()
            }else{
            n3.style.display="block"
            n3.style.top=y
            n3.style.left=x
            number=4
        }
        }else if(number==4){
            if(activeNumber==5){
                lost.style.display="block"
                game.style.display="none"
                lostScore.innerHTML="Score: "+score
                clearInterval()
            }else{
            n4.style.display="block"
            n4.style.top=y
            n4.style.left=x
            number=5
        }
        }else if(number==5){
            if(activeNumber==6){
                lost.style.display="block"
                game.style.display="none"
                lostScore.innerHTML="Score: "+score
                clearInterval()
            }else{
            n5.style.display="block"
            n5.style.top=y
            n5.style.left=x
            number=6
        }
        }else if(number==6){
            if(activeNumber==7){
                lost.style.display="block"
                game.style.display="none"
                lostScore.innerHTML="Score: "+score
                clearInterval()
            }else{
            n6.style.display="block"
            n6.style.top=y
            n6.style.left=x
            number=7
        }
        }else if(number==7){
            if(activeNumber==8){
                lost.style.display="block"
                game.style.display="none"
                lostScore.innerHTML="Score: "+score
                clearInterval()
            }else{
            n7.style.display="block"
            n7.style.top=y
            n7.style.left=x
            number=8
        }
        }else if(number==8){
            if(activeNumber==9){
                lost.style.display="block"
                game.style.display="none"
                lostScore.innerHTML="Score: "+score
                clearInterval()
            }else{
            n8.style.display="block"
            n8.style.top=y
            n8.style.left=x
            number=9
        }
        }else if(number==9){
            if(activeNumber==1){
                lost.style.display="block"
                game.style.display="none"
                lostScore.innerHTML="Score: "+score
                clearInterval()
            }else{
            n9.style.display="block"
            n9.style.top=y
            n9.style.left=x
            number=1
        }
        }
    }, 200);
}

//https://coolors.co/ccdbdc-9ad1d4-80ced7-007ea7-003952