const buildingPlans = {
  small: {
    buttonText: "52,500 Sq. Ft. Automotive/General Manufacturing",
    submitLink: "#",
    basePrice: 3450000,
    baseTimeline: 8,
    images: {
      1: "assets/img/52500-harlan-render1.png",
      2: "assets/img/52500-harlan-render2.png"
    },
    selectOptions: {
      ceilingHeight: {
        label: "Ceiling Height ",
        name: "ceilingHeight",
        1: {
          base: false,
          label: "28' Clear Eave Height",
          value: -105000
        },
        2: {
          base: true,
          label: "32' Clear Eave Height (Base)",
          value: 0
        }
      },
      floorThickness: {
        label: "Floor Thickness",
        name: "floorThickness",
        1: {
          base: true,
          label: '6" Reinforced (Base)',
          value: 0
        },
        2: {
          base: false,
          label: '8" Reinforced',
          value: 105000
        }
      },
      columnSpacing: {
        label: "Column Spacing",
        name: "columnSpacing",
        1: {
          base: true,
          label: "25'x50' (Base)",
          value: 0
        },
        2: {
          base: false,
          label: "50'x50'",
          value: 157500
        }
      },
      exteriorFinish: {
        label: "Exterior Finish Options (Metal/CMU)",
        name: "exteriorFinish",
        1: {
          base: false,
          label: "Pre-Engineered Metal Panels",
          value: -157500
        },
        2: {
          base: true,
          label: "Concrete Masonry (Base)",
          value: 0
        }
      },
      airConditioning: {
        label: "Air Cond. In Production Area",
        name: "airConditioning",
        1: {
          base: true,
          label: "No (Base)",
          value: 0
        },
        2: {
          base: false,
          label: "Yes",
          value: 525000
        }
      },
      crane: {
        label: "15 Ton Crane Structure 30'x200'",
        name: "crane",
        1: {
          base: true,
          label: "No (Base)",
          value: 0
        },
        2: {
          base: false,
          label: "Yes",
          value: 120000
        }
      },
      parking: {
        label: "Employee and Trailer Parking",
        name: "parking",
        1: {
          base: true,
          label: "Stone (Base)",
          value: 0
        },
        2: {
          base: false,
          label: "Asphalt Applied to Stone Base",
          value: 137500
        }
      }
    },
    rangeSliders: {
      dockDoors: {
        label: "Dock Doors - ",
        min: 0,
        max: 20,
        base: 8,
        name: "dockDoors"
      },
      officeProduction: {
        label: "Add Office SF in Production Area - ",
        min: 0,
        max: 10000,
        base: 4000,
        name: "officeProduction"
      }
    }
  },
  mid: {
    buttonText: "79,725 Sq. Ft. Steel Fabrication/Aviation Composite",
    basePrice: 5150000,
    baseTimeline: 12,
    submitLink: "#",
    images: {
      1: "assets/img/79725-harlan-render1.png",
      2: "assets/img/79725-harlan-render2.png"
    },
    selectOptions: {
      ceilingHeight: {
        label: "Ceiling Height ",
        name: "ceilingHeight",
        1: {
          base: true,
          label: "28' Clear Eave Height (Base)",
          value: 0
        },
        2: {
          base: false,
          label: "32' Clear Eave Height",
          value: 478350
        }
      },
      floorThickness: {
        label: "Floor Thickness",
        name: "floorThickness",
        1: {
          base: false,
          label: '6" Reinforced',
          value: -159450
        },
        2: {
          base: true,
          label: '8" Reinforced (Base)',
          value: 0
        }
      },
      columnSpacing: {
        label: "Column Spacing",
        name: "columnSpacing",
        1: {
          base: true,
          label: "25'x50' (Base)",
          value: 0
        },
        2: {
          base: false,
          label: "30'x50'",
          value: 159450
        }
      },
      exteriorFinish: {
        label: "Exterior Finish Options",
        name: "exteriorFinish",
        1: {
          base: true,
          label: "Metal",
          value: 0
        },
        2: {
          base: false,
          label: "Pre-Engineered Metal Panels/Concrete Impact Walls",
          value: 318900
        }
      },
      airConditioning: {
        label: "Air Cond. In Production Area",
        name: "airConditioning",
        1: {
          base: true,
          label: "No (Base)",
          value: 0
        },
        2: {
          base: false,
          label: "Yes",
          value: 797250
        }
      },
      parking: {
        label: "Employee and Trailer Parking",
        name: "parking",
        1: {
          base: true,
          label: "Stone (Base)",
          value: 0
        },
        2: {
          base: false,
          label: "Asphalt Applied to Stone Base",
          value: 137500
        }
      }
    },
    rangeSliders: {
      dockDoors: {
        label: "Dock Doors - ",
        min: 0,
        max: 20,
        base: 2,
        name: "dockDoors"
      },
      officeProduction: {
        label: "Add Office SF in Production Area - ",
        min: 0,
        max: 20000,
        base: 4725,
        name: "officeProduction"
      }
    }
  },
  large: {
    buttonText: "100,000 Sq. Ft. Headquarters / Distribution / Manufacturing",
    basePrice: 10600000,
    baseTimeline: 12,
    submitLink: "#",
    images: {
      1: "assets/img/100000-harlan-render1.png",
      2: "assets/img/100000-harlan-render2.png"
    },
    selectOptions: {
      ceilingHeight: {
        label: "Ceiling Height ",
        name: "ceilingHeight",
        1: {
          base: true,
          label: "24' Clear Eave Height (Base)",
          value: 0
        },
        2: {
          base: false,
          label: "36' Clear Eave Height",
          value: 1000000
        }
      },
      floorThickness: {
        label: "Floor Thickness",
        name: "floorThickness",
        1: {
          base: false,
          label: '6" Reinforced',
          value: 0
        },
        2: {
          base: true,
          label: '8" Reinforced (Base)',
          value: 200000
        }
      },
      columnSpacing: {
        label: "Column Spacing",
        name: "columnSpacing",
        1: {
          base: false,
          label: "30'x50'",
          value: -200000
        },
        2: {
          base: true,
          label: "50'x50' (Base)",
          value: 0
        }
      },
      exteriorFinish: {
        label: "Exterior Finish Options (Metal/CMU)",
        name: "exteriorFinish",

        1: {
          base: false,
          label: "Pre-Engineered Metal Panels / Concrete Impact Walls",
          value: -1200000
        },
        2: {
          base: true,
          label: "Stone / Metal Panels (Base)",
          value: 0
        }
      },
      airConditioning: {
        label: "Air Cond. In Production Area",
        name: "airConditioning",
        1: {
          base: false,
          label: "No ",
          value: -1200000
        },
        2: {
          base: true,
          label: "Yes (Base)",
          value: 0
        }
      },
      parking: {
        label: "Employee and Trailer Parking",
        name: "parking",
        1: {
          base: true,
          label: "Stone (Base)",
          value: 0
        },
        2: {
          base: false,
          label: "Asphalt Applied to Stone Base",
          value: 137500
        }
      }
    },
    rangeSliders: {
      dockDoors: {
        label: "Dock Doors - ",
        min: 0,
        max: 20,
        base: 1,
        name: "dockDoors"
      },
      officeProduction: {
        label: "Add Office SF in Production Area - ",
        min: 0,
        max: 50000,
        base: 22500,
        name: "officeProduction"
      }
    }
  }
};

