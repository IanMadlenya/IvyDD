HelloWorldComponent = {
	name: "HelloWorldComponent",
	caption: "Hello World",
	position: 1,
	preRender: function(elem, view){},
	render: function(elem, view){
	    var htmlObj = $('<div class="panel-heading" style="min-height: 60px;">'+ 
	      (view!=undefined&&view?'':'<div class="pull-right"><a href="javascript:void(0)" class="link-edit">Edit</a><br/><a href="javascript:void(0)" class="link-remove">Remove</a></div>')+
	      '<div class="panel-body"><p><b>Hello World!</b></p> <p>'+this.groupProperties[0].properties[0].value+' '+this.groupProperties[0].properties[1].value+'</p></div></div>');
	    elem.append(htmlObj);
	},
	postRender: function(elem, view){},
	groupProperties:[{
		name:"genericProperties",
		caption:"Generic Properties",
		properties:[{
			name:"yourNmae",
			caption:"First Name",
			editRender:function(elem){
				elem.append('<div class="col-md-4"><small><label class="text">'+
					this.caption+':</label></small></div><div class="col-md-8"><input type="text" class="input-small '+this.name+'" placeholder="'+this.caption+'" value="'+(this.value.length>0?this.value[0]:"")+'"></div>');
			},
			getValue: function(elem, value){
				if(value == undefined){
					var title = elem.find('input[type="text"].'+this.name).val();
					this.value = [title];
					return this.value;
				}else{
					this.value = value;
				}
			},
			value: []
		},{
			name:"secondName",
			caption:"Last Name",
			editRender:function(elem){
				elem.append('<div class="col-md-4"><small><label class="text">'+
					this.caption+':</label></small></div><div class="col-md-8"><input type="text" class="input-small '+this.name+'" placeholder="'+this.caption+'" value="'+(this.value.length>0?this.value[0]:"")+'"></div>');
			},
			getValue: function(elem, value){
				if(value == undefined){
					var title = elem.find('input[type="text"].'+this.name).val();
					this.value = [title];
					return this.value;
				}else{
					this.value = value;
				}
			},
			value: []
		}]
	}]
};
OthersCategory.components.push(HelloWorldComponent);