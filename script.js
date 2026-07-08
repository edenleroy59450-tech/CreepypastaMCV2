function visitPage(page) {

    let sequence = JSON.parse(localStorage.getItem("sequence")) || [];

    sequence.push(page);

    if(sequence.length > 10) {
        sequence.shift();
    }

    localStorage.setItem("sequence", JSON.stringify(sequence));

    const secretPattern = [
        "page1",
        "page2",
        "page1",
        "page2",
        "page1",
        "page2",
        "page1",
        "page2",
        "page1",
        "page2"
    ];

    if(JSON.stringify(sequence) === JSON.stringify(secretPattern)) {

        const secretDiv = document.getElementById("secret");

        if(secretDiv) {
            secretDiv.innerHTML = `
                <br><br>
                <a href="sheitan.html" class="secret-button">
                    Une fissure apparaît dans le monde...
                </a>
            `;
        }
    }
}