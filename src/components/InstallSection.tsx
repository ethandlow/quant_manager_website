import Link from "next/link";

const INSTALLER_URL =
  "https://github.com/ethandlow/QuantManagerBuild-Latest/raw/refs/heads/main/QuantManagerInstaller.exe";
const DLL_URL =
  "https://github.com/ethandlow/QuantManagerBuild-Latest/raw/refs/heads/main/QuantManager.dll";

export default function InstallSection() {
  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-[#38e0c4] tracking-wider uppercase mb-3">
            Install
          </p>
          <h2 className="text-3xl md:text-4xl tracking-tight text-[#eef2f7] mb-4">
            Get up and running in minutes
          </h2>
          <p className="text-lg text-[#9ba6b3] max-w-md mx-auto">
            Choose how you want to install Quant Manager.
          </p>
        </div>

        {/* Two option cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {/* Option A — Installer */}
          <div className="rounded-2xl border border-white/[0.06] bg-[#0f141c]/80 p-8 flex flex-col gap-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase tracking-wider text-[#38e0c4] font-medium">
                  Recommended
                </span>
              </div>
              <h3 className="text-lg text-[#eef2f7] mb-2">
                Option A — Installer
              </h3>
              <p className="text-sm text-[#9ba6b3] leading-relaxed">
                The Inno Setup installer auto-detects your Quantower folder and
                places the plugin DLL for you — no manual steps required.
              </p>
            </div>
            <div className="mt-auto flex flex-col gap-3">
              <a
                href={INSTALLER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#27496D] px-6 py-3 text-base text-white hover:bg-[#27496D] transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Download Installer
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 3v8M4 8l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <Link
                href="/docs/guides/quickstart"
                className="text-sm text-center text-[#9ba6b3] hover:text-[#38e0c4] transition-colors"
              >
                Full guide →
              </Link>
            </div>
          </div>

          {/* Option B — Direct DLL */}
          <div className="rounded-2xl border border-white/[0.06] bg-[#0f141c]/80 p-8 flex flex-col gap-5">
            <div>
              <h3 className="text-lg text-[#eef2f7] mb-2">
                Option B — Direct DLL
              </h3>
              <p className="text-sm text-[#9ba6b3] leading-relaxed">
                Download the <code className="text-[#eef2f7]/70">.dll</code>{" "}
                directly and drop it into your Quantower plug-ins folder
                manually.
              </p>
            </div>
            <div className="mt-auto flex flex-col gap-3">
              <a
                href={DLL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#27496D] px-6 py-3 text-base text-white hover:bg-[#27496D] transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Download DLL
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 3v8M4 8l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <Link
                href="/docs/guides/manual-installation-guide"
                className="text-sm text-center text-[#9ba6b3] hover:text-[#38e0c4] transition-colors"
              >
                Manual install guide →
              </Link>
            </div>
          </div>
        </div>

        {/* Shared final step */}
        <div className="rounded-2xl border border-white/[0.06] bg-[#0f141c]/60 px-8 py-6 flex items-start gap-5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#27496D]/30 ring-1 ring-[#27496D]/50 mt-0.5">
            <span className="text-sm font-medium text-[#38e0c4]">3</span>
          </div>
          <p className="text-sm text-[#9ba6b3] leading-relaxed">
            <span className="text-[#eef2f7] font-medium">Activate your license key</span> in Quant Manager
            Settings, then open the panel in Quantower.
          </p>
        </div>
      </div>
    </section>
  );
}
