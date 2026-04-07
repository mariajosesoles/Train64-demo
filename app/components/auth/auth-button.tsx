interface AuthButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function ArrowRightIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function AuthButton({ children, ...props }: AuthButtonProps) {
  return (
    <button
      type="button"
      className="flex w-full shrink-0 cursor-pointer items-center justify-center gap-[8px] rounded-[8px] bg-[#1b1b1b] py-[11px] pl-[16px] pr-[8px] hover:bg-[#333333]"
      {...props}
    >
      <span className="whitespace-nowrap text-[15px] font-bold leading-[26px] text-white">
        {children}
      </span>
      <ArrowRightIcon />
    </button>
  );
}
