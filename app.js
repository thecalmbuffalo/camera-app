var constraints = ( video: { facingMode: "user" ), audio: false };

const cameraView = document.querySelector("#camera--view"),
      cameraOutput = document.querySelector("#camera--output"),
      cameraSensor = document.querySelector("#camera--sensor"),
      cameraTrigger = document.querySelector("#camera--trigger")
function cameraStart () {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks() [0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops.", error);
    });
}
window.addEventListener("load", cameraStart, false);
        
