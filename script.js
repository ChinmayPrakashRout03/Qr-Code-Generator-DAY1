const canvas = document.getElementById("qrCanvas");
const textInput = document.getElementById("textInput");
const helperText = document.getElementById("helperText");
const downloadBtn = document.getElementById("downloadBtn");

/* Create QR once */
const qr = new QRious({
  element: canvas,
  size: 220,
  value: ""
});

/* Generate QR */
textInput.addEventListener("input", () => {
  const value = textInput.value.trim();

  if (!value) {
    helperText.style.display = "block";
    qr.value = "";
    return;
  }

  helperText.style.display = "none";
  qr.value = value;
});

/* Download PNG */
downloadBtn.addEventListener("click", () => {
  if (!qr.value) return;

  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = "qr-code.png";
  link.click();
});