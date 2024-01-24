let level1 = {};
var flag=0;

// startGame();
displayName();


function displayName()
{
    var title=document.createElement('div');
    title.id='title';
    var titleimg = document.createElement('img');
    titleimg.src='title.png';
    title.appendChild(titleimg);

    document.body.appendChild(title);
    setTimeout(function() {
        document.body.removeChild(title);
        displayAlert();
    }, 5000); 
//    startGame();
    
}


function displayAlert()
{
    var alertBox = document.createElement('div');
    alertBox.id = 'alertBox';

    var alertContent = document.createElement('div');
    alertContent.id = 'alertContent';
    alertContent.textContent = 'You are Detective Alex Harper, renowned for solving complex cases. One rainy evening, a mysterious letter arrives, leading you to a grand mansion on the outskirts of town. As you enter the mansion, the door slams shut behind you, trapping you inside.'; // Change the text as needed

    alertBox.appendChild(alertContent);
    document.body.appendChild(alertBox);

    // Remove the alert box after a certain duration (e.g., 3 seconds)
    setTimeout(function() {
      document.body.removeChild(alertBox);
    }, 2000); // Adjust the duration as needed
    startGame();
}



function startGame() {
    level1 = {
        stage: 'start',
        text: "The figure reveals they know about a hidden room in the mansion. You follow their instructions, uncovering a secret passage. Now, you must decide:",
        choices: [
            { text: 'Cooperate with the mysterious figure: Listen to the accusations and attempt to cooperate.'},
            { text: 'Defend yourself: Deny the accusations and demand answers.' }
        ]
    };

    level2_1={
        stage: 'level2_1',
        text: "You find yourself in the grand foyer, dimly lit and echoing with eerie silence. A figure appears at the top of the staircase, obscured by shadows. The voice, cold and calculated, accuses you of a crime you didn't commit. The game begins with a choice:",
        choices: [
            { text: 'Explore the secret passage: Venture into the unknown, hoping to find clues.' },
            { text: 'Confront the figure: Question their motives and demand the truth.' }
        ],
        // endcases:['end1','end2']


    };

    level2_2={
        stage: 'level2_2',
        text: "The figure challenges you to prove your innocence by solving the murder. You now face a critical decision:",
        choices: [
            { text: 'Agree to solve the murder: Take on the challenge, determined to clear your name.' },
            { text: "Challenge the figure's authority: Refuse to play their game and demand freedom." }
        ],
        // endcases:['end3','end4']


    };

    level2_1_1={
        stage: 'level2-1-1',
        text: "The passage leads to a hidden library filled with dusty tomes. As you search for clues, you uncover a secret society's involvement in the murder. Now, you must decide:",
        choices: [
            { text: 'Expose the secret society: Reveal their existence to the world.' },
            { text: "Conceal the information: Keep the society's secret in exchange for your safety." }
        ],
        endcases:['Truth is revealed- you won!','You are coward- You loose!'],
        images:['./arrested.jpg','./murderer.jpg']

    }

    level2_1_2={
        stage: 'level2-1-2',
        text: "The figure reveals themselves to be a victim's relative seeking justice. They share a piece of evidence that could turn the investigation. Now, you must decide:",
        choices: [
            { text: 'Trust the figure: Work together to uncover the truth.' },
            { text: "Distrust the figure: Investigate on your own, wary of potential deception." }
        ],
        endcases:['This is wrong- You loose!','You Won!- you are a hero'],
        images:['./deal.jpg','./det.jpg']
    }


    level2_2_1={
        stage: 'level2-2-1',
        text: "The figure provides you with the initial clues. As you delve into the investigation, you uncover a web of deceit and betrayal. Now, you must decide:",
        choices: [
            { text: 'Arrest the murderer: Confront the culprit and bring them to justice.' },
            { text: "Negotiate with the murderer: Offer a deal in exchange for the truth." }
        ],
        endcases:['You Won!','Deal with murderer? -You loose!'],
        images:['./arrested.jpg','./handshk.jpg']

    }

    level2_2_2={
        stage: 'level2-2-2',
        text: "The figure warns that your defiance comes with consequences. You now face an immediate choice:",
        choices: [
            { text: 'Escape the mansion: Find a way to escape and clear your name.' },
            { text: "Face the consequences: Confront the figure and challenge their authority." }
        ],
        endcases:['You escaped!- you still win', 'You are a hero!- You won!'],
        images:['running1.jpg','hero1.jpg']


    }
    // addButton();
    showLink();
    createCards();
    appendLevel1();
}

