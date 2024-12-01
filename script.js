// Scroll to a section smoothly
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  function generateQRCode() {
    const amount = document.getElementById("amount").value;
    const qrCodeImage = document.getElementById("qrcode");
    const qrCodeContainer = document.getElementById("qrcode-container");
    
    if (!amount || amount <= 0) {
        alert("Please enter a valid donation amount!");
        return;
    }

    // UPI details
    const upiId = "7029954644@ybl"; // Replace with your UPI ID
    const payeeName = "Nitish Pathak";   // Replace with your name
    const upiUrl = `upi://pay?pa=${upiId}&pn=${payeeName}&am=${amount}&cu=INR`;

    // Use GoQR.me API to generate the QR code
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(upiUrl)}&size=200x200`;

    // Display the QR code
    qrCodeImage.src = qrApiUrl;
    qrCodeContainer.style.display = "block";
}