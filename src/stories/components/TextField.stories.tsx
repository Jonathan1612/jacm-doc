import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "jacm-library/src";

// 📝 **Documentación del Componente TextField**
/**
 * 📚 **TextField Component Story**
 *
 * The TextField component allows users to input text data. It supports customizable styles, sizes, and placeholder text,
 * and can be controlled or uncontrolled.
 */
const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    /**
     * The current value of the text field.
     */
    value: {
      control: "text",
      description: "The current value of the text field.",
    },

    /**
     * Callback function triggered when the value changes.
     */
    onChange: {
      action: "onChange",
      description: "Callback function triggered when the value changes.",
    },

    /**
     * Determines the visual style of the text field.
     */
    variant: {
      control: { type: "inline-radio" },
      options: ["primary", "secondary", "normal"],
      description: "Determines the visual style of the text field.",
    },

    /**
     * Determines the size of the text field.
     */
    size: {
      control: { type: "inline-radio" },
      options: ["small", "medium", "large"],
      description: "Determines the size of the text field.",
    },

    /**
     * Placeholder text displayed in the text field.
     */
    placeholder: {
      control: "text",
      description: "Placeholder text displayed in the text field.",
    },

    /**
     * Additional class names for styling.
     */
    className: {
      control: "text",
      description: "Additional class names for styling.",
    },

    /**
     * Inline styles for the text field.
     */
    style: {
      control: "object",
      description: "Inline styles for the text field.",
    },

    /**
     * Disabled state of the text field.
     */
    disabled: {
      control: "boolean",
      description: "Disables the text field.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The TextField component allows users to input text data. It supports customizable styles, sizes, and placeholder text, and can be controlled or uncontrolled.",
      },
    },
    layout: "centered",
  },
};

export default meta;

// 🛡️ **Tipo explícito para las historias**
type Story = StoryObj<typeof TextField>;

/**
 * 📸 **Basic TextField Example**
 *
 * A basic TextField with placeholder text.
 */
export const Basic: Story = {
  args: {
    placeholder: "Enter text...",
    variant: "primary",
    size: "medium",
  },
};
