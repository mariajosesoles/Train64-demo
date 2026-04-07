import Link from "next/link";

interface FormFooterProps {
  text: string;
  linkText: string;
  linkHref: string;
}

export function FormFooter({ text, linkText, linkHref }: FormFooterProps) {
  return (
    <div className="flex w-full shrink-0 items-center gap-[8px] whitespace-nowrap text-[14px] leading-[22px] text-[#1b1b1b]">
      <span className="font-normal">{text}</span>
      <Link href={linkHref} className="font-semibold">
        {linkText}
      </Link>
    </div>
  );
}
