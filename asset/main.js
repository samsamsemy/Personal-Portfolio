function downloadPDF() {
  axios({
    url: "https://drive.google.com/file/d/1y2yIB7ioEqiZ9GH-j6wrp2oGIKA5elUi/view?usp=sharing",
    method: "GET",
    responseType: "blob",
  })
    .then((response) => {
      if (response.status === 200) {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Resume_Samuel.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } else {
        console.error("Error: Received non-200 status code");
      }
    })
    .catch((error) => {
      console.error("Error downloading the PDF:", error);
    });
}
