document.getElementById('imageUpload').addEventListener('change', function(event) {
    const imageFile = event.target.files[0];
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('tribute-image').src = e.target.result;
        };
        reader.readAsDataURL(imageFile);
    }
});
