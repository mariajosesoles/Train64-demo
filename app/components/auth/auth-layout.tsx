import Image from "next/image";
import chessBoard from "@/app/assets/background-auth.png";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative flex w-full items-center bg-white">
      {/* Mobile branding — visible only below lg */}
      <div className="absolute left-6 top-6 lg:hidden">
        <span className="text-[24px] font-bold text-[#1b1b1b]">Train64</span>
      </div>

      {/* Left Panel — Form */}
      <div className="flex h-screen w-full shrink-0 flex-col items-center justify-center bg-white px-6 pt-20 lg:w-[480px] lg:p-[64px] lg:pt-[64px]">
        <div className="flex w-full max-w-[400px] flex-col items-center gap-[40px] lg:max-w-none">
          {children}
        </div>
      </div>

      {/* Right Panel — Visual (hidden on mobile) */}
      <div className="hidden h-screen flex-[1_0_0] items-start p-[16px] lg:flex">
        <div className="relative h-full flex-[1_0_0] overflow-clip rounded-[20px] bg-[#f5f0e8] shadow-[0px_0px_2px_0px_rgba(145,158,171,0.2),0px_12px_24px_-4px_rgba(145,158,171,0.12)]">
          {/* Train64 wordmark */}
          <span className="absolute right-8 top-8 z-10 text-[24px] font-bold text-[#1b1b1b]">
            Train64
          </span>

          {/* Chess board image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={chessBoard}
              alt="Chess board with pieces"
              width={1090}
              height={1090}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
