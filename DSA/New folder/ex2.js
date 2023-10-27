let course =new Doublelinkedlist();
course.insert("HTML","head");
course.insert("Css","HTML");
course.insert("jquery","javaScript");
course.insert("ReactJS",",Jquery");

course.display();
console.log('/n')
course.remove('jquery');
course.display();
console.log("/n");


console.log("last =",course.findLast());