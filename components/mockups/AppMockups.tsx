import type { ReactNode } from "react";
import logoAsset from "@/assets/omicon-logo.png.asset.json";

/**
 * High-fidelity mockups of the DCP Laravel app.
 * Uses the project's real CSS (copied from public/css/app.css) scoped under
 * `.dcp-scope` so the screenshots look identical to production.
 */

const CSS = `
.dcp-scope{--ink:#0F1B2D;--ink-soft:#5A6B81;--ink-mute:#8597AC;--bg:#F1F4F8;--panel:#FFFFFF;--panel-2:#F6F8FB;--line:#DCE3EC;--line-soft:#E9EEF4;--brand:#173963;--brand-2:#1F4D85;--brand-deep:#0B2545;--brand-tint:#E8EFF8;--accent:#2563B8;--green:#0E8C6A;--green-soft:#E1F3EC;--green-deep:#0A5C46;--red:#C0392B;--red-soft:#FBE7E4;--red-deep:#8C261B;--amber:#B5760A;--amber-soft:#F8EFD9;--shadow:0 1px 2px rgba(15,27,45,.04),0 4px 14px rgba(15,27,45,.06);font-family:'Inter',system-ui,sans-serif;color:var(--ink);font-size:13px;line-height:1.5}
.dcp-scope *{box-sizing:border-box}
.dcp-scope .mono{font-family:'JetBrains Mono',monospace;font-variant-numeric:tabular-nums}
.dcp-scope .tk::before{content:"৳ ";opacity:.55}
.dcp-scope h1,.dcp-scope h2,.dcp-scope h3{font-family:'Space Grotesk','Inter',sans-serif;margin:0;letter-spacing:-.01em;color:var(--ink)}
.dcp-scope .app{display:grid;grid-template-columns:200px 1fr;min-height:480px;background:var(--bg)}
.dcp-scope .side{background:linear-gradient(180deg,#0B2545,#0E2A52 60%,#0B2240);color:#C6D2E4;padding:14px 10px;display:flex;flex-direction:column;gap:2px}
.dcp-scope .seal{padding:6px;background:linear-gradient(150deg,#2f6dab,#0c2440);border-radius:10px;border:1px solid rgba(255,255,255,.18);display:grid;place-items:center;margin-bottom:6px}
.dcp-scope .seal img{height:38px;width:auto;display:block;filter:brightness(1.05)}
.dcp-scope .brand-txt{text-align:center;color:#eaf2fb;font-weight:600;font-size:12px;letter-spacing:.04em;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,.07);margin-bottom:8px}
.dcp-scope .navlbl{font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:#6c83a3;padding:10px 8px 4px;font-weight:600}
.dcp-scope .nav{position:relative;display:block;padding:7px 10px 7px 12px;border-radius:7px;color:#B9C7DC;font-weight:500;font-size:12px;border:1px solid transparent}
.dcp-scope .nav.on{background:linear-gradient(90deg,rgba(93,160,240,.18),rgba(93,160,240,.04));color:#fff;border-color:rgba(93,160,240,.22)}
.dcp-scope .nav.on::before{content:"";position:absolute;left:3px;top:50%;transform:translateY(-50%);width:3px;height:16px;border-radius:3px;background:#5DA0F0}
.dcp-scope .top{display:flex;align-items:center;gap:14px;padding:10px 18px;background:rgba(255,255,255,.85);border-bottom:1px solid var(--line)}
.dcp-scope .top .pg{font-family:'Space Grotesk','Inter',sans-serif;font-weight:600;font-size:15px}
.dcp-scope .top .crumb{color:var(--ink-soft);font-size:11px;margin-top:2px}
.dcp-scope .spacer{flex:1}
.dcp-scope .daypill{display:flex;gap:6px;align-items:center;font-size:11px;background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:5px 10px;color:var(--ink-soft)}
.dcp-scope .daypill span{font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-mute);font-weight:600}
.dcp-scope .daypill b{color:var(--ink);font-weight:600}
.dcp-scope .view{padding:16px 18px}
.dcp-scope .card{background:var(--panel);border:1px solid var(--line);border-radius:10px;box-shadow:var(--shadow)}
.dcp-scope .pad{padding:14px 16px}
.dcp-scope .sechead{display:flex;align-items:baseline;gap:10px;margin:14px 0 10px;flex-wrap:wrap}
.dcp-scope .sechead h2{font-size:16px}
.dcp-scope .sechead .sub{color:var(--ink-soft);font-size:11px}
.dcp-scope .grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
.dcp-scope .grid2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.dcp-scope .kpi{padding:12px 14px}
.dcp-scope .kpi .lab{font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-soft);font-weight:600}
.dcp-scope .kpi .num{font-family:'JetBrains Mono',monospace;font-weight:600;font-size:20px;margin-top:6px;color:var(--ink)}
.dcp-scope .kpi .meta{font-size:10px;color:var(--ink-soft);margin-top:4px}
.dcp-scope .kpi.accent{background:linear-gradient(150deg,#1c4a7f,#0c2440);color:#eaf2fb;border-color:#163a5f}
.dcp-scope .kpi.accent .lab,.dcp-scope .kpi.accent .meta{color:#9fb6cf}
.dcp-scope .kpi.accent .num{color:#fff}
.dcp-scope .badge{display:inline-flex;align-items:center;gap:5px;font-size:10px;font-weight:600;padding:2px 8px;border-radius:999px;border:1px solid transparent}
.dcp-scope .b-ok{background:var(--green-soft);color:var(--green-deep);border-color:#bfe3d4}
.dcp-scope .b-alert{background:var(--red-soft);color:var(--red-deep);border-color:#f1c6c0}
.dcp-scope .b-wait{background:var(--amber-soft);color:var(--amber);border-color:#ead8a8}
.dcp-scope .b-draft{background:#EEF1F5;color:#5b6b7d;border-color:#dde3eb}
.dcp-scope table.grid{width:100%;border-collapse:collapse;font-size:11px}
.dcp-scope table.grid th{text-align:right;font-weight:600;color:var(--ink-soft);font-size:9.5px;letter-spacing:.06em;text-transform:uppercase;padding:8px 10px;border-bottom:1px solid var(--line);background:var(--panel-2)}
.dcp-scope table.grid th:first-child,.dcp-scope table.grid td:first-child{text-align:left}
.dcp-scope table.grid td{padding:8px 10px;border-bottom:1px solid var(--line-soft)}
.dcp-scope table.grid td.num{text-align:right;font-family:'JetBrains Mono',monospace}
.dcp-scope table.grid tr.alert td{background:var(--red-soft)}
.dcp-scope .field{margin-bottom:10px}
.dcp-scope .field label{display:block;font-size:10px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-soft);font-weight:600;margin-bottom:4px}
.dcp-scope .field input,.dcp-scope .field select{width:100%;padding:7px 10px;border:1px solid var(--line);border-radius:7px;font-size:12px;background:var(--panel);color:var(--ink)}
.dcp-scope .btn{display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:8px;font-weight:600;font-size:12px;border:1px solid var(--brand);background:var(--brand);color:#fff;cursor:pointer}
.dcp-scope .btn.ghost{background:var(--panel);color:var(--brand);border-color:var(--line)}
.dcp-scope .btn.ok{background:var(--green);border-color:var(--green)}
.dcp-scope .btn.warn{background:var(--amber);border-color:var(--amber)}
.dcp-scope .eyebrow{font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--brand);font-weight:700}
.dcp-scope .vstrip{display:flex;align-items:center;gap:12px;border-radius:10px;padding:12px 14px;color:#fff}
.dcp-scope .vstrip.ok{background:radial-gradient(120% 160% at 0% 0%,#12a07c,#0a5c46)}
.dcp-scope .vstrip.bad{background:radial-gradient(120% 160% at 0% 0%,#d24b3b,#8c261b)}
.dcp-scope .vstrip .vlab{font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;opacity:.85;font-weight:600}
.dcp-scope .vstrip .vst{font-family:'Space Grotesk','Inter',sans-serif;font-weight:700;font-size:14px}
.dcp-scope .vstrip .big{margin-left:auto;font-family:'JetBrains Mono',monospace;font-weight:700;font-size:20px}
.dcp-scope .stat{display:flex;justify-content:space-between;padding:6px 2px;border-bottom:1px dashed var(--line-soft);font-size:12px}
.dcp-scope .stat .sl{color:var(--ink-soft)}
.dcp-scope .stat .sv{font-family:'JetBrains Mono',monospace;font-weight:600}
.dcp-scope .note{background:var(--panel-2);border:1px solid var(--line);border-left:3px solid var(--brand);border-radius:7px;padding:9px 12px;font-size:11.5px;color:var(--ink-soft)}
.dcp-scope .step{flex:1;min-width:120px;padding:10px 12px;border:1px solid var(--line);background:var(--panel)}
.dcp-scope .step:first-child{border-radius:9px 0 0 9px}
.dcp-scope .step:last-child{border-radius:0 9px 9px 0}
.dcp-scope .step.done{background:var(--green-soft);border-color:#bfe3d4}
.dcp-scope .step.cur{background:var(--brand);border-color:var(--brand);color:#fff}
.dcp-scope .step .n{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--ink-soft);font-weight:600}
.dcp-scope .step.cur .n{color:#cfe0f3}
.dcp-scope .step .st{font-family:'Space Grotesk','Inter',sans-serif;font-weight:600;font-size:12px;margin:4px 0 2px}
.dcp-scope .step .rl{font-size:10px;color:var(--ink-soft)}
.dcp-scope .step.cur .rl{color:#cfe0f3}
`;

