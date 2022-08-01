const choose = document.querySelector('.box12')
const work1 = document.querySelector('#work-current')
const work2 = document.querySelector('#work-late')
const play1 = document.querySelector('#play-current')
const last = document.querySelectorAll('.last')
const par = document.querySelectorAll('.par')
const play2 = document.querySelector('#play-late')
const study1 = document.querySelector('#study-current')
const study2 = document.querySelector('#study-late')
const exercise1 = document.querySelector('#exercise-current')
const exercise2 = document.querySelector('#exercise-late')
const social1 = document.querySelector('#social-current')
const social2 = document.querySelector('#social-late')
const self1 = document.querySelector('#self-current')
const self2 = document.querySelector('#self-late')
let mads,value,bash;

// add an active class to weekly in CSS


choose.addEventListener("click",function(e){
    // par.forEach(function(p){
    //     p.classList.remove("active");
    // })
    let mad = e.target
    // mad.style.color= 'white'
    if(mad.classList.contains("par")){
        par.forEach(function(p){
            p.classList.remove("active");
        })
    
        value = mad.textContent ;
         bash = value.toLowerCase();
        mad.classList.add("active")
        if (bash === "daily"){
            last.forEach(function(p){
                p.textContent = "Yesterday"
            })
        }else if (bash === "monthly"){
            last.forEach(function(p){
                p.textContent = "Last Month"
            })
        }else(
            last.forEach(function(p){
                p.textContent = "Last Week"
            })
        )
    
        where("./data.json")    
    }

});

const where = async function(level){
    const mad = await fetch( level) ;
     mads = await mad.json() ;
    const bad =(mads[0].timeframes[bash])
    work1.textContent= bad.current
    work2.textContent= bad.previous
    const play = mads[1].timeframes[bash]
    play1.textContent= play.current
    play2.textContent= play.previous
    const study = mads[2].timeframes[bash]
    study1.textContent= study.current
    study2.textContent= study.previous
    const exercise = mads[3].timeframes[bash]
    exercise1.textContent= exercise.current
    exercise2.textContent= exercise.previous
    const social = mads[4].timeframes[bash]
    social1.textContent= social.current
    social2.textContent= social.previous
    const self = mads[5].timeframes[bash]
    self1.textContent= self.current
    self2.textContent= self.previous
}

// where("./data.json")

