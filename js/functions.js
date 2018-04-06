
<!-- function that uses Kendo resources to transform html to pdf -->
function ExportPdf(){
    kendo.drawing.drawDOM("#myCanvas",
        {
            paperSize: "A4",
            margin: { top: "1cm", bottom: "1cm" },
            scale: 0.8,
            height: 500
        })
        .then(function(group){
            kendo.drawing.pdf.saveAs(group, "Exported.pdf")
        });
}