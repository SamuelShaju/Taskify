
const allCardData = [];


function addNewCard()
{
    const title = document.getElementById("task_title").value;
    const imgurl = document.getElementById("img_url").value;
    const desc = document.getElementById("task_desc").value;
    const ID = Date.now().toString();

    const task_details = {id: ID, title: title, imgurl: imgurl, desc: desc};
    

    allCardData.push(task_details);

    localStorage.setItem("TASKS", JSON.stringify(allCardData));


    const task_card = `<div class="task_card" id="${task_details.id}">
                            <div class="task_head">
                                <h1>${title}</h1>
                                <span><button>Edit</button> <button onclick="deleteCard(${task_details.id})">Delete</button></span>
                            </div>
                            <div class="task_body">
                                <img src="${imgurl}" alt="Task Image" class="task_img">

                                <p class="task_para">
                                    ${desc}
                                </p>

                            </div>

                            <div class="task_footer">
                            </div>
                        </div>`

    const container = document.getElementById("card_container").innerHTML += task_card;
}




function deleteCard(ID)
{
    const allCards = JSON.parse(localStorage.getItem("TASKS"));

    
    document.getElementById(ID).remove();

    for(let i = 0; i < allCards.length; i++)
    {
        if(allCards[i].id==ID)
        {
            allCards.splice(i, 1);
            break;
        }
    }


    allCards.filter((item) => item.id !== ID);
    localStorage.setItem("TASKS", JSON.stringify(allCards));

    
}




function loadCards(){
    const allCards = JSON.parse(localStorage.getItem("TASKS"));

    const container = document.getElementById("card_container");
    
    for(item of allCards)
    {
        console.log(item.id)
        const task_card = `<div class="task_card" id="${item.id}">
                            <div class="task_head">
                                <h1>${item.title}</h1>
                                <span><button>Edit</button> <button onclick="deleteCard(${item.id})">Delete</button></span>
                            </div>
                            <div class="task_body">
                                <img src="${item.imgurl}" alt="Task Image" class="task_img">

                                <p class="task_para">
                                    ${item.desc}
                                </p>

                            </div>

                            <div class="task_footer">
                            </div>
                        </div>`

        container.innerHTML += task_card;
    };
}