function showLink()
{
    document.getElementById('addLink').style.display='block';

}

function addButton()
{
    document.getElementById('button').style.display='block';
}

function openAddenudum()
{
    url='./addendum.html';
    window.open(url, '_blank');
}


function createCards() {

    //console.log(document.querySelector(".test").innerHTML);
    document.getElementById('story').innerHTML = `<p>${level1.text}</p>`;
    var rows = document.getElementById('choices')

    var col1= document.createElement('div');
    col1.id='col1';
    rows.appendChild(col1);

    var card1= document.createElement('div');
    card1.id='card1';
    col1.appendChild(card1);
    //card1.addEventListener('click', updateCards(card1));
    
    var col2=document.createElement('div');
    col2.id='col2';
    rows.appendChild(col2);

    var card2= document.createElement('div');
    card2.id='card2';
    col2.appendChild(card2);
   // card2.addEventListener('click', updateCards(card2));

    //console.log(document.querySelectorAll(".t").innerHTML);
}

function updateCards(){
    console.log("calling update cards");
    // if(card1.innerHTML=="")
    // {
    //     document.getElementById('card1').innerHTML= `${level1.choices[0].text}`;
    //     updateCards(`${level1.choices[0].text}`);
    // }
    // if(card2.innerHTML=="")
    // {
    //     document.getElementById('card1').innerHTML= `${level1.choices[1].text}`;
    //     updateCards(`${level1.choices[1].text}`);

    // }
    // if(card1.innerHTML==`${level1.choices[0].text}`)
    // {
    

}

function appendLevel1()
{

    const card1 = document.getElementById('card1')
    const card2 = document.getElementById('card2')

    document.getElementById('card1').innerHTML= `${level1.choices[0].text}`;
    document.getElementById('card2').innerHTML= `${level1.choices[1].text}`;
    card1.addEventListener('click', appendLevel2_1);
    card2.addEventListener('click', appendLevel2_2);
}

function appendLevel2_1()
{
    const card1 = document.getElementById('card1')
    const card2 = document.getElementById('card2')
    var story = document.getElementById('story').innerHTML
    if(story != "")
        document.getElementById('story').innerHTML="";
    document.getElementById('story').innerHTML = `<p>${level2_1.text}</p>`;

    // document.getElementById('card1').innerHTML= ``;
    document.getElementById('card1').innerHTML= `${level2_1.choices[0].text}`;
    document.getElementById('card2').innerHTML= `${level2_1.choices[1].text}`;
    card1.addEventListener('click', appendLevel2_1_1);
    card2.addEventListener('click', appendLevel2_1_2);
}

function appendLevel2_2()
{
    const card1 = document.getElementById('card1')
    const card2 = document.getElementById('card2')
    var story = document.getElementById('story').innerHTML
    if(story != "")
        document.getElementById('story').innerHTML="";
    document.getElementById('story').innerHTML = `<p>${level2_2.text}</p>`;

    document.getElementById('card1').innerHTML= `${level2_2.choices[0].text}`;
    document.getElementById('card2').innerHTML= `${level2_2.choices[1].text}`;
    card1.addEventListener('click', appendLevel2_2_1);
    card2.addEventListener('click', appendLevel2_2_2);
}

