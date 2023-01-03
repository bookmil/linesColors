const btn = document.getElementById('btn');

function colorMode() {
    console.log("running colorMode")
    if (document.body.style.backgroundColor = "#222222") {
        document.body.style.backgroundColor = "#ffffff"
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "#222222"
        document.body.style.color = "#a6a6a6";
    }
}

btn.addEventListener('click', colorMode);
