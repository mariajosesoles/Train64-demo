interface FormGroupProps {
  children: React.ReactNode;
}

export function FormGroup({ children }: FormGroupProps) {
  return (
    <div className="flex w-full shrink-0 flex-col items-start gap-[6px]">
      {children}
    </div>
  );
}
