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
  const db = getFirestore(app); // Initialize Firestore database instance

  // Function to get query parameters from the URL
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Function to query Firestore and replace HTML elements
  async function queryFirestoreAndReplace() {
    // Get the 'l' query parameter from the URL
    const spaceId = getQueryParam('l');

    try {
      // Reference the Firestore document directly using the document ID
      const docRef = doc(db, "Spaces", spaceId); // Use the 'db' variable to reference Firestore
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        // Get the data from the Firestore document
        const data = docSnapshot.data();

          // Get the 'Name' and other fields from the Firestore document
          const nameValue = docSnapshot.data().name;
          const descriptionValue = docSnapshot.data().description;
          const organisationValue = docSnapshot.data().organisationName;
          const addressValue = docSnapshot.data().address;
          const addresstwoValue = docSnapshot.data().addrestwo;
          const addressthreeValue = docSnapshot.data().addressthree;
          const cityValue = docSnapshot.data().city;
          const stateValue = docSnapshot.data().state;
          const postcodeOutValue = docSnapshot.data().postcodeOut;
          const postcodeInValue = docSnapshot.data().postcodeIn;
          const imageLogoValue = docSnapshot.data().imageLogo;
          const imageOneValue = docSnapshot.data().imageOne;
          const emailValue = docSnapshot.data().email;
          const mondayValue = docSnapshot.data().monday;
          const tuesdayValue = docSnapshot.data().tuesday;
          const wednesdayValue = docSnapshot.data().wednesday;
          const thursdayValue = docSnapshot.data().thursday;
          const fridayValue = docSnapshot.data().friday;
          const saturdayValue = docSnapshot.data().saturday;
          const sundayValue = docSnapshot.data().sunday;
          const otherServicesValue = docSnapshot.data().otherServices;
          
					const instagramValue = docSnapshot.data().instagram;
          const facebookValue = docSnapshot.data().facebook;
          const twitterValue = docSnapshot.data().twitter;
          const linkedinValue = docSnapshot.data().linkedin;
          const youtubeValue = docSnapshot.data().youtube;
          
          const websiteValue = docSnapshot.data().website;
          const phoneValue = docSnapshot.data().phone;
          

         // Replace the HTML elements with the retrieved values
const nameElement = document.getElementById('Name');
const nameTwoElement = document.getElementById('Name-2');
const descriptionElement = document.getElementById('Description');
const organisationElement = document.getElementById('Organisation');
const addressElement = document.getElementById('Address');
const addresstwoElement = document.getElementById('Address2');
const addressthreeElement = document.getElementById('Address3');
const cityElement = document.getElementById('City');
const stateElement = document.getElementById('State');
const postcodeOutElement = document.getElementById('postcodeOut');
const postcodeInElement = document.getElementById('postcodeIn');
const imageLogoElement = document.getElementById('ImageLogo');
const imageOneElement = document.getElementById('Image1');
const emailElement = document.getElementById('email');
const mondayElement = document.getElementById('monday');
const tuesdayElement = document.getElementById('tuesday');
const wednesdayElement = document.getElementById('wednesday');
const thursdayElement = document.getElementById('thursday');
const fridayElement = document.getElementById('friday');
const saturdayElement = document.getElementById('saturday');
const sundayElement = document.getElementById('sunday');
const otherServicesElement = document.getElementById('otherServices');

const instagramElement = document.getElementById('instagram');
const facebookElement = document.getElementById('facebook');
const twitterElement = document.getElementById('twitter');
const linkedinElement = document.getElementById('linkedin');
const youtubeElement = document.getElementById('youtube');

const websiteElement = document.getElementById('website');
const phoneElement = document.getElementById('phone');
          


if (nameElement) { nameElement.innerText = docSnapshot.data().name || ''; }
if (nameTwoElement) { nameTwoElement.innerText = docSnapshot.data().name || ''; }
if (descriptionElement) { descriptionElement.innerText = docSnapshot.data().description || ''; }
if (organisationElement) { organisationElement.innerText = docSnapshot.data().organisationName || ''; }
if (addressElement) { addressElement.innerText = docSnapshot.data().address || ''; }
if (addresstwoElement) { addresstwoElement.innerText = docSnapshot.data().addresstwo || ''; }
if (addressthreeElement) { addressthreeElement.innerText = docSnapshot.data().addressthree || ''; }
if (cityElement) { cityElement.innerText = docSnapshot.data().city || ''; }
if (stateElement) { stateElement.innerText = docSnapshot.data().state || ''; }
if (postcodeOutElement) { postcodeOutElement.innerText = docSnapshot.data().postcodeOut || ''; }
if (postcodeInElement) { postcodeInElement.innerText = docSnapshot.data().postcodeIn || ''; }
if (imageLogoElement) { imageLogoElement.innerText = docSnapshot.data().imageLogo || ''; }
if (imageOneElement) { imageOneElement.innerText = docSnapshot.data().imageOne || ''; }
if (emailElement) { emailElement.innerText = docSnapshot.data().email || ''; }
if (mondayElement) { mondayElement.innerText = docSnapshot.data().monday || ''; }
if (tuesdayElement) { tuesdayElement.innerText = docSnapshot.data().tuesday || ''; }
if (wednesdayElement) { wednesdayElement.innerText = docSnapshot.data().wednesday || ''; }
if (thursdayElement) { thursdayElement.innerText = docSnapshot.data().thursday || ''; }
if (fridayElement) { fridayElement.innerText = docSnapshot.data().friday || ''; }
if (saturdayElement) { saturdayElement.innerText = docSnapshot.data().saturday || ''; }
if (sundayElement) { sundayElement.innerText = docSnapshot.data().sunday || ''; }
if (otherServicesElement) { otherServicesElement.innerText = docSnapshot.data().otherServices || ''; }

if (instagramElement) { instagramElement.innerText = docSnapshot.data().instagram || ''; }
if (facebookElement) { facebookElement.innerText = docSnapshot.data().facebook || ''; }
if (twitterElement) { twitterElement.innerText = docSnapshot.data().twitter || ''; }
if (linkedinElement) { linkedinElement.innerText = docSnapshot.data().linkedin || ''; }
if (youtubeElement) { youtubeElement.innerText = docSnapshot.data().youtube || ''; }

if (websiteElement) { websiteElement.innerText = docSnapshot.data().website || ''; }
if (phoneElement) { phoneElement.innerText = docSnapshot.data().phone || ''; }



        
// Assuming you have already fetched the document data into the 'docSnapshot' variable
const publishingValue = docSnapshot.data().publishing;

const publishBanner = document.getElementById('publish-banner');
const publishSettings = document.getElementById('publish-settings');

if (publishingValue === 'PUBLISH') {

  publishBanner.style.display = 'none';
  publishSettings.style.display = 'block';
} else {

  publishBanner.style.display = 'block'; 
  publishSettings.style.display = 'none';
}






// Inside your forEach loop after retrieving other fields
const tagsValue = docSnapshot.data().tags;

if (tagsValue) {
  // Split the comma-separated tags into an array
  const tagsArray = tagsValue.split(',');

  // Get the HTML element with the ID 'tags'
  const tagsElement = document.getElementById('tags');

  // Check if the 'tags' element exists
  if (tagsElement) {
    // Clear the existing content
    tagsElement.innerHTML = '';

    // Create an unordered list element with the class 'portfolio-header5_tag-list'
    const ulElement = document.createElement('ul');
    ulElement.classList.add('portfolio-header5_tag-list');

    // Iterate through the tags and create list items with the class 'portfolio-header5_tag-item'
    tagsArray.forEach((tag) => {
      const liElement = document.createElement('li');
      liElement.textContent = tag.trim(); // Remove leading/trailing spaces
      liElement.classList.add('portfolio-header5_tag-item');
      ulElement.appendChild(liElement);
    });

    // Append the unordered list to the 'tags' element
    tagsElement.appendChild(ulElement);
  }
} else {
  // Handle the case where 'tagsValue' is empty or undefined
  console.log("No tags found in Firestore.");
}

        
}
    } catch (error) {
      console.error("Error querying Firestore: ", error);
    }
  }
  queryFirestoreAndReplace();
