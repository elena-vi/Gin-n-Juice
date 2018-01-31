# :tropical_drink: Gin-n-Juice
A web framework 

## What is it?

### :cocktail: Gin
The router and controller, routes are declared like this: 

```
route('/path', 'template name', function() {
  this.yourVar = "Declared variables can be interpolated into templates!";
});
```

### :tangerine: Juice
The templater, takes your template and interpolates js using the dank syntax:
``` #{yo= yourVar } ```

## :mask: Testing
Unit testing done using [jasmine](http://jasmine.github.io/), the tests can be found in ```test/spec``` 

Run the test in the browser by opening ```test/SpecRunner.html```

## :sweat: Still left to do!

- Find a more effienct way of pulling in templates.
- Possibly investigate async way of pulling in template (controlled with Promise if need to defer execution)
- Add to juice: 
- 	```
	var pasteurizer = new JuicePasteurizer();
	var peeler = new JuicePeeler();
	var sanitizedTemplate = pasteurizer.clean(peeler.find(templateName));
	```

## :busts_in_silhouette: Collaborators
[Elena :heart_eyes_cat: Vilimaitė](https://github.com/elena-vi)

[Andy "DevOps" Bell](https://github.com/andy-bell)

[Matt "why can't we use React" Butler](https://github.com/mbutlerw)

[Daniel "Kanye" Chambers](https://github.com/danielschambers)
