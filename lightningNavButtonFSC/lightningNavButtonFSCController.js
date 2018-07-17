({
	init: function (component, event, helper) {
		var optionList = [];
		var optLabel01 = component.get("v.optLabel01");
		var optLabel02 = component.get("v.optLabel02");
		var optLabel03 = component.get("v.optLabel03");
		var optLabel04 = component.get("v.optLabel04");
		var optLabel05 = component.get("v.optLabel05");

		if (optLabel01 != null && optLabel01 != '') {
			component.set("v.showoptLabel01", true);
		}

		if (optLabel02 != null && optLabel02 != '') {
			component.set("v.showoptLabel02", true);
		}

		if (optLabel03 != null && optLabel03 != '') {
			component.set("v.showoptLabel03", true);
		}

		if (optLabel04 != null && optLabel04 != '') {
			component.set("v.showoptLabel04", true);
		}

		if (optLabel05 != null && optLabel05 != '') {
			component.set("v.showoptLabel05", true);
		}
		
	},

	handleChange: function (component, event, helper) {
		// When an option is selected, navigate to the next screen
		var response = event.getSource().getLocalId();
		var label = event.getSource().get("v.label");
		//component.set("v.value", response);		
		component.set("v.value", label);		
		var navigate = component.get("v.navigateFlow");
						
		navigate("NEXT");
	}

})