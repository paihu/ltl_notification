window.addEventListener('load',  addCallback);

function addCallback(){
        console.log("add listener");
        console.log(document.getElementsByClassName("item-list"));
document.getElementsByClassName("item-list")[0].addEventListener('DOMNodeInserted', nodeInsertedCallback);
}

function nodeInsertedCallback(event){
        var node = event.path[1].firstChild
        console.log(event.path[1].firstChild);
        chrome.runtime.sendMessage({
                user: node.getElementsByClassName("status__display-name")[0].getAttribute("title"),
                message: node.getElementsByClassName("status__content")[0].firstChild.textContent,
                iconUrl: node.getElementsByClassName("account__avatar")[0].style["backgroundImage"].split('"')[1]
        });
}

