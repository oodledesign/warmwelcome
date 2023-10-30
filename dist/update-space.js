
  // Define the progress stages and their corresponding Firestore fields
  const progressStages = [
    { field: 'basicInfo', checkAttr: 'progress-check="basic-info"', crossAttr: 'progress-cross="basic-info"' },
    { field: 'coordinatorDetails', checkAttr: 'progress-check="coordinator-details"', crossAttr: 'progress-cross="coordinator-details"' },
    { field: 'openingTimes', checkAttr: 'progress-check="opening-times"', crossAttr: 'progress-cross="opening-times"' },
    { field: 'moreInfo', checkAttr: 'progress-check="more-info"', crossAttr: 'progress-cross="more-info"' },
    { field: 'campaignPrefs', checkAttr: 'progress-check="campaign-prefs"', crossAttr: 'progress-cross="campaign-prefs"' },
    // Add the other progress stages with their attributes here
  ];

  // Helper function to show/hide elements based on the value
  function toggleElementVisibility(element, show) {
    element.style.display = show ? 'flex' : 'none';
  }

  // Replace 'docSnapshot' with the appropriate Firestore data object you want to use
  const firestoreData = docSnapshot.data();

  let allStagesComplete = true; // Assume all stages are complete initially

  // Iterate through each progress stage and update element visibility
  progressStages.forEach(stage => {
    const stageValue = firestoreData[stage.field];
    const checkElement = document.querySelector(`[${stage.checkAttr}]`);
    const crossElement = document.querySelector(`[${stage.crossAttr}]`);

    // Check if the stage value is 'Complete' and show/hide elements accordingly
    if (stageValue === 'Complete') {
      toggleElementVisibility(checkElement, true);
      toggleElementVisibility(crossElement, false);
    } else {
      toggleElementVisibility(checkElement, false);
      toggleElementVisibility(crossElement, true);
      allStagesComplete = false; // Set to false if any stage is not complete
    }
  });