var floorThicknessPrice = 0,
  columnSpacingPrice = 0,
  ceilingHeightPrice = 0,
  airConditioningPrice = 0,
  exteriorFinishPrice = 0,
  cranePrice = 0,
  parkingPrice = 0,
  dockDoorsPrice = 0,
  officeProductionPrice = 0,
  fireProtectionPrice = 0,
  kitchenShopPrice = 0,
  fabricationShopPrice = 0,
  paintingPrice = 0,
  airframePrice = 0,
  batteryServicePrice = 0,
  interiorFinishesPrice = 0,
  nondestructiveTestingPrice = 0,
  hangarOverallPrice = 0,
  priceSpan = document.getElementsByClassName("price")[0],
  numButtons = document.getElementsByClassName("choosePlan"),
  smallBtn,
  midBtn,
  largeBtn,
  currentstartingPrice = buildingPlans["small"].basePrice;

function resetPrices() {
  floorThicknessPrice = 0;
  columnSpacingPrice = 0;
  ceilingHeightPrice = 0;
  airConditioningPrice = 0;
  exteriorFinishPrice = 0;
  cranePrice = 0;
  dockDoorsPrice = 0;
  parkingPrice = 0;
  officeProductionPrice = 0;
  fireProtectionPrice = 0;
  kitchenShopPrice = 0;
  fabricationShopPrice = 0;
  paintingPrice = 0;
  airframePrice = 0;
  batteryServicePrice = 0;
  interiorFinishesPrice = 0;
  nondestructiveTestingPrice = 0;
  hangarOverallPrice = 0;
}

