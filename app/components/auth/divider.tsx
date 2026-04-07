interface DividerProps {
  label?: string;
}

export function Divider({ label = "OR" }: DividerProps) {
  return (
    <div className="flex w-full shrink-0 items-center gap-[16px]">
      <div className="h-px flex-1 bg-[rgba(145,158,171,0.2)]" />
      <span className="text-center text-[12px] font-bold uppercase leading-[18px] text-[#919eab]">
        {label}
      </span>
      <div className="h-px flex-1 bg-[rgba(145,158,171,0.2)]" />
    </div>
  );
}
