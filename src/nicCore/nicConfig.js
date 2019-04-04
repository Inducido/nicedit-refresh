/* START CONFIG */
var nicEditorConfig = bkClass.extend({
	buttons : {
		'bold' : {name : __t('Click to Bold'), command : 'Bold', tags : ['B','STRONG'], css : {'font-weight' : 'bold'}, key : 'b'},
		'italic' : {name : __t('Click to Italic'), command : 'Italic', tags : ['EM','I'], css : {'font-style' : 'italic'}, key : 'i'},
		'underline' : {name : __t('Click to Underline'), command : 'Underline', tags : ['U'], css : {'text-decoration' : 'underline'}, key : 'u'},
		'left' : {name : __t('Left Align'), command : 'justifyleft', noActive : true},
		'center' : {name : __t('Center Align'), command : 'justifycenter', noActive : true},
		'right' : {name : __t('Right Align'), command : 'justifyright', noActive : true},
		'justify' : {name : __t('Justify Align'), command : 'justifyfull', noActive : true},
		'ol' : {name : __t('Insert Ordered List'), command : 'insertorderedlist', tags : ['OL']},
		'ul' : 	{name : __t('Insert Unordered List'), command : 'insertunorderedlist', tags : ['UL']},
		'subscript' : {name : __t('Click to Subscript'), command : 'subscript', tags : ['SUB']},
		'superscript' : {name : __t('Click to Superscript'), command : 'superscript', tags : ['SUP']},
		'strikethrough' : {name : __t('Click to Strike Through'), command : 'strikeThrough', css : {'text-decoration' : 'line-through'}},
		'removeformat' : {name : __t('Remove Formatting'), command : 'removeformat', noActive : true},
		'indent' : {name : __t('Indent Text'), command : 'indent', noActive : true},
		'outdent' : {name : __t('Remove Indent'), command : 'outdent', noActive : true},
		'hr' : {name : __t('Horizontal Rule'), command : 'insertHorizontalRule', noActive : true}
	},
	//sprites single image path: used in combination with iconList
	//iconsPath : /* NICEDIT_ICONSPATH_START */'nicEditorIcons.gif'/* NICEDIT_ICONSPATH_END */,

	//when no sprites are defined (in iconList), iconsPath is used to get root path to the icons
	iconsPath : "../icons",

	buttonList : ['save','bold','italic','underline','left','center','right','justify','ol','ul','fontSize','fontFamily','fontFormat','indent','outdent','image','upload','link','unlink','forecolor','bgcolor'],
	//to use sprites in a single image, this must contain data, else iconFiles are used
	iconList : /* NICEDIT_ICONLIST_START */{}/* NICEDIT_ICONLIST_END */

	/* NICEDIT_REMOVE_START */,iconFiles : {'bold' : 'bold.gif', 'italic' : 'italic.gif', 'underline' : 'underline.gif', 'outdent' : 'outdent.gif', 'indent' : 'indent.gif', 'hr' : 'hr.gif', 'superscript' : 'superscript.gif', 'subscript' : 'subscript.gif', 'strikethrough' : 'strikethrough.gif', 'ul' : 'ul.gif', 'ol' : 'ol.gif', 'left' : 'left.gif', 'right' : 'right.gif', 'center' : 'center.gif', 'justify' : 'justify.gif', 'save' : 'save.gif', 'removeformat' : 'removeformat.gif'},/* NICEDIT_REMOVE_END */

	// this sets the default width of the editor (put into css style)
	getEditorWidth: function(e)
	{
		return '100%';
		// old calculation (take width at creation)
		//return (parseInt(e.getStyle('width')) || e.clientWidth)+'px';
	},

	//outline of the editor when it gets focus (blue by default) - comment to keep default bahavior
	editor_outlineColor:'white',         //not visible
	// editor_outlineColor:'initial',   //black


	//toolTip_BoxClass:"ui-tooltip-rounded ui-tooltip-shadow",
	//toolTip_Class:"ui-tooltip-rounded",


});
/* END CONFIG */
