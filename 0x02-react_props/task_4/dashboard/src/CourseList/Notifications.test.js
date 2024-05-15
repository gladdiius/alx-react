import React from "react";
import { render, screen } from "@testing-library/react";
import Notifications from "./Notifications";

describe("Notifications component", () => {
  test("renders notification menu item when displayDrawer is true", () => {
    render(<Notifications displayDrawer={true} />);
    const menuItemElement = screen.getByText("Your notifications");
    expect(menuItemElement).toBeInTheDocument();
  });

  test("does not render notification menu item when displayDrawer is false", () => {
    render(<Notifications displayDrawer={false} />);
    const menuItemElement = screen.queryByText("Your notifications");
    expect(menuItemElement).not.toBeInTheDocument();
  });

  test("renders notifications content when displayDrawer is true", () => {
    render(<Notifications displayDrawer={true} />);
    const notificationsContentElement = screen.getByText("Here is the list of notifications");
    expect(notificationsContentElement).toBeInTheDocument();
  });

  test("does not render notifications content when displayDrawer is false", () => {
    render(<Notifications displayDrawer={false} />);
    const notificationsContentElement = screen.queryByText("Here is the list of notifications");
    expect(notificationsContentElement).not.toBeInTheDocument();
  });
});
