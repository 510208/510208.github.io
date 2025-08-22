interface BreadcrumbDecorateProps {
  label: string;
}

export const DecoratedBreadcrumb = ({ label }: BreadcrumbDecorateProps) => {
  return (
    <nav className="flex items-left space-x-2 mb-4 text-gray-800/80 dark:text-gray-200/80 tracking-[1em]">
      {label} /
    </nav>
  );
};