function comma(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function setupButtons() {
  var bp = 0;
  for (var properties in buildingPlans) {
    var button = document.createElement("button");
    var buttonText = buildingPlans[properties].buttonText;
    var textInButton = document.createTextNode(buttonText);
    var target = document.getElementById("target");
    var contentColumn = document.getElementById("contentCol");
    var buttonId = properties;

    button.classList.add("choosePlan");
    button.setAttribute("id", buttonId);
    button.setAttribute("onclick", "changeButtons(this.id)");
    if (bp == 0) {
      button.classList.add("active");
    }
    button.appendChild(textInButton);

    contentColumn.insertBefore(button, target);

    bp++;
  }
  /* smallBtn = document.getElementById("small");
  midBtn = document.getElementById("mid");
  largeBtn = document.getElementById("large"); */
}

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// function used to destroy the old form and rebuild the form with new values
function destroyRebuild() {
  var formItems = document.getElementsByClassName("formItem");
  var formItemsLength = formItems.length;
  var downloadBtn = document.getElementsByClassName("downloadBtn");

  var pictures = document.getElementsByClassName("popupImg");
  var activeBtn = document.getElementsByClassName("active")[0];
  var targetedItemInObject = activeBtn.id;

  for (var n = formItemsLength; n > 0; n--) {
    formItems[0].parentNode.removeChild(formItems[0]);
  }
  downloadBtn[0].parentNode.parentNode.removeChild(downloadBtn[0].parentNode);

  /* for (let i = 0; i < 5; i++) {
    pictures[0].parentNode.removeChild(pictures[0]);
  } */
  while (pictures[0]) {
    pictures[0].parentNode.removeChild(pictures[0]);
  }

  buildForm();
  updateTimeline();
  if (document.getElementById("officeProduction")) {
    if (targetedItemInObject == "mid") {
      // set the step to 200 for the airport hangar
      document.getElementById("officeProduction").step = 25;
    } else {
      // set the step to 500 for all other projects
      document.getElementById("officeProduction").step = 500;
    }
  }
  if (document.getElementById("dockDoors")) {
    document.getElementById("dockDoors").step = 1;
  }
  if (document.getElementById("kitchenShop")) {
    document.getElementById("kitchenShop").step = 100;
  }

  if (document.getElementById("fabricationShop")) {
    document.getElementById("fabricationShop").step = 100;
  }

  if (document.getElementById("painting")) {
    document.getElementById("painting").step = 100;
  }

  if (document.getElementById("airframe")) {
    document.getElementById("airframe").step = 100;
  }

  if (document.getElementById("batteryService")) {
    document.getElementById("batteryService").step = 100;
  }

  if (document.getElementById("interiorFinishes")) {
    document.getElementById("interiorFinishes").step = 100;
  }

  if (document.getElementById("nondestructiveTesting")) {
    document.getElementById("nondestructiveTesting").step = 100;
  }

  if (document.getElementById("hangarOverall")) {
    document.getElementById("hangarOverall").step = 100;
  }

  imageSetup();
}

// used to navigate through the buttons at the top of the page.
function changeButtons(buttonID) {
  var newPrice = buildingPlans[buttonID].basePrice;
  var loadTimeline = buildingPlans[buttonID].baseTimeline;

  currentstartingPrice = newPrice;

  document.getElementById("price").textContent = comma(newPrice);
  document.getElementById("timeline").textContent = loadTimeline;
  var buttons = document.getElementsByClassName("choosePlan");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  document.getElementById(buttonID).classList.add("active");
  resetPrices();

  destroyRebuild();
}

// adds event listeners to all select fields
function selectListenerEvents() {
  // assigns the current value of the field to the corresponding varible to store it's current price
  if (document.getElementById("floorThickness")) {
    document
      .getElementById("floorThickness")
      .addEventListener("change", function() {
        floorThicknessPrice = document.getElementById("floorThickness").value;
        updatePrice();
      });
  }
  if (document.getElementById("columnSpacing")) {
    document
      .getElementById("columnSpacing")
      .addEventListener("change", function() {
        columnSpacingPrice = document.getElementById("columnSpacing").value;
        updatePrice();
      });
  }
  if (document.getElementById("ceilingHeight")) {
    document
      .getElementById("ceilingHeight")
      .addEventListener("change", function() {
        ceilingHeightPrice = document.getElementById("ceilingHeight").value;
        updatePrice();
        updateTimeline();
      });
  }

  if (document.getElementById("airConditioning")) {
    document
      .getElementById("airConditioning")
      .addEventListener("change", function() {
        airConditioningPrice = document.getElementById("airConditioning").value;
        updatePrice();
        updateTimeline();
      });
  }
  if (document.getElementById("exteriorFinish")) {
    document
      .getElementById("exteriorFinish")
      .addEventListener("change", function() {
        exteriorFinishPrice = document.getElementById("exteriorFinish").value;
        updatePrice();
        updateTimeline();
      });
  }
  if (document.getElementById("parking")) {
    document.getElementById("parking").addEventListener("change", function() {
      parkingPrice = document.getElementById("parking").value;
      updatePrice();
    });
  }
  if (document.getElementById("crane")) {
    document.getElementById("crane").addEventListener("change", function() {
      cranePrice = document.getElementById("crane").value;
      updatePrice();
    });
  }
  if (document.getElementById("fireProtection")) {
    document
      .getElementById("fireProtection")
      .addEventListener("change", function() {
        fireProtectionPrice = document.getElementById("fireProtection").value;
        updatePrice();
      });
  }
}

// updating dock doors value
function dockDoorsUpdate() {
  var dockDoorsValue = document.getElementById("dockDoors").value;
  var activeBtn = document.getElementsByClassName("active")[0];
  var targetedItemInObject = activeBtn.id;
  var baseNumber =
    buildingPlans[targetedItemInObject]["rangeSliders"]["dockDoors"]["base"];

  if (dockDoorsValue > baseNumber) {
    dockDoorsPrice = (dockDoorsValue - baseNumber) * 15000;
  } else if (dockDoorsValue < baseNumber) {
    dockDoorsPrice = (baseNumber - dockDoorsValue) * -15000;
  } else if (dockDoorsValue == baseNumber) {
    dockDoorsPrice = 0;
  }

  // update the counter on the screen
  document.getElementById("dockDoorsCount").textContent = " " + dockDoorsValue;

  updatePrice();
}

// updating office production value
function officeProductionUpdate() {
  var activeBtn = document.getElementsByClassName("active")[0];
  var targetedItemInObject = activeBtn.id;
  var officeProdValue = document.getElementById("officeProduction").value;
  var baseOfficeProdValue =
    buildingPlans[targetedItemInObject]["rangeSliders"]["officeProduction"][
      "base"
    ];

  if (targetedItemInObject == "small") {
    if (officeProdValue > baseOfficeProdValue) {
      officeProductionPrice = (officeProdValue - baseOfficeProdValue) * 125;
    } else if (officeProdValue < baseOfficeProdValue) {
      officeProductionPrice = (baseOfficeProdValue - officeProdValue) * -125;
    } else if (officeProdValue == baseOfficeProdValue) {
      officeProductionPrice = 0;
    }
  } else if (targetedItemInObject == "mid") {
    if (officeProdValue > baseOfficeProdValue) {
      officeProductionPrice = (officeProdValue - baseOfficeProdValue) * 200;
    } else if (officeProdValue < baseOfficeProdValue) {
      officeProductionPrice = (baseOfficeProdValue - officeProdValue) * -200;
    } else if (officeProdValue == baseOfficeProdValue) {
      officeProductionPrice = 0;
    }
  } else if (targetedItemInObject == "large") {
    if (officeProdValue > baseOfficeProdValue) {
      officeProductionPrice = (officeProdValue - baseOfficeProdValue) * 120;
    } else if (officeProdValue < baseOfficeProdValue) {
      officeProductionPrice = (baseOfficeProdValue - officeProdValue) * -120;
    } else if (officeProdValue == baseOfficeProdValue) {
      officeProductionPrice = 0;
    }
  }
  document.getElementById("officeProductionCount").textContent =
    " " + officeProdValue;
  updatePrice();
}
function kitchenShopUpdate() {
  var activeBtn = document.getElementsByClassName("active")[0];
  var targetedItemInObject = activeBtn.id;
  var kitchenShopValue = document.getElementById("kitchenShop").value;
  var baseKitchenShopValue =
    buildingPlans[targetedItemInObject]["rangeSliders"]["kitchenShop"]["base"];

  if (targetedItemInObject == "mid") {
    if (kitchenShopValue > baseKitchenShopValue) {
      kitchenShopPrice = (kitchenShopValue - baseKitchenShopValue) * 100;
    } else if (kitchenShopValue < baseKitchenShopValue) {
      kitchenShopPrice = (baseKitchenShopValue - kitchenShopValue) * -100;
    } else if (kitchenShopValue == baseKitchenShopValue) {
      kitchenShopPrice = 0;
    }
  }

  document.getElementById("kitchenShopCount").textContent =
    " " + kitchenShopValue;
  updatePrice();
}

function fabricationShopUpdate() {
  var activeBtn = document.getElementsByClassName("active")[0];
  var targetedItemInObject = activeBtn.id;
  var fabricationShopValue = document.getElementById("fabricationShop").value;
  var baseFabricationShopValue =
    buildingPlans[targetedItemInObject]["rangeSliders"]["fabricationShop"][
      "base"
    ];

  if (targetedItemInObject == "mid") {
    if (fabricationShopValue > baseFabricationShopValue) {
      fabricationShopPrice =
        (fabricationShopValue - baseFabricationShopValue) * 70;
    } else if (fabricationShopValue < baseFabricationShopValue) {
      fabricationShopPrice =
        (baseFabricationShopValue - fabricationShopValue) * -70;
    } else if (fabricationShopValue == baseFabricationShopValue) {
      fabricationShopPrice = 0;
    }
  }

  document.getElementById("fabricationShopCount").textContent =
    " " + fabricationShopValue;
  updatePrice();
}

function paintingUpdate() {
  var activeBtn = document.getElementsByClassName("active")[0];
  var targetedItemInObject = activeBtn.id;
  var paintingValue = document.getElementById("painting").value;
  var basePaintingValue =
    buildingPlans[targetedItemInObject]["rangeSliders"]["painting"]["base"];

  if (targetedItemInObject == "mid") {
    if (paintingValue > basePaintingValue) {
      paintingPrice = (paintingValue - basePaintingValue) * 300;
    } else if (paintingValue < basePaintingValue) {
      paintingPrice = (basePaintingValue - paintingValue) * -300;
    } else if (paintingValue == basePaintingValue) {
      paintingPrice = 0;
    }
  }

  document.getElementById("paintingCount").textContent = " " + paintingValue;
  updatePrice();
}
function airframeUpdate() {
  var activeBtn = document.getElementsByClassName("active")[0];
  var targetedItemInObject = activeBtn.id;
  var airframeValue = document.getElementById("airframe").value;
  var baseAirframeValue =
    buildingPlans[targetedItemInObject]["rangeSliders"]["airframe"]["base"];

  if (targetedItemInObject == "mid") {
    if (airframeValue > baseAirframeValue) {
      airframePrice = (airframeValue - baseAirframeValue) * 300;
    } else if (airframeValue < baseAirframeValue) {
      airframePrice = (baseAirframeValue - airframeValue) * -300;
    } else if (airframeValue == baseAirframeValue) {
      airframePrice = 0;
    }
  }

  document.getElementById("airframeCount").textContent = " " + airframeValue;
  updatePrice();
}

function batteryServiceUpdate() {
  var activeBtn = document.getElementsByClassName("active")[0];
  var targetedItemInObject = activeBtn.id;
  var batteryServiceValue = document.getElementById("batteryService").value;
  var baseBatteryServiceValue =
    buildingPlans[targetedItemInObject]["rangeSliders"]["batteryService"][
      "base"
    ];

  if (targetedItemInObject == "mid") {
    if (batteryServiceValue > baseBatteryServiceValue) {
      batteryServicePrice =
        (batteryServiceValue - baseBatteryServiceValue) * 250;
    } else if (batteryServiceValue < baseBatteryServiceValue) {
      batteryServicePrice =
        (baseBatteryServiceValue - batteryServiceValue) * -250;
    } else if (batteryServiceValue == baseBatteryServiceValue) {
      batteryServicePrice = 0;
    }
  }

  document.getElementById("batteryServiceCount").textContent =
    " " + batteryServiceValue;
  updatePrice();
}

function interiorFinishesUpdate() {
  var activeBtn = document.getElementsByClassName("active")[0];
  var targetedItemInObject = activeBtn.id;
  var interiorFinishesValue = document.getElementById("interiorFinishes").value;
  var baseInteriorFinishesValue =
    buildingPlans[targetedItemInObject]["rangeSliders"]["interiorFinishes"][
      "base"
    ];

  if (targetedItemInObject == "mid") {
    if (interiorFinishesValue > baseInteriorFinishesValue) {
      batteryServicePrice =
        (interiorFinishesValue - baseInteriorFinishesValue) * 250;
    } else if (interiorFinishesValue < baseInteriorFinishesValue) {
      interiorFinishesPrice =
        (baseInteriorFinishesValue - interiorFinishesValue) * -250;
    } else if (interiorFinishesValue == baseInteriorFinishesValue) {
      interiorFinishesPrice = 0;
    }
  }

  document.getElementById("interiorFinishesCount").textContent =
    " " + interiorFinishesValue;
  updatePrice();
}

function nondestructiveTestingUpdate() {
  var activeBtn = document.getElementsByClassName("active")[0];
  var targetedItemInObject = activeBtn.id;
  var nondestructiveTestingValue = document.getElementById(
    "nondestructiveTesting"
  ).value;
  var baseNondestructiveTestingValue =
    buildingPlans[targetedItemInObject]["rangeSliders"][
      "nondestructiveTesting"
    ]["base"];

  if (targetedItemInObject == "mid") {
    if (nondestructiveTestingValue > baseNondestructiveTestingValue) {
      nondestructiveTestingPrice =
        (nondestructiveTestingValue - baseNondestructiveTestingValue) * 250;
    } else if (nondestructiveTestingValue < baseNondestructiveTestingValue) {
      nondestructiveTestingPrice =
        (baseNondestructiveTestingValue - nondestructiveTestingValue) * -250;
    } else if (nondestructiveTestingValue == baseNondestructiveTestingValue) {
      nondestructiveTestingPrice = 0;
    }
  }

  document.getElementById("nondestructiveTestingCount").textContent =
    " " + nondestructiveTestingValue;
  updatePrice();
}
function hangarOverallUpdate() {
  var activeBtn = document.getElementsByClassName("active")[0];
  var targetedItemInObject = activeBtn.id;
  var hangarOverallValue = document.getElementById("hangarOverall").value;
  var baseHangarOverallValue =
    buildingPlans[targetedItemInObject]["rangeSliders"]["hangarOverall"][
      "base"
    ];

  if (targetedItemInObject == "mid") {
    if (hangarOverallValue > baseHangarOverallValue) {
      hangarOverallPrice = (hangarOverallValue - baseHangarOverallValue) * 278;
    } else if (hangarOverallValue < baseHangarOverallValue) {
      hangarOverallPrice = (baseHangarOverallValue - hangarOverallValue) * -250;
    } else if (hangarOverallValue == baseHangarOverallValue) {
      hangarOverallPrice = 0;
    }
  }

  document.getElementById("hangarOverallCount").textContent =
    " " + hangarOverallValue;
  updatePrice();
}

// builds the form that has been selected
function buildForm() {
  var activeBtn = document.getElementsByClassName("active")[0];

  var targetedItemInObject = activeBtn.id;

  var formTag = document.getElementsByTagName("form")[0];

  pTagCounter = 0;

  for (var formNames in buildingPlans[targetedItemInObject]["selectOptions"]) {
    var formP = document.createElement("p");
    var formLabel = document.createElement("label");
    var labelText = document.createTextNode(
      buildingPlans[targetedItemInObject]["selectOptions"][formNames]["label"]
    );
    var select = document.createElement("select");
    var selectId =
      buildingPlans[targetedItemInObject]["selectOptions"][formNames]["name"];
    // console.log(buildingPlans[targetedItemInObject]['selectOptions'][formNames]['name']);

    formP.appendChild(formLabel);
    formP.appendChild(select);
    formLabel.appendChild(labelText);
    select.setAttribute("id", selectId);
    for (var formOptions in buildingPlans[targetedItemInObject][
      "selectOptions"
    ][formNames]) {
      var optionValue =
        buildingPlans[targetedItemInObject]["selectOptions"][formNames][
          formOptions
        ]["value"];
      if (typeof optionValue == "number") {
        var optionTag = document.createElement("option");
        var optionValue =
          buildingPlans[targetedItemInObject]["selectOptions"][formNames][
            formOptions
          ]["value"];
        var optionText = document.createTextNode(
          buildingPlans[targetedItemInObject]["selectOptions"][formNames][
            formOptions
          ]["label"]
        );
        if (
          buildingPlans[targetedItemInObject]["selectOptions"][formNames][
            formOptions
          ]["base"]
        ) {
          optionTag.setAttribute("selected", "selected");
        }

        optionTag.appendChild(optionText);
        optionTag.setAttribute("value", optionValue);

        select.appendChild(optionTag);
      }
    }

    formP.classList.add("formItem");
    var formItemsList = document.getElementsByClassName("formItem");
    var formItemsCount = formItemsList.length;

    if (formItemsCount > 0) {
      // function that adds the paragraph tags after the form tag

      insertAfter(formP, formItemsList[formItemsCount - 1]);
    } else {
      // function that adds the paragraph tags after the form tag

      insertAfter(formP, formTag);
    }

    pTagCounter++;
  }
  var rangeContainer = document.createElement("div");
  var rangeRow = document.createElement("div");

  rangeContainer.classList.add("container");
  rangeRow.classList.add("row");
  rangeRow.id = "rangeRow";

  rangeContainer.appendChild(rangeRow);

  insertAfter(
    rangeContainer,
    document.getElementsByClassName("formItem")[pTagCounter - 1]
  );

  for (var rangeNames in buildingPlans[targetedItemInObject]["rangeSliders"]) {
    var rangeP = document.createElement("p");
    var rangeLabel = document.createElement("label");
    var rangeContainer = document.getElementById("rangeRow");
    var rangeLabelText = document.createTextNode(
      buildingPlans[targetedItemInObject]["rangeSliders"][rangeNames]["label"]
    );
    var rangeCountSpan = document.createElement("span");
    var rangeCountText = document.createTextNode(
      " " +
        buildingPlans[targetedItemInObject]["rangeSliders"][rangeNames]["base"]
    );
    var rangeInput = document.createElement("input");

    rangeP.appendChild(rangeLabel);
    rangeP.classList.add("formItem");
    rangeP.classList.add("rangeSlider");
    rangeLabel.appendChild(rangeLabelText);
    rangeLabel.appendChild(rangeCountSpan);
    rangeCountSpan.setAttribute(
      "id",
      buildingPlans[targetedItemInObject]["rangeSliders"][rangeNames]["name"] +
        "Count"
    );
    rangeCountSpan.appendChild(rangeCountText);
    rangeInput.setAttribute("type", "range");
    rangeInput.setAttribute(
      "min",
      buildingPlans[targetedItemInObject]["rangeSliders"][rangeNames]["min"]
    );
    rangeInput.setAttribute(
      "max",
      buildingPlans[targetedItemInObject]["rangeSliders"][rangeNames]["max"]
    );
    rangeInput.setAttribute(
      "value",
      buildingPlans[targetedItemInObject]["rangeSliders"][rangeNames]["base"]
    );
    rangeInput.setAttribute(
      "id",
      buildingPlans[targetedItemInObject]["rangeSliders"][rangeNames]["name"]
    );
    rangeInput.setAttribute(
      "onclick",
      buildingPlans[targetedItemInObject]["rangeSliders"][rangeNames]["name"] +
        "Update()"
    );
    rangeInput.setAttribute(
      "oninput",
      buildingPlans[targetedItemInObject]["rangeSliders"][rangeNames]["name"] +
        "Update()"
    );

    rangeContainer.appendChild(rangeP);
    insertAfter(rangeInput, rangeLabel);

    pTagCounter++;
  }

  selectListenerEvents();

  var planBtn = document.createElement("a");

  planBtn.setAttribute(
    "href",
    buildingPlans[targetedItemInObject]["submitLink"]
  );
  planBtn.setAttribute("target", "_blank");
  planBtn.classList.add("downloadBtn");
  var containerDiv = document.createElement("div");
  containerDiv.classList.add("buttonContainer");

  planBtn.textContent =
    "Download Pre-Designed Base Drawings and Building Plans";
  containerDiv.appendChild(planBtn);
  insertAfter(containerDiv, document.getElementById("imgSwap"));
}

function imageSetup() {
  var activeBtn = document.getElementsByClassName("active")[0];
  var targetedItemInObject = activeBtn.id;
  var objectLength = Object.keys(buildingPlans[targetedItemInObject]["images"])
    .length;
  var buildingName = document.getElementById("buildingName");

  buildingName.textContent = buildingPlans[targetedItemInObject]["buttonText"];

  for (i = 1; i < objectLength + 1; i++) {
    var imgSrc = buildingPlans[targetedItemInObject]["images"][i];

    var imgDiv = document.createElement("div");
    var imgToInsert = document.createElement("img");
    var imgsContainer = document.getElementById("imgSwapInner");

    imgToInsert.setAttribute("src", imgSrc);
    imgDiv.classList.add("popupImg");
    imgDiv.classList.add("popupImg-" + i);

    imgDiv.appendChild(imgToInsert);
    imgsContainer.appendChild(imgDiv);
    //
    imgDiv.addEventListener("click", function() {
      var overlay = document.getElementById("overlay");
      imgSrc = this.firstElementChild.src;
      var popupImg = document.getElementsByClassName("overlay-img")[0];

      overlay.classList.add("overlay-show");
      popupImg.setAttribute("src", imgSrc);
    });
    // img swap on hover functionality
    imgDiv.addEventListener("mouseenter", function() {
      var mainImg = document.getElementById("mainImg");
      var imgSrc = this.firstElementChild.src;

      mainImg.setAttribute("src", imgSrc);
    });
    document.getElementById("mainImg").src =
      buildingPlans[targetedItemInObject]["images"][1];
  }
  // open image carousel on main img
  var mainImg = document.getElementById("mainImg");
  mainImg.addEventListener("click", function() {
    var overlay = document.getElementById("overlay");
    imgSrc = this.src;
    var popupImg = document.getElementsByClassName("overlay-img")[0];

    overlay.classList.add("overlay-show");
    popupImg.setAttribute("src", imgSrc);
  });
}

//arrow event listeners for image popup
var backArrow = document.getElementById("arrowBack");
var nextArrow = document.getElementById("arrowNext");
if (backArrow) {
  backArrow.addEventListener("click", function() {
    var currentImgSrc = document.getElementsByClassName("overlay-img")[0].src;
    var activeBtn = document.getElementsByClassName("active")[0];
    var targetedItemInObject = activeBtn.id;

    var imgNumber = parseFloat(currentImgSrc.charAt(currentImgSrc.length - 5));

    var countOfImages = Object.keys(
      buildingPlans[targetedItemInObject]["images"]
    ).length;

    if (imgNumber > 1) {
      document.getElementsByClassName("overlay-img")[0].src =
        buildingPlans[targetedItemInObject]["images"][imgNumber - 1];
    } else {
      document.getElementsByClassName("overlay-img")[0].src =
        buildingPlans[targetedItemInObject]["images"][countOfImages];
    }
  });
}
if (nextArrow) {
  nextArrow.addEventListener("click", function() {
    var currentImgSrc = document.getElementsByClassName("overlay-img")[0].src;
    var activeBtn = document.getElementsByClassName("active")[0];
    var targetedItemInObject = activeBtn.id;

    var imgNumber = parseFloat(currentImgSrc.charAt(currentImgSrc.length - 5));

    var countOfImages = Object.keys(
      buildingPlans[targetedItemInObject]["images"]
    ).length;
    console.log(imgNumber);
    console.log(countOfImages);

    if (imgNumber < countOfImages) {
      document.getElementsByClassName("overlay-img")[0].src =
        buildingPlans[targetedItemInObject]["images"][imgNumber + 1];
    } else {
      document.getElementsByClassName("overlay-img")[0].src =
        buildingPlans[targetedItemInObject]["images"][1];
    }
  });
}

function closePopup() {
  var overlay = document.getElementById("overlay");

  overlay.classList.remove("overlay-show");
}

function initialSetup() {
  loadPrice = buildingPlans["small"].basePrice;
  var loadTimeline = buildingPlans["small"].baseTimeline;

  document.getElementById("price").textContent = comma(loadPrice);
  document.getElementById("timeline").textContent = loadTimeline;
  document.getElementById("officeProduction").step = 500;
  document.getElementById("dockDoors").step = 1;
}

function setupPage() {
  setupButtons();
  buildForm();
  initialSetup();
  imageSetup();
  // this causes the page to be one month ahead on load
  updateTimeline();
}

document.addEventListener("DOMContentLoaded", setupPage);

function updateTimeline() {
  var timelineAdjustment = 0,
    timelineFinal,
    activeBtn = document.getElementsByClassName("active")[0],
    targetedItemInObject = activeBtn.id,
    timelineSpan = document.getElementById("timeline");

  if (document.getElementById("ceilingHeight")) {
    var ceilingHeightValue = document.getElementById("ceilingHeight").value;
    if (ceilingHeightValue == 0) {
      timelineAdjustment += 0;
    } else if (ceilingHeightValue < 0) {
      timelineAdjustment += -1;
    } else if (ceilingHeightValue > 0) {
      timelineAdjustment += 1;
    }
  }

  if (document.getElementById("exteriorFinish")) {
    var exteriorFinishValue = document.getElementById("exteriorFinish").value;
    if (exteriorFinishValue == 0) {
      timelineAdjustment += 0;
    } else if (exteriorFinishValue < 0) {
      timelineAdjustment += 1;
    }
  }
  if (document.getElementById("airConditioning")) {
    var airConditioningValue = document.getElementById("airConditioning").value;
    if (airConditioningValue == 0) {
      timelineAdjustment += 0;
    } else if (airConditioningValue > 0) {
      timelineAdjustment += 1;
    }
  }

  if (timelineAdjustment > 0) {
    timelineFinal = 1;
  } else if (timelineAdjustment < 0) {
    timelineFinal = -1;
  } else {
    timelineFinal = 0;
  }

  timelineSpan.textContent =
    buildingPlans[targetedItemInObject]["baseTimeline"] + timelineFinal;
}

function updatePrice() {
  var currentPrice = document.getElementById("price").textContent;
  var priceNoComma = currentPrice.replace(/,\s?/g, "");

  var newNumber =
    parseFloat(currentstartingPrice) +
    parseFloat(floorThicknessPrice) +
    parseFloat(columnSpacingPrice) +
    parseFloat(ceilingHeightPrice) +
    parseFloat(airConditioningPrice) +
    parseFloat(exteriorFinishPrice) +
    parseFloat(cranePrice) +
    parseFloat(parkingPrice) +
    parseFloat(dockDoorsPrice) +
    parseFloat(officeProductionPrice) +
    parseFloat(fireProtectionPrice) +
    parseFloat(kitchenShopPrice) +
    parseFloat(fabricationShopPrice) +
    parseFloat(paintingPrice) +
    parseFloat(airframePrice) +
    parseFloat(batteryServicePrice) +
    parseFloat(interiorFinishesPrice) +
    parseFloat(nondestructiveTestingPrice) +
    parseFloat(hangarOverallPrice);

  animateValue("price", priceNoComma, newNumber, 1000);

  // document.getElementById("price").textContent = comma(newNumber);
}

function animateValue(id, start, end, duration) {
  // assumes integer values for start and end

  var obj = document.getElementById(id);
  var range = end - start;
  // no timer shorter than 50ms (not really visible any way)
  var minTimer = 50;
  // calc step time to show all interediate values
  var stepTime = Math.abs(Math.floor(duration / range));

  // never go below minTimer
  stepTime = Math.max(stepTime, minTimer);

  // get current time and calculate desired end time
  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  var timer;

  function run() {
    var now = new Date().getTime();
    var remaining = Math.max((endTime - now) / duration, 0);
    var value = Math.round(end - remaining * range);
    obj.textContent = comma(value);
    if (value == end) {
      clearInterval(timer);
    }
  }

  timer = setInterval(run, stepTime);
  run();
}
