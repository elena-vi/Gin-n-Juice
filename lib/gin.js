var routes = {};

function route (path, templateName, controller) {
  routes[path] = {template: templateName, controller: controller};
}

var view = null;

function gin () {
  view = view || document.getElementById('view');
  var url = "/" + location.hash.slice(1).split('/')[1]
  var params = location.hash.slice(1).split('/')[2]
  var route = routes[url];
  if (view && route.controller) {
    view.innerHTML = juice(route.template, new route.controller(params));
  }
}

// Listen on hash change:
window.addEventListener('hashchange', gin);
// Listen on page load:
window.addEventListener('load', gin);
