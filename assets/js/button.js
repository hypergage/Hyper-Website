function copyvg() {
    
    var copyText = document.getElementById("VGStuff");

  // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("Copied the script.");
}