<?php

function createView(){
global $argv, $argc;
$argv1 = $argv[1];
$fileName = "js/views/$argv1".".js";

$templateName = "js/templates/$argv1"."Template.html";

if (file_exists($fileName)) {
    echo "The file $fileName exists\n";
    exit(0);
} 

$file=fopen($fileName,"w") or exit("Unable to create view file!");

fwrite($file,"var $argv1 = Backbone.View.extend({
	events:{
	'click .template': 'templateFunc'
	},
	templateFunc: function(){
	},
    render:function() {
    	self = this;
    	 $.get('$templateName', function (data) {
            template = _.template($(data).html(), {});
            self.\$el.html(template);
            $('#content').html(template);
        }, 'html');

        return this;
    }
});");

fclose($file);
$fileTemplate=fopen("$templateName","w") or exit("Unable to create template file!");

fwrite($fileTemplate, "<script type='text/template'>

<div class='container min-h-270'>Template for $templateName and view $fileName. Click me!</div>

</script>");
fclose($fileTemplate);
}


createView();


?>           