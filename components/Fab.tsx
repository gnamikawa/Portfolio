import { tailwindConfig } from "@/common/tailwind";
import { CircleDashed, LucideIcon } from "lucide-react";
import React from "react";

interface FabProps {
  icon: LucideIcon;
  iconColor?: string;
  backgroundColor?: string;
  onClick?: () => void;
}

export const Fab = (props: FabProps) => {
  const InternalIcon = props.icon ?? CircleDashed;
  const internalIconColor =
    props.iconColor ?? tailwindConfig.theme.colors.gray[400];
  const internalBackgroundColor =
    props.backgroundColor ?? tailwindConfig.theme.colors.white;

  return (
    <button
      type="button"
      onClick={props.onClick}
      style={{
        backgroundColor: internalBackgroundColor,
      }}
      className="rounded-full transition-all shadow-md hover:shadow-lg active:shadow-md p-2 hover:-translate-y-1 active:translate-y-0 duration-100"
    >
      <InternalIcon
        style={{
          stroke: internalIconColor,
        }}
        className="w-8 h-8"
      />
    </button>
  );
};
