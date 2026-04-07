interface FormHeaderProps {
  heading: string;
  subtitle: string;
}

export function FormHeader({ heading, subtitle }: FormHeaderProps) {
  return (
    <div className="flex w-full shrink-0 flex-col items-start gap-[4px] overflow-clip">
      <h1 className="whitespace-nowrap text-[24px] font-bold leading-[36px] text-[#212b36]">
        {heading}
      </h1>
      <p className="w-full text-[14px] font-normal leading-[22px] text-[#637381]">
        {subtitle}
      </p>
    </div>
  );
}
