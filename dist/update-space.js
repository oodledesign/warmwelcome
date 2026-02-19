// Import Firebase App and Firestore functions
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js';
import { getFirestore, doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js';

// Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyDzpnXGZ3MyBIIZMy4RK33kFSDL3mdPcbw",
  authDomain: "eminent-subject-359910.firebaseapp.com",
  projectId: "eminent-subject-359910",
  storageBucket: "eminent-subject-359910.appspot.com",
  messagingSenderId: "415082525557",
  appId: "1:415082525557:web:7131a8cc789bad581b993c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to get query parameters from the URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Helper: safely set text content
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerText = value ?? '';
}

// Helper: safely toggle display
function setDisplay(id, show, displayType = 'block') {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = show ? displayType : 'none';
}

// Helper: render tags list
function renderTags(tagsValue) {
  const tagsElement = document.getElementById('tags');
  if (!tagsElement) return;

  if (!tagsValue) {
    tagsElement.innerHTML = '';
    return;
  }

  const tagsArray = String(tagsValue).split(',').map(t => t.trim()).filter(Boolean);

  tagsElement.innerHTML = '';
  const ulElement = document.createElement('ul');
  ulElement.classList.add('portfolio-header5_tag-list');

  tagsArray.forEach((tag) => {
    const liElement = document.createElement('li');
    liElement.textContent = tag;
    liElement.classList.add('portfolio-header5_tag-item');
    ulElement.appendChild(liElement);
  });

  tagsElement.appendChild(ulElement);
}

// Main function to query Firestore and update the page
async function queryFirestoreAndReplace() {
  const spaceId = getQueryParam('l');

  if (!spaceId) {
    console.warn("Missing 'l' query param (spaceId).");
    return;
  }

  try {
    const docRef = doc(db, "Spaces", spaceId);
    const docSnapshot = await getDoc(docRef);

    if (!docSnapshot.exists()) {
      console.warn("No Firestore document found for spaceId:", spaceId);
      return;
    }

    const data = docSnapshot.data();

    // Text fields
    setText('Name', data.name);
    setText('Name-2', data.name);
    setText('Description', data.description);
    setText('Organisation', data.organisationName);

    setText('Address', data.address);
    setText('Address2', data.addresstwo);
    setText('Address3', data.addressthree);
    setText('City', data.city);
    setText('State', data.state);
    setText('postcodeOut', data.postcodeOut);
    setText('postcodeIn', data.postcodeIn);

    setText('ImageLogo', data.imageLogo);
    setText('Image1', data.imageOne);

    setText('email', data.email);
    setText('phone', data.phone);
    setText('website', data.website);

    setText('monday', data.monday);
    setText('tuesday', data.tuesday);
    setText('wednesday', data.wednesday);
    setText('thursday', data.thursday);
    setText('friday', data.friday);
    setText('saturday', data.saturday);
    setText('sunday', data.sunday);

    setText('otherServices', data.otherServices);

    setText('instagram', data.instagram);
    setText('facebook', data.facebook);
    setText('twitter', data.twitter);
    setText('linkedin', data.linkedin);
    setText('youtube', data.youtube);

    // Publish UI logic
    const isPublished = data.publishing === 'PUBLISH';

    setDisplay('publish-banner', !isPublished);      // show banner when NOT published
    setDisplay('publish-settings', isPublished);     // show settings when published
    setDisplay('published-tag', isPublished);        // show tag when published

    // Volunteer not published UI logic:
    // show if NOT published AND opted in
    const showVolunteerNotPublished =
      !isPublished && data.volunteerOptIn === 'Volunteer opt in';

    setDisplay('volunteer-not-published', showVolunteerNotPublished);

    // Tags
    renderTags(data.tags);

  } catch (error) {
    console.error("Error querying Firestore: ", error);
  }
}

queryFirestoreAndReplace();
