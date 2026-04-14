let selected_score:number | null = null;


function createFinalPage(container:HTMLElement){
    container.innerHTML="";
    let main = document.createElement("div");
    main.classList.add("main");
    let img_path = "./images/illustration-thank-you.svg";
    let content = document.createElement("main") as HTMLDivElement;
    let img_main = document.createElement("img");
    img_main.src = img_path;
    img_main.alt = "main image";

    content.appendChild(img_main);
    main.appendChild(content);
    let score_paragraph = document.createElement("p");
    score_paragraph.textContent = `You selected ${selected_score} out of 5`;
    score_paragraph.classList.add("score-block");
    content.appendChild(score_paragraph);
    let thank_header = document.createElement("h2");
    thank_header.textContent = "Thank you!";
    thank_header.classList.add("header-thank");
    content.appendChild(thank_header);
    let thank_description = document.createElement("p");
    thank_description.classList.add("thank-description");
    thank_description.textContent ="We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
    content.appendChild(thank_description);

    container.append(main);
}

function createMainBlock(){
    let main = document.createElement("main");
    let img_path = "./images/icon-star.svg";
    let star_icon = document.createElement("img");
    let image_wrapper = document.createElement("div");
    let stars_numbers = ["1","2","3","4","5"];
    image_wrapper.classList.add("image-wrapper");
    star_icon.src=img_path;
    image_wrapper.append(star_icon);
    let content = document.createElement("main") as HTMLDivElement;
    content.classList.add("main");
    star_icon.alt="star icon";
    star_icon.classList.add("circle");
    content.append(image_wrapper);
    main.appendChild(content);
    main.append(content);
    const header_how = document.createElement("h1");
    header_how.textContent = "How did we do?";
    content.appendChild(header_how);
    const paragraph_how = document.createElement("p");
    paragraph_how.classList.add("p-how");
    paragraph_how.textContent= "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!";
    content.appendChild(paragraph_how);
    let buttons_container = document.createElement("div");
    buttons_container.classList.add("buttons-container")
    let buttons_score = stars_numbers.map(x=>{
        let score = document.createElement("button");
       score.classList.add("circle");
       score.textContent = x;
       score.classList.remove("active");
       score.addEventListener("click", ()=>{
           selected_score = Number(x);
           let buttons = document.querySelectorAll("button.circle");
           buttons.forEach(x => x.classList.remove("active"));
           score.classList.add("active");
       });
       return score;

    });
    buttons_score.forEach(x => buttons_container.appendChild(x));
    content.appendChild(buttons_container);
    let submit_button = document.createElement("button");
    submit_button.classList.add("submit");
    submit_button.textContent = "SUBMIT";
    submit_button.addEventListener("click", ()=>{
        if(selected_score === null){

        }else {
            createFinalPage(main);
        }})
    content.appendChild(submit_button);
    return main;
}



document.body.appendChild(createMainBlock());
