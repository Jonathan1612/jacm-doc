import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "jacm-library/src";

// 📝 **Documentación del componente Select**
/**
 * 📚 **Select Component Story**
 *
 * The Select component allows users to choose one option from a dropdown list.
 * It supports customizable styles, sizes, placeholders, and callback functions for selection changes.
 */
const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    /**
     * List of selectable options in the dropdown.
     */
    options: {
      control: "object",
      description: "List of selectable options in the dropdown.",
      defaultValue: [
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
        { label: "Option 3", value: "3" },
      ],
    },

    /**
     * Placeholder text displayed when no option is selected.
     */
    placeholder: {
      control: "text",
      description: "Placeholder text displayed when no option is selected.",
      defaultValue: "Select an option",
    },

    /**
     * Determines the visual style of the select component.
     */
    variant: {
      control: { type: "inline-radio" },
      options: ["primary", "secondary", "normal"],
      description: "Determines the visual style of the select component.",
      defaultValue: "primary",
    },

    /**
     * Determines the size of the select component.
     */
    size: {
      control: { type: "inline-radio" },
      options: ["small", "medium", "large"],
      description: "Determines the size of the select component.",
      defaultValue: "small",
    },

    /**
     * Additional class names for styling.
     */
    className: {
      control: "text",
      description: "Additional class names for styling.",
    },

    /**
     * Inline styles for the select component.
     */
    style: {
      control: "object",
      description: "Inline styles for the select component.",
    },

    /**
     * Callback function when an option is selected.
     */
    onChange: {
      action: "onChange",
      description: "Callback function when an option is selected.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The Select component allows users to choose one option from a dropdown list. It supports customizable styles, sizes, placeholders, and callback functions for selection changes.",
      },
    },
    layout: "centered",
  },
};

export default meta;

// 🛡️ Tipo explícito para StoryObj
type Story = StoryObj<typeof Select>;

/**
 * 📸 **Default Select**
 *
 * A default Select component with basic settings.
 */
export const Default: Story = {
  args: {
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
    placeholder: "Choose an option",
    variant: "primary",
    size: "medium",
  },
};

/**
 * 📸 **Select with Secondary Variant**
 *
 * A Select component with a secondary style variant.
 */
export const Secondary: Story = {
  args: {
    options: [
      { label: "Option A", value: "A" },
      { label: "Option B", value: "B" },
      { label: "Option C", value: "C" },
    ],
    placeholder: "Select an option",
    variant: "secondary",
    size: "large",
  },
};

/**
 * 📸 **Custom Styled Select**
 *
 * A Select component with custom styles applied.
 */
export const CustomStyled: Story = {
  args: {
    options: [
      { label: "Custom 1", value: "1" },
      { label: "Custom 2", value: "2" },
    ],
    placeholder: "Custom Styled Select",
    variant: "normal",
    size: "small",
    style: { backgroundColor: "#f0f8ff", border: "1px solid #ccc" },
    className: "custom-select-class",
  },
};

/**
 * 📸 **Interactive Select with onChange**
 *
 * A Select component that logs the selected option.
 */
export const Interactive: Story = {
  args: {
    options: [
      { label: "Red", value: "red" },
      { label: "Blue", value: "blue" },
      { label: "Green", value: "green" },
    ],
    placeholder: "Pick a color",
    variant: "primary",
    size: "medium",
    onChange: (value: string) => console.log("Selected value:", value),
  },
};
