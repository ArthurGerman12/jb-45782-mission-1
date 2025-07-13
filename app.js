function addProduct(event) {
    event.preventDefault();
    const data = collectDataFromForm();
    const newTR = generateTR(data);
    injectTRToDOM(newTR);
}

function collectDataFromForm() {
    const name = document.getElementById("product-name").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const img = document.getElementById("img").value;

    return {
        name,
        price,
        category,
        img
    }

};

function generateTR(data) {
    const newTR = `
    <tr>
        <td scope="col">${data.name}</td>
        <td scope="col">${data.price}$</td>
        <td scope="col">${data.category}</td>
        <td scope="col"><img src="${data.img}"></td>
    </tr>
    `

    return newTR
};


function injectTRToDOM(newTR) {
    document.getElementById("product-table").innerHTML += newTR;
};

