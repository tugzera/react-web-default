import React, { useState } from "react";
import { Page } from "tabler-react";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function DefaultLayout({ children }) {
  const [collapseMobileMenu, setCollapseMobileMenu] = useState(true);

  return (
    <Page>
      <Page.Main>
        <Header
          onMenuToggleClick={() => setCollapseMobileMenu(!collapseMobileMenu)}
        />
        <Navbar collapse={collapseMobileMenu} />
      </Page.Main>
      <Footer />
    </Page>
  );
}
