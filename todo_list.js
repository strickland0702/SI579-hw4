function addTask(description, dueTime){
    const task_list = document.getElementById("task_list")
    const list_item = document.createElement("li")
    list_item.innerText = description

    if (dueTime){
        const span_item = document.createElement("span")
        span_item.className = "due"
        span_item.innerText = "due " + new Date(dueTime).toLocaleString("en-US")
        list_item.appendChild(span_item)
    }
    

    const button_item = document.createElement("button")
    button_item.className = "btn btn-sm btn-outline-danger done"
    button_item.setAttribute("type", "button")
    button_item.innerText = "Done"
    button_item.addEventListener("click", function(){
        list_item.remove()
    })
    task_list.appendChild(list_item)
    list_item.appendChild(button_item)
    
}

function dateAndTimeToTimestamp(dateInputElement, timeInputElement) {
    const dueDate = dateInputElement.valueAsNumber; // Returns the timestamp at midnight for the given date
    const dueTime = timeInputElement.valueAsNumber; // Returns the number of milliseconds from midnight to the time

    if(dueDate && dueTime) { // The user specified both a due date & due time
        //Add the timezone offset to account for the fact that timestamps are specified by UTC
        const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
        return dueDate + dueTime + timezoneOffset;
    } else {
        // if the user did not specify both a due date and due time, return false
        return false;
    }
}

const button_ = document.getElementById("add_task")
const des = document.getElementById("task_description_input")
const date = document.getElementById("duedate_input")
date.value = ""
const time = document.getElementById("duetime_input")
time.value = ""

function helper(){
    addTask(des.value, dateAndTimeToTimestamp(date, time))
    des.value = ""
    date.value = ""
    time.value = ""
}

button_.addEventListener("click", helper)

des.addEventListener("keydown", function(event){
    if (event.key == "Enter"){
        helper()
    }
})

