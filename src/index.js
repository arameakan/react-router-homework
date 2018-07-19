import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

// const Profile = props => {
//   return (
//     <ul>
//       <li>{props.profile.id}</li>
//       <li>{props.profile.age}</li>
//       <li>{props.profile.name}</li>
//     </ul>
//   );
// };

// const aram = {
//   id: "asfdsfsdgs",
//   name: "Aram",
//   age: 26
// };

const Aram = () => (
  <ul>
    <li>Id: dfhrdherds</li>
    <li>Name: Aram</li>
    <li>Age: 26</li>
  </ul>
);

const Anna = () => (
  <ul>
    <li>Id: lwfoissnfskl</li>
    <li>Name: Anna</li>
    <li>Age: 26</li>
  </ul>
);

const Armine = () => (
  <ul>
    <li>Id: jsdohwabas</li>
    <li>Name: Armine</li>
    <li>Age: 25</li>
  </ul>
);

const Nvard = () => (
  <ul>
    <li>Id: kjafoahklafbakl</li>
    <li>Name: Nvard</li>
    <li>Age: 26</li>
  </ul>
);

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/aram" component={Aram} />
      <Route path="/anna" component={Anna} />
      <Route path="/armine" component={Armine} />
      <Route path="/nvard" component={Nvard} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));
