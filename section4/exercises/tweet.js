/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.post = content;
    this.timeAndDate = timeStamp;
    this.likes = numberOfLikes;
    this.comments = comments;
  }

  increaseLikesByOne() {
    this.likes++;
  }
  addComments(string) {
    this.comments.push(string);
  }

};

var person1 = new Tweet('Chad', 'Wow what a day!', '9/15/21', 100, []);
person1.increaseLikesByOne();
console.log(person1);
var person2 = new Tweet('Kevin Bacon', 'Check out my new movie', '9/1/21', 2000, []);
person2.addComments('This is a new tweet')
console.log(person2);
var person3 = new Tweet('Britney Spears', 'Baby one more time', '3/7/2001', 100000, []);