function Styles() { return <style dangerouslySetInnerHTML={{ __html: CSS }} />; }

export function Annotation({ number, children, className = "" }: { number: number; children: ReactNode; className?: string }) {
  return (
    <div className={`absolute z-20 flex items-start gap-2 ${className}`}>
      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#C0392B] text-[11px] font-bold text-white shadow-lg ring-2 ring-white">{number}</span>
      <span className="rounded-md bg-[#0F1B2D]/95 px-2 py-1 text-[11px] font-medium text-white shadow-md max-w-[200px]">{children}</span>
    </div>
  );
}

function BrowserChrome({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border bg-card shadow-2xl ring-1 ring-black/5 not-prose">
      <div className="flex items-center gap-2 border-b bg-muted/60 px-3 py-2">
        <div className="flex gap-1.5"><span className="h-3 w-3 rounded-full bg-[#ff5f57]" /><span className="h-3 w-3 rounded-full bg-[#febc2e]" /><span className="h-3 w-3 rounded-full bg-[#28c840]" /></div>
        <div className="mx-auto truncate rounded-md bg-background/70 px-3 py-1 text-[11px] text-muted-foreground">{url}</div>
      </div>
      <div className="dcp-scope"><Styles />{children}</div>
    </div>
  );
}

function Shell({ title, crumb, active, children }: { title: string; crumb?: string; active: string; children: ReactNode }) {
  const nav: [string, string][] = [
    ["Group Console", "console"], ["Daily Cash Position", "dcp"],
    ["Approvals", "approvals"], ["A4 Board Report", "report"],
    ["My Profile", "profile"], ["User Management", "users"],
    ["Business Units", "sbus"], ["Roles & Permissions", "roles"],
    ["Approval Flow", "flows"], ["Config", "config"],
  ];
  const groups = [["Workspace", nav.slice(0, 4)], ["Account", nav.slice(4, 5)], ["Administration", nav.slice(5)]] as const;
  return (
    <div className="app">
      <aside className="side">
        <div className="seal"><img src={logoAsset.url} alt="Omicon Group" /></div>
        <div className="brand-txt">Cash · DCP</div>
        {groups.map(([lbl, items]) => (
          <div key={lbl}>
            <div className="navlbl">{lbl}</div>
            {items.map(([t, k]) => <a key={k} className={`nav ${active === k ? "on" : ""}`}>{t}</a>)}
          </div>
        ))}
      </aside>
      <div>
        <header className="top">
          <div><div className="pg">{title}</div><div className="crumb">{crumb ?? "Omicon Group · Daily Cash Position"}</div></div>
          <div className="spacer" />
          <div className="daypill"><span>Today</span><b>Tue, 30 Jun 2026</b></div>
        </header>
        <div className="view">{children}</div>
      </div>
    </div>
  );
}

