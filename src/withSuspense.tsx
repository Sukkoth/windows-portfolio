import { ComponentType, Suspense, ReactNode } from "react";
import Main from "./components/Suspense/Main";
import Apps from "./components/Suspense/Apps";
import ExplorerFallback from "./components/Suspense/ExplorerFallback";

interface WithSuspenseProps {
  children?: ReactNode;
}

function withSuspense<P extends WithSuspenseProps>(
  LazyComponent: ComponentType<P>,
  componentType: "main" | "explorer" | "app" = "main"
): ComponentType<P> {
  const FallbackComponents: {
    [key: string]: ReactNode;
  } = {
    main: <Main />,
    app: <Apps />,
    explorer: <ExplorerFallback />,
  };

  return (props: P) => (
    <Suspense fallback={FallbackComponents[componentType]}>
      <LazyComponent {...props} />
    </Suspense>
  );
}

export default withSuspense;
