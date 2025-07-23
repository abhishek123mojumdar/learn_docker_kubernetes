const { time } = require('console')
const fs = require('fs')
let timer = 0
function printDataEverysec() {
    let interval = setInterval(() => {
        timer = timer +1
        if (timer <= 10) {
            console.log(timer)
            fs.appendFileSync("logfile.txt", "\n" + timer, "utf-8")
        }
        else {
            clearInterval(interval)
            readFile()
        }
    },1000)
}

function readFile() {
    if (fs.existsSync("logfile.txt")) {
    const data = fs.readFileSync("logfile.txt", "utf-8")
    if (data)
        console.log('Not empty file',data)
    else 
        console.log("Empty file", data)  
    } else {
        printDataEverysec()
    }
    
}


readFile()