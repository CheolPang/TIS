const listBox = document.querySelector(".trainlist")
const apiLink = "https://gns.cpplatform.kr:2083/train/all"

fetch(apiLink).then((res) => {
    return res.json()
}).then((res) => { 
    for (let i = 0; i < res.length; i++) {

        let data = `
            <div class="list">
                <div class="tinfo-1">
                    <h4><b>${res[i].type}</b></h4>
                    <h6>${res[i].number}</h6>
                </div>
                    <div class="tinfo-2">
                    <p>${res[i].station}</p>
                </div>   
            </div>
        `

        listBox.insertAdjacentHTML('beforeend', data)
    }
})

setInterval(() => {
    location.reload()
}, 10000);