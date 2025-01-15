import type { Meta, StoryObj } from "@storybook/react";
import {Checkbox} from "jacm-library/src";

// 📝 **Documentación del componente Checkbox**
/**
 * 📚 **Checkbox Component Story**
 *
 * The Checkbox component allows users to toggle between checked and unchecked states,
 * with customizable styles, sizes, and optional labels.
 */
const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    /**
     * Defines the visual style of the checkbox.
     */
    variant: {
      control: { type: "inline-radio" },
      options: ["primary", "secondary", "normal"],
      description: "Defines the visual style of the checkbox.",
      defaultValue: "primary",
    },

    /**
     * Defines the size of the checkbox.
     */
    size: {
      control: { type: "inline-radio" },
      options: ["small", "medium", "large"],
      description: "Defines the size of the checkbox.",
      defaultValue: "medium",
    },

    /**
     * Label displayed on the left side of the checkbox.
     */
    nameLeft: {
      control: "text",
      description: "Label displayed on the left side of the checkbox.",
    },

    /**
     * Label displayed on the right side of the checkbox.
     */
    nameRight: {
      control: "text",
      description: "Label displayed on the right side of the checkbox.",
    },

    /**
     * Determines if the checkbox is initially checked.
     */
    initialChecked: {
      control: "boolean",
      description: "Determines if the checkbox is initially checked.",
      defaultValue: false,
    },

    /**
     * Additional custom class names.
     */
    className: {
      control: "text",
      description: "Additional custom class names.",
    },

    /**
     * Inline styles for the checkbox.
     */
    style: {
      control: "object",
      description: "Inline styles for the checkbox.",
    },

    /**
     * Event handler for checkbox state changes.
     */
    onChange: {
      action: "onChange",
      description: "Callback when the checkbox state changes.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The Checkbox component allows users to toggle between checked and unchecked states, with customizable styles, sizes, and optional labels.",
      },
    },
    layout: "centered",
  },
};

export default meta;

// 🛡️ Tipo explícito para StoryObj
type Story = StoryObj<typeof Checkbox>;

/**
 * 📸 **Primary Checkbox**
 *
 * A checkbox with primary styling.
 */
export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
    nameRight: "Primary Checkbox",
    initialChecked: false,
  },
};

/**
 * 📸 **Secondary Checkbox**
 *
 * A checkbox with secondary styling.
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "large",
    nameLeft: "Secondary Checkbox",
    initialChecked: true,
  },
};

/**
 * 📸 **Checkbox with Labels**
 *
 * A checkbox with labels on both sides.
 */
export const Normal: Story = {
  args: {
    variant: "normal",
    size: "medium",
    nameLeft: "Accept Terms",
    nameRight: "and Conditions",
    initialChecked: false,
  },
};

/**
 * 📸 **Custom Styled Checkbox**
 *
 * A checkbox with custom inline styles and additional class names.
 */
export const CustomStyled: Story = {
  args: {
    variant: "primary",
    size: "small",
    initialChecked: true,
    nameRight: "Custom Checkbox",
    style: { border: "2px solid #4CAF50", padding: "5px" },
    className: "custom-checkbox-class",
  },
};
