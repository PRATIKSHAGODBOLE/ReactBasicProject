
import './App.css';

import reactimage from './reactimage.png'

const rec = "React Js"
const num = 440022
const name = "pratiksha"
const i = true
let fruits = ["Apple", "Oranges", "Mango", "Kiwi"];
let person = {
  name : "Pratiksha",
  Age : "21",
  address : {
    city : "Nagpur",
    State : "Maharashtra"
  }
}
let currentDate = new Date();
let date = currentDate.toLocaleDateString();
let time = currentDate.toLocaleTimeString();
const logo = "https://blogger.googleusercontent.com/img/a/AVvXsEjA8kgcvxl2XYycDbecPbsBl_ScuHf7MpB9wreGm2hqjG5DrJJYk3dA5IUX3iWEAouaJdhAnN5lyNGeKMgOZ6WlpS86deow9QyxvBiBHEniRNfRPYsoHGxThkGzrf37y6wcRGGSb4SnXq1TNuiYqAHqRYO9WflZCnzf1FFAfPUD9zi_OgDB3EV9x6Uqmw=s1082"
const link = "https://www.beta-labs.in/"

const tags = (
  <div>
  <h2>This is Heading</h2>
  <p>This is Paragraph</p>
  <ul>
    <li>Item 01</li>
    <li>Item 02</li>
    <li>Item 03</li>
  </ul>
  </div>
);

const cssStyle = {
  color:"red",
  backgroundColor : "yellow",
  display : "inlineBlock",
  padding : "10px",
  borderRadius : "5px"
}



function App() {
  return (                    
    <div className="App">
      
     <h2>--- Hello This Is <span style={cssStyle}>{rec}</span> ---</h2>
     {/* Integer */}
     <h3> * This is Integer Data Pincode {num}</h3>
     {/* string */}
     <h3>* This is  String Data : {name}</h3>
     {/* boolean */}
     <h3> * Boolean Data {i==1 ? 'isActive':'notActive'}</h3>
     {/* Array */}
     <h3> * List of Fruits: {fruits.map((fruit) => fruit + " , ")}</h3>

     {/* object */}
      <h3>
      * Object Data : 
      <br />
      Name : {person.name}
      <br />
      Age : {person.Age}
      <br />
      City : {person.address.city}
     <br />
      State : {person.address.State}
     <br />
     </h3>

     {/* Current Date */}
     <h3> * Current Date : {date} Time : {time}</h3>
     
     {/* URL IMAGE */}
     <a href={link}>
     <img src={logo} alt="" /></a>

     {/* Inline CSS with file name image SRC image  */}
     <img src={reactimage} alt="" style = {{ marginLeft:"70px", borderRadius : "10px"}}/>

     {/* Evaluate expression */}
     <h3> * Evaluate the expression : {10*2-10/5}</h3>

     {/* ALL the Tags */}
     <h3> * Add Multiple Elements in One JSX : {tags}</h3>
     
    </div>
  );
}

export default App;
