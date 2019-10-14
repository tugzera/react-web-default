import React from "react";
import { Link } from "react-router-dom";
import { Grid, List, Site, Text } from "tabler-react";

export default function Footer() {
  return (
    <Site.Footer
      copyright={
        <Grid.Col auto>
          <List className="list-inline list-inline-dots mb-0">
            <List.Item className="list-inline-item">
              <Text>Trixx App Solutions © 2019 Direitos Reservados</Text>
            </List.Item>
            <List.Item className="list-inline-item">
              <Link to="/">Termos de Uso</Link>
            </List.Item>
            <List.Item className="list-inline-item">
              <Link to="/">Política de Privacidade</Link>
            </List.Item>
          </List>
        </Grid.Col>
      }
    />
  );
}
