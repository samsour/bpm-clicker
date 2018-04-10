var clicks = 0,
totalBeats = 0,
lastBpm = 0,
lastClicked = (new Date()).getTime();


function bpmClicker() {
    clicks++;

    var timeNow = (new Date()).getTime();
    var bpm = Math.round(60 /(timeNow - lastClicked) * 1000);
    
    totalBeats += bpm;
    lastClicked = timeNow;
    
    if(difference(lastBpm, bpm) > 30) {
        clicks = 1;
        totalBeats = bpm;
    }

    lastBpm = bpm;
    document.getElementById('bpmContainer').value = Math.round(totalBeats/clicks) + " BPM";
}

function difference(a, b) { return Math.abs(a - b); }