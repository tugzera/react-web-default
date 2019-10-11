import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "tabler-react";

export default function Navbar(props) {
  return (
    <Nav
      items={
        <React.Fragment>
          <Nav.Item hasSubNav value="Page One" icon="globe">
            <Nav.SubItem value="Sub Item 1" />
            <Nav.SubItem>Sub Item 2</Nav.SubItem>
            <Nav.SubItem icon="globe">Sub Item 3</Nav.SubItem>
          </Nav.Item>
          <Nav.Item to="http://www.example.com">Page Two</Nav.Item>
          <Nav.Item value="Page Three" />
          <Nav.Item active icon="user">
            Page Four
          </Nav.Item>
        </React.Fragment>
      }
    />
  );
}
