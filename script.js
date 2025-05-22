document.addEventListener("DOMContentLoaded", () => {
  const currentURL = 'https://mahadev422.github.io/Portfolio/';

  new QRCode(document.getElementById("qr-code-portfolio"), {
      text: currentURL,
      width: 150,
      height: 150,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
  });
});

function showModal(certType) {
    const modal = document.getElementById('certModal');
    const modalImage = document.getElementById('modalImage');
    
    const images = {
      htmlCert: "images/html-cert.png",
      cssCert: "images/css-cert.png",
      jsCert: "images/js-cert.png"
  };  

    modalImage.src = images[certType];
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('certModal').style.display = 'none';
}
