import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, defaultAvatar } from "jacm-library/src";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text", description: "URL of the avatar image." },
    alt: { control: "text", description: "Alternative text for the image." },
    size: {
      control: { type: "inline-radio" },
      options: ["small", "medium", "large"],
      description: "Size of the avatar.",
    },
    name: {
      control: "text",
      description: "Name of the user (used for initials).",
    },
    shape: {
      control: { type: "inline-radio" },
      options: ["circle", "square"],
      description: "Shape of the avatar.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The Avatar component displays an image or user initials with customizable size and shape.",
      },
    },
    layout: "centered",
  },
};

export default meta;

// 🛡️ Tipo explícito para StoryObj
type Story = StoryObj<typeof Avatar>;

/**
 * 📸 Basic Avatar Example
 */
export const Basic: Story = {
  args: {
    src: defaultAvatar,
    alt: "Perfil",
    size: "medium",
    name: "Jonathan",
    shape: "circle",
  },
};
