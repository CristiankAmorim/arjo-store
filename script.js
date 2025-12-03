function openLinkInstagram(url) {
    window.location.href = url;
}

function openLinkWhatsapp(url) {
    window.location.href = url;
}

function expandImage(img) {
    const imagens = document.querySelectorAll('.produtos img');

    imagens.forEach(i => {
        if (i !== img) {
            i.classList.remove('img-expandida');
        }
    });

    img.classList.toggle('img-expandida');
}
