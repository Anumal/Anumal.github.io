var NAMESPACE_Node = NAMESPACE_Node || {};

NAMESPACE_Node.AbstractNode = function() {
	this.node = undefined;
	
	this.constructor = function() {
		this.node = document.createElement(this.getNodeType());
	}

	this.addAttribute = function(name, value) {
		let attribute = document.createAttribute(name);
		attribute.value = value;  
		this.node.setAttributeNode(attribute);
	}
	
	this.getNodeType = function(){
		return "abstractnode";
	}
	
	this.getNode = function(){
		return this.node;
	}
	
	this.appendToDocument = function(){
		document.body.appendChild(this.getNode());
	}
	
	this.removeFromDocument = function(){
		document.body.removeChild(this.getNode());
	}
}

NAMESPACE_Node.ContainerNode = function() {
	this.abstractNode = undefined;
	this.children = undefined;
	
	this.constructor = function() {
		this.abstractNode = new NAMESPACE_Node.AbstractNode();
		this.abstractNode.getNodeType = this.getNodeType;
		this.abstractNode.constructor();
		
		this.children = [];
	}
	
	this.appendToDocument = function(){
		this.abstractNode.appendToDocument();
	}
	
	this.getNodeType = function(){
		return "containernode";
	}
	
	this.getNode = function() {
		return this.abstractNode.getNode();
	}
	
	this.addChild = function(child) {
		if(child != undefined){
			this.abstractNode.getNode().appendChild(child.getNode());
			this.children.push(child);
		}
	}
	
	this.removeChild = function(child) {
		if(child != undefined){
			for(var i = 0; i < this.children.length; i++){
				if(child === this.children[i]){
					this.abstractNode.getNode().removeChild(this.children[i].getNode());
					delete this.children[i];
				}
			}
		}
	}
	
	this.removeFromDocument = function(){
		document.body.removeChild(this.getNode());
	}
}

NAMESPACE_Node.LineBreakNode = function() {
	this.abstractNode = undefined;
	
	this.constructor = function() {
		this.abstractNode = new NAMESPACE_Node.AbstractNode();
		this.abstractNode.getNodeType = this.getNodeType;
		this.abstractNode.constructor();
	}
	
	this.appendToDocument = function(){
		this.abstractNode.appendToDocument();
	}
	
	this.removeFromDocument = function(){
		document.body.removeChild(this.getNode());
	}
	
	this.getNodeType = function(){
		return "br";
	}
	
	this.getNode = function() {
		return this.abstractNode.getNode();
	}
}

NAMESPACE_Node.TableNode = function() {
	this.abstractNode = undefined;
	
	this.constructor = function(head) {
		this.abstractNode = new NAMESPACE_Node.AbstractNode();
		this.abstractNode.getNodeType = this.getNodeType;
		this.abstractNode.constructor();
		
		let tableHeadArray = [];
		for(let i = 0; i < head.length; i++){
			let tableHead = document.createElement("th");
			tableHead.appendChild(document.createTextNode(head[i]));
			tableHeadArray.push(tableHead);
		}
		let tableRow = document.createElement("tr");
		for(let i = 0; i < tableHeadArray.length; i++){
			tableRow.appendChild(tableHeadArray[i]);
		}
		this.abstractNode.getNode().appendChild(tableRow);
		
		let attribute = document.createAttribute("width");
		attribute.value = "100%";  
		this.abstractNode.getNode().setAttributeNode(attribute);

		return this;
	}
	
	this.appendToDocument = function(){
		this.abstractNode.appendToDocument();
	}
	
	this.removeFromDocument = function(){
		document.body.removeChild(this.getNode());
	}
	
	this.getNodeType = function(){
		return "table";
	}
	
	this.getNode = function(){
		return this.abstractNode.getNode();
	}

	this.setCaption = function(content){
		let caption = document.createElement("caption");
		caption.appendChild(document.createTextNode(content));
		this.abstractNode.getNode().appendChild(caption);
	}

	this.setHeader = function(content){
		let header = document.createElement("header");
		header.appendChild(document.createTextNode(content));
		this.abstractNode.getNode().appendChild(header);
	}

	this.addRow = function(row){

		let tableDataArray = [];
		for(let i = 0; i < row.length; i++){
			let tableData = document.createElement("td");
			tableData.appendChild(document.createTextNode(row[i]));
			tableDataArray.push(tableData);
		}
		let tableRow = document.createElement("tr");
		for(let i = 0; i < tableDataArray.length; i++){
			tableRow.appendChild(tableDataArray[i]);
		}
		this.abstractNode.getNode().appendChild(tableRow);
	}
}

NAMESPACE_Node.TextNode = function() {
	this.abstractNode = undefined;
	this.child = undefined;
	
	this.constructor = function(content) {
		this.abstractNode = new NAMESPACE_Node.AbstractNode();
		this.abstractNode.getNodeType = this.getNodeType;
		this.abstractNode.constructor();
		
		this.child = document.createTextNode("");
		this.abstractNode.getNode().appendChild(this.child);
		
		this.setContent(content);
	}
	
	this.appendToDocument = function(){
		this.abstractNode.appendToDocument();
	}
	
	this.removeFromDocument = function(){
		document.body.removeChild(this.getNode());
	}
	
	this.getNodeType = function(){
		return "textnode";
	}
	
	this.getNode = function(){
		return this.abstractNode.getNode();
	}
	
	this.setContent = function(content) {
		if(content != undefined){
			this.child.nodeValue = content;
		}
	}
}

