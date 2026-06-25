## JS
JS learning from scratch

link to study conversions operations
https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

link to study primitive and non-primitive data types 
https://262.ecma-international.org/5.1/#sec-11.4.3

## For Events 

    To study: 
    type, timestamp, defaultPrevented
    target, toElement, srcElement, currentTarget,
    clientX, clientY, screenX, screenY
    altkey, ctrlkey, shiftkey, keyCode
    
## For API
    0-	UNSENT	Client has been created. open() not called yet.
    1-	OPENED	open() has been called.
    2-	HEADERS_RECEIVED	send() has been called, and headers and status are available.
    3-	LOADING	Downloading; responseText holds partial data.
    4-	DONE	The operation is complete.

# javascript and classes

## OOP

## Object
- collection of properties and methods
- toLowerCase

## why use OOP

## parts of OOP
Object literal 

- Constructor function
- Prototypes
- Classes
- Instances (new, this)


## 4 pillars
Abstraction     |
Encapsulation   |
Polymorphism    |-> Read from chatgpt
Inheritance     |

## new KeyWord
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
  