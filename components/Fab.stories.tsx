import type { Meta, StoryObj } from "@storybook/react";
import { Fab } from "./Fab";
import * as lucide from "lucide-react";
import { LucideIcon } from "lucide-react";
import { keyBy } from "lodash";

const icons = keyBy(
  Object.values(lucide).filter((icon: Object): icon is LucideIcon => {
    return (
      "displayName" in icon &&
      typeof icon.displayName === "string" &&
      !!icon.displayName
    );
  }),
  "displayName"
);

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Fab> = {
  title: "Example/Fab",
  component: Fab,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    icon: {
      options: Object.keys(icons),
      // mapping: keyBy(icons),
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Fab>;

export const Primary: Story = {
  render: (args) => {
    const { icon, ...restArgs } = args;
    const iconKey = icon as unknown as string;
    const lucideIcon = icons[iconKey];
    return <Fab {...restArgs} icon={lucideIcon} />;
  },
};
