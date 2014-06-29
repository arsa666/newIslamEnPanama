//function to close view and clean DOM.
function closeView(view){
    if(view !== undefined) {
	console.log("Closing: " + view.cid);
    }

    if(!_.isUndefined(view)){
	view.unbind(); // Unbind all local event bindings

	if(view.model){
    	view.model.unbind( 'change', view.render, view ); // Unbind reference to the model
    }

	if(view.collection){
    	    view.collection.unbind( 'change', view.render, view ); // Unbind reference to the model
	}

	view.remove(); // Remove view from DOM

	delete view.$el; // Delete the jQuery wrapped object variable
	delete view.el; // Delete the variable reference to view node

    }
}


//stop propagation and prevent default of events
function stop(event) {
    event.stopPropagation();
    event.preventDefault();
}


function C(msg){
    console.log(msg);
}

