<script>
const apiKey = 'pat5Vla7rtpxt9ZX1.18c1d5493cb8278e2f83d8ab0de80fa851e8848e863bd8458c404f69004d5d27';
const baseId = 'appWExZKdNseQs0zG';
const tableName = 'tblw6DCbx65JncsnA';

// Extract the 'Space' value from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const spaceValue = urlParams.get('l'); // Assuming the query parameter is named "space"

// Check if the data is already in localStorage
const localStorageKey = `airtableData_${spaceValue}`;
const cachedData = localStorage.getItem(localStorageKey);

if (cachedData) {
  // Data exists in localStorage, use it instead of making an API request
  const record = JSON.parse(cachedData);
  populatePageWithData(record);
} else {
  // Data is not in localStorage, make the API request
  const apiUrl = `https://api.airtable.com/v0/${baseId}/${tableName}?filterByFormula=Space%3D%22${encodeURIComponent(spaceValue)}%22`;

  fetch(apiUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  })
    .then(response => response.json())
    .then(data => {
      // Check if any records match the filter
      if (data.records && data.records.length > 0) {
        const record = data.records[0].fields;

        // Store the fetched data in localStorage for future use
        localStorage.setItem(localStorageKey, JSON.stringify(record));

        // Populate the page with the data
        populatePageWithData(record);
      } else {
        // Record not found, redirect to another page
        window.location.href = '/404'; // Replace 'error.html' with the URL of the error page you want to redirect to
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function populatePageWithData(record) {
  // Populate HTML elements with the data
  const titleElement = document.getElementById('Name');
  const descriptionElement = document.getElementById('Description');
  const addressElement = document.getElementById('Address');
  const addresstwoElement = document.getElementById('Address2');
  const cityElement = document.getElementById('City');
  const stateElement = document.getElementById('State');
  const postcodeElement = document.getElementById('Postcode');
  const imageLogoElement = document.getElementById('ImageLogo');
  const imageMapElement = document.getElementById('imageMap');
  const imageOneElement = document.getElementById('Image1');
  const emailElement = document.getElementById('email');
  const mondayElement = document.getElementById('monday');
  const tuesdayElement = document.getElementById('tuesday');
  const wednesdayElement = document.getElementById('wednesday');
  const thursdayElement = document.getElementById('thursday');
  const fridayElement = document.getElementById('friday');
  const saturdayElement = document.getElementById('saturday');
  const sundayElement = document.getElementById('sunday');
  

  // Populate HTML elements with the data
  titleElement.textContent = record.Name;
  descriptionElement.textContent = record.Description;
  addressElement.textContent = record.Address;
  addresstwoElement.textContent = record.AddressTwo;
  cityElement.textContent = record.City;
  stateElement.textContent = record.State;
  postcodeElement.textContent = record.Postcode;
  emailElement.textContent = record.email;
  mondayElement.textContent = record.monday;
  tuesdayElement.textContent = record.tuesday;
  wednesdayElement.textContent = record.wednesday;
  thursdayElement.textContent = record.thursday;
  fridayElement.textContent = record.friday;
  saturdayElement.textContent = record.saturday;
  sundayElement.textContent = record.sunday;

  // Iterate through elements with the data-closed-if-empty attribute
  const elementsWithClosedAttribute = document.querySelectorAll('[data-closed-if-empty]');

  elementsWithClosedAttribute.forEach(element => {
    const fieldName = element.id.toLowerCase(); // Assuming the element id matches the field name

    if (!record[fieldName]) {
      element.textContent = 'Closed';
    } else {
      element.textContent = record[fieldName];
    }
  });

  const tags = record.tags; // Change "Tags" to your field name

  // Retrieve the attachment URLs from the attachments arrays
  const imageLogoAttachments = record.ImageLogo; // Change "ImageLogo" to your field name
  if (imageLogoAttachments && imageLogoAttachments.length > 0) {
    const attachmentUrl = imageLogoAttachments[0].url; // Assuming you want the first attachment
    imageLogoElement.src = attachmentUrl;
  }

  const imageOneAttachments = record.Image1; // Change "Image1" to your field name
  if (imageOneAttachments && imageOneAttachments.length > 0) {
    const attachmentUrl = imageOneAttachments[0].url; // Assuming you want the first attachment
    imageOneElement.src = attachmentUrl;
  }

  // Retrieve the attachment URLs from the attachments arrays
  const imageMapAttachments = record.imageMap; // Change "ImageLogo" to your field name
  if (imageMapAttachments && imageMapAttachments.length > 0) {
    const attachmentUrl = imageMapAttachments[0].url; // Assuming you want the first attachment
    imageMapElement.src = attachmentUrl;
  }

  const websiteElement = document.getElementById('website'); // Assuming you have an HTML element with id "Link"

  // Extract the link URL from the Airtable record
  const linkUrl = record.website; // Change "Link" to the actual field name in your Airtable base

  if (linkUrl) {
    // Create an anchor tag and set its attributes
    const linkAnchor = document.createElement('a');
    linkAnchor.href = linkUrl;
    linkAnchor.textContent = linkUrl; // Set the text to the link URL

    // Append the link to the HTML element
    websiteElement.appendChild(linkAnchor);
  }

  // EXTRA SERVICES ON OFFER
  const tagsListElement = document.getElementById('tagsList');
  const otherServicesHeading = document.getElementById('otherServicesHeading');

  // Clear any existing content in the list element
  tagsListElement.innerHTML = '';

  // Check if there are tags to display
  if (tags && tags.length > 0) {
    const tagsList = document.createElement('ul');
    tagsList.classList.add('portfolio-header5_tag-list');

    // Iterate through each tag and create list items
    tags.forEach(tag => {
      const listItem = document.createElement('li');
      listItem.textContent = tag;

      // Add a class to the list item
      listItem.classList.add('portfolio-header5_tag-item');

      tagsList.appendChild(listItem);
    });

    // Append the list to your HTML element
    tagsListElement.appendChild(tagsList);

    // Show the heading when there are tags
    otherServicesHeading.style.display = 'block';
  } else {
    // Handle the case where there are no tags
    tagsListElement.style.display = 'none';

    // Hide the heading when there are no tags
    otherServicesHeading.style.display = 'none';
  }
}
</script>
