var NAMESPACE_data = NAMESPACE_data || {};

NAMESPACE_raid.classType = NAMESPACE_raid.classType || {};
NAMESPACE_raid.classType.warrior = 0;
NAMESPACE_raid.classType.paladin = 1;
NAMESPACE_raid.classType.hunter = 2;
NAMESPACE_raid.classType.rogue = 3;
NAMESPACE_raid.classType.priest = 4;
NAMESPACE_raid.classType.shaman = 5;
NAMESPACE_raid.classType.mage = 6;
NAMESPACE_raid.classType.warlock = 7;
NAMESPACE_raid.classType.druid = 8;

NAMESPACE_raid.Raider = function(){

    this.name = undefined;
    this.classType = undefined;

    this.constructor = function(name, classType) {
        this.name = name;
        this.classType = classType;
        
        return this;
	}
}

NAMESPACE_raid.constantRaider = [
    new NAMESPACE_raid.Raider().constructor("Raider1", NAMESPACE_raid.classType.warrior),
    new NAMESPACE_raid.Raider().constructor("Raider2", NAMESPACE_raid.classType.hunter),
    new NAMESPACE_raid.Raider().constructor("Raider3", NAMESPACE_raid.classType.warrior),
    new NAMESPACE_raid.Raider().constructor("Raider4", NAMESPACE_raid.classType.hunter),
    new NAMESPACE_raid.Raider().constructor("Raider5", NAMESPACE_raid.classType.warlock),
    new NAMESPACE_raid.Raider().constructor("Raider6", NAMESPACE_raid.classType.priest)
];

NAMESPACE_raid.dynamicRaider = [
    new NAMESPACE_raid.Raider().constructor("Raider7", NAMESPACE_raid.classType.warrior),
    new NAMESPACE_raid.Raider().constructor("Raider8", NAMESPACE_raid.classType.warrior),
    new NAMESPACE_raid.Raider().constructor("Raider9", NAMESPACE_raid.classType.warrior),
    new NAMESPACE_raid.Raider().constructor("Raider10", NAMESPACE_raid.classType.warrior),
    new NAMESPACE_raid.Raider().constructor("Raider11", NAMESPACE_raid.classType.mage),
    new NAMESPACE_raid.Raider().constructor("Raider12", NAMESPACE_raid.classType.mage),
    new NAMESPACE_raid.Raider().constructor("Raider13", NAMESPACE_raid.classType.warlock),
    new NAMESPACE_raid.Raider().constructor("Raider14", NAMESPACE_raid.classType.mage),
    new NAMESPACE_raid.Raider().constructor("Raider15", NAMESPACE_raid.classType.rogue),
    new NAMESPACE_raid.Raider().constructor("Raider16", NAMESPACE_raid.classType.warrior),
    new NAMESPACE_raid.Raider().constructor("Raider17", NAMESPACE_raid.classType.warlock),
    new NAMESPACE_raid.Raider().constructor("Raider18", NAMESPACE_raid.classType.warrior),
    new NAMESPACE_raid.Raider().constructor("Raider19", NAMESPACE_raid.classType.hunter),
    new NAMESPACE_raid.Raider().constructor("Raider20", NAMESPACE_raid.classType.mage),
    new NAMESPACE_raid.Raider().constructor("Raider21", NAMESPACE_raid.classType.warlock),
    new NAMESPACE_raid.Raider().constructor("Raider22", NAMESPACE_raid.classType.rogue),
    new NAMESPACE_raid.Raider().constructor("Raider23", NAMESPACE_raid.classType.hunter),
    new NAMESPACE_raid.Raider().constructor("Raider24", NAMESPACE_raid.classType.hunter),
    new NAMESPACE_raid.Raider().constructor("Raider25", NAMESPACE_raid.classType.warlock),
    new NAMESPACE_raid.Raider().constructor("Raider26", NAMESPACE_raid.classType.rogue),
    new NAMESPACE_raid.Raider().constructor("Raider27", NAMESPACE_raid.classType.hunter),
    new NAMESPACE_raid.Raider().constructor("Raider28", NAMESPACE_raid.classType.warlock),
    new NAMESPACE_raid.Raider().constructor("Raider29", NAMESPACE_raid.classType.hunter),
    new NAMESPACE_raid.Raider().constructor("Raider30", NAMESPACE_raid.classType.rogue),
    new NAMESPACE_raid.Raider().constructor("Raider31", NAMESPACE_raid.classType.warrior),
    new NAMESPACE_raid.Raider().constructor("Raider32", NAMESPACE_raid.classType.warlock),
    new NAMESPACE_raid.Raider().constructor("Raider33", NAMESPACE_raid.classType.rogue),
    new NAMESPACE_raid.Raider().constructor("Raider34", NAMESPACE_raid.classType.hunter),
    new NAMESPACE_raid.Raider().constructor("Raider35", NAMESPACE_raid.classType.warlock),
    new NAMESPACE_raid.Raider().constructor("Raider36", NAMESPACE_raid.classType.mage),
    new NAMESPACE_raid.Raider().constructor("Raider37", NAMESPACE_raid.classType.hunter),
    new NAMESPACE_raid.Raider().constructor("Raider38", NAMESPACE_raid.classType.hunter),
    new NAMESPACE_raid.Raider().constructor("Raider39", NAMESPACE_raid.classType.rogue),
    new NAMESPACE_raid.Raider().constructor("Raider40", NAMESPACE_raid.classType.hunter),
    new NAMESPACE_raid.Raider().constructor("Raider41", NAMESPACE_raid.classType.hunter),
    new NAMESPACE_raid.Raider().constructor("Raider42", NAMESPACE_raid.classType.warlock),
    new NAMESPACE_raid.Raider().constructor("Raider43", NAMESPACE_raid.classType.priest),
    new NAMESPACE_raid.Raider().constructor("Raider44", NAMESPACE_raid.classType.priest),
    new NAMESPACE_raid.Raider().constructor("Raider45", NAMESPACE_raid.classType.mage),
    new NAMESPACE_raid.Raider().constructor("Raider46", NAMESPACE_raid.classType.priest),
    new NAMESPACE_raid.Raider().constructor("Raider47", NAMESPACE_raid.classType.priest)
];

NAMESPACE_raid.raiderQuantity = 40;
NAMESPACE_raid.substitutesQuantity = NAMESPACE_raid.constantRaider.length + NAMESPACE_raid.dynamicRaider.length - NAMESPACE_raid.raiderQuantity;
NAMESPACE_raid.startDate = new Date('2019-05-29');