import {
  GithubIcon,
  LinkedinIcon,
  LucideIcon,
  YoutubeIcon,
} from "lucide-react";
import { Fab } from "./Fab";
import { tailwindConfig } from "@/common/tailwind";

export interface PrestyledFabProps {
  overrideIconColor?: string;
  overrideBackgroundColor?: string;
  onClick?: () => void;
}
const createPrestyledFab = (
  icon: LucideIcon,
  defaultIconColor: string,
  defaultBackgroundColor: string
) => {
  const GeneratedComponent = ({
    overrideIconColor,
    overrideBackgroundColor,
    ...restProps
  }: PrestyledFabProps) => {
    const PrestyledFab = (
      <Fab
        icon={icon}
        iconColor={overrideIconColor ?? defaultIconColor}
        backgroundColor={overrideBackgroundColor ?? defaultBackgroundColor}
        {...restProps}
      />
    );

    Object.assign(GeneratedComponent, {
      displayName: `PrestyledFab_${
        icon.displayName || icon.name || "GenericIcon"
      }`,
    });

    return PrestyledFab;
  };

  return GeneratedComponent;
};

export const GithubFab = createPrestyledFab(
  GithubIcon,
  tailwindConfig.theme.colors.brand.github.white,
  tailwindConfig.theme.colors.brand.github.black
);

export const LinkedInFab = createPrestyledFab(
  LinkedinIcon,
  tailwindConfig.theme.colors.brand.linkedIn.white,
  tailwindConfig.theme.colors.brand.linkedIn.blue
);

export const YoutubeFab = createPrestyledFab(
  YoutubeIcon,
  tailwindConfig.theme.colors.brand.youtube.white,
  tailwindConfig.theme.colors.brand.youtube.red
);
