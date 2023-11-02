import resolveConfig from "tailwindcss/resolveConfig";
import colors from "tailwindcss/colors";
import config from "@/tailwind.config.cjs";
import { Config } from "tailwindcss";

type ManuallyResolvedConfig = Omit<
  ReturnType<typeof resolveConfig>,
  "colors"
> & {
  theme: {
    colors: (typeof config)["theme"]["extend"]["colors"] & typeof colors;
  };
};

const tailwindConfig = resolveConfig(
  config as Config
) as unknown as ManuallyResolvedConfig;

export { tailwindConfig };
