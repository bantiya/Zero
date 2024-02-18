import * as React from "react";
import TopNavigation from "@cloudscape-design/components/top-navigation";

const TopNav = () => {
  return (
    <TopNavigation
      identity={{
        href: "#",
        title: "The Zero",
      }}
      utilities={[
        {
          type: "button",
          text: "Cart",
          href: "https://example.com/",
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
