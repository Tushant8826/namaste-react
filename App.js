/**
 *  <div id ="parent">
 *       <div id ="child">
 *             <h1>I am h1 tag</h1> 
 *             <h2>I am h2 tag</h2> 
 *       </div> 
 *        <div id ="child2">
 *             <h1>I am h1 tag</h1> 
 *             <h2>I am h2 tag</h2> 
 *       </div>
 *  </div
 */


const parent  =  React.createElement('div',
                 {id: 'parent'},[
                 React.createElement('div',
                 {id: 'child'},
                 [React.createElement('h1',{},"I am h1 Tag"),
                 React.createElement('h2',{},"I am h2 Tag")]
                 ),
                 React.createElement('div',
                 {id: 'child2'},
                 [React.createElement('h1',{},"I am h1 Tag"),
                 React.createElement('h2',{},"I am h2 Tag")]
                 )]
                 );

console.log(parent);

// const heading  = React.createElement('h1',{id :"heading",className : "hello"},'Hello world form react');

// console.log(heading); // object 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);   //render function convert the object into a h1 tag element and put it on the DOM 