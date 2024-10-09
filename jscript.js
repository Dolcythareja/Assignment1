// Lists of words for each part of the sentence
const subjectList = ["The turkey", "My mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const actionList = ["sat on", "danced with", "saw", "doesn't like", "kissed"];
const descriptorList = ["a funny", "a goofy", "a slimy", "a barking", "a fat"];
const objectList = ["goat", "cow", "frog", "bug", "worm"];
const locationList = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "in my shoes"];

// Initialize indices and pressed flags
let subjectIndex = 0, actionIndex = 0, descriptorIndex = 0, objectIndex = 0, locationIndex = 0;
let subjectPressed = false, actionPressed = false, descriptorPressed = false, objectPressed = false, locationPressed = false;

// Set up event listeners for buttons
document.getElementById("butonSubject").addEventListener("click", () => updateWord(1));
document.getElementById("butonAction").addEventListener("click", () => updateWord(2));
document.getElementById("butonDescriptor").addEventListener("click", () => updateWord(3));
document.getElementById("butonObject").addEventListener("click", () => updateWord(4));
document.getElementById("butonLocation").addEventListener("click", () => updateWord(5));
document.getElementById("generateButon").addEventListener("click", buildSentence);
document.getElementById("resetButon").addEventListener("click", resetAll);
document.getElementById("randomButon").addEventListener("click", randomSentence);
// Update the word for the selected category
function updateWord(butonNumber) {
    switch (butonNumber) {
        case 1:
            document.getElementById("butonSubject").textContent = subjectList[subjectIndex++];
            subjectPressed = true;
            if (subjectIndex === subjectList.length) subjectIndex = 0;
            break;
        case 2:
            document.getElementById("butonAction").textContent = actionList[actionIndex++];
            actionPressed = true;
            if (actionIndex === actionList.length) actionIndex = 0;
            break;
        case 3:
            document.getElementById("butonDescriptor").textContent = descriptorList[descriptorIndex++];
            descriptorPressed = true;
            if (descriptorIndex === descriptorList.length) descriptorIndex = 0;
            break;
        case 4:
            document.getElementById("butonObject").textContent = objectList[objectIndex++];
            objectPressed = true;
            if (objectIndex === objectList.length) objectIndex = 0;
            break;
        case 5:
            document.getElementById("butonLocation").textContent = locationList[locationIndex++];
            locationPressed = true;
            if (locationIndex === locationList.length) locationIndex = 0;
            break;
    }
}
// display the final sentence
function buildSentence() {
    
    if (!subjectPressed || !actionPressed || !descriptorPressed || !objectPressed || !locationPressed) {
        alert("Please select all words.");
        return;
    }

    // Create the sentence from selected words
    const sentence = [
        document.getElementById("butonSubject").textContent,
        document.getElementById("butonAction").textContent,
        document.getElementById("butonDescriptor").textContent,
        document.getElementById("butonObject").textContent,
        document.getElementById("butonLocation").textContent
    ].join(" ") + "."; // Join words into a sentence

    document.getElementById("storyBox").textContent = sentence; 
}

// Reset all selections and clear the displayed sentence
function resetAll() {
    document.getElementById("butonSubject").textContent = "Subject";
    document.getElementById("butonAction").textContent = "Action";
    document.getElementById("butonDescriptor").textContent = "Descriptor";
    document.getElementById("butonObject").textContent = "Object";
    document.getElementById("butonLocation").textContent = "Location";
    document.getElementById("storyBox").textContent = ""; 
    // Reset indices and pressed flags
    subjectIndex = actionIndex = descriptorIndex = objectIndex = locationIndex = 0;
    subjectPressed = actionPressed = descriptorPressed = objectPressed = locationPressed = false;
}
// Generate and display a random sentence
function randomSentence() {
    const randomSentence = [
        subjectList[Math.floor(Math.random() * subjectList.length)],
        actionList[Math.floor(Math.random() * actionList.length)],
        descriptorList[Math.floor(Math.random() * descriptorList.length)],
        objectList[Math.floor(Math.random() * objectList.length)],
        locationList[Math.floor(Math.random() * locationList.length)]
    ].join(" ") + "."; 

    document.getElementById("storyBox").textContent = randomSentence;
}

