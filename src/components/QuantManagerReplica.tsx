"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface Account {
  id: string;
  firm: string;
  type: "Live" | "Funded" | "Eval";
  name: string;
  equity: number;
  openPnl: number;
  closedPnl: number;
  totalPnl: number;
  drawdown: number;
  peak: number;
  lossLimit: number;
  profitTarget: number;
  trailingBalance: number;
  lockEndTime: number | null;
}

const formatMoney = (n: number) =>
  `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

function getNext6PMEST(): number {
  const now = new Date();
  const opts: Intl.DateTimeFormatOptions = {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  const parts = new Intl.DateTimeFormat("en-CA", opts).formatToParts(now);
  const get = (t: string) => parseInt(parts.find((p) => p.type === t)?.value ?? "0", 10);
  const y = get("year");
  const m = get("month");
  const d = get("day");
  const h = get("hour");
  const min = get("minute");
  const useTomorrow = h > 18 || (h === 18 && min > 0);
  const targetDate = new Date(y, m - 1, d + (useTomorrow ? 1 : 0));
  const y2 = targetDate.getFullYear();
  const m2 = String(targetDate.getMonth() + 1).padStart(2, "0");
  const d2 = String(targetDate.getDate()).padStart(2, "0");
  const dateStr = `${y2}-${m2}-${d2}`;
  const isDST = (() => {
    const marSecondSun = new Date(Date.UTC(y, 2, 1));
    let sun = 1 + (7 - marSecondSun.getUTCDay()) % 7;
    if (marSecondSun.getUTCDay() === 0) sun += 7;
    const dstStart = new Date(Date.UTC(y, 2, sun, 2, 0, 0));
    const novFirst = new Date(Date.UTC(y, 10, 1));
    sun = 1 + (7 - novFirst.getUTCDay()) % 7;
    if (novFirst.getUTCDay() === 0) sun += 7;
    const dstEnd = new Date(Date.UTC(y, 10, sun, 2, 0, 0));
    return now >= dstStart && now < dstEnd;
  })();
  const offset = isDST ? "-04:00" : "-05:00";
  return new Date(`${dateStr}T18:00:00${offset}`).getTime();
}

function formatLockCountdown(endTime: number, now: number): string {
  const ms = Math.max(0, endTime - now);
  const totalSec = Math.floor(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  const parts: string[] = [];
  if (h > 0) parts.push(`${h}h`);
  if (m > 0) parts.push(`${m}m`);
  if (s > 0 || parts.length === 0) parts.push(`${s}s`);
  return `Locked (${parts.join(" ")})`;
}

const DEFAULT_ACCOUNTS: Account[] = [
  {
    id: "1",
    firm: "Firm 1",
    type: "Live",
    name: "Account 1",
    equity: 5000,
    openPnl: 0,
    closedPnl: 0,
    totalPnl: 0,
    drawdown: 1000,
    peak: 5250,
    lossLimit: 500,
    profitTarget: 1000,
    trailingBalance: 4750,
    lockEndTime: null,
  },
  {
    id: "2",
    firm: "Firm 2",
    type: "Funded",
    name: "Account 2",
    equity: 155000,
    openPnl: 0,
    closedPnl: 0,
    totalPnl: 0,
    drawdown: 5000,
    peak: 155000,
    lossLimit: 2500,
    profitTarget: 5000,
    trailingBalance: 152000,
    lockEndTime: null,
  },
  {
    id: "3",
    firm: "Firm 2",
    type: "Funded",
    name: "Account 3",
    equity: 155000,
    openPnl: 0,
    closedPnl: 0,
    totalPnl: 0,
    drawdown: 5000,
    peak: 155000,
    lossLimit: 2500,
    profitTarget: 5000,
    trailingBalance: 152000,
    lockEndTime: null,
  },
  {
    id: "4",
    firm: "Firm 2",
    type: "Eval",
    name: "Account 4",
    equity: 50000,
    openPnl: 0,
    closedPnl: 0,
    totalPnl: 0,
    drawdown: 3000,
    peak: 50000,
    lossLimit: 1500,
    profitTarget: 1500,
    trailingBalance: 50000,
    lockEndTime: null,
  },
  {
    id: "5",
    firm: "Firm 2",
    type: "Eval",
    name: "Account 5",
    equity: 50000,
    openPnl: 0,
    closedPnl: 0,
    totalPnl: 0,
    drawdown: 3000,
    peak: 50000,
    lossLimit: 1500,
    profitTarget: 1500,
    trailingBalance: 50000,
    lockEndTime: null,
  },
];

const SummaryCols = ({
  label,
  count,
  equity,
  openPnl,
  closedPnl,
  totalPnl,
  drawdown,
  bg,
  selected = false,
  onSelect,
}: {
  label: string;
  count: number;
  equity: number;
  openPnl: number;
  closedPnl: number;
  totalPnl: number;
  drawdown: number;
  bg: string;
  selected?: boolean;
  onSelect?: () => void;
}) => (
  <div
    role={onSelect ? "button" : undefined}
    tabIndex={onSelect ? 0 : undefined}
    className={`flex items-center w-full text-[12px] text-[#ccd6e0] border-b border-[#1e2a38] shrink-0 transition-colors ${
      selected ? "bg-[#182435]" : onSelect ? `${bg} hover:bg-[#182435] cursor-pointer` : bg
    }`}
    onClick={onSelect}
  >
    <div className="flex-[1.2] min-w-0 px-1 py-1 text-left font-sans">{label}</div>
    <div className="flex-[0.7] min-w-0 px-1 py-1 text-right font-sans">{count}</div>
    <div className="flex-[1.8] min-w-0 px-1 py-1 text-right font-sans">{formatMoney(equity)}</div>
    <div className="flex-[1.3] min-w-0 px-1 py-1 text-right font-sans">{formatMoney(openPnl)}</div>
    <div className="flex-[1.3] min-w-0 px-1 py-1 text-right font-sans">{formatMoney(closedPnl)}</div>
    <div className="flex-[1.3] min-w-0 px-1 py-1 text-right font-sans">{formatMoney(totalPnl)}</div>
    <div className="flex-1 min-w-0 pl-1 pr-[5px] py-1 text-right text-[#f87171] font-sans">{formatMoney(drawdown)}</div>
  </div>
);

export default function QuantManagerReplica() {
  const [accounts, setAccounts] = useState<Account[]>(() =>
    JSON.parse(JSON.stringify(DEFAULT_ACCOUNTS))
  );
  const [selectedRowId, setSelectedRowId] = useState<string | null>(null);
  const [selectedSummaryLabel, setSelectedSummaryLabel] = useState<string | null>(null);
  const [summaryMode, setSummaryMode] = useState({ type: true, firm: false });
  const [summaryDropdownOpen, setSummaryDropdownOpen] = useState(false);
  const [now, setNow] = useState(() => Date.now());
  const [flattenFlash, setFlattenFlash] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!summaryDropdownOpen) return;
    const onOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setSummaryDropdownOpen(false);
    };
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, [summaryDropdownOpen]);

  const reset = useCallback(() => {
    setAccounts(JSON.parse(JSON.stringify(DEFAULT_ACCOUNTS)));
    setSelectedRowId(null);
    setSelectedSummaryLabel(null);
    setSummaryMode({ type: true, firm: false });
    setSummaryDropdownOpen(false);
  }, []);

  const lockAccount = useCallback((id: string, endTime: number) => {
    setAccounts((prev) =>
      prev.map((a) => (a.id === id ? { ...a, lockEndTime: endTime } : a))
    );
  }, []);

  const lockAll = useCallback((endTime: number) => {
    setAccounts((prev) => prev.map((a) => ({ ...a, lockEndTime: endTime })));
  }, []);

  const getSummaryButtonLabel = () => {
    if (summaryMode.type && summaryMode.firm) return "Summary: Type + Firm";
    if (summaryMode.type) return "Summary: Type";
    if (summaryMode.firm) return "Summary: Firm";
    return "Summary";
  };

  const aggregate = (filter: (a: Account) => boolean) => {
    const list = accounts.filter(filter);
    return {
      count: list.length,
      equity: list.reduce((s, a) => s + a.equity, 0),
      openPnl: list.reduce((s, a) => s + a.openPnl, 0),
      closedPnl: list.reduce((s, a) => s + a.closedPnl, 0),
      totalPnl: list.reduce((s, a) => s + a.totalPnl, 0),
      drawdown: list.reduce((s, a) => s + a.drawdown, 0),
    };
  };

  const total = aggregate(() => true);
  const live = aggregate((a) => a.type === "Live");
  const funded = aggregate((a) => a.type === "Funded");
  const eval_ = aggregate((a) => a.type === "Eval");
  const firm1 = aggregate((a) => a.firm === "Firm 1");
  const firm2 = aggregate((a) => a.firm === "Firm 2");

  const handleFlattenAll = () => {
    setFlattenFlash(true);
    setTimeout(() => setFlattenFlash(false), 300);
  };

  const handleSummaryCheck = (key: "type" | "firm") => {
    setSummaryMode((prev) => ({ ...prev, [key]: !prev[key] }));
    setSummaryDropdownOpen(false);
  };

  const toolbarBtn =
    "h-[24px] flex items-center justify-start px-2 bg-[#17212d] border border-[#273646] rounded-none text-[12px] font-medium text-[#ccd6e0] font-sans whitespace-nowrap cursor-pointer hover:bg-[#1f2e3d] transition-colors";

  return (
    <div
      className="absolute top-0 left-0 flex flex-col font-sans select-none text-[#ccd6e0]"
      style={{
        width: 1103,
        height: 500,
        transformOrigin: "top left",
      }}
    >
      {/* Apple-style title bar */}
      <div className="relative h-[22px] flex items-center justify-center px-3 bg-[#1c1c1e] border-b border-white/[0.06] shrink-0 rounded-t-[6px]">
        <div className="absolute left-3 flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#8E8E93]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#8E8E93]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#8E8E93]" />
        </div>
      </div>

      {/* Toolbar */}
      <div
        className="h-[34px] flex items-center justify-between px-[2px] bg-[#111822] border-b border-[#1e2a38] shrink-0 text-[16px]"
        onClick={() => {
          setSelectedRowId(null);
          setSelectedSummaryLabel(null);
        }}
      >
        <div className="flex items-center gap-1">
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              className={toolbarBtn}
              onClick={() => setSummaryDropdownOpen((o) => !o)}
            >
              {getSummaryButtonLabel()}
            </button>
            {summaryDropdownOpen && (
              <div className="absolute top-full left-0 mt-0.5 z-50 bg-[#17212d] border border-[#273646] rounded shadow-lg py-1 min-w-[140px]">
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-3 py-1.5 text-[12px] text-[#ccd6e0] hover:bg-[#1f2e3d]"
                  onClick={() => handleSummaryCheck("type")}
                >
                  <span>Type</span>
                  <input
                    type="checkbox"
                    checked={summaryMode.type}
                    readOnly
                    className="pointer-events-none"
                  />
                </button>
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-3 py-1.5 text-[12px] text-[#ccd6e0] hover:bg-[#1f2e3d]"
                  onClick={() => handleSummaryCheck("firm")}
                >
                  <span>Firm</span>
                  <input
                    type="checkbox"
                    checked={summaryMode.firm}
                    readOnly
                    className="pointer-events-none"
                  />
                </button>
              </div>
            )}
          </div>
          <button
            type="button"
            className={`${toolbarBtn} transition-colors duration-150 ${flattenFlash ? "bg-[#27496c] border-[#27496c]" : ""}`}
            onClick={handleFlattenAll}
          >
            Flatten All
          </button>
          <button
            type="button"
            className={toolbarBtn}
            onClick={() => lockAll(getNext6PMEST())}
          >
            Lock All
          </button>
          <button
            type="button"
            className={toolbarBtn}
            onClick={() => lockAll(Date.now() + 60_000)}
          >
            TIMEOUT
          </button>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            className={toolbarBtn}
            onClick={() => {
              if (selectedRowId) lockAccount(selectedRowId, Date.now() + 10 * 60_000);
            }}
            title={!selectedRowId ? "Select an account row first" : undefined}
          >
            Lock 10m
          </button>
          <button
            type="button"
            className={toolbarBtn}
            onClick={() => {
              if (selectedRowId) lockAccount(selectedRowId, Date.now() + 20 * 60_000);
            }}
            title={!selectedRowId ? "Select an account row first" : undefined}
          >
            Lock 20m
          </button>
          <button
            type="button"
            className={toolbarBtn}
            onClick={() => {
              if (selectedRowId) lockAccount(selectedRowId, Date.now() + 60 * 60_000);
            }}
            title={!selectedRowId ? "Select an account row first" : undefined}
          >
            Lock 1h
          </button>
          <button
            type="button"
            className={toolbarBtn}
            onClick={() => {
              if (selectedRowId) lockAccount(selectedRowId, Date.now() + 4 * 60 * 60_000);
            }}
            title={!selectedRowId ? "Select an account row first" : undefined}
          >
            Lock 4h
          </button>
          <button
            type="button"
            className={toolbarBtn}
            onClick={() => {
              if (selectedRowId) lockAccount(selectedRowId, getNext6PMEST());
            }}
            title={!selectedRowId ? "Select an account row first" : undefined}
          >
            Lock All Day
          </button>
          <button
            type="button"
            className="h-[24px] w-[24px] flex items-center justify-center bg-[#17212d] border border-[#273646] rounded-none text-[#8ca1b6] shrink-0 cursor-pointer hover:bg-[#1f2e3d] transition-colors"
            onClick={reset}
            title="Reset to default"
          >
            <svg className="w-[14px] h-[14px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v5h5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Summary Table — fixed min-height so account table stays in place regardless of type/firm selection */}
      <div className="w-full shrink-0 min-h-[190px]">
        <div className="flex items-center w-full text-[12px] text-[#8ca1b6] font-medium border-b border-[#1e2a38] bg-[#0b1016]">
          <div className="flex-[1.2] min-w-0 px-1 py-1 text-left font-sans">Summary</div>
          <div className="flex-[0.7] min-w-0 px-1 py-1 text-right font-sans">Count</div>
          <div className="flex-[1.8] min-w-0 px-1 py-1 text-right font-sans">Equity</div>
          <div className="flex-[1.3] min-w-0 px-1 py-1 text-right font-sans">Open PnL</div>
          <div className="flex-[1.3] min-w-0 px-1 py-1 text-right font-sans">Closed PnL</div>
          <div className="flex-[1.3] min-w-0 px-1 py-1 text-right font-sans">Total PnL</div>
          <div className="flex-1 min-w-0 pl-1 pr-[5px] py-1 text-right font-sans">Drawdown</div>
        </div>
        <SummaryCols
          label="Total"
          bg="bg-[#111822]"
          {...total}
          selected={selectedSummaryLabel === "Total"}
          onSelect={() => setSelectedSummaryLabel("Total")}
        />
        {summaryMode.type && (
          <>
            <SummaryCols
              label="Live"
              bg="bg-[#0b1016]"
              {...live}
              selected={selectedSummaryLabel === "Live"}
              onSelect={() => setSelectedSummaryLabel("Live")}
            />
            <SummaryCols
              label="Funded"
              bg="bg-[#111822]"
              {...funded}
              selected={selectedSummaryLabel === "Funded"}
              onSelect={() => setSelectedSummaryLabel("Funded")}
            />
            <SummaryCols
              label="Eval"
              bg="bg-[#0b1016]"
              {...eval_}
              selected={selectedSummaryLabel === "Eval"}
              onSelect={() => setSelectedSummaryLabel("Eval")}
            />
          </>
        )}
        {summaryMode.firm && (
          <>
            <SummaryCols
              label="Firm 1"
              bg={summaryMode.type ? "bg-[#111822]" : "bg-[#0b1016]"}
              {...firm1}
              selected={selectedSummaryLabel === "Firm 1"}
              onSelect={() => setSelectedSummaryLabel("Firm 1")}
            />
            <SummaryCols
              label="Firm 2"
              bg={summaryMode.type ? "bg-[#0b1016]" : "bg-[#111822]"}
              {...firm2}
              selected={selectedSummaryLabel === "Firm 2"}
              onSelect={() => setSelectedSummaryLabel("Firm 2")}
            />
          </>
        )}
      </div>

      {/* Spacer */}
      <div
        className="h-[60px] bg-[#0b1016] shrink-0"
        onClick={() => {
          setSelectedRowId(null);
          setSelectedSummaryLabel(null);
        }}
      />

      {/* Details Table */}
      <div className="flex-1 flex flex-col border-t border-[#1e2a38] bg-[#0b1016] min-h-0 overflow-hidden">
        <div className="flex items-center w-full text-[12px] text-[#8ca1b6] font-medium border-b border-[#1e2a38] bg-[#0b1016] shrink-0">
          <div className="flex-[0.6] min-w-0 px-1 py-1 text-left font-sans">Firm</div>
          <div className="flex-[0.4] min-w-0 px-1 py-1 text-left font-sans">Type</div>
          <div className="flex-[0.6] min-w-0 px-1 py-1 text-left font-sans">Name</div>
          <div className="flex-[0.6] min-w-0 px-1 py-1 text-right font-sans">Equity</div>
          <div className="flex-[0.6] min-w-0 px-1 py-1 text-right font-sans">Open PnL</div>
          <div className="flex-[0.7] min-w-0 px-1 py-1 text-right font-sans">Closed PnL</div>
          <div className="flex-[0.6] min-w-0 px-1 py-1 text-right font-sans">Total PnL</div>
          <div className="flex-[0.6] min-w-0 pl-1 pr-[2px] py-1 text-right font-sans">Drawdown</div>
          <div className="flex-[0.9] min-w-[108px] pl-[5px] pr-1 py-1 text-left font-sans">Lock Status</div>
          <div className="flex-[0.5] min-w-0 px-1 py-1 text-right font-sans">Peak</div>
          <div className="flex-[0.6] min-w-0 px-1 py-1 text-right font-sans">Loss Limit</div>
          <div className="flex-[0.7] min-w-0 px-1 py-1 text-right font-sans">Profit Target</div>
          <div className="flex-[0.7] min-w-0 pl-1 pr-[5px] py-1 text-right font-sans">Trailing Balance</div>
        </div>
        {accounts.map((row, i) => {
          const selected = selectedRowId === row.id;
          const lockStatus =
            row.lockEndTime && row.lockEndTime > now
              ? formatLockCountdown(row.lockEndTime, now)
              : "Unlocked";
          return (
            <div
              key={row.id}
              role="button"
              tabIndex={0}
              className={`flex items-center w-full text-[12px] text-[#ccd6e0] border-b border-[#1e2a38] shrink-0 cursor-pointer transition-colors ${
                selected ? "bg-[#182435]" : i % 2 === 0 ? "bg-[#111822] hover:bg-[#182435]" : "bg-[#0b1016] hover:bg-[#182435]"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedRowId(row.id);
              }}
            >
              <div className="flex-[0.6] min-w-0 px-1 py-1 text-left font-sans truncate">{row.firm}</div>
              <div className="flex-[0.4] min-w-0 px-1 py-1 text-left font-sans">{row.type}</div>
              <div className="flex-[0.6] min-w-0 px-1 py-1 text-left font-sans truncate">{row.name}</div>
              <div className="flex-[0.6] min-w-0 px-1 py-1 text-right font-sans">{formatMoney(row.equity)}</div>
              <div className="flex-[0.6] min-w-0 px-1 py-1 text-right font-sans">{formatMoney(row.openPnl)}</div>
              <div className="flex-[0.7] min-w-0 px-1 py-1 text-right font-sans">{formatMoney(row.closedPnl)}</div>
              <div className="flex-[0.6] min-w-0 px-1 py-1 text-right font-sans">{formatMoney(row.totalPnl)}</div>
              <div className="flex-[0.6] min-w-0 pl-1 pr-[2px] py-1 text-right text-[#f87171] font-sans">{formatMoney(row.drawdown)}</div>
              <div className="flex-[0.9] min-w-[108px] pl-[5px] pr-1 py-1 text-left font-sans shrink-0">{lockStatus}</div>
              <div className="flex-[0.5] min-w-0 px-1 py-1 text-right font-sans">{formatMoney(row.peak)}</div>
              <div className="flex-[0.6] min-w-0 px-1 py-1 text-right text-[#f87171] font-sans">{formatMoney(row.lossLimit)}</div>
              <div className="flex-[0.7] min-w-0 px-1 py-1 text-right text-[#38e0c4] font-sans">{formatMoney(row.profitTarget)}</div>
              <div className="flex-[0.7] min-w-0 pl-1 pr-[5px] py-1 text-right font-sans">{formatMoney(row.trailingBalance)}</div>
            </div>
          );
        })}
        <div
          className="flex-1 bg-[#0b1016] min-h-0"
          onClick={() => {
            setSelectedRowId(null);
            setSelectedSummaryLabel(null);
          }}
        />
      </div>
    </div>
  );
}
