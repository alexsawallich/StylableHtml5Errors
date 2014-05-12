StylableHtml5Errors
===================

This little script adds the possibility to style validation messages triggered by the default HTML5-form-validation-features. 

## What's the point?
With HTML5 came new native features to validate form-elements clientside. Every browser renders the error-messages differently. Also it is very difficult and partly impossible to style these messages.

Here StylableHtml5Errors comes into play. It sits on top of the validation grabs the occured textual error messages and renders them within a normal html-element (default: `div` with a class of `errormsg`), which you can apply styles to with CSS.

You can also provide callback functions to add the messages in the way you like. This becomes handy when you've got a special kind of markup, which requires your error messages to be added/removed in a certain way.

Examples coming soon...
