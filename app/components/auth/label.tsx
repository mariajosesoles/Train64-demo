interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export function Label({ children, ...props }: LabelProps) {
  return (
    <div className="relative flex shrink-0 items-center px-[2px]">
      <div className="absolute left-0 right-0 top-[5px] h-[2px] bg-white" />
      <label
        className="relative whitespace-nowrap text-[12px] font-semibold leading-[12px] text-[#637381]"
        {...props}
      >
        {children}
      </label>
    </div>
  );
}
