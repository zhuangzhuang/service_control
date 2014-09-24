$(document).ready(function(){
	$("button").click(function(){
		var clsName = this.className;
		var control;
		if (clsName.indexOf('start') != -1){
			control = 'start';
		}else if (clsName.indexOf('stop') != -1){
			control = 'stop';
		}else if (clsName.indexOf('delete') != -1){
			control = 'delete';
		}else if (clsName.indexOf('query') != -1){
			control = 'query';
		}else{
			return;
		}
		var parent = $(this).parent();
		var servceName = parent.find('.service_val').val();
		if (servceName == ""){
			alert("服务名不能为空");
			return;
		}
		var resElem = parent.find('.service_out');
		resElem.text('');
		var path = "/service/" + control + '/' + servceName;
		$.get(path, function(data, status){
			resElem.text(data);
		});
	});
})