creational patterns: How objects are created.
structural patterns: how objects relate to each other
behavioral patterns: how objects communicate with each other

Look at refactoring.guru

## creational patterns:
- singleton:
Settings class represent the GLOBAL app settings data. We make it's constructor private, so that it cannot be instantiated with the new keyword.
Look at Settings.ts
The getInstance() method checks if the instance has already been created and if not, it will create a new one and that ensures that only one object
can be created. But in JS, we have object literals and also the concept of global data and objects are passed around by reference. We get all the same 
basic characteristics as this pattern, by simply creating a global object. The pattern itself is just extra boilerplate that we don't need. It's an 
entirely different story in C++ but the moral is to lean on your language's built-in features before implementing a fancy design pattern.
- Prototype:
Is just a fancy word for clone.
In Inheritance, a class can be extended with a subclass. One problem with inheritance is that it can lead to a complex hierarchy of code. The prototype
pattern is an alternative way to implement inheritance but instead of inheriting functionality from a class, it comes from an object that's
already been created. This creates a flat prototype chain that makes it much easier to share functionality between objects especially in a dynamic lang like JS
which supports prototypal inheritance out of the box.

In the example, we have an object named zombie which is our prototype but now we want to create a new object based on it that also has a name. We can do that
with Object.create() by passing the zombie as the prototype then specify additional properties as the second arg for the new object.
Important: The interesting thing is that if you log the new object that was created by having zombie as it's prottype object, you'll only see the name property and
not that eatBrains method. HOWEVER, if you try to call that method it will still work that's because JS will go up the prototype chain until it reaches the root
looking for any methods or properties on the parent objects. You can get the prototype from an object by saying: <object>.__proto__. However that's not a
modern best practice and instead you should use Object.getPrototypeOf() .
When it comes to classes in JS, prototype refers to it's constructor and that mean that we can extend a class with additional functions if we want to by saying:
class.prototype.<name of new method that we want to have> = function(){},
however that's also generally considered a bad practice.

- builder:
Imagine you're working in a hot dog stand and when a customer places an order, they need to tell you everything they want in the sandwich in the constructor.
- It's hard to KEEP TRACK of all these options and we might want to defer each step to a later point.
With the builder pattern, we create the object step by step using methods rather than the constructor and we can even delegate the building logic to an 
entirely different class. In js, we'll have each method return `this` which is a reference to the object instance. That allows us to implement method chaining 
where we instantiate an object then chain methods to it always get the object as the return value.  

- Factory:
Instead of using the new keyword to instantiate an object, you use a function or method to do it for you. Let's say we're creating a cross-platform app.
They both have the same interface but in our code we're doing a BUNCH of conditional checking to determine which button to show, so that's not very
maintainable. Instead, we can create a subclass or function(like ButtonFactory) that will determine which object to instantiate.
Now instead of repeating the same logic, we use the factory to determine which button should be rendered.

## structural patterns:
- facade: A facade is just a simplified api to hide other low-level details in your code base.
In our example, we create a facade class that contains the low-level systems as dependencies but then simplifies their operation.
Almost every package that you install with JS, could be considered a facade.

- substitute: proxy is a fancy word for substitute. In programming, you can replace a target object with a proxy, but why?
For example in vue, you create data, but the framework itself needs a way to intercept that data and update the ui whenever that data changes. The way 
vue handles that, is by replacing the original object with a proxy.
For example inside of set(), we might tell the framework to re-render, then use Reflect to update the data on the original object.
Proxies are also commonly used when you have a very large object that would be expensive to duplicate in memory.

## behavioral patterns:
- iterator: This pattern allows you to traverse through a collection of objects. Modern languages already provide abstractions for the iterator pattern,
like the for loop. When you loop over an array of items, you're using the iterator pattern.
For creating our own implementation of iterator pattern in JS, we do that by defining an object that has a next method on it and that next method needs to 
return an object that has a value which would be the current value in the loop and a done property, so it knows when to finish iterating.
We can add a symbol iterator to the object that we return which also includes a next() property, which allows us to use it in a regular for of loop.

At the end of the day, with iteration, you start with a collection and then write some code that determines how to get from the beginning to the end.
It's a PULL-BASED system unlike the next pattern which is observer and is a push-based system.
- observer: Push based system. This pattern allows many objects to subscribe to events that are broadcast by another object. It's a one-to-many relationship.
In rxjs, the Subject() class is the data that we want to listen to. The subject will keep track of all these subscriptions and call their callback functions 
whenever the data changes. Now at some later point, we can call the next method on subscribe to push a new value to the subject. Whenever that happens,
every subscription will be notified. 

- mediator: A mediator is like a middleman or broker. Imagine we have a class for airplane and runway. We might have multiple runways and multiple airplanes
and somehow we need to figure out if an airplane is clear to land on a given runway. Currently, to do that, all those objects would have to communicate 
with each other, we have a many to many relationship. That's very dangerous both in real life and in programming. A solution is to create a mediator like an 
air traffic controller that sits between the runways and airplanes to provide coordination and communication.
Another example: In express.js , there is a middleware system. Middleware sits in the middle by intercepting every request like an ariplane and 
transforms it into the proper format for the response(runway).

- state: An object behaves differently based on a finite number of states. In your code you've likely used conditional logic or switch statements to handle a 
bunch of different possibilities based on the state or data in your app. Code like this generally doesn't scale. The state pattern allows you to start
with one base class, then provide it with different functionality based on it's internal state. The idea is related to finite state machines and xstate. 
Where the goal is to make an object's behavior predictable based on it's underlying state.
In main.ts we use a switch. But another way would be to create a separate class for each possible state and inside each class, we will have an identical method
that behaves differently. Now in Human class, we set the state as a property and whenever that method is called, we delegate it to it's current state.
That means whenever the state changes, the object will behave in a completely different way, but at the same time, we don't have to change the api or use 
a bunch of conditional logic.
