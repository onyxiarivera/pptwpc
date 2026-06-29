async function fetchPhoto(cabinet_id) {
    const response =  await fetch(`/api/photo?cabinet=${encodeURIComponent(cabinet_id)}`);
    const json = response.json();
    console.log(json);
    return json;
}

async function loadPhoto() {
    const cabinet = document.getElementById('cabinet').value;
    const result = await fetchPhoto(cabinet);

    if (result.error) {
        document.getElementById("cabinet-image").textContent = "No images found.";
        console.log("Error")
        return;
    }

    if (result.file) {
        document.getElementById("cabinet-image").innerHTML = `<img src="${result.file}" alt="Photo of cabinet ${cabinet}">`;
        console.log("Photo")
    }

    else {
        document.getElementById("cabinet-image").innerHTML = "Uh oh fucky wucky"
    }
}