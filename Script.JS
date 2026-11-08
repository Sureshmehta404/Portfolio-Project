// HTML se Search button aur Input box ko select karke variables me store kar rahe hain
const searchButton = document.querySelector('button');
const searchInput = document.querySelector('input');

// Ek function bana rahe hain jo search action ko handle karega
function performSearch() {
  // Input box ke text se aage-peeche ke extra spaces hata rahe hain
  const query = searchInput.value.trim();
  
  // Check kar rahe hain ki input khali toh nahi hai
  if (query === "") {
    alert("Please enter something to search!");
  } else {
    // Agar kuch likha hai toh user ko alert dikhayega
    alert("Searching for: " + query);
    // Future me yahan aap apna search ya redirection ka code laga sakte hain
  }
}

// Jab user Search button par CLICK karega, tab ye function chalega
searchButton.addEventListener('click', performSearch);

// Jab user keyboard par 'Enter' PRESS karega, tab bhi search chal jana chahiye
searchInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    performSearch();
  }
});