
<!-- function that uses Kendo resources to transform html to pdf -->
function ExportPdf(){
    kendo.drawing.drawDOM("#toPDF",
        {
            paperSize: "A4",
            margin: { top: "3cm", bottom: "3cm" },
            scale: 0.8,
            height: 500
        })
        .then(function(group){
            kendo.drawing.pdf.saveAs(group, "Exported.pdf")
        });
}