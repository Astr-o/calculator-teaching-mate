function handleButtonClick(key) {


    // if key integer clear display or append ot existing number 

    // else if key operator set some variable

    // else if enter calculate and display, clear state


}



function buttonHandler(event) {
    const btn = event.target.id
    console.log(event)
    console.log(`button ${btn} was pressed`)

    handleButtonClick(btn)

    if (true) {
        const str = 'lol'
    }

    console.log(str)
}

$(document).ready(function() {
    $('button').click(buttonHandler)
})


// function click(handler) {
//     const id = 'test'

//     timeout(function() { handler(id) }, 10000)
// }



// function handler(id) {
//     console.log(`event ${id} happened`)
// }

// click(handler)
// click(handler)