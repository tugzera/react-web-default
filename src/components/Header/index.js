import React from "react";
import { Site } from "tabler-react";
import imageURL from "../../assets/brand-light.svg";
import avatarURL from "../../assets/pikachu.svg";

export default function Header(props) {
  const AccountDropdownProps = {
    avatarURL,
    name: "Trixx",
    description: "Administrator",
    options: [
      {
        icon: "user",
        value: "Perfil"
        // onClick: () => history.push('/perfil'),
      },
      {
        icon: "star",
        value: "Revenda"
        // onClick: () => history.push('/minha-revenda'),
      },
      { isDivider: true },
      { icon: "log-out", value: "Sair", onClick: () => {} }
    ]
  };

  const { onMenuToggleClick } = props;

  return (
    <Site.Header
      href="/"
      alt="Logo"
      imageURL={imageURL}
      accountDropdown={AccountDropdownProps}
      onMenuToggleClick={onMenuToggleClick}
    />
  );
}
