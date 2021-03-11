window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

const navbar = document.querySelector('#navbar');
const scrollspy = new VanillaScrollspy(navbar, 2000, 'easeInOutQuint');
scrollspy.init();

const navSlide =() =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navbar ul");
    const navLinks = document.querySelectorAll(".navbar ul li");
    
    // toggle navbar
    burger.addEventListener('click',() => {
        nav.classList.toggle('sidebar-active');
        // animate links
        navLinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        // burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

const dropboxLink = "https://www.dropbox.com/s/urznjs2o5my48lj/AshutoshTripathy_3_10_20_.pdf?dl=0";
const clientId = "91825b8fdf5441989b572f9af3488eda";
const viewerOptions = {
    embedMode: "LIGHT_BOX",
    defaultViewMode: "FIT_PAGE",
    showDownloadPDF: true,
    showPrintPDF: true,
    showLeftHandPanel: true,
    showAnnotationTools: true
};

document.addEventListener("adobe_dc_view_sdk.ready", function () {
    var urlToPDF = directLinkFromDropboxLink(dropboxLink);
    var adobeDCView = new AdobeDC.View({
        clientId: clientId, // This clientId can be used for any CodePen example
        divId: "viewCV"
    });
    adobeDCView.previewFile(
        {
            content: { promise: fetchPDF(urlToPDF) },
            metaData: { fileName: urlToPDF.split("/").slice(-1)[0] }
        },
        viewerOptions
    );
});

// Utility Functions:
// Return a Promise that fetches the PDF. 
function fetchPDF(urlToPDF) {
    return new Promise((resolve) => {
        fetch(urlToPDF)
            .then((resolve) => resolve.blob())
            .then((blob) => {
                resolve(blob.arrayBuffer());
            })
    })
}

// Converts a standar Dropbox link to a direct download link
function directLinkFromDropboxLink(dropboxLink) {
    return dropboxLink.replace("www.dropbox.com", "dl.dropboxusercontent.com").replace("?dl=0", "");
}

// Add arrayBuffer if necessary i.e. Safari
(function () {
    if (Blob.arrayBuffer != "function") {
        Blob.prototype.arrayBuffer = myArrayBuffer;
    }

    function myArrayBuffer() {
        return new Promise((resolve) => {
            let fileReader = new FileReader();
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.readAsArrayBuffer(this);
        });
    }
})();