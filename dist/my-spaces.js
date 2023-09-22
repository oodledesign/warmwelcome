// Define memberId in the outer scope
let memberId;

// Function to fetch and display Airtable records
function fetchAndDisplayRecords(memberId) {
  // Replace with your Airtable API key, Base ID, and table name
  const apiKey = 'pat5Vla7rtpxt9ZX1.18c1d5493cb8278e2f83d8ab0de80fa851e8848e863bd8458c404f69004d5d27';
  const baseId = 'appWExZKdNseQs0zG';
  const tableName = 'tblw6DCbx65JncsnA';

  // Function to render the data
  function renderData(data) {
    if (data.records.length === 0) {
      // Display a message and link
      const noRecordsMessage = `
        <div>
          <p>You haven't created any Spaces yet, please add one <a href="/dashboard/add-a-space">here</a>.</p>
        </div>
      `;

      // Insert the message into a container in your Webflow page
      document.getElementById('records-container').innerHTML = noRecordsMessage;
    } else {
      // Process the data and generate HTML for your list
      const recordsList = data.records.map((record) => {
        const spaceValue = record.fields.Space; // Get the 'Space' field value
        const recordId = record.id; // Get the Airtable record ID

        // Check if 'imageMap' is defined before accessing it
        const imageUrl = record.fields.imageMap?.[0]?.url || 'default-image-url.jpg';

        // Build the URL with the 'Space' field as a query parameter
        const recordPageURL = `/space?l=${encodeURIComponent(spaceValue)}`;

        return `
          <div class="blog11_item">
            <div class="blog11_image-wrapper">
              <img class="blog11_image" src="${imageUrl}" alt="${record.fields.Name || 'No Name'}" />
            </div>
            <div class="spacer-small"></div>
            <h4>${record.fields.Name || 'No Name'}</h4>
            <p>${record.fields.Postcode || 'No Postcode'}</p>
            <div class="spacer-small"></div>
            <a class="button is-small" href="${recordPageURL}">View Space</a>
            <a class="button is-small background-color-deep-purple" href="/edit-record/${recordId}">Edit Space</a>
          </div>
        `;
      });

      // Insert the HTML into a container in your Webflow page
      document.getElementById('records-container').innerHTML = recordsList.join('');
    }
  }

  // Retrieve the Member ID using MemberStack
  window.$memberstackDom.getCurrentMember().then(({ data: member }) => {
    if (member) {
      memberId = member.id; // Assign the Member ID to the outer-scoped variable
      console.log(memberId);

      // Call the function to fetch and display Airtable records with the Member ID
      fetchAndDisplayRecords(memberId);
    }
  });
}
