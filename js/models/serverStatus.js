var serverStatus = Backbone.Model.extend({
	initialize: function(){
		this.url = '../../islamApi/checkServerStatus.php';
	}
});