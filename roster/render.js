var classNameByType = ["Warrior", "Paladin", "Hunter", "Rogue", "Priest", "Shaman", "Mage", "Warlock", "Druid"];

var currentDate = new Date();
var firstdayWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()+3));
var lastdayWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()+9));

var dd1 = firstdayWeek.getDate();
var mm1 = firstdayWeek.getMonth() + 1; //January is 0!

var yyyy1 = firstdayWeek.getFullYear();
if (dd1 < 10) {
  dd1 = '0' + dd1;
} 
if (mm1 < 10) {
  mm1 = '0' + mm1;
} 
var firstDayFormatted = dd1 + '.' + mm1 + '.' + yyyy1;

var dd2 = lastdayWeek.getDate();
var mm2 = lastdayWeek.getMonth() + 1; //January is 0!

var yyyy2 = lastdayWeek.getFullYear();
if (dd2 < 10) {
  dd2 = '0' + dd2;
} 
if (mm2 < 10) {
  mm2 = '0' + mm2;
} 
var secondDayFormatted = dd2 + '.' + mm2 + '.' + yyyy2;

var page = new NAMESPACE_Node.Page().constructor();

page.addHeading2("Raid Roster: " + firstDayFormatted + " - " + secondDayFormatted);

page.addHeading3("Constant Players:");
var constantRaiderTable = new NAMESPACE_Node.TableNode().constructor(["Raider", "Class"]);

for(var i=0; i < NAMESPACE_raid.constantRaider.length; i++){
	constantRaiderTable.addRow([NAMESPACE_raid.constantRaider[i].name, classNameByType[NAMESPACE_raid.constantRaider[i].classType]]);
}
page.addChild(constantRaiderTable);

page.addHeading3("Active Players:");
var activeRaiderTable = new NAMESPACE_Node.TableNode().constructor(["Raider", "Class"]);

var substituteOffSet = NAMESPACE_DateTime.weeksInbetween(NAMESPACE_raid.startDate, currentDate);

for(var i=0; i < NAMESPACE_raid.dynamicRaider.length; i++){
	if(i < NAMESPACE_raid.dynamicRaider.length - NAMESPACE_raid.substitutesQuantity){
		activeRaiderTable.addRow([NAMESPACE_raid.dynamicRaider[(i + substituteOffSet) % NAMESPACE_raid.dynamicRaider.length].name, classNameByType[NAMESPACE_raid.dynamicRaider[(i + substituteOffSet) % NAMESPACE_raid.dynamicRaider.length].classType]]);
	}else{
		
	}
}
page.addChild(activeRaiderTable);

page.addHeading3("Benched Players:");
var benchedRaiderTable = new NAMESPACE_Node.TableNode().constructor(["Raider", "Class"]);

for(var i=0; i < NAMESPACE_raid.dynamicRaider.length; i++){
	if(i < NAMESPACE_raid.dynamicRaider.length - NAMESPACE_raid.substitutesQuantity){
		
	}else{
		benchedRaiderTable.addRow([NAMESPACE_raid.dynamicRaider[(i + substituteOffSet) % NAMESPACE_raid.dynamicRaider.length].name, classNameByType[NAMESPACE_raid.dynamicRaider[(i + substituteOffSet) % NAMESPACE_raid.dynamicRaider.length].classType]]);
	}
}
page.addChild(benchedRaiderTable);

page.appendToDocument();

