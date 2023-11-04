import type { Meta, StoryObj } from "@storybook/react";
import { Fab } from "./Fab";
import {
  GithubFab as GithubFabComponent,
  LinkedInFab as LinkedInFabComponent,
  YoutubeFab as YoutubeFabComponent,
  PrestyledFabProps,
} from "./PrestyledFab";

const meta: Meta<PrestyledFabProps> = {
  title: "Example/Prestyled Fabs",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Fab>;

export const GithubFab: Story = {
  render: GithubFabComponent,
};
export const LinkedInFab: Story = {
  render: LinkedInFabComponent,
};
export const YoutubeFab: Story = {
  render: YoutubeFabComponent,
};
