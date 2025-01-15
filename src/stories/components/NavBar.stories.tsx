import type { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "jacm-library/src";

const meta: Meta<typeof NavBar> = {
  title: "Components/NavBar",
  component: NavBar,
  tags: ["autodocs"],
  argTypes: {
    links: {
      control: "object",
      description: "The list of items to display in the NavBar.",
      defaultValue: [
        { name: "Nav 1", href: "/" },
        { name: "Nav 2", href: "/" },
        { name: "Nav 3", href: "/" },
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof NavBar>;

/**
 * 📸 Basic NavBar Example
 */
export const Basic: Story = {
  args: {
    title: "My Profile",
    links: [
        { name: "Nav 1", href: "/" },
        { name: "Nav 2", href: "/" },
        { name: "Nav 3", href: "/" },
      ],
  },
};
