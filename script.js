document.getElementById("download-pdf").addEventListener("click", function () {
  const { jsPDF } = window.jspdf; // Import jsPDF
  const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4"
  });

  const content = document.getElementById("content");

  html2canvas(content, { scale: 2, useCORS: true }).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      doc.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      doc.save("S Jenkins - Resume.pdf");
  });
});
