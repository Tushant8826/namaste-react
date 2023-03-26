const heading  = React.createElement('h1',{id :"heading",className : "hello"},'Hello world form react');

console.log(heading); // object 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);   //render function convert the object into a h1 tag element and put it on the DOM 