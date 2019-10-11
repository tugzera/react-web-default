import React from "react";
import SingInLayout from "../_layouts/SigInLayout";
import logo from "../../assets/brand-minimized.svg";
import { Card, Form, Button } from "tabler-react";

const strings = {
  title: "Faça login na sua conta",
  buttonText: "Entrar",
  emailLabel: "Endereço de e-mail:",
  emailPlaceholder: "E-mail",
  passwordLabel: "Senha:",
  passwordPlaceholder: "Senha",
  forgotPassword: "Esqueci a senha"
};

export default function SignIn() {
  return (
    <div className="Background">
      <SingInLayout imageURL={logo} className="SignIn">
        <Card>
          <Card.Body>
            <Card.Title>{strings.title}</Card.Title>
            <Form.Group label={strings.emailLabel}>
              <Form.Input
                name="email"
                placeholder={strings.emailPlaceholder}
                //   onChange={evt => onChangeText('email', evt.target.value)}
                //   value={values && values.email}
                //   error={errors && errors.email}
              />
            </Form.Group>
            <Form.Group label={strings.passwordLabel}>
              <Form.Input
                name="password"
                type="password"
                placeholder={strings.passwordPlaceholder}
                //   onChange={evt => onChangeText('password', evt.target.value)}
                //   value={values && values.password}
                //   error={errors && errors.password}
              />
            </Form.Group>
            <Form.Footer>
              <Button color={"primary"} block>
                Entrar
              </Button>
            </Form.Footer>
          </Card.Body>
        </Card>
      </SingInLayout>
    </div>
  );
}
