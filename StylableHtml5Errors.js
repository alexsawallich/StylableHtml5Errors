var StylableHtml5Errors = function(forms, attachErrorMessage, removeErrorMessage){

	// Check for navtive browser-support of validation-features
	// if not we can return early to avoid js-errors caused by native functions
	if (typeof document.createElement("input").checkValidity != "function"){
		return;
	}

	/**
	 * Little helper-function to produce a browser-compatible
	 * EventListener.
	 *
	 * @param element   The element the handler should be attached to.
	 * @param event     The event the handler should be listen to, for example: 'click', 'submit', ...
	 * @param callback  Anonymous function to be called, when the event is triggered.
	 * @param void
	 */
	var addEvent = function(element, event, callback){
		if(undefined == document.attachEvent) return element.addEventListener(event, callback, false);
		else 			 					  return element.attachEvent('on'+event, callback);
	};

	/**
	 * Checks all elements within a certain form
	 * for errors. This function is meant to be
	 * called from an EventListener.
	 *
	 * @param event  The event-object which is available through the triggered event.
	 * @param form   The form element the event was triggered on.
	 * @return void
	 */
	var validateElements = function(event, form){
		// Delete previous error-messages nodes
		removeErrorMessages(form);
		
		// Check each input-element for errors
		var formHasErrors = false;
		for(var childIdx = 0; childIdx < form.childElementCount; ++childIdx){
			var element = form[childIdx];
			var validity = element.validity;
			var msg = element.validationMessage;
			
			// Check if error occured
			if('' !== msg){
				formHasErrors = true;
				attachErrorMessage(element, msg);
			}
		}
		
		// If one of the form elements was invalid, don't submit the form
		if(true == formHasErrors){
			event.preventDefault();
			return false;
		}
		
		return true;
	};

	/**
	 * Attaches the error-message to the given element.
	 * Styling will be done with CSS.
	 *
	 * @param element The element the message is attached to.
	 * @param message The message-string.
	 */
	var attachErrorMessage = attachErrorMessage || function(element, message){
		// Create html-element with error-message
		msgElement = document.createElement('div');
		msgElement.setAttribute('class', 'errormsg');
		msgTextNode = document.createTextNode(message);
		msgElement.appendChild(msgTextNode);
		
		// Attach error-message to DOM
		element.parentNode.insertBefore(msgElement, element.nextSibling);
	};

	/**
	 * Removes the given error-message-node from the DOM.
	 *
	 * @param messageElement The DOM-Node to remove.
	 * @return void
	 */
	var removeErrorMessage = removeErrorMessage || function(messageElement){
		if(messageElement.parentNode){
			messageElement.parentNode.removeChild(messageElement);
		}
	};

	/**
	 * Removes all error-messages from the DOM.
	 *
	 * @return void
	 */
	var removeErrorMessages = function(form){
		var previousMessages = form.querySelectorAll('.errormsg');
		for(idx in previousMessages){
			removeErrorMessage(previousMessages[idx]);
		}
	};
	
	// Attach our event to all forms provided to this function
	if(forms.length > 0)
	{
		for(var formIdx = 0; formIdx < forms.length; ++formIdx){
			var form = forms[formIdx];
			addEvent(form, 'submit', function(event){
				return validateElements(event, form);
			});
		}
	}
};