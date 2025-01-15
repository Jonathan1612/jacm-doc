import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "jacm-library/src";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text", description: "Name of the " },
    variant: {
        control: { type: "inline-radio" },
        options: ["primary", "secondary", "normal"],
        description: "Determines the variant style of the button.",
      },
    size: {
        control: { type: "inline-radio" },
        options: ["small", "medium", "large"],
        description: "Determines the size of the button.",
      },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The Label component displays an image or user initials with customizable size and shape.",
      },
    },
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

/**
 * 📸 Basic Label Example
 */
export const Basic: Story = {
  args: {
    name: "Jonathan",
    variant: "primary",
    size: "medium"
  },
};
