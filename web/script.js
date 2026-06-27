async function fetchPhoto(cabinet_id) {
    const response =  await fetch(`http://127.0.0.1:8000/api/photo?cabinet=${encodeURIComponent(cabinet_id)}`);
    const json = response.json();
    console.log(json);
    return json;
}

async function loadPhoto() {
    const cabinet = document.getElementById('cabinet');
    const result = await fetchPhoto(cabinet);

    if (result.error) {
        document.getElementById("cabinet-image").textContent = "No images found.";
        console.log("Error")
        return;
    }

    document.getElementById("cabinet-image").innerHTML = `<img src="${result.file}" alt="Photo of cabinet ${cabinet}">`;
    console.log("Photo")
}