declare module "remote_a/count_provider" {
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

declare module "remote_a/layout" {
  type LayoutProps = {
    children: React.ReactNode;
  };
  export const Layout: React.ComponentType<LayoutProps>;
}

declare module "remote_a/global_css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "remote_a/top_navigation" {
  export type TopNavItem = {
    path: string;
    title: string;
  };

  type TopNavigationProps = {
    routes: TopNavItem[];
  };
  export const TopNavigation: React.ComponentType<TopNavigationProps>;
}
