import React from "react";
import { Link } from "react-router-dom";
import { Site, Grid } from "tabler-react";

const itemsObjectsProps = [
  {
    value: "Visão geral",
    to: "/home",
    icon: "home",
    LinkComponent: props => <Link {...props} />,
    useExact: "true"
  }
];

export default function Nav(props) {
  const { collapse } = props;

  return (
    <Grid.Col>
      <Site.Nav collapse={collapse} itemsObjects={itemsObjectsProps} />
    </Grid.Col>
  );
}
