window.$memberstackDom.getCurrentMember().then(({ data: member }) => {
  if (member) {
    let id = member.id;
    console.log(id);

    // Select the input field by its ID and set its value to the MemberStack ID
    document.getElementById('memberID').value = id;
  }
});
