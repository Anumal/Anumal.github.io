let classNameByType = ["Warrior", "Paladin", "Hunter", "Rogue", "Priest", "Shaman", "Mage", "Warlock", "Druid"];

let currentDate = new Date();
currentDate.setDate(new Date().getDate() + 3);
let firstdayWeek = new Date(currentDate);
let lastdayWeek = new Date(currentDate);
firstdayWeek.setDate(firstdayWeek.getDate() - ((firstdayWeek.getDay()+4)%7));   
if(lastdayWeek.getDay() < 3){
	lastdayWeek.setDate(lastdayWeek.getDate() + (2 - lastdayWeek.getDay() ));
} else{
	lastdayWeek.setDate(lastdayWeek.getDate() + (9 - lastdayWeek.getDay()));
}

let dd1 = firstdayWeek.getDate();
let mm1 = firstdayWeek.getMonth() + 1; //January is 0!

let yyyy1 = firstdayWeek.getFullYear();
if (dd1 < 10) {
  dd1 = '0' + dd1;
} 
if (mm1 < 10) {
  mm1 = '0' + mm1;
} 
let firstDayFormatted = dd1 + '.' + mm1 + '.' + yyyy1;

let dd2 = lastdayWeek.getDate();
let mm2 = lastdayWeek.getMonth() + 1; //January is 0!

let yyyy2 = lastdayWeek.getFullYear();
if (dd2 < 10) {
  dd2 = '0' + dd2;
} 
if (mm2 < 10) {
  mm2 = '0' + mm2;
} 
let secondDayFormatted = dd2 + '.' + mm2 + '.' + yyyy2;

let page = new NAMESPACE_Node.Page().constructor();

page.addHeading2("Raid Roster: " + firstDayFormatted + " - " + secondDayFormatted);

let constantRaiderTable = new NAMESPACE_Node.TableNode().constructor(["Raider", "Class"]);
constantRaiderTable.setCaption("Constant Players:");

for(let i=0; i < NAMESPACE_raid.constantRaider.length; i++){
	constantRaiderTable.addRow([NAMESPACE_raid.constantRaider[i].name, classNameByType[NAMESPACE_raid.constantRaider[i].classType]]);
}
page.addChild(constantRaiderTable);

let substituteOffSet = NAMESPACE_DateTime.weeksInbetween(NAMESPACE_raid.startDate, currentDate);

let benchedRaiderTable = new NAMESPACE_Node.TableNode().constructor(["Raider", "Class"]);
benchedRaiderTable.setCaption("Benched Players:");

for(let i=0; i < NAMESPACE_raid.dynamicRaider.length; i++){
	if(i < NAMESPACE_raid.dynamicRaider.length - NAMESPACE_raid.substitutesQuantity){
		
	}else{
		benchedRaiderTable.addRow([NAMESPACE_raid.dynamicRaider[(i + substituteOffSet) % NAMESPACE_raid.dynamicRaider.length].name, classNameByType[NAMESPACE_raid.dynamicRaider[(i + substituteOffSet) % NAMESPACE_raid.dynamicRaider.length].classType]]);
	}
}
page.addChild(benchedRaiderTable);


let tablehalf = Math.ceil((NAMESPACE_raid.dynamicRaider.length - NAMESPACE_raid.substitutesQuantity) / 2);
let entrycount = 0;

let activeRaiderTable1 = new NAMESPACE_Node.TableNode().constructor(["Raider", "Class"]);
activeRaiderTable1.setCaption("Active Players:");

for(let i=0; i < NAMESPACE_raid.dynamicRaider.length && entrycount < tablehalf; i++){
	if(i < NAMESPACE_raid.dynamicRaider.length - NAMESPACE_raid.substitutesQuantity){
		activeRaiderTable1.addRow([NAMESPACE_raid.dynamicRaider[(i + substituteOffSet) % NAMESPACE_raid.dynamicRaider.length].name, classNameByType[NAMESPACE_raid.dynamicRaider[(i + substituteOffSet) % NAMESPACE_raid.dynamicRaider.length].classType]]);
		entrycount++;
	}else{
		
	}
}
page.addChild(activeRaiderTable1);

let activeRaiderTable2 = new NAMESPACE_Node.TableNode().constructor(["Raider", "Class"]);
activeRaiderTable2.setCaption("Active Players:");

for(let i=entrycount; i < NAMESPACE_raid.dynamicRaider.length; i++){
	if(i < NAMESPACE_raid.dynamicRaider.length - NAMESPACE_raid.substitutesQuantity){
		activeRaiderTable2.addRow([NAMESPACE_raid.dynamicRaider[(i + substituteOffSet) % NAMESPACE_raid.dynamicRaider.length].name, classNameByType[NAMESPACE_raid.dynamicRaider[(i + substituteOffSet) % NAMESPACE_raid.dynamicRaider.length].classType]]);
	}else{
		
	}
}
page.addChild(activeRaiderTable2);

page.appendToDocument();