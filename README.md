nicedit-refresh
================

A revamp of this lightweight wysiwyg editor from the full copy of NicEdit from it's svn ( http://svn.nicedit.com/trunk/ ).  
...With a buildfile.  
Fork of nicEdit attempting to fix some of the main issues and add a couple of features.

Website: http://nicedit.com


## Why

We have this legacy in one of our products.  
It needs to be maintained.  
And we refreshed it a bit so we share the code.


## Installing

Usual stuff:

``` bash
git clone https://github.com/Inducido/nicedit-refresh.git
npm install
gulp
```

Output in dist/ folder.


## Core modules

```
nicCore             Core of nicEdit with basic features, required for all plugins
nicPane             Popup overlay that can contain dialogs, tooltips, select boxes, etc.
nicAdvancedButton   Panel button with support for opening a nicPane with configuration form
nicButtonTips       Tooltips when buttons are moused over describing their function
nicSelect           Provides base select box class and font family, font size, and heading selects
nicLink             Adds buttons to create page links in nicEdit
nicColors           Provides buttons to control the foreground and background color of text
nicImage            Adds buttons to insert images in the editor area
nicSave             A button for nicEdit ajax content saving
```
   

## Optional NicEdit Plugins

```
nicUpload          A button to allow users to upload images (hosted by imgur)
nicXHTML           Cleans code produced to be XHTML compliant (Experimental)
nicBBCode          Allows nicEdit to create BBCode for use in forums and other applications
nicFloating        Adds support to create a floating editor panel
nicCode            Adds button to edit the HTML in a editor
```

In:

```
src/nicUpload/nicUpload.js,
src/nicXHTML/nicXHTML.js,
src/nicBBCode/nicBBCode.js,
src/nicFloating/nicFloating.js,     
src/nicUndo/nicUndo.js,
```

## Original project
The original nicEdit project can be found here: http://nicedit.com

From that website:
> NicEdit was developed by [Brian Kirchoff](http://bkirchoff.com/) and is free to use for any purpose under the MIT license.  
> NicEdit comes with the MIT license information (see src/nicLicense.js) and LICENCE file  
> See also [website license](http://nicedit.com/license.php).


Features listed for original project:

* Small file size <35KB Total, <10KB Compressed!
* Only 2 files (js + icons) required for operation.
* Flexible Configuration replace textareas or divs
* Multiple editors can optionally use single controls
* Save content via AJAX or HTTP Post
* IE 5.5+ / FF 2+ / Opera 9+ / Safari 3+

