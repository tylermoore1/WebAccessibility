$(document).ready(function() { // do this when the document is loaded
	$("#idContent_Dialer").show(); // show the element with ID "element"
	$("#idContent_ContactList").hide(); // hide the element with ID "otherElement"
  $("#idContent_AddContact").hide();
	$("#idContent_About").hide();

	//add all of the contact information into the table
	var firstNames = ['Robert','Emma','Doreen','Jean','James','Ororo','Katherine','Piotr',
										'Scott','Kurt','Warren','Charles']
	var lastNames = ['Drake','Frost','Green','Grey','Howlett','Munroe','Pryde','Rasputin',
										'Summers','Wagner','Worthington','Xavier']
	$.each(firstNames, function(index, value) {
		$("#idContactTable").append('<tr> \
				<td>' + firstNames[index] + ' ' + lastNames[index] + ' </td> \
				<td>' + firstNames[index] + '.' + lastNames[index] + '@gmail.com </td> \
				<td> 303-797-4362 </td> \
			</tr>')
	});

	//add all of the shortcuts to the table
	var buttons = ['Dialer Tab','Contact List Tab','Add Contact Tab','About Tab',
									 'Button 1','Button 2','Button 3','Button 4','Button 5','Button 6',
								   'Button 7','Button 8','Button 9','Button Star','Button 0','Button Pound']
  var shortcuts = ['d','f','g','h','1','3','3','4','5','6','7','8','9','s','0','p']
	$.each(buttons, function(index, value) {
		$("#idShortCutTable").append('<tr> \
				<td>' + buttons[index] + ' </td> \
				<td>' + shortcuts[index] + '</td> \
			</tr>')
	});

});

$("#idDialer").click(function() { // when "button_id" is clicked
	$("#idContent_Dialer").show(); // show element
  $("#idContent_ContactList").hide(); // hide the element with ID "otherElement"
  $("#idContent_AddContact").hide();
	$("#idContent_About").hide();

});

$("#idContactList").click(function() { // when "button_id" is clicked
	$("#idContent_ContactList").show(); // show element
  $("#idContent_Dialer").hide(); // hide the element with ID "otherElement"
  $("#idContent_AddContact").hide();
	$("#idContent_About").hide();
});

$("#idAddContact").click(function() { // when "button_id" is clicked
	$("#idContent_AddContact").show(); // show element
  $("#idContent_Dialer").hide(); // hide the element with ID "otherElement"
  $("#idContent_ContactList").hide();
	$("#idContent_About").hide();
});

$("#idHelpTab").click(function() { // when "button_id" is clicked
	$("#idContent_About").show(); // show element
  $("#idContent_AddContact").hide(); // hide the element with ID "otherElement"
  $("#idContent_ContactList").hide();
	$("#idContent_Dialer").hide();
});

$(".phone").click(function() {
	var phone_number = $("#idDialerNumber").val();
	//do 12 because phone numbers are length of 10 plus two dashes
	if (phone_number.length == 12)
	{
		alert("Phone number is already full");
	}
	else
	{
		if (phone_number.length == 3 || phone_number.length == 7)
		{
			phone_number += "-";
		}
		var number = this.innerText;
		number = number.slice(-1);
		phone_number += number;

		$("#idDialerNumber").val(phone_number);
	}

});

$("#idDialerClear").click(function() {
	$("#idDialerNumber").val("");
});
