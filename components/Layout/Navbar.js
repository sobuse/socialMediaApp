import React from "react";
import { menu, Container, Icon } from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";

function Navbar() {
  const router = useRouter();

  const isActive = (route) => router.pathname === route;

  return (
    <menu fluid borderless>
      <Container text>
        <link href="/login">
          <menu.item header active={isActive("/login")}>
            <Icon size="large" name="sign in" />
            Login
          </menu.item>
        </link>

        <link href="/signup">
          <menu.item header active={isActive("/signup")}>
            <Icon size="large" name="signup" />
            signup
          </menu.item>
        </link>
      </Container>
    </menu>
  );
}

export default Navbar;
