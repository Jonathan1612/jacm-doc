import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "jacm-library/src";

// 📝 **Documentación del componente Switch**
/**
 * 📚 **Switch Component Story**
 *
 * The Switch component allows users to toggle between two states (on/off).
 * It supports customizable styles, sizes, labels, and provides callbacks for state changes.
 */
const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    /**
     * Determines whether the switch is initially checked.
     */
    defaultChecked: {
      control: "boolean",
      description: "Determines whether the switch is initially checked.",
      defaultValue: false,
    },

    /**
     * Determines whether the switch is controlled externally.
     */
    checked: {
      control: "boolean",
      description: "Controls the switch state externally.",
    },

    /**
     * Callback function triggered when the switch state changes.
     */
    onChange: {
      action: "onChange",
      description: "Callback function triggered when the switch state changes.",
    },

    /**
     * Defines the visual style of the switch.
     */
    variant: {
      control: { type: "inline-radio" },
      options: ["primary", "secondary", "normal"],
      description: "Defines the visual style of the switch.",
      defaultValue: "primary",
    },

    /**
     * Defines the size of the switch.
     */
    size: {
      control: { type: "inline-radio" },
      options: ["small", "medium", "large"],
      description: "Defines the size of the switch.",
      defaultValue: "medium",
    },

    /**
     * Label displayed to the left of the switch.
     */
    leftName: {
      control: "text",
      description: "Label displayed to the left of the switch.",
      defaultValue: "Off",
    },

    /**
     * Label displayed to the right of the switch.
     */
    rightName: {
      control: "text",
      description: "Label displayed to the right of the switch.",
      defaultValue: "On",
    },

    /**
     * Additional class names for styling.
     */
    className: {
      control: "text",
      description: "Additional class names for styling.",
    },

    /**
     * Inline styles for the switch container.
     */
    style: {
      control: "object",
      description: "Inline styles for the switch container.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The Switch component allows users to toggle between two states (on/off). It supports customizable styles, sizes, labels, and provides callbacks for state changes.",
      },
    },
    layout: "centered",
  },
};

export default meta;

// 🛡️ Tipo explícito para StoryObj
type Story = StoryObj<typeof Switch>;

/**
 * 📸 **Basic Switch**
 *
 * A default Switch with primary styling.
 */
export const Basic: Story = {
  args: {
    defaultChecked: false,
    variant: "primary",
    size: "medium",
    leftName: "Off",
    rightName: "On",
  },
};
