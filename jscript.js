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