function appendLevel2_1_1()
{
    const card1 = document.getElementById('card1')
    const card2 = document.getElementById('card2')
    var story = document.getElementById('story').innerHTML
    if(story != "")
        document.getElementById('story').innerHTML="";
    document.getElementById('story').innerHTML = `<p>${level2_1_1.text}</p>`;
    

    document.getElementById('card1').innerHTML= `${level2_1_1.choices[0].text}`;
    document.getElementById('card2').innerHTML= `${level2_1_1.choices[1].text}`;

    card1.addEventListener('click', ()=>{final(level2_1_1,card1.id)});
    card2.addEventListener('click', ()=>{ final(level2_1_1,card2.id)});
}

function appendLevel2_1_2()
{
    const card1 = document.getElementById('card1')
    const card2 = document.getElementById('card2')
    var story = document.getElementById('story').innerHTML
    if(story != "")
        document.getElementById('story').innerHTML="";
    document.getElementById('story').innerHTML = `<p>${level2_1_2.text}</p>`;

    document.getElementById('card1').innerHTML= `${level2_1_2.choices[0].text}`;
    document.getElementById('card2').innerHTML= `${level2_1_2.choices[1].text}`;
    card1.addEventListener('click', ()=>{final(level2_1_2,card1.id)});
    card2.addEventListener('click', ()=>{final(level2_1_2,card2.id)});
}


function appendLevel2_2_1()
{
    const card1 = document.getElementById('card1')
    const card2 = document.getElementById('card2')
    var story = document.getElementById('story').innerHTML
    if(story != "")
        document.getElementById('story').innerHTML="";
    document.getElementById('story').innerHTML = `<p>${level2_2_1.text}</p>`;

    document.getElementById('card1').innerHTML= `${level2_2_1.choices[0].text}`;
    document.getElementById('card2').innerHTML= `${level2_2_1.choices[1].text}`;
    card1.addEventListener('click', ()=>{final(level2_2_1,card1.id)});
    card2.addEventListener('click', ()=>{final(level2_2_1,card2.id)});
}


function appendLevel2_2_2()
{
    const card1 = document.getElementById('card1')
    const card2 = document.getElementById('card2')
    var story = document.getElementById('story').innerHTML
    if(story != "")
        document.getElementById('story').innerHTML="";
    document.getElementById('story').innerHTML = `<p>${level2_2_2.text}</p>`;

    document.getElementById('card1').innerHTML= `${level2_2_2.choices[0].text}`;
    document.getElementById('card2').innerHTML= `${level2_2_2.choices[1].text}`;
    card1.addEventListener('click', ()=>{final(level2_2_2,card1.id)});
    card2.addEventListener('click', ()=>{final(level2_2_2,card2.id)});
}


function final(obj,id){

    // if(story != "")
    // document.getElementById('story').innerHTML="";
    if(id=='card1'){
        //document.innerHTML="";
        document.querySelector('#choices').innerHTML='';
        var image=obj.images[0];
        document.body.style.backgroundImage = "url('" + image + "')";
        
        document.querySelector('#story').innerHTML=obj.endcases[0];

    }
    else if(id=='card2'){
        document.querySelector('#choices').innerHTML=''
        var image=obj.images[1];
        document.body.style.backgroundImage = "url('" + image + "')";
        document.querySelector('#story').innerHTML=obj.endcases[1];

    }

}

    // if (level1.choices.length > 0) {
    //     let choicesHTML = '';
    //     for (let i = 0; i < level1.choices.length; i++) {
    //         choicesHTML += `<button onclick="makeChoice(${i})">${level1.choices[i].text}</button>`;
    //     }
    //     document.getElementById('choices').innerHTML = choicesHTML;
    // } else {
    //     document.getElementById('choices').innerHTML = '';
    // }

    // document.getElementById('image').innerHTML = `<img src="${level1.image}" alt="Scene Image">`;
function finalAlert()
{
    var alertBox = document.createElement('div');
    alertBox.id = 'alertBox';

    var alertContent = document.createElement('div');
    alertContent.id = 'alertContent';
    alertContent.textContent = `${level2_2_2.text}`

    alertBox.appendChild(alertContent);
    document.body.appendChild(alertBox);
}