NAMESPACE_Node.Heading2Node = function() {
	this.abstractNode = undefined;
	this.child = undefined;
	
	this.constructor = function(content) {
		this.abstractNode = new NAMESPACE_Node.AbstractNode();
		this.abstractNode.getNodeType = this.getNodeType;
		this.abstractNode.constructor();
		
		this.child = document.createTextNode("");
		this.abstractNode.getNode().appendChild(this.child);
		
		this.setContent(content);
	}
	
	this.appendToDocument = function(){
		this.abstractNode.appendToDocument();
	}
	
	this.removeFromDocument = function(){
		document.body.removeChild(this.getNode());
	}
	
	this.getNodeType = function(){
		return "h2";
	}
	
	this.getNode = function(){
		return this.abstractNode.getNode();
	}
	
	this.setContent = function(content) {
		if(content != undefined){
			this.child.nodeValue = content;
		}
	}
}

NAMESPACE_Node.Heading3Node = function() {
	this.abstractNode = undefined;
	this.child = undefined;
	
	this.constructor = function(content) {
		this.abstractNode = new NAMESPACE_Node.AbstractNode();
		this.abstractNode.getNodeType = this.getNodeType;
		this.abstractNode.constructor();
		
		this.child = document.createTextNode("");
		this.abstractNode.getNode().appendChild(this.child);
		
		this.setContent(content);
	}
	
	this.appendToDocument = function(){
		this.abstractNode.appendToDocument();
	}
	
	this.removeFromDocument = function(){
		document.body.removeChild(this.getNode());
	}
	
	this.getNodeType = function(){
		return "h3";
	}
	
	this.getNode = function(){
		return this.abstractNode.getNode();
	}
	
	this.setContent = function(content) {
		if(content != undefined){
			this.child.nodeValue = content;
		}
	}
}

NAMESPACE_Node.ClickNode = function() {
	this.textnode = undefined;
	this.behavior = undefined;
	
	this.constructor = function(content, behavior) {
		this.textnode = new NAMESPACE_Node.TextNode();
		this.textnode.getNodeType = this.getNodeType;
		this.textnode.constructor("[" + content + "]");
		
		this.setOnClick(behavior);
	}
	
	this.appendToDocument = function(){
		this.textnode.appendToDocument();
	}
	
	this.removeFromDocument = function(){
		document.body.removeChild(this.getNode());
	}
	
	this.getNodeType = function(){
		return "clicknode";
	}
	
	this.getNode = function(){
		return this.textnode.getNode();
	}
	
	this.setContent = function(content) {
		this.textnode.setContent("[" + content + "]");
	}
	
	this.setOnClick = function(behavior){
		if(behavior != undefined){
			this.behavior = function(){
				NAMESPACE_Node.clearSelection();
				behavior();
			};
		}else{
			this.behavior = function(){
				clearSelection();
			};
		}
		this.textnode.getNode().onclick = this.behavior;
	}
}

NAMESPACE_Node.Page = function() {
	
	this.containerNode = undefined;
	
	this.constructor = function() {
		this.containerNode = new NAMESPACE_Node.ContainerNode();
		this.containerNode.constructor();
		return this;
	}
	
	this.appendToDocument = function(){
		this.containerNode.appendToDocument();
	}
	
	this.addText= function(text){
		var textNode = new NAMESPACE_Node.TextNode();
		textNode.constructor(text);
		this.containerNode.addChild(textNode);
	}

	this.addHeading2= function(text){
		var heading2Node = new NAMESPACE_Node.Heading2Node();
		heading2Node.constructor(text);
		this.containerNode.addChild(heading2Node);
	}

	this.addHeading3= function(text){
		var heading3Node = new NAMESPACE_Node.Heading3Node();
		heading3Node.constructor(text);
		this.containerNode.addChild(heading3Node);
	}
	
	this.addLineBreak = function(){
		var lineBreakNode = new NAMESPACE_Node.LineBreakNode();
		lineBreakNode.constructor();
		this.containerNode.addChild(lineBreakNode);
	}
	
	this.addClick = function(text, behavior){
		var clickNode = new NAMESPACE_Node.ClickNode();
		clickNode.constructor(text, behavior);
		this.containerNode.addChild(clickNode);
	}
	
	this.addChild = function(child){
		this.containerNode.addChild(child);
	}
	
	this.removeFromDocument = function() {
		this.containerNode.removeFromDocument();
	}
	
	this.removeChild = function(child){
		this.containerNode.removeChild(child);
	}
}

NAMESPACE_Node.clearSelection = function() {
	if (window.getSelection) {window.getSelection().removeAllRanges();}
	 else if (document.selection) {document.selection.empty();}
}