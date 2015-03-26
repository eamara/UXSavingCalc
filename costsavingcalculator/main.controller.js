sap.ui.controller("tcs.calculator.costsavingcalculator.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf costsavingcalculator.main
*/
	onInit: function() {

		this.btnId = 0;
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf costsavingcalculator.main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf costsavingcalculator.main
*/
//	onAfterRendering: function() {
//
//	},
	
// handle displaying the results to the user
showResults: function(event){
	/*var app= sap.ui.getCore().Global.app;
	debugger;*/
	
if(this.btnId == 0){
	//return;
	alert("Please select a transaction")
	return;
}
	

	sap.ui.getCore().Global.app.to("resultView", "flip");
	sap.ui.getCore().byId("resultView").getController().updateFields(this.btnId);
	
	
},

//Display all the basic screen data for XD03
displayXD03Data: function(){
	
	this.btnId= 1;
	
	//add the values to the Persona Panel
	this.byId("mainView--NumUsersIdP").setValue("25");
	this.byId("mainView--fUseIdP").setValue("10");
	this.byId("mainView--NumClicksIdP").setValue("3");
	/*var numC = this.byId("mainView--NumClicksIdP");
	numC.style.color="red";*/
	$("#mainView--NumClicksIdP").css("color","red"); 
	this.byId("mainView--totalNumIdP").setValue("750");
	
	//add the values to the Fiori Panel
	this.byId("mainView--NumUsersIdF").setValue("25");
	this.byId("mainView--fUseIdF").setValue("10");
	this.byId("mainView--NumClicksIdF").setValue("3");
	this.byId("mainView--totalclicksIdF").setValue("750");
	
	
	
},

//Display all the basic screen data for VA01
displayVA01Data: function(){
	
	this.btnId = 2;
	//add the values to the Persona Panel
	this.byId("mainView--NumUsersIdP").setValue("25");
	this.byId("mainView--fUseIdP").setValue("34");
	this.byId("mainView--NumClicksIdP").setValue("4");
	this.byId("mainView--totalNumIdP").setValue("3400"); 
	
	//add the values to the Fiori Panel
	this.byId("mainView--NumUsersIdF").setValue("25");
	this.byId("mainView--fUseIdF").setValue("34");
	this.byId("mainView--NumClicksIdF").setValue("4");
	this.byId("mainView--totalclicksIdF").setValue("3400");
	
	
	
},

//Display all the basic screen data for VA02
displayVA02Data: function(){
	
	this.btnId = 3;
	//add the values to the Persona Panel
	this.byId("mainView--NumUsersIdP").setValue("25");
	this.byId("mainView--fUseIdP").setValue("17");
	this.byId("mainView--NumClicksIdP").setValue("2");
	this.byId("mainView--totalNumIdP").setValue("850");
	
	//add the values to the Fiori Panel
	this.byId("mainView--NumUsersIdF").setValue("25");
	this.byId("mainView--fUseIdF").setValue("17");
	this.byId("mainView--NumClicksIdF").setValue("2");
	this.byId("mainView--totalclicksIdF").setValue("850");
		
},
/*
 This function serves to change the slide and reflect the change in the slider input box
*/

sliderChange: function(event) {
	var sliderBox = this.byId(event.getSource().getId() ); // get the slider box changed
	var value = sliderBox.getValue(); // current value of the changed slider
	var sliderId = sliderBox.getId(); // id of the changed slider
	if(sliderId == "mainView--freqId")
		this.byId("mainView--freqIdBox").setValue(value);
	else if(sliderId == "mainView--familiarityId")
		this.byId("mainView--familiarityIdBox").setValue(value);
	else if(sliderId == "mainView--groupSizeId")
		this.byId("mainView--groupSizeIdBox").setValue(value);
	else if(sliderId == "mainView--complexityId")
		this.byId("mainView--complexityIdBox").setValue(value);
	else if(sliderId == "mainView--SPercentageId")
		this.byId("mainView--SPercentageIdBox").setValue(value);
	else if(sliderId == "mainView--errorPercentageId")
		this.byId("mainView--errorPercentageIdBox").setValue(value);
	else if(sliderId == "mainView--value1PercentageId")
		this.byId("mainView--value1PercentageIdBox").setValue(value);
	else if(sliderId == "mainView--value2PercentageId")
		this.byId("mainView--value2PercentageIdBox").setValue(value);
},



//Generate pdf of the screen
downloadPDF: function(){
	$(document).ready(function() {
    var doc = new jsPDF();
    var specialElementHandlers = {
        '#editor': function (element,renderer) {
            return true;
        }
    };
 $('#exportBtn').click(function () {
        doc.fromHTML($('#targetIndex').html(), 15, 15, {
            'width': 170,'elementHandlers': specialElementHandlers
        });
        doc.save('sample-file.pdf');
    });  
});
},

//Create a resposive toolbar
onOpen: function (oEvent) {
    var oButton = oEvent.oSource;

    if (!this._actionSheet) {
      this._actionSheet = sap.ui.xmlfragment("tcs.calculator.costsavingcalculator.ActionSheet", this);
      this.getView().addDependent(this._actionSheet);
    }

    this._actionSheet.openBy(oButton);
  }

  

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf costsavingcalculator.main
*/
//	onExit: function() {
//
//	}

});