let isActive = false
let time

let min = 0
let sec = 0
let ms = 0

function start() {
    if(isActive) return
    time = Date.now()
    isActive = true
}

function stop() {
    isActive = false
}

function reset() {
    isActive = false
    min = 0
    sec = 0
    ms = 0

    Tms = `${Math.trunc(ms / 10)}`.padStart("2", "0")
    Tmin = `${min}`.padStart("2", "0")
    Tsec = `${sec}`.padStart("2", "0")

    document.querySelector("h2").textContent = `
    ${Tmin}:${Tsec}:${Tms}
    `
}

setInterval(() => {
    if (!isActive) return
    const nowTime = Date.now()

    temp = nowTime - time

    ms = ms + temp

    if (ms > 999) {
        ms = ms - 1000
        sec++
    }
    if (sec >= 60) {
        sec = sec - 60
        min++
    }

    Tms = `${Math.trunc(ms / 10)}`.padStart("2", "0")
    Tmin = `${min}`.padStart("2", "0")
    Tsec = `${sec}`.padStart("2", "0")

    document.querySelector("h2").textContent = `
    ${Tmin}:${Tsec}:${Tms}
    `
    time = nowTime
    console.log(min, sec, ms);

}, 10)