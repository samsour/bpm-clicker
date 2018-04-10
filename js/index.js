var clicks = 0,
totalBeats = 0,
lastClicked = (new Date()).getTime();


function bpmClicker() {
    clicks++;

    var timeNow = (new Date()).getTime();
    var bpm = Math.round(60 /(timeNow - lastClicked) * 1000);
    
    totalBeats += bpm;

    lastClicked = timeNow;

    document.getElementById('bpmContainer').value = Math.round(totalBeats/clicks) + " BPM";
}