/* ---------- LOGIN ---------- */
export function LoginMockup() {
  return (
    <BrowserChrome url="dcp.omicon.local/login">
      <div className="relative" style={{ background: "#F1F4F8", padding: "32px 20px", display: "grid", placeItems: "center", minHeight: 420 }}>
        <Annotation number={1} className="left-6 top-6">Email assigned by IT</Annotation>
        <Annotation number={2} className="right-6 top-1/2">First-time users must change password</Annotation>
        <div className="card pad" style={{ width: "100%", maxWidth: 380 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 18 }}>
            <div className="seal" style={{ marginBottom: 8 }}><img src={logoAsset.url} alt="Omicon" style={{ height: 52 }} /></div>
            <strong style={{ color: "var(--ink-soft)", fontSize: 13 }}>Cash · DCP Login</strong>
          </div>
          <div className="field"><label>Email address</label><input defaultValue="custodian@omicon.com" /></div>
          <div className="field"><label>Password</label><input type="password" defaultValue="••••••••••" /></div>
          <button className="btn" style={{ width: "100%", justifyContent: "center", marginTop: 6 }}>Sign in</button>
          <p style={{ marginTop: 16, fontSize: 11, color: "var(--ink-soft)", textAlign: "center" }}>Accounts are created by the Super Admin.</p>
        </div>
      </div>
    </BrowserChrome>
  );
}

