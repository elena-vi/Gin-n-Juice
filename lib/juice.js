function juice(templateName, data){
	var templateString = peelTemplate(templateName);

	var render =  new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};" +
	"with(obj){p.push('" + translateTemplate(templateString) + "');}return p.join('');");

	return data ? render(data) : render;
};

function peelTemplate(templateName) {
	var templatePath = "../templates/" + templateName + ".html";
	var ajax = new XMLHttpRequest();
	// last parameter makes this request synchronous
	ajax.open("GET", templatePath, false);
	ajax.send();
	return ajax.status == 200 ? ajax.responseText : "Template error: " + ajax.status
}

function translateTemplate (templateString) {
	return templateString
	  .replace(/[\r\t\n]/g, " ")
	  .split("#{yo").join("\t")
	  .replace(/((^|\}\})[^\t]*)'/g, "$1\r")
	  .replace(/\t=(.*?)\}/g, "',$1,'")
	  .split("\t").join("');")
	  .split("}}").join("p.push('")
	  .split("\r").join("\\'")
}