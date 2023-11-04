import { tailwindConfig } from "@/common/tailwind";
import { CircleDashed, LucideIcon } from "lucide-react";
import React from "react";

interface FabProps {
  icon: LucideIcon;
  iconColor: string;
  backgroundColor: string;
  onClick?: () => void;
}

export const Fab = (props: FabProps) => {
  const InternalIcon = props.icon ?? CircleDashed;
  const internalIconColor =
    props.iconColor ?? tailwindConfig.theme.colors.gray[400];
  const internalBackgroundColor =
    props.backgroundColor ?? tailwindConfig.theme.colors.white;

  return (
    <button type="button" onClick={props.onClick}>
      <InternalIcon
        style={{
          backgroundColor: internalBackgroundColor,
          stroke: internalIconColor,
        }}
        className="rounded-full w-14 h-14 bg-white transition-all shadow-md p-2 hover:-translate-y-1 active:translate-y-0"
      />
    </button>
  );
};
