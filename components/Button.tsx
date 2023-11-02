import React from "react";

interface CommonButtonProps {
  label: string;
  onClick?: () => void;
}

interface PrimaryButtonProps extends CommonButtonProps {
  variant: "primary";
}
const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <button type="button" className="text-primary" {...props}>
      {props.label}
    </button>
  );
};

type ButtonProps = PrimaryButtonProps;
export const Button = (props: ButtonProps) => {
  return <PrimaryButton {...props} />;
};
