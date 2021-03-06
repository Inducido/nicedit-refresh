/**
 * nicLink
 * @description: Adds buttons to create page links in nicEdit
 * @requires: nicCore, nicPane, nicAdvancedButton
 * @author: Brian Kirchoff
 * @version: 0.9.0
 */

/* START CONFIG */
var nicLinkOptions = {
	buttons : {
		'link' : {name : 'Add Link', type : 'nicLinkButton', tags : ['A']},
		'unlink' : {name : 'Remove Link',  command : 'unlink', noActive : true}
	}/* NICEDIT_REMOVE_START */,iconFiles : {'link' : 'link.gif', 'unlink' : 'unlink.gif'}/* NICEDIT_REMOVE_END */
};
/* END CONFIG */

var nicLinkButton = nicEditorAdvancedButton.extend({	
	addPane : function() {
		this.ln = this.ne.selectedInstance.selElm().parentTag('A');
		this.addForm({
			'' : {type : 'title', txt : 'Add/Edit Link'},
			'href' : {type : 'text', txt : 'URL', value : 'http://', style : {width: '150px'}},
			'title' : {type : 'text', txt : 'Title'},
			'target' : {type : 'select', txt : 'Open In', options : {'' : 'Current Window', '_blank' : 'New Window'},style : {width : '100px'}}
		},this.ln);
	},
	
	submit : function(e) {
		var url = this.inputs['href'].value;
		if(url == "http://" || url == "") {
			alert("You must enter a URL to Create a Link");
			return false;
		}
		this.removePane();
		
		if(!this.ln) {
			var tmp = 'javascript:nicTemp();';
			this.ne.nicCommand("createlink",tmp);
			this.ln = this.findElm('A','href',tmp);
			if (this.ln.innerHTML == tmp) {
				this.ln.innerHTML = this.inputs['title'].value || url;
			}
		}
		if(this.ln) {
			var oldTitle = this.ln.title;
			this.ln.setAttributes({
				href : this.inputs['href'].value,
				title : this.inputs['title'].value,
				target : this.inputs['target'].options[this.inputs['target'].selectedIndex].value
			});
			// set the link text to the title or the url if the old text was the old title
			if (this.ln.innerHTML == oldTitle) {
				this.ln.innerHTML = this.inputs['title'].value || this.inputs['href'].value;
			}
		}
	}
});

nicEditors.registerPlugin(nicPlugin,nicLinkOptions);
