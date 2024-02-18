import * as React from "react";
import TopNavigation from "@cloudscape-design/components/top-navigation";

const TopNav = ({setPage}) => {


  return (
    <TopNavigation
      identity={{
        href: "#",
        title: "The Zero",
      }}
      utilities={[
        {
          type: "button",
          text: "Home",
          // href: "https://example.com/",
          onClick: () => setPage("home"),
          externalIconAriaLabel: " (opens in a new tab)",
        },
        {
          type: "button",
          text: "Cart",
          // href: "https://example.com/",
          onClick: () => setPage("cart"),
          externalIconAriaLabel: " (opens in a new tab)",
        },
        {
          type: "menu-dropdown",
          text: "Customer Name",
          description: "email@example.com",
          iconName: "user-profile",
          items: [
            { id: "profile", text: "Profile" },
            { id: "signout", text: "Sign out" },
          ],
        },
      ]}
    />
  );
};

export default TopNav;
