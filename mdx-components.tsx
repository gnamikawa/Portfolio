import type { MDXComponents } from "mdx/types";
import styles from "./mdx-components.module.scss";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => <div className={styles.mdx}>{children}</div>,
    // p: ({ children }) => (
    //   <p className="bg-indigo-500 text-red-700 justify-items-center">
    //     {children}
    //   </p>
    // ),
    // pre: ({ children }) => (
    //   <pre className="bg-gray-100 p-[0.2em]">{children}</pre>
    // ),
    // h1: ({ children }) => (
    //   <h1 className="mb-4 text-4xl font-bold">{children}</h1>
    // ),
    // h2: ({ children }) => (
    //   <h2 className="mb-7 text-2xl font-medium">{children}</h2>
    // ),
    // h3: ({ children }) => (
    //   <h3 className="mb-9 text-xl font-semibold">{children}</h3>
    // ),
    // h4: ({ children }) => <h4 className="mb-9 text-lg">{children}</h4>,
    // h5: ({ children }) => (
    //   <h5 className="mb-10 text-base font-light">{children}</h5>
    // ),
    // h6: ({ children }) => (
    //   <h6 className="mb-11 text-sm font-light italic">{children}</h6>
    // ),
    // img: ({ children, src, alt }) => (
    //   // eslint-disable-next-line @next/next/no-img-element
    //   <img src={src} alt={alt} className="container mx-auto">
    //     {children}
    //   </img>
    // ),
    ...components,
  };
}
