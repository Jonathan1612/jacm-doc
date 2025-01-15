import type { Meta, StoryObj } from "@storybook/react";
import {Button} from "jacm-library/src";

// 📝 **Documentación del componente Button**
/**
 * 📚 **Button Component Story**
 *
 * The Button component allows users to trigger actions or events with customizable styles, sizes, and optional icons.
 */
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    /**
     * The text displayed on the button.
     */
    name: { control: "text", description: "The text displayed on the button." },

    /**
     * Determines the variant style of the button.
     */
    variant: {
      control: { type: "inline-radio" },
      options: ["primary", "secondary", "normal"],
      description: "Determines the variant style of the button.",
    },

    /**
     * Determines the size of the button.
     */
    size: {
      control: { type: "inline-radio" },
      options: ["small", "medium", "large"],
      description: "Determines the size of the button.",
    },

    /**
     * Additional class names for styling.
     */
    useClassName: {
      control: "text",
      description: "Additional class names for styling.",
    },

    /**
     * Inline styles for the button.
     */
    useStyle: {
      control: "object",
      description: "Inline styles for the button.",
    },

    /**
     * URL of the left-side icon.
     */
    leftIcon: {
      control: "text",
      description: "URL of the left-side icon.",
    },

    /**
     * URL of the right-side icon.
     */
    rightIcon: {
      control: "text",
      description: "URL of the right-side icon.",
    },

    /**
     * Button click event handler.
     */
    onClick: {
      action: "clicked",
      description: "Event handler when the button is clicked.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The Button component allows users to trigger actions or events with customizable styles, sizes, and optional icons.",
      },
    },
    layout: "centered",
  },
};

export default meta;

// 🛡️ Tipo explícito para StoryObj
type Story = StoryObj<typeof Button>;

/**
 * 📸 **Primary Button**
 *
 * A button with the default `primary` variant and medium size.
 */
export const Basic: Story = {
  args: {
    name: "Primary Button",
    variant: "primary",
    size: "medium",
  },
};

/**
 * 📸 **Secondary Button**
 *
 * A button with the `secondary` variant and small size.
 */
// export const Secondary: Story = {
//   args: {
//     name: "Secondary Button",
//     variant: "secondary",
//     size: "small",
//   },
// };

/**
 * 📸 **Button with Icons**
 *
 * A button with both left and right icons.
 */
// export const WithIcons: Story = {
//   args: {
//     name: "Button with Icons",
//     variant: "normal",
//     size: "large",
//     leftIcon: "https://via.placeholder.com/20",
//     rightIcon: "https://via.placeholder.com/20",
//   },
// };

/**
 * 📸 **Custom Styled Button**
 *
 * A button with custom inline styles and class names.
 */
// export const CustomStyled: Story = {
//   args: {
//     name: "Custom Styled Button",
//     variant: "primary",
//     size: "medium",
//     useStyle: { backgroundColor: "#4CAF50", color: "white" },
//     useClassName: "custom-button-class",
//   },
// };
