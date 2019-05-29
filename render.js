var classNameByType = ["Warrior", "Paladin", "Hunter", "Rogue", "Priest", "Shaman", "Mage", "Warlock", "Druid"];

var page = new NAMESPACE_Node.Page();
page.constructor();

var currentDate = new Date();

page.addText("RaidSetup: " + currentDate);
page.addLineBreak();
page.addLineBreak();
page.addText("Active Player:");
page.addLineBreak();
for(var i=0; i < NAMESPACE_raid.constantRaider.length; i++){
	page.addText(NAMESPACE_raid.constantRaider[i].name + " " + classNameByType[NAMESPACE_raid.constantRaider[i].classType]);
	page.addLineBreak();
}

var substituteOffSet = NAMESPACE_DateTime.weeksInbetween(currentDate, NAMESPACE_raid.startDate);

for(var i=0; i < NAMESPACE_raid.dynamicRaider.length; i++){
	if(i < NAMESPACE_raid.dynamicRaider.length - NAMESPACE_raid.substitutesQuantity){
		page.addText(NAMESPACE_raid.dynamicRaider[(i + substituteOffSet) % NAMESPACE_raid.dynamicRaider.length].name + " " + classNameByType[NAMESPACE_raid.dynamicRaider[(i + substituteOffSet) % NAMESPACE_raid.dynamicRaider.length].classType]);
		page.addLineBreak();

	}else{
		
	}
}

page.addLineBreak();
page.addText("Benched Player:");
page.addLineBreak();
for(var i=0; i < NAMESPACE_raid.dynamicRaider.length; i++){
	if(i < NAMESPACE_raid.dynamicRaider.length - NAMESPACE_raid.substitutesQuantity){
		
	}else{
		page.addText(NAMESPACE_raid.dynamicRaider[(i + substituteOffSet) % NAMESPACE_raid.dynamicRaider.length].name + " " + classNameByType[NAMESPACE_raid.dynamicRaider[(i + substituteOffSet) % NAMESPACE_raid.dynamicRaider.length].classType]);
		page.addLineBreak();
	}
}

page.appendToDocument();