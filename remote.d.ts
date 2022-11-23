declare module "orchestrator/count_provider" {
  type CountContextType = {
    count: number;
    setCount?: (count: number) => void;
  };
  export const useCountContext: () => CountContextType;
  type CountProviderProps = {
    children: React.ReactNode;
  };
  const CountProvider: React.FC<CountProviderProps>;
  export default CountProvider;
}

declare module "orchestrator/layout" {
  type LayoutProps = {
    children: React.ReactNode;
  };
  export const Layout: React.ComponentType<LayoutProps>;
}
