*Learn Web with Evented Mind*

## <a href="https://www.eventedmind.com/classes/">Class: How The Web Works</a>

How does the web actually work? In this class we'll build a simple web server to understand the core principles. If you're using any application framework like Meteor, Rails, Express, Spring or .NET, they all start here.



**What's in this class?**


* <a href="https://www.eventedmind.com/classes//">Introduction: How The Web Works</a> - How does the web actually work? In this class we'll build a simple web server to understand the core principles. If you're using any application framework like Meteor, Rails, Express, Spring or .NET, they all start here. In this lesson we'll start with understanding HTTP. Where did it come from? And what can we do with it? You'll also be introduced to the simple NodeJS server we'll be building throughout the class. Don't worry, the concepts apply to all web technologies.


* <a href="https://www.eventedmind.com/classes//">Setting Up</a> - Install NodeJS and explore the software we'll be using in the class.

* <a href="https://www.eventedmind.com/classes//">Sending An HTML Document</a> - So far, we've only be serving plain text. Now we're going to update the server to send an HTML document. You'll see how the server is just sending plain text that the client then has to parse and render.


* <a href="https://www.eventedmind.com/classes//">What Is The Dom?</a> - You've seen one of the main jobs of the browser: to take a string of HTML and draw it to the page. But the browser also creates a tree of JavaScript objects representing each of the HTML nodes in the tree. This allows us to script the page.


* <a href="https://www.eventedmind.com/classes//">Serving Resources at URLs</a> - Our server wouldn't be very useful if it could only serve one thing. So far the HTTP server can only serve our HTML document. Let's update it to also serve some JavaScript. You'll see how one HTTP request is made for each resource at a unique URL.


* <a href="https://www.eventedmind.com/classes//">Serving a JavaScript Resource</a> - Now that we can serve multiple resources, we need a way to make the JavaScript part of our application. We'll add a source tag to the HTML document and link to the JavaScript resource. Now you're seeing the other power of the Hyper Text Markup Language: the ability to link to other resources like JavaScript or images, using http.


* <a href="https://www.eventedmind.com/classes//">Serving Resources From Disk</a> - Whether it's HTML or JavaScript, the server is just sending a string of text to the client. But normally we don't write a big long string of text directly in the web server function. We only did that so you could see clearly that the content is a string. Now we'll move those strings into separate files and read the content from disk. The server is starting to resemble a regular application framework.


* <a href="https://www.eventedmind.com/classes//">Adding CSS for Style</a> - Let's add a new URL that will serve a CSS resource. The purpose of CSS is to make our HTML page prettier. It's served up using HTTP just like any other resource.


* <a href="https://www.eventedmind.com/classes//">Submitting Form Data</a> - So far we've only been using the GET method of HTTP. Now we'll use the POST method to send data to the server and make use of the form tag of HTML to do this for us automatically. Then you'll see how we can make use of another HTTP status code to automatically redirect the browser after the form is submitted.


* <a href="https://www.eventedmind.com/classes//">Maintaining State With Cookies</a> - In this lesson you'll get a first hand look at what a cookie is by crafting it by hand. Cookies were developed by Netscape in the 1990s to enable online shopping carts. It's a simple feature built on top of HTTP that allows a client and server to maintain state. But what does 'state' mean and what are the rules that make it work?


* <a href="https://www.eventedmind.com/classes//">Not Found</a> - It wouldn't be very graceful if our HTTP server hanged when you requested a resource that doesn't exist. Let's add a default handler that sends the correct status code and message when a resource doesn't exist.


* <a href="https://www.eventedmind.com/classes//">Conclusion</a> - This class should have given you a good foundation for understanding any web application framework. Let's recap the lessons.


