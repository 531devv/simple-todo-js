(function(){
    var TodoList = [];
    var addTaskEl = document.querySelector("input");
    var emojiBox = false;

    const addTask = (task, id = Date.now(), checked = false) => {
        document.querySelector(".todos-list ul")
        .insertAdjacentHTML("beforeend", `<li data-key='${id}'><i class="fa fa-check icon-done"></i>${task}<i class="fa fa-trash icon-trash"></i></li>`);
        document.querySelector(`[data-key='${id}']`).scrollIntoView();
        TodoList.push({
            id: id,
            task: task,
            checked: checked
        });
    }

    //show emoji
    const showEmojis = (el) => {
        let i;
        for (i = 0; i < 700; i++){
            document.querySelector('.emoji-box').insertAdjacentHTML('beforeend', ` <i class="emoji">${emoji[i]}</i> `);
        }
    }
    
    //adding some tasks to show scroll
    addTask("Buy a shampoo. 🧴");
    addTask("Create new layout. 💗")
    addTask("Buy a milk. 🥛");
    addTask("Learn how to make website responsive. 🤟");
    addTask("Adopt a cat. 😽")
    addTask("Look at job as front-end dev. 👨‍💼")
    addTask("Buy a car. 🏎️")
    addTask("Build stopwatch using js. ⏱️")

    //tasks done listener
    document.body.addEventListener('click', e => {
        if (e.target.matches('.icon-done')) {
            e.target.parentNode.classList.toggle("done");
            let item = TodoList.find(item => item.id == e.target.parentNode.dataset.key);
            item.checked = true;
        }
      });

    //tasks remove listener
    document.body.addEventListener('click', e => {
        if (e.target.matches('.icon-trash')) {
            e.target.parentNode.remove();
            let item = TodoList.findIndex(item => item.id == e.target.parentNode.dataset.key);
            TodoList.splice(item, 1);
        }
      });

    //input listener
    addTaskEl.addEventListener("keypress", e => {
        if((e.keyCode === 13) && (addTaskEl.value != "")) {
            let task = (addTaskEl.value.charAt(0).toUpperCase() + addTaskEl.value.slice(1));
            if(task.length <= 30){
                addTask(task);
            } else {
                alert("Max length is 30 chars.");
            }
            addTaskEl.value = "";
        }
    });

    //emoji box listener
    document.body.addEventListener('click', e => {
        if(e.target.matches('.emoji')){
            addTaskEl.value += e.target.firstChild.wholeText;
        }
    })

    //emoji menu listener
    document.body.addEventListener('click', e => {
        if(e.target.matches('.emoji-menu')){
            if(emojiBox == false){
                let i;
                document.querySelector('.emoji-menu').parentNode
                .insertAdjacentHTML('beforeend', `<div class="emoji-box"></div>`);
                showEmojis();
                emojiBox = true;
            } else {
                document.querySelector('.emoji-box').remove();
                emojiBox = false;
            }
        }
    });

    document.addEventListener('resize', () => {
        root.style.setProperty('--screen-x', window.screenX)
        root.style.setProperty('--screen-y', window.screenY)
      })


})();