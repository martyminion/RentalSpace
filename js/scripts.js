function Space(name, email, listing, shelf, attendantsNumber) {
  this.name = name;
  this.email = email;
  this.listing = listing
  this.shelf = shelf
  this.attendantsNumber = attendantsNumber
}

function Shelf(type, number) {
  this.type = type;
  this.number = number;
}

let inputtedName
let inputtedEmail;
let inputtedListing;
let inputtedAttendantsNumber;
let shelftypes = [];
let shelfCost = 0;
let attendantCost;
let sType;
let sNumber;
let typeCost;
let costshelf;
let costattendant;
//let wallShelfNumber = 10;
let endBayNumber = 10;
let pegBoardNumber = 10;
let freeStandNumber = 10;
let fridgeShelfNumber = 10;
let availablewallShelfNumber = 10;
let availableendBayNumber;
let availablepegBoardNumber;
let availablefreeStandNumber;
let availablefridgeShelfNumber;

//localStorage.setItem("wallShelfNumber",availablewallShelfNumber)



Shelf.prototype.shelfCosting = function (sType, sNumber) {
  if (sType === "wallShelf") {
    typeCost = 500 * sNumber;
    shelfCost += typeCost;
  }
  else if (sType === "endBay") {
    typeCost = 1000 * sNumber;
    shelfCost += typeCost;
  }
  else if (sType === "pegShelf") {
    typeCost = 1500 * sNumber;
    shelfCost += typeCost;
  }
  else if (sType === "freeStandShelf") {
    typeCost = 2500 * sNumber;
    shelfCost += typeCost;
  }
  else if (sType === "fridgeShelf") {
    typeCost = 3000 * sNumber;
    shelfCost += typeCost;
  }
  return shelfCost

    ;
}
Shelf.prototype.availableSpace = function (sType, sNumber) {

  if (sType === "wallShelf") {
    availablewallShelfNumber = availablewallShelfNumber - sNumber
    return availablewallShelfNumber;
  }
  else if (sType === "endBay") {
    availableendBayNumber = endBayNumber - sNumber
    return availableendBayNumber;
  }
  else if (sType === "pegShelf") {
    availablepegBoardNumber = pegBoardNumber - sNumber
    return availablepegBoardNumber;
  }
  else if (sType === "freeStandShelf") {
    availablefreeStandNumber = freeStandNumber - sNumber
    return availablefreeStandNumber;
  }
  else if (sType === "fridgeShelf") {
    availablefridgeShelfNumber = fridgeShelfNumber - sNumber;
    return availablefridgeShelfNumber;
  }

}


Space.prototype.attendantsCosting = function (inputtedAttendantsNumber) {
  attendantCost = inputtedAttendantsNumber * 500;

  return attendantCost;
}

$(document).ready(function () {
  $("#applicationForm").submit(function (event) {
    event.preventDefault()
    inputtedName = $("#userName").val()
    inputtedEmail = $("#email").val()
    inputtedListing = $("input[name=listingRadio]:checked").val();
    inputtedAttendantsNumber = parseInt($("#attendant").val())

    $.each($("input[name=shelfType]:checked"),
      function () {
        sType = $(this).val();
        sNumber = $('#' + sType).val()

        let newShelf = new Shelf(sType, sNumber);

        shelftypes.push(newShelf);
        return shelftypes;
      }
    )

    let newSpace = new Space(inputtedName, inputtedEmail, inputtedListing, shelftypes, inputtedAttendantsNumber);
    console.log(newSpace);
    costattendant = newSpace;

    let { listing, shelf, attendantsNumber } = costattendant;
    costattendant.attendantsCosting(attendantsNumber);



    for (var i = 0; i < shelftypes.length; i++) {

      costshelf = shelftypes[i];
      let { type, number } = costshelf;

      //console.log(costshelf)
      costshelf.shelfCosting(type, number);
      costshelf.availableSpace(type,number);
      localStorage.setItem("wallShelfNumber",availablewallShelfNumber)
    }


  })
})
$(document).ready(function() {
  $('#toggleMarket').click(function() {
    $('.amenitiesMarket').toggle();    
  });
  $('#toggleStaff').click(function() {
    $('.amenitiesStaff').toggle();    
  });
  $('#toggleSecurity').click(function() {
    $('.amenitesSecurity').toggle();    
  });


});