/* ---------- CONSOLE ---------- */
export function ConsoleMockup() {
  const rows: [string, string, string, string, string, string, string, "ok" | "alert" | "wait"][] = [
    ["SBU-01", "Dhaka Plant", "12,40,000", "3,20,000", "1,80,000", "13,80,000", "13,80,000", "ok"],
    ["SBU-02", "Ctg Depot", "8,75,000", "1,15,000", "92,000", "8,98,000", "8,98,000", "ok"],
    ["SBU-03", "Khulna BU", "5,20,000", "0", "45,000", "4,75,000", "4,73,500", "alert"],
    ["SBU-04", "Sylhet BU", "3,10,000", "60,000", "20,000", "3,50,000", "—", "wait"],
  ];
  return (
    <BrowserChrome url="dcp.omicon.local/console">
      <Shell title="Group Console" crumb="CFO view · all SBUs · 30 Jun 2026" active="console">
        <div className="grid4">
          <div className="card kpi accent"><div className="lab">Group Total Cash on Hand</div><div className="num tk mono">31,03,500.00</div><div className="meta">4 active SBUs · 30 Jun 2026</div></div>
          <div className="card kpi"><div className="lab">SBUs Balanced</div><div className="num mono" style={{ color: "var(--green)" }}>3</div><div className="meta">Ledger == physical count</div></div>
          <div className="card kpi"><div className="lab">Variances</div><div className="num mono" style={{ color: "var(--red)" }}>1</div><div className="meta">Blocked from approval</div></div>
          <div className="card kpi"><div className="lab">Pending Review</div><div className="num mono" style={{ color: "var(--amber)" }}>2</div><div className="meta">Awaiting approval action</div></div>
        </div>
        <div className="sechead"><h2>Group matrix · 30 Jun 2026</h2><span className="sub">Opening + Receipts − Payments = Closing</span></div>
        <div className="card" style={{ overflow: "hidden" }}>
          <table className="grid">
            <thead><tr>{["SBU", "Opening", "Receipts", "Payments", "Closing", "Counted", "Book Bal.", "State"].map(h => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {rows.map(r => (
                <tr key={r[0]} className={r[7] === "alert" ? "alert" : ""}>
                  <td><b>{r[0]}</b><div style={{ color: "var(--ink-soft)", fontSize: 10 }}>{r[1]}</div></td>
                  <td className="num">{r[2]}</td><td className="num">{r[3]}</td><td className="num">{r[4]}</td>
                  <td className="num">{r[5]}</td><td className="num">{r[6]}</td><td className="num">{r[6]}</td>
                  <td><span className={`badge b-${r[7]}`}>{r[7] === "ok" ? "Approved" : r[7] === "alert" ? "Variance" : "Pending"}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Shell>
    </BrowserChrome>
  );
}

/* ---------- DCP FORM ---------- */
export function DcpFormMockup() {
  return (
    <BrowserChrome url="dcp.omicon.local/dcp/create">
      <Shell title="Daily Cash Position" crumb="Custodian entry · 30 Jun 2026" active="dcp">
        <div className="grid2" style={{ position: "relative" }}>
          <Annotation number={1} className="-top-2 left-2">Pick your SBU first</Annotation>
          <Annotation number={2} className="top-[150px] -right-2">Opening auto-fills from yesterday</Annotation>
          <Annotation number={3} className="bottom-2 left-[40%]">Book Balance must match Closing</Annotation>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div className="card pad"><div className="eyebrow" style={{ marginBottom: 8 }}>1 · General Information</div>
              <div className="grid2" style={{ gap: 8 }}>
                <div className="field"><label>Position Date</label><input defaultValue="30 Jun 2026" /></div>
                <div className="field"><label>Company</label><input defaultValue="Omicon Group" disabled /></div>
              </div>
              <div className="field"><label>SBU *</label><input defaultValue="SBU-01 — Dhaka Plant" /></div>
            </div>
            <div className="card pad"><div className="eyebrow" style={{ marginBottom: 8 }}>2 · Opening Balance</div>
              <div className="stat"><span className="sl">= Opening (locked)</span><span className="sv tk">12,40,000.00</span></div>
            </div>
            <div className="card pad"><div className="eyebrow" style={{ marginBottom: 8 }}>3 · Receipts & Payments</div>
              <div className="stat"><span className="sl" style={{ color: "var(--green)" }}>+ Receipts</span><span className="sv tk">3,20,000.00</span></div>
              <div className="stat"><span className="sl" style={{ color: "var(--red)" }}>− Payments</span><span className="sv tk">1,80,000.00</span></div>
              <div className="stat" style={{ fontWeight: 700, borderTop: "1px solid var(--line)", marginTop: 4 }}><span>= Closing</span><span className="sv tk">13,80,000.00</span></div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div className="card pad"><div className="eyebrow" style={{ marginBottom: 8 }}>4 · Physical Cash Count</div>
              <table className="grid">
                <thead><tr><th>Note</th><th>Count</th><th>Total</th></tr></thead>
                <tbody>
                  {[["৳1000", "1200", "12,00,000"], ["৳500", "300", "1,50,000"], ["৳100", "240", "24,000"], ["৳50", "120", "6,000"]].map(d => (
                    <tr key={d[0]}><td>{d[0]}</td><td className="num">{d[1]}</td><td className="num">{d[2]}</td></tr>
                  ))}
                  <tr style={{ fontWeight: 700 }}><td>Counted Total</td><td /><td className="num">13,80,000.00</td></tr>
                </tbody>
              </table>
            </div>
            <div className="card pad"><div className="eyebrow" style={{ marginBottom: 8 }}>5 · Book Balance (GL)</div>
              <div className="stat"><span className="sl">Book Balance entry</span><span className="sv tk">13,80,000.00</span></div>
              <div style={{ marginTop: 8, background: "var(--green-soft)", color: "var(--green-deep)", padding: "7px 10px", borderRadius: 7, fontSize: 11, fontWeight: 600, border: "1px solid #bfe3d4" }}>✓ Balanced — ready to submit</div>
            </div>
            <button className="btn" style={{ justifyContent: "center" }}>Submit for approval</button>
          </div>
        </div>
      </Shell>
    </BrowserChrome>
  );
}

/* ---------- APPROVALS ---------- */
export function ApprovalMockup() {
  return (
    <BrowserChrome url="dcp.omicon.local/approvals/142">
      <Shell title="Review · SBU-01 · 30 Jun 2026" crumb="Approval action" active="approvals">
        <div style={{ position: "relative" }}>
          <Annotation number={1} className="-top-1 right-2">Green strip = balanced</Annotation>
          <Annotation number={2} className="top-[180px] left-2">Compare ledger vs counted</Annotation>
          <Annotation number={3} className="-bottom-1 left-[40%]">Approve / Return / Escalate</Annotation>
          <div className="vstrip ok"><div><div className="vlab">Reconciliation (Closing − Counted)</div><div className="vst">Balanced</div></div><div className="big tk">0.00</div></div>
          <div style={{ display: "flex", gap: 0, marginTop: 14 }}>
            {[["Custodian", "done"], ["Reporting Incharge", "done"], ["AGM (F&A)", "cur"], ["CFO", ""], ["Approved", ""]].map(([s, st], i) => (
              <div key={s} className={`step ${st}`}><div className="n">Step {i + 1}</div><div className="st">{s}</div><div className="rl">{st === "done" ? "Completed" : st === "cur" ? "Action required" : "Pending"}</div></div>
            ))}
          </div>
          <div className="grid2" style={{ marginTop: 14 }}>
            <div className="card pad"><div className="eyebrow" style={{ marginBottom: 6 }}>Ledger</div>
              {[["Opening", "12,40,000"], ["Receipts", "3,20,000"], ["Payments", "1,80,000"], ["Closing", "13,80,000"], ["Counted", "13,80,000"], ["Book Balance", "13,80,000"]].map(r => (
                <div key={r[0]} className="stat"><span className="sl">{r[0]}</span><span className="sv tk">{r[1]}</span></div>
              ))}
            </div>
            <div className="card pad"><div className="eyebrow" style={{ marginBottom: 6 }}>Approval trail</div>
              {[["Submitted", "Custodian · R. Hossain", "b-ok", "Done"], ["Reviewed", "Reporting Incharge · S. Akter", "b-ok", "Done"], ["Approved by AGM", "Pending", "b-wait", "Waiting"]].map(s => (
                <div key={s[0]} className="stat"><div><div style={{ fontWeight: 600 }}>{s[0]}</div><div style={{ fontSize: 10, color: "var(--ink-soft)" }}>{s[1]}</div></div><span className={`badge ${s[2]}`}>{s[3]}</span></div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 14, display: "flex", gap: 8, justifyContent: "flex-end" }}>
            <button className="btn ghost">Return to custodian</button>
            <button className="btn warn">Escalate</button>
            <button className="btn ok">Approve</button>
          </div>
        </div>
      </Shell>
    </BrowserChrome>
  );
}

/* ---------- REPORT ---------- */
export function ReportMockup() {
  return (
    <BrowserChrome url="dcp.omicon.local/report">
      <Shell title="A4 Board Report" crumb="Reports · printable summary" active="report">
        <div style={{ display: "flex", gap: 8, alignItems: "end", paddingBottom: 12, borderBottom: "1px solid var(--line)" }}>
          <div className="field" style={{ margin: 0 }}><label>From</label><input defaultValue="01 Jun 2026" style={{ width: 130 }} /></div>
          <div className="field" style={{ margin: 0 }}><label>To</label><input defaultValue="30 Jun 2026" style={{ width: 130 }} /></div>
          <button className="btn">Apply</button>
          <button className="btn ghost">🖨 Print A4</button>
        </div>
        <div style={{ background: "#fff", margin: "14px auto", padding: "22px 26px", maxWidth: 560, boxShadow: "var(--shadow)", border: "1px solid var(--line)", borderRadius: 6, fontSize: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", borderBottom: "2px solid var(--brand-deep)", paddingBottom: 8 }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <img src={logoAsset.url} alt="" style={{ height: 32 }} />
              <div><div style={{ fontFamily: "'Space Grotesk',Inter,sans-serif", fontWeight: 700, fontSize: 13, color: "var(--brand-deep)" }}>OMICON GROUP OF INDUSTRIES</div><div style={{ fontSize: 9, color: "#5b6b7d" }}>Daily Cash Position — Board Summary</div></div>
            </div>
            <div style={{ fontSize: 9, textAlign: "right", color: "#4a5a6a" }}>30 Jun 2026<br />Page 1 of 1</div>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 10, fontSize: 9.5 }}>
            <thead><tr style={{ background: "var(--brand-tint)", color: "var(--brand-deep)" }}>{["SBU", "Opening", "Receipts", "Payments", "Closing", "Status"].map(h => <th key={h} style={{ border: "1px solid #c4ccd6", padding: "4px 6px", textAlign: h === "SBU" ? "left" : "right", fontWeight: 600 }}>{h}</th>)}</tr></thead>
            <tbody>
              {[["SBU-01", "12,40,000", "3,20,000", "1,80,000", "13,80,000", "OK"], ["SBU-02", "8,75,000", "1,15,000", "92,000", "8,98,000", "OK"], ["SBU-03", "5,20,000", "0", "45,000", "4,75,000", "VAR"], ["SBU-04", "3,10,000", "60,000", "20,000", "3,50,000", "WAIT"]].map(r => (
                <tr key={r[0]}>{r.map((c, i) => <td key={i} style={{ border: "1px solid #c4ccd6", padding: "3px 6px", textAlign: i === 0 ? "left" : i === 5 ? "center" : "right", fontFamily: i > 0 && i < 5 ? "'JetBrains Mono',monospace" : undefined }}>{c}</td>)}</tr>
              ))}
              <tr style={{ background: "#dce8f3", fontWeight: 700 }}><td style={{ border: "1px solid #c4ccd6", padding: "4px 6px" }}>GROUP TOTAL</td><td style={{ border: "1px solid #c4ccd6", padding: "4px 6px", textAlign: "right", fontFamily: "'JetBrains Mono',monospace" }}>29,45,000</td><td style={{ border: "1px solid #c4ccd6", padding: "4px 6px", textAlign: "right", fontFamily: "'JetBrains Mono',monospace" }}>4,95,000</td><td style={{ border: "1px solid #c4ccd6", padding: "4px 6px", textAlign: "right", fontFamily: "'JetBrains Mono',monospace" }}>3,37,000</td><td style={{ border: "1px solid #c4ccd6", padding: "4px 6px", textAlign: "right", fontFamily: "'JetBrains Mono',monospace" }}>31,03,000</td><td style={{ border: "1px solid #c4ccd6" }} /></tr>
            </tbody>
          </table>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginTop: 20 }}>
            {["Custodian", "Incharge", "AGM", "CFO"].map(s => (<div key={s} style={{ textAlign: "center", fontSize: 9, color: "#4a5a6a" }}><div style={{ borderBottom: "1px solid #1a2733", height: 24, marginBottom: 4 }} />{s}</div>))}
          </div>
        </div>
      </Shell>
    </BrowserChrome>
  );
}

/* ---------- USERS ---------- */
export function UsersMockup() {
  const users: [string, string, string, string][] = [
    ["Rakib Hossain", "rakib@omicon.com", "Cash Custodian", "SBU-01"],
    ["Shahin Akter", "shahin@omicon.com", "Reporting Incharge", "SBU-01"],
    ["Tariq Hasan", "tariq@omicon.com", "AGM (F&A)", "Group level"],
    ["Nabila Rahman", "nabila@omicon.com", "CFO", "Group level"],
    ["Admin", "admin@omicon.com", "Super Admin", "Group level"],
  ];
  return (
    <BrowserChrome url="dcp.omicon.local/users">
      <Shell title="User Management" crumb="Super Admin · create & assign roles" active="users">
        <div className="sechead"><h2>All users</h2><span className="sub">{users.length} total</span><div style={{ marginLeft: "auto" }}><button className="btn">+ New user</button></div></div>
        <div className="card" style={{ overflow: "hidden" }}>
          <table className="grid">
            <thead><tr>{["Name", "Email", "Role", "SBU", "Status", ""].map(h => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {users.map(u => (
                <tr key={u[1]}>
                  <td><b>{u[0]}</b></td><td style={{ color: "var(--ink-soft)" }}>{u[1]}</td>
                  <td><span className="badge b-draft">{u[2]}</span></td>
                  <td className="mono">{u[3]}</td>
                  <td><span className="badge b-ok">Active</span></td>
                  <td><button className="btn ghost" style={{ padding: "4px 10px", fontSize: 11 }}>Edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Shell>
    </BrowserChrome>
  );
}

/* ---------- SBUs ---------- */
export function SbusMockup() {
  return (
    <BrowserChrome url="dcp.omicon.local/sbus">
      <Shell title="Business Units" crumb="Super Admin" active="sbus">
        <div className="grid2">
          {[["SBU-01", "Dhaka Plant", "Manufacturing", "ok"], ["SBU-02", "Chittagong Depot", "Distribution", "ok"], ["SBU-03", "Khulna BU", "Sales", "ok"], ["SBU-04", "Sylhet BU", "Sales", "draft"]].map(s => (
            <div key={s[0]} className="card pad" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div><div className="mono" style={{ fontWeight: 700, color: "var(--brand)" }}>{s[0]}</div><div style={{ fontWeight: 600 }}>{s[1]}</div><div style={{ fontSize: 10, color: "var(--ink-soft)" }}>{s[2]}</div></div>
              <span className={`badge b-${s[3]}`}>{s[3] === "ok" ? "Active" : "Inactive"}</span>
            </div>
          ))}
        </div>
      </Shell>
    </BrowserChrome>
  );
}

/* ---------- PROFILE ---------- */
export function ProfileMockup() {
  return (
    <BrowserChrome url="dcp.omicon.local/profile">
      <Shell title="My Profile" active="profile">
        <div className="grid2">
          <div className="card pad">
            <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 10, borderBottom: "1px solid var(--line)" }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--brand)", color: "#fff", display: "grid", placeItems: "center", fontWeight: 700, fontFamily: "'Space Grotesk',Inter,sans-serif" }}>RH</div>
              <div><div style={{ fontWeight: 700 }}>Rakib Hossain</div><div style={{ fontSize: 11, color: "var(--ink-soft)" }}>Cash Custodian · SBU-01</div></div>
            </div>
            <div style={{ marginTop: 10 }}>
              <div className="field"><label>Full Name</label><input defaultValue="Rakib Hossain" /></div>
              <div className="field"><label>Email</label><input defaultValue="rakib@omicon.com" disabled /></div>
              <button className="btn">Save changes</button>
            </div>
          </div>
          <div className="card pad">
            <div style={{ fontWeight: 600, paddingBottom: 8, borderBottom: "1px solid var(--line)" }}>Change Password</div>
            <div style={{ marginTop: 10 }}>
              {["Current password", "New password", "Confirm new password"].map(l => (
                <div key={l} className="field"><label>{l}</label><input type="password" defaultValue="••••••••" /></div>
              ))}
              <button className="btn">Update password</button>
            </div>
          </div>
        </div>
      </Shell>
    </BrowserChrome>
  );
}

/* ---------- CONFIG ---------- */
export function ConfigMockup() {
  return (
    <BrowserChrome url="dcp.omicon.local/config">
      <Shell title="System Configuration" crumb="Super Admin" active="config">
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[["Lock cutoff time", "18:00", "After this, custodians cannot submit for today"], ["Reopen window (days)", "3", "How many past days a submission can be reopened"], ["Variance tolerance (৳)", "0.00", "Difference allowed between counted and closing"], ["Notify on submission", "Enabled", "Email Reporting Incharge when a DCP is submitted"]].map(c => (
            <div key={c[0]} className="card pad" style={{ display: "grid", gridTemplateColumns: "1fr 140px", alignItems: "center", gap: 12 }}>
              <div><div style={{ fontWeight: 600 }}>{c[0]}</div><div style={{ fontSize: 11, color: "var(--ink-soft)" }}>{c[2]}</div></div>
              <input defaultValue={c[1]} />
            </div>
          ))}
        </div>
      </Shell>
    </BrowserChrome>
  );
}

/* ---------- FLOW ---------- */
export function FlowMockup() {
  const steps = ["Custodian", "Reporting Incharge", "AGM (F&A)", "CFO", "Approved"];
  return (
    <div className="dcp-scope not-prose" style={{ background: "var(--bg)", padding: 20, borderRadius: 12, border: "1px solid var(--line)" }}>
      <Styles />
      <div style={{ fontWeight: 700, marginBottom: 12, textAlign: "center", fontFamily: "'Space Grotesk',Inter,sans-serif" }}>Approval Flow</div>
      <div style={{ display: "flex", alignItems: "stretch", flexWrap: "wrap" }}>
        {steps.map((s, i) => (
          <div key={s} className={`step ${i < 2 ? "done" : i === 2 ? "cur" : ""}`}>
            <div className="n">Step {i + 1}</div><div className="st">{s}</div>
            <div className="rl">{i < 2 ? "Completed" : i === 2 ? "Action required" : "Pending"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const Mockups = {
  login: LoginMockup, console: ConsoleMockup, dcp: DcpFormMockup,
  approval: ApprovalMockup, report: ReportMockup, users: UsersMockup,
  sbus: SbusMockup, profile: ProfileMockup, config: ConfigMockup, flow: FlowMockup,
} as const;

export type MockupKey = keyof typeof Mockups;
