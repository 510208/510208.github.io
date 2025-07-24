// Recognize @fontsource-variable modules
declare module "@fontsource-variable/*" {}

declare module "*.svg?react" {
  const content: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export default content;
}
