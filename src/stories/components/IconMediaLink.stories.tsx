import type { Meta, StoryObj } from "@storybook/react";
import { IconMediaLink, defaultIcon } from "jacm-library/src";

const meta: Meta<typeof IconMediaLink> = {
  title: "Components/IconMediaLink",
  component: IconMediaLink,
  tags: ["autodocs"],
  argTypes: {
    icon: { control: "text", description: "URL of the avatar icon"},
    name: { control: "text", description: "Name of the " },
    url: { control: "text", description: "Alternative text for the image." },
    altText: { control: "text", description: "Alternative text for the image." }
  },
  parameters: {
    docs: {
      description: {
        component:
          "The IconMediaLink component displays an image or user initials with customizable size and shape.",
      },
    },
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof IconMediaLink>;

/**
 * 📸 Basic IconMediaLink Example
 */
export const Basic: Story = {
  args: {
    icon: defaultIcon,
    name: "Facebook",
    url: "https://www.facebook.com/?locale=es_LA",
    altText: "Facebook",
  },
};
