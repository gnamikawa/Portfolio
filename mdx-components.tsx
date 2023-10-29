import type { MDXComponents } from "mdx/types";
import styles from "./mdx-components.module.scss";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => <div className={styles.mdx}>{children}</div>,
    ...components,
  };
}
