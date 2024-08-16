// memory-corner.js

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const filterSelect = document.getElementById('filter');

    // Fotoğraf yükleme işlevi
    uploadButton.addEventListener('click', () => {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const imgElement = document.createElement('img');
                imgElement.src = event.target.result;
                imgElement.classList.add('gallery-image');
                gallery.appendChild(imgElement);
                fileInput.value = ''; // Yükleme tamamlandıktan sonra inputu temizle
            };
            reader.readAsDataURL(file);
        } else {
            alert('Lütfen bir fotoğraf seçin.');
        }
    });

    // Galeriyi yükle (örnek veri)
    function loadGallery() {
        // Burada galeriyi yüklemek için bir API çağrısı yapabilirsiniz
        // Şu an için sabit bir örnek
        const images = [
            'path/to/image1.jpg',
            'path/to/image2.jpg'
        ];

        images.forEach(imagePath => {
            const imgElement = document.createElement('img');
            imgElement.src = imagePath;
            imgElement.classList.add('gallery-image');
            gallery.appendChild(imgElement);
        });
    }

    loadGallery();

    // Filtreleme işlevi
    filterSelect.addEventListener('change', (event) => {
        const filter = event.target.value;
        const images = gallery.querySelectorAll('img');

        images.forEach(img => {
            if (filter === 'all' || img.classList.contains(filter)) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
    });
});
