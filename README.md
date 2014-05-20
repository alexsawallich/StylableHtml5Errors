# StylableHtml5Errors

This little script adds the possibility to style validation messages triggered by the default HTML5-form-validation-features. 

## What's the point?
With HTML5 came new native features to validate form-elements clientside. Every browser renders the error-messages differently. Also it is very difficult and partly impossible to style these messages.

Here __StylableHtml5Errors__ comes into play. It sits on top of the validation grabs the occured textual error messages and renders them within a normal html-element (default: `div` with a class of `errormsg`), which you can apply styles to with CSS.

You can also provide callback functions to add the messages in the way you like. This becomes handy when you've got a special kind of markup, which requires your error messages to be added/removed in a certain way.

## Usage
It is very easy to use this script.

First you need to load the script into your html-document. You may do this within the `<head>`-section of your document:

    <script src="path/to/StylableHtml5Errors.js" type="text/javascript"></script>

Next you need to select the forms you want this plugin to work with. You can do this with native javascript:

    <script type="text/javascript">
	    // Select all form-elements in this html-document...
	    var forms = document.getElementsByTagName('form');
		
	    // Apply our plugin to all forms...
	    StylableHtml5Errors(forms);
	</script>

or with any of your favourite frameworks, like _jQuery_ for example:

    <script type="text/javascript">
        // Select all form-elements in this html-document...
        var forms = $('form');
        
        // Apply our plugin to all forms...
        StylableHtml5Errors(forms);
    </script>