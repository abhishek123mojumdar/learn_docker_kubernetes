const http  = require('http')
const fs = require('fs')
const html = fs.readFileSync("docker.html", "utf-8")
const server = http.createServer((req, res) => {
    const data = fs.readFileSync("logfile.txt", "utf-8")
    res.writeHead(200, { 'Content-type': 'text/html' })
    if (req.url === '/logfile.txt' && fs.existsSync("logfile.txt")) {
        res.end(data)
    } else {
        res.end(html)
    }
    
})


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

// server.listen(3000, '127.0.0.1', () => {
//     console.log('Starting server')
//     readFile()
// })

// binding the server to 127.0.0.1, which means:
// It listens only within the container, not accessible from outside (like your host machine or browser).
// localhost:3000 on your host doesn't forward to 127.0.0.1 inside the container.

//'0.0.0.0' means: "listen on all interfaces", including external connections into the container.
server.listen(3000, '0.0.0.0', () => {
    console.log('Starting server')
    readFile()
})