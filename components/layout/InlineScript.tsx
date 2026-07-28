"use client";

type InlineScriptProps = {
  html: string;
};

// Must be a Client Component: the type ternary below only tells server output
// apart from client output if this function actually executes in the browser
// on re-renders (soft navigations included). Without "use client" it's a
// Server Component whose output is always computed server-side, so
// `typeof window` is always "undefined" and the ternary never flips.
//
// On the server this renders an executable script (runs once, on hard loads,
// before hydration). On client-side re-renders (e.g. a locale switch) it
// renders as inert text/plain markup instead — otherwise React treats the
// re-encountered <script> as an error and remounts the boundary, which was
// resetting scroll position on every language switch.
export const InlineScript = ({ html }: InlineScriptProps) => (
  <script
    type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
    suppressHydrationWarning
    dangerouslySetInnerHTML={{ __html: html }}
  />
);
