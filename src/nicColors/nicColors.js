/**
 * nicColors
 * @description: Provides buttons to control the foreground and background color of text
 * @requires: nicCore, nicPane, nicAdvancedButton
 * @author: Brian Kirchoff
 * @version: 0.9.0
 */

/* START CONFIG */
var nicColorOptions = {
	buttons : {
		'forecolor' : {name : __t('Change Text Color'), type : 'nicEditorColorButton', noClose : true},
		'bgcolor' : {name : __t('Change Background Color'), type : 'nicEditorBgColorButton', noClose : true}
	}/* NICEDIT_REMOVE_START */,iconFiles : {'forecolor' : 'forecolor.gif', 'bgcolor' : 'bgcolor.gif'}/* NICEDIT_REMOVE_END */
};
/* END CONFIG */

var nicEditorColorButton = nicEditorAdvancedButton.extend({
	width : '150px',
	addPane : function() {

		var colorList = [ // Nadir : Nicer color set
			"FFFFFF FFCCCC FFCC99 FFFF99 FFFFCC 99FF99 99FFFF CCFFFF CCCCFF FFCCFF",
			"CCCCCC FF6666 FF9966 FFFF66 FFFF33 66FF99 33FFFF 66FFFF 9999FF FF99FF",
			"C0C0C0 FF0000 FF9900 FFCC66 FFFF00 33FF33 66CCCC 33CCFF 6666CC CC66CC",
			"999999 CC0000 FF6600 FFCC33 FFCC00 33CC00 00CCCC 3366FF 6633FF CC33CC",
			"666666 990000 CC6600 CC9933 999900 009900 339999 3333FF 6600CC 993399",
			"333333 660000 993300 996633 666600 006600 336666 000099 333399 663366",
			"000000 330000 663300 663333 333300 003300 003333 000066 330099 330033"];

		var colorItems = new bkElement('DIV').setStyle({width: '150px'});

		for(var row=0;row<colorList.length;row++) {
			clrs=colorList[row].split(' ');
			for(var b=0;b<clrs.length;b++) {
				var colorCode = '#'+clrs[b];

						var colorSquare = new bkElement('DIV').setStyle({'cursor' : 'pointer', 'height' : '15px', 'float' : 'left'}).appendTo(colorItems);
						var colorBorder = new bkElement('DIV').setStyle({border: '2px solid '+colorCode}).appendTo(colorSquare);
						var colorInner = new bkElement('DIV').setStyle({backgroundColor : colorCode, overflow : 'hidden', width : '11px', height : '11px'}).addEvent('click',this.colorSelect.closure(this,colorCode)).addEvent('mouseover',this.on.closure(this,colorBorder)).addEvent('mouseout',this.off.closure(this,colorBorder,colorCode)).appendTo(colorBorder);

						if(!window.opera) {
							colorSquare.onmousedown = colorInner.onmousedown = bkLib.cancelEvent;
						}


				}
			}
			this.pane.append(colorItems.noSelect());
	},

	colorSelect : function(c) {
		this.ne.nicCommand('foreColor',c);
		this.removePane();
	},

	on : function(colorBorder) {
		colorBorder.setStyle({border : '2px solid #000'});
	},

	off : function(colorBorder,colorCode) {
		colorBorder.setStyle({border : '2px solid '+colorCode});
	}
});

var nicEditorBgColorButton = nicEditorColorButton.extend({
	colorSelect : function(c) {
		this.ne.nicCommand('hiliteColor',c);
		this.removePane();
	}
});

nicEditors.registerPlugin(nicPlugin,nicColorOptions);
