// // "use client";

// // import React, { useMemo, useRef, useState } from "react";
// // import Head from "next/head";

// // // Save as app/logo-maker/page.tsx
// // export default function LogoMakerPage() {
// //   return (
// //     <>
// //       <Head>
// //         <title>Logo Maker</title>
// //         <meta name="viewport" content="width=device-width, initial-scale=1" />
// //       </Head>
// //       <div className="min-h-screen bg-slate-50 text-slate-800">
// //         <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-slate-200">
// //           <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
// //             <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Logo Maker</h1>
// //             <a
// //               href="/"
// //               className="text-sm px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-100"
// //             >
// //               ← Back to tools
// //             </a>
// //           </div>
// //         </header>
// //         <main className="mx-auto max-w-6xl px-4 py-6 grid lg:grid-cols-[360px,1fr] gap-6">
// //           <ControlsPanel />
// //           <CanvasPanel />
// //         </main>
// //         <footer className="mx-auto max-w-6xl px-4 py-10 text-center text-xs text-slate-500">
// //           Built with Next.js + Tailwind. No external UI libs.
// //         </footer>
// //       </div>
// //     </>
// //   );
// // }

// // // ---------- Icon Library (inline SVG paths) ----------
// // const ICONS: Record<string, { viewBox?: string; path: string }[]> = {
// //   Star: [
// //     { path: "M12 2.5l2.9 5.88 6.5.94-4.7 4.58 1.1 6.45L12 17.77 6.2 20.35l1.1-6.45-4.7-4.58 6.5-.94L12 2.5z" },
// //   ],
// //   Bolt: [
// //     { path: "M13 2L3 14h7l-1 8 10-12h-7l1-8z" },
// //   ],
// //   Leaf: [
// //     { path: "M20 4c-6 0-10 2-12 4S4 12 4 16c0 3 2 5 5 5 4 0 6-2 8-4s4-6 4-12h-1z" },
// //   ],
// //   Shield: [
// //     { path: "M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z" },
// //   ],
// //   Cube: [
// //     { path: "M12 2l8 4-8 4-8-4 8-4zm-8 6l8 4v8l-8-4V8zm18 0v8l-8 4V12l8-4z" },
// //   ],
// //   Spark: [
// //     { path: "M12 2v6M12 22v-6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M2 12h6M22 12h-6M4.9 19.1l4.2-4.2M14.9 9.1l4.2-4.2", viewBox: "0 0 24 24" },
// //   ],
// //   Circle: [{ path: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" }],
// //   None: [],
// // };

// // // ---------- Global store via context-less refs ----------
// // const defaultState: MakerState = {
// //   text: "Nova",
// //   tagline: "creative studio",
// //   fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\"",
// //   weight: 700,
// //   letterSpacing: 0,
// //   wordSpacing: 0,
// //   textSize: 64,
// //   taglineSize: 16,
// //   icon: "Star",
// //   layout: "icon-left",
// //   padding: 32,
// //   gap: 16,
// //   corner: 24,
// //   bg: "#ffffff",
// //   fg: "#111827",
// //   accent: "#3b82f6",
// //   canvasW: 1024,
// //   canvasH: 512,
// //   shadow: true,
// //   uppercase: false,
// //   showTagline: true,
// //   shape: "none", // none | pill | square | circle
// //   grid: false,
// // };

// // type MakerState = {
// //   text: string;
// //   tagline: string;
// //   fontFamily: string;
// //   weight: number;
// //   letterSpacing: number;
// //   wordSpacing: number;
// //   textSize: number;
// //   taglineSize: number;
// //   icon: keyof typeof ICONS | string;
// //   layout: "icon-left" | "icon-top" | "icon-only" | "text-only";
// //   padding: number;
// //   gap: number;
// //   corner: number;
// //   bg: string;
// //   fg: string;
// //   accent: string;
// //   canvasW: number;
// //   canvasH: number;
// //   shadow: boolean;
// //   uppercase: boolean;
// //   showTagline: boolean;
// //   shape: "none" | "pill" | "square" | "circle";
// //   grid: boolean;
// // };

// // const Store = React.createContext<{
// //   state: MakerState;
// //   set: React.Dispatch<React.SetStateAction<MakerState>>;
// //   svgRef: React.RefObject<SVGSVGElement>;
// // } | null>(null);

// // function ControlsPanel() {
// //   const [state, set] = React.useState<MakerState>(defaultState);
// //   const svgRef = useRef<SVGSVGElement>(null);

// //   return (
// //     <Store.Provider value={{ state, set, svgRef }}>
// //       <aside className="space-y-6">
// //         <Section title="Text">
// //           <div className="grid grid-cols-1 gap-3">
// //             <TextField label="Brand name" value={state.text} onChange={(v) => set((s) => ({ ...s, text: v }))} />
// //             <TextField label="Tagline" value={state.tagline} onChange={(v) => set((s) => ({ ...s, tagline: v }))} />
// //             <Checkbox label="Uppercase name" checked={state.uppercase} onChange={(v)=>set(s=>({...s, uppercase:v}))} />
// //             <Checkbox label="Show tagline" checked={state.showTagline} onChange={(v)=>set(s=>({...s, showTagline:v}))} />
// //           </div>
// //         </Section>

// //         <Section title="Typography">
// //           <div className="grid grid-cols-2 gap-3">
// //             <Select label="Font" value={state.fontFamily} onChange={(v)=>set(s=>({...s, fontFamily:v}))} options={[
// //               { label: "System Sans", value: defaultState.fontFamily },
// //               { label: "Serif (Georgia)", value: "Georgia, serif" },
// //               { label: "Mono (Courier)", value: "\"Courier New\", ui-monospace, monospace" },
// //             ]} />
// //             <Number label="Weight" min={300} max={900} step={50} value={state.weight} onChange={(v)=>set(s=>({...s, weight:v}))} />
// //             <Number label="Name size" min={16} max={160} step={2} value={state.textSize} onChange={(v)=>set(s=>({...s, textSize:v}))} />
// //             <Number label="Tagline size" min={10} max={48} step={1} value={state.taglineSize} onChange={(v)=>set(s=>({...s, taglineSize:v}))} />
// //             <Number label="Letter spacing" min={-2} max={10} step={0.5} value={state.letterSpacing} onChange={(v)=>set(s=>({...s, letterSpacing:v}))} />
// //             <Number label="Word spacing" min={0} max={20} step={0.5} value={state.wordSpacing} onChange={(v)=>set(s=>({...s, wordSpacing:v}))} />
// //           </div>
// //         </Section>

// //         <Section title="Layout">
// //           <div className="grid grid-cols-2 gap-3">
// //             <Select label="Layout" value={state.layout} onChange={(v)=>set(s=>({...s, layout:v as MakerState["layout"]}))} options={[
// //               { label: "Icon left", value: "icon-left" },
// //               { label: "Icon top", value: "icon-top" },
// //               { label: "Icon only", value: "icon-only" },
// //               { label: "Text only", value: "text-only" },
// //             ]} />
// //             <Select label="Icon" value={String(state.icon)} onChange={(v)=>set(s=>({...s, icon: v as any}))} options={Object.keys(ICONS).map(k=>({label:k, value:k}))} />
// //             <Number label="Padding" min={0} max={128} step={2} value={state.padding} onChange={(v)=>set(s=>({...s, padding:v}))} />
// //             <Number label="Gap" min={0} max={64} step={2} value={state.gap} onChange={(v)=>set(s=>({...s, gap:v}))} />
// //             <Number label="Corner radius" min={0} max={64} step={2} value={state.corner} onChange={(v)=>set(s=>({...s, corner:v}))} />
// //             <Select label="Icon shape" value={state.shape} onChange={(v)=>set(s=>({...s, shape:v as any}))} options={[
// //               { label: "None", value: "none" },
// //               { label: "Pill", value: "pill" },
// //               { label: "Square", value: "square" },
// //               { label: "Circle", value: "circle" },
// //             ]} />
// //             <Checkbox label="Drop shadow" checked={state.shadow} onChange={(v)=>set(s=>({...s, shadow:v}))} />
// //             <Checkbox label="Grid guide" checked={state.grid} onChange={(v)=>set(s=>({...s, grid:v}))} />
// //           </div>
// //         </Section>

// //         <Section title="Colors & Size">
// //           <div className="grid grid-cols-2 gap-3">
// //             <Color label="Foreground" value={state.fg} onChange={(v)=>set(s=>({...s, fg:v}))} />
// //             <Color label="Accent" value={state.accent} onChange={(v)=>set(s=>({...s, accent:v}))} />
// //             <Color label="Background" value={state.bg} onChange={(v)=>set(s=>({...s, bg:v}))} />
// //             <Number label="Canvas width" min={128} max={2048} step={32} value={state.canvasW} onChange={(v)=>set(s=>({...s, canvasW:v}))} />
// //             <Number label="Canvas height" min={128} max={2048} step={32} value={state.canvasH} onChange={(v)=>set(s=>({...s, canvasH:v}))} />
// //           </div>
// //         </Section>

// //         <Actions />
// //       </aside>
// //     </Store.Provider>
// //   );
// // }

// // function Actions() {
// //   const store = React.useContext(Store)!;
// //   const { state, svgRef } = store;

// //   const randomize = () => {
// //     const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random()*arr.length)];
// //     const colors = ["#111827","#0f172a","#020617","#334155","#1f2937","#0ea5e9","#22c55e","#ef4444","#f59e0b","#6366f1","#14b8a6"]; 
// //     const bg = ["#ffffff","#f8fafc","#f1f5f9","#fff7ed","#fafaf9"]; 
// //     store.set(s=>({
// //       ...s,
// //       fg: pick(colors),
// //       accent: pick(colors),
// //       bg: pick(bg),
// //       icon: pick(Object.keys(ICONS)) as any,
// //       layout: pick(["icon-left","icon-top","icon-only","text-only"] as const),
// //       shape: pick(["none","pill","square","circle"] as const),
// //       corner: Math.floor(Math.random()*32),
// //       gap: 8 + Math.floor(Math.random()*24),
// //       padding: 16 + Math.floor(Math.random()*48),
// //     }));
// //   };

// //   const downloadSVG = () => {
// //     const el = svgRef.current;
// //     if (!el) return;
// //     const clone = el.cloneNode(true) as SVGSVGElement;
// //     // embed inline styles for font family/weights to be safe
// //     clone.setAttribute("xmlns","http://www.w3.org/2000/svg");
// //     const data = new XMLSerializer().serializeToString(clone);
// //     const blob = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
// //     triggerDownload(blob, `${slug(state.text || "logo")}.svg`);
// //   };

// //   const downloadPNG = async (scale=2) => {
// //     const el = svgRef.current;
// //     if (!el) return;
// //     const svgData = new XMLSerializer().serializeToString(el);
// //     const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
// //     const url = URL.createObjectURL(svgBlob);

// //     const img = new Image();
// //     img.decoding = "async";
// //     await new Promise<void>((resolve, reject)=>{
// //       img.onload = () => resolve();
// //       img.onerror = reject;
// //       img.src = url;
// //     });

// //     const canvas = document.createElement("canvas");
// //     canvas.width = state.canvasW * scale;
// //     canvas.height = state.canvasH * scale;
// //     const ctx = canvas.getContext("2d")!;
// //     ctx.imageSmoothingQuality = "high";
// //     ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
// //     URL.revokeObjectURL(url);

// //     const blob: Blob | null = await new Promise((resolve)=>canvas.toBlob(resolve, "image/png"));
// //     if (blob) triggerDownload(blob, `${slug(state.text || "logo")}.png`);
// //   };

// //   return (
// //     <Section title="Export">
// //       <div className="grid grid-cols-2 gap-3">
// //         <button onClick={()=>downloadPNG(2)} className="h-10 rounded-xl bg-slate-900 text-white text-sm font-medium hover:opacity-90">Download PNG</button>
// //         <button onClick={downloadSVG} className="h-10 rounded-xl border border-slate-300 text-sm font-medium hover:bg-slate-100">Download SVG</button>
// //         <button onClick={randomize} className="h-10 rounded-xl border border-slate-300 text-sm font-medium hover:bg-slate-100 col-span-2">🎲 Randomize</button>
// //       </div>
// //     </Section>
// //   );
// // }

// // function CanvasPanel() {
// //   const store = React.useContext(Store)!;
// //   const { state, svgRef } = store;

// //   const [name, tagline] = useMemo(()=>{
// //     const n = state.uppercase ? state.text.toUpperCase() : state.text;
// //     return [n, state.tagline];
// //   }, [state.text, state.uppercase, state.tagline]);

// //   const iconNodes = useMemo(()=>{
// //     const defs = ICONS[state.icon as keyof typeof ICONS] || [];
// //     return defs.map((d, i)=> (
// //       <path key={i} d={d.path} strokeWidth={d.path.includes("M") && d.path.includes(" ") ? 0 : 0} />
// //     ));
// //   }, [state.icon]);

// //   const shapeProps = (()=>{
// //     const size = 96;
// //     const r = state.shape === "pill" ? size/2 : state.shape === "circle" ? size/2 : state.corner;
// //     const w = state.shape === "pill" ? 128 : 96;
// //     const h = 96;
// //     return { w, h, r };
// //   })();

// //   const layoutStyles = (()=>{
// //     switch (state.layout) {
// //       case "icon-top":
// //         return "flex-col items-center text-center";
// //       case "icon-only":
// //         return "items-center justify-center";
// //       case "text-only":
// //         return "items-center justify-center";
// //       default:
// //         return "flex-row items-center";
// //     }
// //   })();

// //   return (
// //     <section className="bg-white rounded-2xl border border-slate-200 p-4 lg:p-6">
// //       <div className="mb-3 flex items-center justify-between">
// //         <h2 className="text-sm font-semibold text-slate-600">Preview</h2>
// //         <div className="text-xs text-slate-500">{state.canvasW}×{state.canvasH}px</div>
// //       </div>

// //       <div className="relative overflow-hidden rounded-2xl border border-slate-200">
// //         {/* Grid Background */}
// //         {state.grid && (
// //           <div
// //             className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)]"
// //             style={{ backgroundSize: "16px 16px", zIndex: 0 }}
// //           />
// //         )}

// //         <svg
// //           ref={svgRef}
// //           xmlns="http://www.w3.org/2000/svg"
// //           width={state.canvasW}
// //           height={state.canvasH}
// //           viewBox={`0 0 ${state.canvasW} ${state.canvasH}`}
// //           style={{ display: "block" }}
// //         >
// //           <defs>
// //             <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
// //               <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.18" />
// //             </filter>
// //           </defs>
// //           <rect x={0} y={0} width={state.canvasW} height={state.canvasH} fill={state.bg} />

// //           {/* Content Group */}
// //           <g transform={`translate(${state.padding}, ${state.padding})`}>
// //             <foreignObject width={state.canvasW - state.padding*2} height={state.canvasH - state.padding*2}>
// //               <div
// //                 xmlns="http://www.w3.org/1999/xhtml"
// //                 className={`w-full h-full flex ${layoutStyles}`}
// //                 style={{ gap: `${state.gap}px` }}
// //               >
// //                 {/* Icon block */}
// //                 {state.layout !== "text-only" && state.icon !== "None" && (
// //                   <div className="flex items-center justify-center" style={{ filter: state.shadow ? "drop-shadow(0 6px 12px rgba(0,0,0,0.12))" : "none" }}>
// //                     <svg
// //                       xmlns="http://www.w3.org/2000/svg"
// //                       width={96}
// //                       height={96}
// //                       viewBox="0 0 24 24"
// //                       className="shrink-0"
// //                     >
// //                       {state.shape !== "none" && (
// //                         <rect
// //                           x={0}
// //                           y={0}
// //                           width={shapeProps.w}
// //                           height={shapeProps.h}
// //                           rx={shapeProps.r}
// //                           fill={hexWithAlpha(state.accent, 0.12)}
// //                         />
// //                       )}
// //                       <g transform={`translate(${state.shape !== "none" ? 16 : 0} ${state.shape !== "none" ? 0 : 0})`} fill={state.accent} stroke={"none"}>
// //                         {iconNodes}
// //                       </g>
// //                     </svg>
// //                   </div>
// //                 )}

// //                 {/* Text block */}
// //                 {state.layout !== "icon-only" && (
// //                   <div className="flex flex-col min-w-0">
// //                     <div
// //                       style={{
// //                         fontFamily: state.fontFamily,
// //                         fontWeight: state.weight as any,
// //                         letterSpacing: `${state.letterSpacing}px`,
// //                         wordSpacing: `${state.wordSpacing}px`,
// //                         fontSize: `${state.textSize}px`,
// //                         lineHeight: 1.05,
// //                         color: state.fg,
// //                         textShadow: state.shadow ? "0 2px 10px rgba(0,0,0,0.08)" : "none",
// //                         whiteSpace: "pre-wrap",
// //                         overflow: "hidden",
// //                         textOverflow: "ellipsis",
// //                       }}
// //                     >
// //                       {name}
// //                     </div>

// //                     {state.showTagline && (
// //                       <div
// //                         style={{
// //                           fontFamily: state.fontFamily,
// //                           fontWeight: 400,
// //                           fontSize: `${state.taglineSize}px`,
// //                           color: mix(state.fg, state.bg, 0.4),
// //                           marginTop: 6,
// //                         }}
// //                       >
// //                         {tagline}
// //                       </div>
// //                     )}
// //                   </div>
// //                 )}
// //               </div>
// //             </foreignObject>
// //           </g>
// //         </svg>
// //       </div>

// //       <Hints />
// //     </section>
// //   );
// // }

// // function Hints() {
// //   return (
// //     <ul className="mt-4 text-xs text-slate-500 space-y-1 list-disc list-inside">
// //       <li>Tip: Export SVG for infinite scaling. Use PNG for social uploads.</li>
// //       <li>For custom fonts, wrap this page with a Next.js Font loader (local or Google) and set the family.</li>
// //       <li>Use the canvas width/height to generate square app icons (e.g., 1024 × 1024).</li>
// //     </ul>
// //   );
// // }

// // // ---------- Small UI primitives (Tailwind only) ----------
// // function Section({ title, children }: { title: string; children: React.ReactNode }) {
// //   return (
// //     <section className="bg-white rounded-2xl border border-slate-200 p-4 lg:p-5">
// //       <h3 className="text-sm font-semibold text-slate-700 mb-3">{title}</h3>
// //       {children}
// //     </section>
// //   );
// // }

// // function TextField({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string)=>void; placeholder?: string }) {
// //   return (
// //     <label className="grid gap-1 text-sm">
// //       <span className="text-slate-600">{label}</span>
// //       <input value={value} onChange={(e)=>onChange(e.target.value)} placeholder={placeholder}
// //         className="h-10 rounded-xl border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
// //     </label>
// //   );
// // }

// // function Number({ label, value, onChange, min, max, step=1 }: { label: string; value: number; onChange: (v:number)=>void; min?: number; max?: number; step?: number }) {
// //   return (
// //     <label className="grid gap-1 text-sm">
// //       <span className="text-slate-600">{label}</span>
// //       <input type="number" value={value} min={min} max={max} step={step}
// //         onChange={(e)=>onChange(e.target.valueAsNumber)}
// //         className="h-10 rounded-xl border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
// //     </label>
// //   );
// // }

// // function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v:string)=>void; options: {label:string, value:string}[] }) {
// //   return (
// //     <label className="grid gap-1 text-sm">
// //       <span className="text-slate-600">{label}</span>
// //       <select value={value} onChange={(e)=>onChange(e.target.value)} className="h-10 rounded-xl border border-slate-300 px-3 bg-white">
// //         {options.map(o=> <option key={o.value} value={o.value}>{o.label}</option>)}
// //       </select>
// //     </label>
// //   );
// // }

// // function Color({ label, value, onChange }: { label: string; value: string; onChange: (v:string)=>void }) {
// //   return (
// //     <label className="grid gap-1 text-sm">
// //       <span className="text-slate-600">{label}</span>
// //       <input type="color" value={value} onChange={(e)=>onChange(e.target.value)} className="h-10 rounded-xl border border-slate-300 px-2" />
// //     </label>
// //   );
// // }

// // function Checkbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v:boolean)=>void }) {
// //   return (
// //     <label className="flex items-center gap-2 text-sm">
// //       <input type="checkbox" checked={checked} onChange={(e)=>onChange(e.target.checked)} className="h-4 w-4" />
// //       <span className="text-slate-700 select-none">{label}</span>
// //     </label>
// //   );
// // }

// // // ---------- Utils ----------
// // function triggerDownload(blob: Blob, filename: string) {
// //   const url = URL.createObjectURL(blob);
// //   const a = document.createElement("a");
// //   a.href = url;
// //   a.download = filename;
// //   document.body.appendChild(a);
// //   a.click();
// //   a.remove();
// //   URL.revokeObjectURL(url);
// // }

// // function slug(s: string) {
// //   return s
// //     .toLowerCase()
// //     .replace(/[^a-z0-9]+/g, "-")
// //     .replace(/(^-|-$)+/g, "");
// // }

// // function clamp(n: number, min: number, max: number) { return Math.max(min, Math.min(max, n)); }

// // function hexWithAlpha(hex: string, alpha: number) {
// //   // supports #rgb, #rgba, #rrggbb
// //   let r=0,g=0,b=0;
// //   const clean = hex.replace("#", "");
// //   if (clean.length === 3) {
// //     r = parseInt(clean[0]+clean[0], 16);
// //     g = parseInt(clean[1]+clean[1], 16);
// //     b = parseInt(clean[2]+clean[2], 16);
// //   } else if (clean.length >= 6) {
// //     r = parseInt(clean.slice(0,2),16);
// //     g = parseInt(clean.slice(2,4),16);
// //     b = parseInt(clean.slice(4,6),16);
// //   }
// //   return `rgba(${r}, ${g}, ${b}, ${clamp(alpha,0,1)})`;
// // }

// // function mix(hex1: string, hex2: string, t: number) {
// //   const c1 = hexToRgb(hex1), c2 = hexToRgb(hex2);
// //   const r = Math.round(c1.r + (c2.r - c1.r) * t);
// //   const g = Math.round(c1.g + (c2.g - c1.g) * t);
// //   const b = Math.round(c1.b + (c2.b - c1.b) * t);
// //   return rgbToHex(r,g,b);
// // }

// // function hexToRgb(hex: string) {
// //   const clean = hex.replace("#", "");
// //   const bigint = parseInt(clean.length===3 ? clean.split("").map(c=>c+c).join("") : clean, 16);
// //   return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
// // }

// // function rgbToHex(r: number, g: number, b: number) {
// //   const toHex = (n:number)=> n.toString(16).padStart(2, "0");
// //   return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
// // }



// // "use client";

// // import React, { useMemo, useRef, useState, createContext, useContext } from "react";
// // import Head from "next/head";

// // // Save as app/logo-maker/page.tsx
// // export default function LogoMakerPage() {
// //   return (
// //     <>
// //       <Head>
// //         <title>Logo Maker</title>
// //         <meta name="viewport" content="width=device-width, initial-scale=1" />
// //       </Head>
// //       <div className="min-h-screen bg-slate-50 text-slate-800">
// //         <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-slate-200">
// //           <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
// //             <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Logo Maker</h1>
// //             <a
// //               href="/"
// //               className="text-sm px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-100"
// //             >
// //               ← Back to tools
// //             </a>
// //           </div>
// //         </header>
// //         <main className="mx-auto max-w-6xl px-4 py-6 grid lg:grid-cols-[360px,1fr] gap-6">
// //           <ControlsPanel />
// //           <CanvasPanel />
// //         </main>
// //         <footer className="mx-auto max-w-6xl px-4 py-10 text-center text-xs text-slate-500">
// //           Built with Next.js + Tailwind. No external UI libs.
// //         </footer>
// //       </div>
// //     </>
// //   );
// // }

// // // ---------- Icon Library (inline SVG paths) ----------
// // const ICONS: Record<string, { viewBox?: string; path: string }[]> = {
// //   Star: [
// //     { path: "M12 2.5l2.9 5.88 6.5.94-4.7 4.58 1.1 6.45L12 17.77 6.2 20.35l1.1-6.45-4.7-4.58 6.5-.94L12 2.5z" },
// //   ],
// //   Bolt: [
// //     { path: "M13 2L3 14h7l-1 8 10-12h-7l1-8z" },
// //   ],
// //   Leaf: [
// //     { path: "M20 4c-6 0-10 2-12 4S4 12 4 16c0 3 2 5 5 5 4 0 6-2 8-4s4-6 4-12h-1z" },
// //   ],
// //   Shield: [
// //     { path: "M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z" },
// //   ],
// //   Cube: [
// //     { path: "M12 2l8 4-8 4-8-4 8-4zm-8 6l8 4v8l-8-4V8zm18 0v8l-8 4V12l8-4z" },
// //   ],
// //   Spark: [
// //     { path: "M12 2v6M12 22v-6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M2 12h6M22 12h-6M4.9 19.1l4.2-4.2M14.9 9.1l4.2-4.2", viewBox: "0 0 24 24" },
// //   ],
// //   Circle: [{ path: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" }],
// //   None: [],
// // };

// // // ---------- Global store via context-less refs ----------
// // const defaultState: MakerState = {
// //   text: "Nova",
// //   tagline: "creative studio",
// //   fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\"",
// //   weight: 700,
// //   letterSpacing: 0,
// //   wordSpacing: 0,
// //   textSize: 64,
// //   taglineSize: 16,
// //   icon: "Star",
// //   layout: "icon-left",
// //   padding: 32,
// //   gap: 16,
// //   corner: 24,
// //   bg: "#ffffff",
// //   fg: "#111827",
// //   accent: "#3b82f6",
// //   canvasW: 1024,
// //   canvasH: 512,
// //   shadow: true,
// //   uppercase: false,
// //   showTagline: true,
// //   shape: "none", // none | pill | square | circle
// //   grid: false,
// // };

// // type MakerState = {
// //   text: string;
// //   tagline: string;
// //   fontFamily: string;
// //   weight: number;
// //   letterSpacing: number;
// //   wordSpacing: number;
// //   textSize: number;
// //   taglineSize: number;
// //   icon: keyof typeof ICONS | string;
// //   layout: "icon-left" | "icon-top" | "icon-only" | "text-only";
// //   padding: number;
// //   gap: number;
// //   corner: number;
// //   bg: string;
// //   fg: string;
// //   accent: string;
// //   canvasW: number;
// //   canvasH: number;
// //   shadow: boolean;
// //   uppercase: boolean;
// //   showTagline: boolean;
// //   shape: "none" | "pill" | "square" | "circle";
// //   grid: boolean;
// // };

// // const Store = createContext<{
// //   state: MakerState;
// //   set: React.Dispatch<React.SetStateAction<MakerState>>;
// //   svgRef: React.RefObject<SVGSVGElement>;
// // } | null>(null);

// // function ControlsPanel() {
// //   const [state, set] = useState<MakerState>(defaultState);
// //   const svgRef = useRef<SVGSVGElement>(null);

// //   return (
// //     <Store.Provider value={{ state, set, svgRef }}>
// //       <aside className="space-y-6">
// //         <Section title="Text">
// //           <div className="grid grid-cols-1 gap-3">
// //             <TextField label="Brand name" value={state.text} onChange={(v) => set((s) => ({ ...s, text: v }))} />
// //             <TextField label="Tagline" value={state.tagline} onChange={(v) => set((s) => ({ ...s, tagline: v }))} />
// //             <Checkbox label="Uppercase name" checked={state.uppercase} onChange={(v)=>set(s=>({...s, uppercase:v}))} />
// //             <Checkbox label="Show tagline" checked={state.showTagline} onChange={(v)=>set(s=>({...s, showTagline:v}))} />
// //           </div>
// //         </Section>

// //         <Section title="Typography">
// //           <div className="grid grid-cols-2 gap-3">
// //             <Select label="Font" value={state.fontFamily} onChange={(v)=>set(s=>({...s, fontFamily:v}))} options={[
// //               { label: "System Sans", value: defaultState.fontFamily },
// //               { label: "Serif (Georgia)", value: "Georgia, serif" },
// //               { label: "Mono (Courier)", value: "\"Courier New\", ui-monospace, monospace" },
// //             ]} />
// //             <Number label="Weight" min={300} max={900} step={50} value={state.weight} onChange={(v)=>set(s=>({...s, weight:v}))} />
// //             <Number label="Name size" min={16} max={160} step={2} value={state.textSize} onChange={(v)=>set(s=>({...s, textSize:v}))} />
// //             <Number label="Tagline size" min={10} max={48} step={1} value={state.taglineSize} onChange={(v)=>set(s=>({...s, taglineSize:v}))} />
// //             <Number label="Letter spacing" min={-2} max={10} step={0.5} value={state.letterSpacing} onChange={(v)=>set(s=>({...s, letterSpacing:v}))} />
// //             <Number label="Word spacing" min={0} max={20} step={0.5} value={state.wordSpacing} onChange={(v)=>set(s=>({...s, wordSpacing:v}))} />
// //           </div>
// //         </Section>

// //         <Section title="Layout">
// //           <div className="grid grid-cols-2 gap-3">
// //             <Select label="Layout" value={state.layout} onChange={(v)=>set(s=>({...s, layout:v as MakerState["layout"]}))} options={[
// //               { label: "Icon left", value: "icon-left" },
// //               { label: "Icon top", value: "icon-top" },
// //               { label: "Icon only", value: "icon-only" },
// //               { label: "Text only", value: "text-only" },
// //             ]} />
// //             <Select label="Icon" value={String(state.icon)} onChange={(v)=>set(s=>({...s, icon: v as any}))} options={Object.keys(ICONS).map(k=>({label:k, value:k}))} />
// //             <Number label="Padding" min={0} max={128} step={2} value={state.padding} onChange={(v)=>set(s=>({...s, padding:v}))} />
// //             <Number label="Gap" min={0} max={64} step={2} value={state.gap} onChange={(v)=>set(s=>({...s, gap:v}))} />
// //             <Number label="Corner radius" min={0} max={64} step={2} value={state.corner} onChange={(v)=>set(s=>({...s, corner:v}))} />
// //             <Select label="Icon shape" value={state.shape} onChange={(v)=>set(s=>({...s, shape:v as any}))} options={[
// //               { label: "None", value: "none" },
// //               { label: "Pill", value: "pill" },
// //               { label: "Square", value: "square" },
// //               { label: "Circle", value: "circle" },
// //             ]} />
// //             <Checkbox label="Drop shadow" checked={state.shadow} onChange={(v)=>set(s=>({...s, shadow:v}))} />
// //             <Checkbox label="Grid guide" checked={state.grid} onChange={(v)=>set(s=>({...s, grid:v}))} />
// //           </div>
// //         </Section>

// //         <Section title="Colors & Size">
// //           <div className="grid grid-cols-2 gap-3">
// //             <Color label="Foreground" value={state.fg} onChange={(v)=>set(s=>({...s, fg:v}))} />
// //             <Color label="Accent" value={state.accent} onChange={(v)=>set(s=>({...s, accent:v}))} />
// //             <Color label="Background" value={state.bg} onChange={(v)=>set(s=>({...s, bg:v}))} />
// //             <Number label="Canvas width" min={128} max={2048} step={32} value={state.canvasW} onChange={(v)=>set(s=>({...s, canvasW:v}))} />
// //             <Number label="Canvas height" min={128} max={2048} step={32} value={state.canvasH} onChange={(v)=>set(s=>({...s, canvasH:v}))} />
// //           </div>
// //         </Section>

// //         <Actions />
// //       </aside>
// //     </Store.Provider>
// //   );
// // }

// // function Actions() {
// //   const store = useContext(Store)!;
// //   const { state, svgRef } = store;

// //   const randomize = () => {
// //     const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random()*arr.length)];
// //     const colors = ["#111827","#0f172a","#020617","#334155","#1f2937","#0ea5e9","#22c55e","#ef4444","#f59e0b","#6366f1","#14b8a6"]; 
// //     const bg = ["#ffffff","#f8fafc","#f1f5f9","#fff7ed","#fafaf9"]; 
// //     store.set(s=>({
// //       ...s,
// //       fg: pick(colors),
// //       accent: pick(colors),
// //       bg: pick(bg),
// //       icon: pick(Object.keys(ICONS)) as any,
// //       layout: pick(["icon-left","icon-top","icon-only","text-only"] as const),
// //       shape: pick(["none","pill","square","circle"] as const),
// //       corner: Math.floor(Math.random()*32),
// //       gap: 8 + Math.floor(Math.random()*24),
// //       padding: 16 + Math.floor(Math.random()*48),
// //     }));
// //   };

// //   const downloadSVG = () => {
// //     const el = svgRef.current;
// //     if (!el) return;
// //     const clone = el.cloneNode(true) as SVGSVGElement;
// //     // embed inline styles for font family/weights to be safe
// //     clone.setAttribute("xmlns","http://www.w3.org/2000/svg");
// //     const data = new XMLSerializer().serializeToString(clone);
// //     const blob = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
// //     triggerDownload(blob, `${slug(state.text || "logo")}.svg`);
// //   };

// //   const downloadPNG = async (scale=2) => {
// //     const el = svgRef.current;
// //     if (!el) return;
// //     const svgData = new XMLSerializer().serializeToString(el);
// //     const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
// //     const url = URL.createObjectURL(svgBlob);

// //     const img = new Image();
// //     img.decoding = "async";
// //     await new Promise<void>((resolve, reject)=>{
// //       img.onload = () => resolve();
// //       img.onerror = reject;
// //       img.src = url;
// //     });

// //     const canvas = document.createElement("canvas");
// //     canvas.width = state.canvasW * scale;
// //     canvas.height = state.canvasH * scale;
// //     const ctx = canvas.getContext("2d")!;
// //     ctx.imageSmoothingQuality = "high";
// //     ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
// //     URL.revokeObjectURL(url);

// //     const blob: Blob | null = await new Promise((resolve)=>canvas.toBlob(resolve, "image/png"));
// //     if (blob) triggerDownload(blob, `${slug(state.text || "logo")}.png`);
// //   };

// //   return (
// //     <Section title="Export">
// //       <div className="grid grid-cols-2 gap-3">
// //         <button onClick={()=>downloadPNG(2)} className="h-10 rounded-xl bg-slate-900 text-white text-sm font-medium hover:opacity-90">Download PNG</button>
// //         <button onClick={downloadSVG} className="h-10 rounded-xl border border-slate-300 text-sm font-medium hover:bg-slate-100">Download SVG</button>
// //         <button onClick={randomize} className="h-10 rounded-xl border border-slate-300 text-sm font-medium hover:bg-slate-100 col-span-2">🎲 Randomize</button>
// //       </div>
// //     </Section>
// //   );
// // }

// // function CanvasPanel() {
// //   const store = useContext(Store)!;
// //   const { state, svgRef } = store;

// //   const [name, tagline] = useMemo(()=>{
// //     const n = state.uppercase ? state.text.toUpperCase() : state.text;
// //     return [n, state.tagline];
// //   }, [state.text, state.uppercase, state.tagline]);

// //   const iconNodes = useMemo(()=>{
// //     const defs = ICONS[state.icon as keyof typeof ICONS] || [];
// //     return defs.map((d, i)=> (
// //       <path key={i} d={d.path} strokeWidth={d.path.includes("M") && d.path.includes(" ") ? 0 : 0} />
// //     ));
// //   }, [state.icon]);

// //   const shapeProps = (()=>{
// //     const size = 96;
// //     const r = state.shape === "pill" ? size/2 : state.shape === "circle" ? size/2 : state.corner;
// //     const w = state.shape === "pill" ? 128 : 96;
// //     const h = 96;
// //     return { w, h, r };
// //   })();

// //   const layoutStyles = (()=>{
// //     switch (state.layout) {
// //       case "icon-top":
// //         return "flex-col items-center text-center";
// //       case "icon-only":
// //         return "items-center justify-center";
// //       case "text-only":
// //         return "items-center justify-center";
// //       default:
// //         return "flex-row items-center";
// //     }
// //   })();

// //   return (
// //     <section className="bg-white rounded-2xl border border-slate-200 p-4 lg:p-6">
// //       <div className="mb-3 flex items-center justify-between">
// //         <h2 className="text-sm font-semibold text-slate-600">Preview</h2>
// //         <div className="text-xs text-slate-500">{state.canvasW}×{state.canvasH}px</div>
// //       </div>

// //       <div className="relative overflow-hidden rounded-2xl border border-slate-200">
// //         {/* Grid Background */}
// //         {state.grid && (
// //           <div
// //             className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)]"
// //             style={{ backgroundSize: "16px 16px", zIndex: 0 }}
// //           />
// //         )}

// //         <svg
// //           ref={svgRef}
// //           xmlns="http://www.w3.org/2000/svg"
// //           width={state.canvasW}
// //           height={state.canvasH}
// //           viewBox={`0 0 ${state.canvasW} ${state.canvasH}`}
// //           style={{ display: "block" }}
// //         >
// //           <defs>
// //             <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
// //               <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.18" />
// //             </filter>
// //           </defs>
// //           <rect x={0} y={0} width={state.canvasW} height={state.canvasH} fill={state.bg} />

// //           {/* Content Group */}
// //           <g transform={`translate(${state.padding}, ${state.padding})`}>
// //             <foreignObject width={state.canvasW - state.padding*2} height={state.canvasH - state.padding*2}>
// //               <div
// //                 xmlns="http://www.w3.org/1999/xhtml"
// //                 className={`w-full h-full flex ${layoutStyles}`}
// //                 style={{ gap: `${state.gap}px` }}
// //               >
// //                 {/* Icon block */}
// //                 {state.layout !== "text-only" && state.icon !== "None" && (
// //                   <div className="flex items-center justify-center" style={{ filter: state.shadow ? "drop-shadow(0 6px 12px rgba(0,0,0,0.12))" : "none" }}>
// //                     <svg
// //                       xmlns="http://www.w3.org/2000/svg"
// //                       width={96}
// //                       height={96}
// //                       viewBox="0 0 24 24"
// //                       className="shrink-0"
// //                     >
// //                       {state.shape !== "none" && (
// //                         <rect
// //                           x={0}
// //                           y={0}
// //                           width={shapeProps.w}
// //                           height={shapeProps.h}
// //                           rx={shapeProps.r}
// //                           fill={hexWithAlpha(state.accent, 0.12)}
// //                         />
// //                       )}
// //                       <g transform={`translate(${state.shape !== "none" ? 16 : 0} ${state.shape !== "none" ? 0 : 0})`} fill={state.accent} stroke={"none"}>
// //                         {iconNodes}
// //                       </g>
// //                     </svg>
// //                   </div>
// //                 )}

// //                 {/* Text block */}
// //                 {state.layout !== "icon-only" && (
// //                   <div className="flex flex-col min-w-0">
// //                     <div
// //                       style={{
// //                         fontFamily: state.fontFamily,
// //                         fontWeight: state.weight as any,
// //                         letterSpacing: `${state.letterSpacing}px`,
// //                         wordSpacing: `${state.wordSpacing}px`,
// //                         fontSize: `${state.textSize}px`,
// //                         lineHeight: 1.05,
// //                         color: state.fg,
// //                         textShadow: state.shadow ? "0 2px 10px rgba(0,0,0,0.08)" : "none",
// //                         whiteSpace: "pre-wrap",
// //                         overflow: "hidden",
// //                         textOverflow: "ellipsis",
// //                       }}
// //                     >
// //                       {name}
// //                     </div>

// //                     {state.showTagline && (
// //                       <div
// //                         style={{
// //                           fontFamily: state.fontFamily,
// //                           fontWeight: 400,
// //                           fontSize: `${state.taglineSize}px`,
// //                           color: mix(state.fg, state.bg, 0.4),
// //                           marginTop: 6,
// //                         }}
// //                       >
// //                         {tagline}
// //                       </div>
// //                     )}
// //                   </div>
// //                 )}
// //               </div>
// //             </foreignObject>
// //           </g>
// //         </svg>
// //       </div>

// //       <Hints />
// //     </section>
// //   );
// // }

// // function Hints() {
// //   return (
// //     <ul className="mt-4 text-xs text-slate-500 space-y-1 list-disc list-inside">
// //       <li>Tip: Export SVG for infinite scaling. Use PNG for social uploads.</li>
// //       <li>For custom fonts, wrap this page with a Next.js Font loader (local or Google) and set the family.</li>
// //       <li>Use the canvas width/height to generate square app icons (e.g., 1024 × 1024).</li>
// //     </ul>
// //   );
// // }

// // // ---------- Small UI primitives (Tailwind only) ----------
// // function Section({ title, children }: { title: string; children: React.ReactNode }) {
// //   return (
// //     <section className="bg-white rounded-2xl border border-slate-200 p-4 lg:p-5">
// //       <h3 className="text-sm font-semibold text-slate-700 mb-3">{title}</h3>
// //       {children}
// //     </section>
// //   );
// // }

// // function TextField({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string)=>void; placeholder?: string }) {
// //   return (
// //     <label className="grid gap-1 text-sm">
// //       <span className="text-slate-600">{label}</span>
// //       <input value={value} onChange={(e)=>onChange(e.target.value)} placeholder={placeholder}
// //         className="h-10 rounded-xl border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
// //     </label>
// //   );
// // }

// // function Number({ label, value, onChange, min, max, step=1 }: { label: string; value: number; onChange: (v:number)=>void; min?: number; max?: number; step?: number }) {
// //   return (
// //     <label className="grid gap-1 text-sm">
// //       <span className="text-slate-600">{label}</span>
// //       <input type="number" value={value} min={min} max={max} step={step}
// //         onChange={(e)=>onChange(e.target.valueAsNumber)}
// //         className="h-10 rounded-xl border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
// //     </label>
// //   );
// // }

// // function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v:string)=>void; options: {label:string, value:string}[] }) {
// //   return (
// //     <label className="grid gap-1 text-sm">
// //       <span className="text-slate-600">{label}</span>
// //       <select value={value} onChange={(e)=>onChange(e.target.value)} className="h-10 rounded-xl border border-slate-300 px-3 bg-white">
// //         {options.map(o=> <option key={o.value} value={o.value}>{o.label}</option>)}
// //       </select>
// //     </label>
// //   );
// // }

// // function Color({ label, value, onChange }: { label: string; value: string; onChange: (v:string)=>void }) {
// //   return (
// //     <label className="grid gap-1 text-sm">
// //       <span className="text-slate-600">{label}</span>
// //       <input type="color" value={value} onChange={(e)=>onChange(e.target.value)} className="h-10 rounded-xl border border-slate-300 px-2" />
// //     </label>
// //   );
// // }

// // function Checkbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v:boolean)=>void }) {
// //   return (
// //     <label className="flex items-center gap-2 text-sm">
// //       <input type="checkbox" checked={checked} onChange={(e)=>onChange(e.target.checked)} className="h-4 w-4" />
// //       <span className="text-slate-700 select-none">{label}</span>
// //     </label>
// //   );
// // }

// // // ---------- Utils ----------
// // function triggerDownload(blob: Blob, filename: string) {
// //   const url = URL.createObjectURL(blob);
// //   const a = document.createElement("a");
// //   a.href = url;
// //   a.download = filename;
// //   document.body.appendChild(a);
// //   a.click();
// //   a.remove();
// //   URL.revokeObjectURL(url);
// // }

// // function slug(s: string) {
// //   return s
// //     .toLowerCase()
// //     .replace(/[^a-z0-9]+/g, "-")
// //     .replace(/(^-|-$)+/g, "");
// // }

// // function clamp(n: number, min: number, max: number) { return Math.max(min, Math.min(max, n)); }

// // function hexWithAlpha(hex: string, alpha: number) {
// //   // supports #rgb, #rgba, #rrggbb
// //   let r=0,g=0,b=0;
// //   const clean = hex.replace("#", "");
// //   if (clean.length === 3) {
// //     r = parseInt(clean[0]+clean[0], 16);
// //     g = parseInt(clean[1]+clean[1], 16);
// //     b = parseInt(clean[2]+clean[2], 16);
// //   } else if (clean.length >= 6) {
// //     r = parseInt(clean.slice(0,2),16);
// //     g = parseInt(clean.slice(2,4),16);
// //     b = parseInt(clean.slice(4,6),16);
// //   }
// //   return `rgba(${r}, ${g}, ${b}, ${clamp(alpha,0,1)})`;
// // }

// // function mix(hex1: string, hex2: string, t: number) {
// //   const c1 = hexToRgb(hex1), c2 = hexToRgb(hex2);
// //   const r = Math.round(c1.r + (c2.r - c1.r) * t);
// //   const g = Math.round(c1.g + (c2.g - c1.g) * t);
// //   const b = Math.round(c1.b + (c2.b - c1.b) * t);
// //   return rgbToHex(r,g,b);
// // }

// // function hexToRgb(hex: string) {
// //   const clean = hex.replace("#", "");
// //   const bigint = parseInt(clean.length===3 ? clean.split("").map(c=>c+c).join("") : clean, 16);
// //   return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
// // }

// // function rgbToHex(r: number, g: number, b: number) {
// //   const toHex = (n:number)=> n.toString(16).padStart(2, "0");
// //   return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
// // }



// // "use client";

// // import React, { useMemo, useRef, useState, createContext, useContext, RefObject } from "react";
// // import Head from "next/head";

// // // Save as app/logo-maker/page.tsx
// // export default function LogoMakerPage() {
// //   return (
// //     <>
// //       <Head>
// //         <title>Logo Maker</title>
// //         <meta name="viewport" content="width=device-width, initial-scale=1" />
// //       </Head>
// //       <div className="min-h-screen bg-slate-50 text-slate-800">
// //         <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-slate-200">
// //           <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
// //             <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Logo Maker</h1>
// //             <a
// //               href="/"
// //               className="text-sm px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-100"
// //             >
// //               ← Back to tools
// //             </a>
// //           </div>
// //         </header>
// //         <main className="mx-auto max-w-6xl px-4 py-6 grid lg:grid-cols-[360px,1fr] gap-6">
// //           <ControlsPanel />
// //           <CanvasPanel />
// //         </main>
// //         <footer className="mx-auto max-w-6xl px-4 py-10 text-center text-xs text-slate-500">
// //           Built with Next.js + Tailwind. No external UI libs.
// //         </footer>
// //       </div>
// //     </>
// //   );
// // }

// // // ---------- Icon Library (inline SVG paths) ----------
// // const ICONS: Record<string, { viewBox?: string; path: string }[]> = {
// //   Star: [
// //     { path: "M12 2.5l2.9 5.88 6.5.94-4.7 4.58 1.1 6.45L12 17.77 6.2 20.35l1.1-6.45-4.7-4.58 6.5-.94L12 2.5z" },
// //   ],
// //   Bolt: [
// //     { path: "M13 2L3 14h7l-1 8 10-12h-7l1-8z" },
// //   ],
// //   Leaf: [
// //     { path: "M20 4c-6 0-10 2-12 4S4 12 4 16c0 3 2 5 5 5 4 0 6-2 8-4s4-6 4-12h-1z" },
// //   ],
// //   Shield: [
// //     { path: "M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z" },
// //   ],
// //   Cube: [
// //     { path: "M12 2l8 4-8 4-8-4 8-4zm-8 6l8 4v8l-8-4V8zm18 0v8l-8 4V12l8-4z" },
// //   ],
// //   Spark: [
// //     { path: "M12 2v6M12 22v-6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M2 12h6M22 12h-6M4.9 19.1l4.2-4.2M14.9 9.1l4.2-4.2", viewBox: "0 0 24 24" },
// //   ],
// //   Circle: [{ path: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" }],
// //   None: [],
// // };

// // // ---------- Global store via context-less refs ----------
// // const defaultState: MakerState = {
// //   text: "Nova",
// //   tagline: "creative studio",
// //   fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\"",
// //   weight: 700,
// //   letterSpacing: 0,
// //   wordSpacing: 0,
// //   textSize: 64,
// //   taglineSize: 16,
// //   icon: "Star",
// //   layout: "icon-left",
// //   padding: 32,
// //   gap: 16,
// //   corner: 24,
// //   bg: "#ffffff",
// //   fg: "#111827",
// //   accent: "#3b82f6",
// //   canvasW: 1024,
// //   canvasH: 512,
// //   shadow: true,
// //   uppercase: false,
// //   showTagline: true,
// //   shape: "none", // none | pill | square | circle
// //   grid: false,
// // };

// // type MakerState = {
// //   text: string;
// //   tagline: string;
// //   fontFamily: string;
// //   weight: number;
// //   letterSpacing: number;
// //   wordSpacing: number;
// //   textSize: number;
// //   taglineSize: number;
// //   icon: keyof typeof ICONS | string;
// //   layout: "icon-left" | "icon-top" | "icon-only" | "text-only";
// //   padding: number;
// //   gap: number;
// //   corner: number;
// //   bg: string;
// //   fg: string;
// //   accent: string;
// //   canvasW: number;
// //   canvasH: number;
// //   shadow: boolean;
// //   uppercase: boolean;
// //   showTagline: boolean;
// //   shape: "none" | "pill" | "square" | "circle";
// //   grid: boolean;
// // };

// // type StoreType = {
// //   state: MakerState;
// //   set: React.Dispatch<React.SetStateAction<MakerState>>;
// //   svgRef: RefObject<SVGSVGElement>;
// // };

// // const Store = createContext<StoreType | null>(null);

// // function ControlsPanel() {
// //   const [state, set] = useState<MakerState>(defaultState);
// //   const svgRef = useRef<SVGSVGElement>(null);

// //   return (
// //     <Store.Provider value={{ state, set, svgRef }}>
// //       <aside className="space-y-6">
// //         <Section title="Text">
// //           <div className="grid grid-cols-1 gap-3">
// //             <TextField label="Brand name" value={state.text} onChange={(v) => set((s) => ({ ...s, text: v }))} />
// //             <TextField label="Tagline" value={state.tagline} onChange={(v) => set((s) => ({ ...s, tagline: v }))} />
// //             <Checkbox label="Uppercase name" checked={state.uppercase} onChange={(v)=>set(s=>({...s, uppercase:v}))} />
// //             <Checkbox label="Show tagline" checked={state.showTagline} onChange={(v)=>set(s=>({...s, showTagline:v}))} />
// //           </div>
// //         </Section>

// //         <Section title="Typography">
// //           <div className="grid grid-cols-2 gap-3">
// //             <Select label="Font" value={state.fontFamily} onChange={(v)=>set(s=>({...s, fontFamily:v}))} options={[
// //               { label: "System Sans", value: defaultState.fontFamily },
// //               { label: "Serif (Georgia)", value: "Georgia, serif" },
// //               { label: "Mono (Courier)", value: "\"Courier New\", ui-monospace, monospace" },
// //             ]} />
// //             <Number label="Weight" min={300} max={900} step={50} value={state.weight} onChange={(v)=>set(s=>({...s, weight:v}))} />
// //             <Number label="Name size" min={16} max={160} step={2} value={state.textSize} onChange={(v)=>set(s=>({...s, textSize:v}))} />
// //             <Number label="Tagline size" min={10} max={48} step={1} value={state.taglineSize} onChange={(v)=>set(s=>({...s, taglineSize:v}))} />
// //             <Number label="Letter spacing" min={-2} max={10} step={0.5} value={state.letterSpacing} onChange={(v)=>set(s=>({...s, letterSpacing:v}))} />
// //             <Number label="Word spacing" min={0} max={20} step={0.5} value={state.wordSpacing} onChange={(v)=>set(s=>({...s, wordSpacing:v}))} />
// //           </div>
// //         </Section>

// //         <Section title="Layout">
// //           <div className="grid grid-cols-2 gap-3">
// //             <Select label="Layout" value={state.layout} onChange={(v)=>set(s=>({...s, layout:v as MakerState["layout"]}))} options={[
// //               { label: "Icon left", value: "icon-left" },
// //               { label: "Icon top", value: "icon-top" },
// //               { label: "Icon only", value: "icon-only" },
// //               { label: "Text only", value: "text-only" },
// //             ]} />
// //             <Select label="Icon" value={String(state.icon)} onChange={(v)=>set(s=>({...s, icon: v as any}))} options={Object.keys(ICONS).map(k=>({label:k, value:k}))} />
// //             <Number label="Padding" min={0} max={128} step={2} value={state.padding} onChange={(v)=>set(s=>({...s, padding:v}))} />
// //             <Number label="Gap" min={0} max={64} step={2} value={state.gap} onChange={(v)=>set(s=>({...s, gap:v}))} />
// //             <Number label="Corner radius" min={0} max={64} step={2} value={state.corner} onChange={(v)=>set(s=>({...s, corner:v}))} />
// //             <Select label="Icon shape" value={state.shape} onChange={(v)=>set(s=>({...s, shape:v as any}))} options={[
// //               { label: "None", value: "none" },
// //               { label: "Pill", value: "pill" },
// //               { label: "Square", value: "square" },
// //               { label: "Circle", value: "circle" },
// //             ]} />
// //             <Checkbox label="Drop shadow" checked={state.shadow} onChange={(v)=>set(s=>({...s, shadow:v}))} />
// //             <Checkbox label="Grid guide" checked={state.grid} onChange={(v)=>set(s=>({...s, grid:v}))} />
// //           </div>
// //         </Section>

// //         <Section title="Colors & Size">
// //           <div className="grid grid-cols-2 gap-3">
// //             <Color label="Foreground" value={state.fg} onChange={(v)=>set(s=>({...s, fg:v}))} />
// //             <Color label="Accent" value={state.accent} onChange={(v)=>set(s=>({...s, accent:v}))} />
// //             <Color label="Background" value={state.bg} onChange={(v)=>set(s=>({...s, bg:v}))} />
// //             <Number label="Canvas width" min={128} max={2048} step={32} value={state.canvasW} onChange={(v)=>set(s=>({...s, canvasW:v}))} />
// //             <Number label="Canvas height" min={128} max={2048} step={32} value={state.canvasH} onChange={(v)=>set(s=>({...s, canvasH:v}))} />
// //           </div>
// //         </Section>

// //         <Actions />
// //       </aside>
// //     </Store.Provider>
// //   );
// // }

// // function Actions() {
// //   const store = useContext(Store)!;
// //   const { state, svgRef } = store;

// //   const randomize = () => {
// //     const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random()*arr.length)];
// //     const colors = ["#111827","#0f172a","#020617","#334155","#1f2937","#0ea5e9","#22c55e","#ef4444","#f59e0b","#6366f1","#14b8a6"]; 
// //     const bg = ["#ffffff","#f8fafc","#f1f5f9","#fff7ed","#fafaf9"]; 
// //     store.set(s=>({
// //       ...s,
// //       fg: pick(colors),
// //       accent: pick(colors),
// //       bg: pick(bg),
// //       icon: pick(Object.keys(ICONS)) as any,
// //       layout: pick(["icon-left","icon-top","icon-only","text-only"] as const),
// //       shape: pick(["none","pill","square","circle"] as const),
// //       corner: Math.floor(Math.random()*32),
// //       gap: 8 + Math.floor(Math.random()*24),
// //       padding: 16 + Math.floor(Math.random()*48),
// //     }));
// //   };

// //   const downloadSVG = () => {
// //     const el = svgRef.current;
// //     if (!el) return;
// //     const clone = el.cloneNode(true) as SVGSVGElement;
// //     // embed inline styles for font family/weights to be safe
// //     clone.setAttribute("xmlns","http://www.w3.org/2000/svg");
// //     const data = new XMLSerializer().serializeToString(clone);
// //     const blob = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
// //     triggerDownload(blob, `${slug(state.text || "logo")}.svg`);
// //   };

// //   const downloadPNG = async (scale=2) => {
// //     const el = svgRef.current;
// //     if (!el) return;
// //     const svgData = new XMLSerializer().serializeToString(el);
// //     const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
// //     const url = URL.createObjectURL(svgBlob);

// //     const img = new Image();
// //     img.decoding = "async";
// //     await new Promise<void>((resolve, reject)=>{
// //       img.onload = () => resolve();
// //       img.onerror = reject;
// //       img.src = url;
// //     });

// //     const canvas = document.createElement("canvas");
// //     canvas.width = state.canvasW * scale;
// //     canvas.height = state.canvasH * scale;
// //     const ctx = canvas.getContext("2d")!;
// //     ctx.imageSmoothingQuality = "high";
// //     ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
// //     URL.revokeObjectURL(url);

// //     const blob: Blob | null = await new Promise((resolve)=>canvas.toBlob(resolve, "image/png"));
// //     if (blob) triggerDownload(blob, `${slug(state.text || "logo")}.png`);
// //   };

// //   return (
// //     <Section title="Export">
// //       <div className="grid grid-cols-2 gap-3">
// //         <button onClick={()=>downloadPNG(2)} className="h-10 rounded-xl bg-slate-900 text-white text-sm font-medium hover:opacity-90">Download PNG</button>
// //         <button onClick={downloadSVG} className="h-10 rounded-xl border border-slate-300 text-sm font-medium hover:bg-slate-100">Download SVG</button>
// //         <button onClick={randomize} className="h-10 rounded-xl border border-slate-300 text-sm font-medium hover:bg-slate-100 col-span-2">🎲 Randomize</button>
// //       </div>
// //     </Section>
// //   );
// // }

// // function CanvasPanel() {
// //   const store = useContext(Store)!;
// //   const { state, svgRef } = store;

// //   const [name, tagline] = useMemo(()=>{
// //     const n = state.uppercase ? state.text.toUpperCase() : state.text;
// //     return [n, state.tagline];
// //   }, [state.text, state.uppercase, state.tagline]);

// //   const iconNodes = useMemo(()=>{
// //     const defs = ICONS[state.icon as keyof typeof ICONS] || [];
// //     return defs.map((d, i)=> (
// //       <path key={i} d={d.path} strokeWidth={d.path.includes("M") && d.path.includes(" ") ? 0 : 0} />
// //     ));
// //   }, [state.icon]);

// //   const shapeProps = (()=>{
// //     const size = 96;
// //     const r = state.shape === "pill" ? size/2 : state.shape === "circle" ? size/2 : state.corner;
// //     const w = state.shape === "pill" ? 128 : 96;
// //     const h = 96;
// //     return { w, h, r };
// //   })();

// //   const layoutStyles = (()=>{
// //     switch (state.layout) {
// //       case "icon-top":
// //         return "flex-col items-center text-center";
// //       case "icon-only":
// //         return "items-center justify-center";
// //       case "text-only":
// //         return "items-center justify-center";
// //       default:
// //         return "flex-row items-center";
// //     }
// //   })();

// //   return (
// //     <section className="bg-white rounded-2xl border border-slate-200 p-4 lg:p-6">
// //       <div className="mb-3 flex items-center justify-between">
// //         <h2 className="text-sm font-semibold text-slate-600">Preview</h2>
// //         <div className="text-xs text-slate-500">{state.canvasW}×{state.canvasH}px</div>
// //       </div>

// //       <div className="relative overflow-hidden rounded-2xl border border-slate-200">
// //         {/* Grid Background */}
// //         {state.grid && (
// //           <div
// //             className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)]"
// //             style={{ backgroundSize: "16px 16px", zIndex: 0 }}
// //           />
// //         )}

// //         <svg
// //           ref={svgRef}
// //           xmlns="http://www.w3.org/2000/svg"
// //           width={state.canvasW}
// //           height={state.canvasH}
// //           viewBox={`0 0 ${state.canvasW} ${state.canvasH}`}
// //           style={{ display: "block" }}
// //         >
// //           <defs>
// //             <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
// //               <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.18" />
// //             </filter>
// //           </defs>
// //           <rect x={0} y={0} width={state.canvasW} height={state.canvasH} fill={state.bg} />

// //           {/* Content Group */}
// //           <g transform={`translate(${state.padding}, ${state.padding})`}>
// //             <foreignObject width={state.canvasW - state.padding*2} height={state.canvasH - state.padding*2}>
// //               <div
// //                 className={`w-full h-full flex ${layoutStyles}`}
// //                 style={{ gap: `${state.gap}px` }}
// //               >
// //                 {/* Icon block */}
// //                 {state.layout !== "text-only" && state.icon !== "None" && (
// //                   <div className="flex items-center justify-center" style={{ filter: state.shadow ? "drop-shadow(0 6px 12px rgba(0,0,0,0.12))" : "none" }}>
// //                     <svg
// //                       xmlns="http://www.w3.org/2000/svg"
// //                       width={96}
// //                       height={96}
// //                       viewBox="0 0 24 24"
// //                       className="shrink-0"
// //                     >
// //                       {state.shape !== "none" && (
// //                         <rect
// //                           x={0}
// //                           y={0}
// //                           width={shapeProps.w}
// //                           height={shapeProps.h}
// //                           rx={shapeProps.r}
// //                           fill={hexWithAlpha(state.accent, 0.12)}
// //                         />
// //                       )}
// //                       <g transform={`translate(${state.shape !== "none" ? 16 : 0} ${state.shape !== "none" ? 0 : 0})`} fill={state.accent} stroke={"none"}>
// //                         {iconNodes}
// //                       </g>
// //                     </svg>
// //                   </div>
// //                 )}

// //                 {/* Text block */}
// //                 {state.layout !== "icon-only" && (
// //                   <div className="flex flex-col min-w-0">
// //                     <div
// //                       style={{
// //                         fontFamily: state.fontFamily,
// //                         fontWeight: state.weight as any,
// //                         letterSpacing: `${state.letterSpacing}px`,
// //                         wordSpacing: `${state.wordSpacing}px`,
// //                         fontSize: `${state.textSize}px`,
// //                         lineHeight: 1.05,
// //                         color: state.fg,
// //                         textShadow: state.shadow ? "0 2px 10px rgba(0,0,0,0.08)" : "none",
// //                         whiteSpace: "pre-wrap",
// //                         overflow: "hidden",
// //                         textOverflow: "ellipsis",
// //                       }}
// //                     >
// //                       {name}
// //                     </div>

// //                     {state.showTagline && (
// //                       <div
// //                         style={{
// //                           fontFamily: state.fontFamily,
// //                           fontWeight: 400,
// //                           fontSize: `${state.taglineSize}px`,
// //                           color: mix(state.fg, state.bg, 0.4),
// //                           marginTop: 6,
// //                         }}
// //                       >
// //                         {tagline}
// //                       </div>
// //                     )}
// //                   </div>
// //                 )}
// //               </div>
// //             </foreignObject>
// //           </g>
// //         </svg>
// //       </div>

// //       <Hints />
// //     </section>
// //   );
// // }

// // function Hints() {
// //   return (
// //     <ul className="mt-4 text-xs text-slate-500 space-y-1 list-disc list-inside">
// //       <li>Tip: Export SVG for infinite scaling. Use PNG for social uploads.</li>
// //       <li>For custom fonts, wrap this page with a Next.js Font loader (local or Google) and set the family.</li>
// //       <li>Use the canvas width/height to generate square app icons (e.g., 1024 × 1024).</li>
// //     </ul>
// //   );
// // }

// // // ---------- Small UI primitives (Tailwind only) ----------
// // function Section({ title, children }: { title: string; children: React.ReactNode }) {
// //   return (
// //     <section className="bg-white rounded-2xl border border-slate-200 p-4 lg:p-5">
// //       <h3 className="text-sm font-semibold text-slate-700 mb-3">{title}</h3>
// //       {children}
// //     </section>
// //   );
// // }

// // function TextField({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string)=>void; placeholder?: string }) {
// //   return (
// //     <label className="grid gap-1 text-sm">
// //       <span className="text-slate-600">{label}</span>
// //       <input value={value} onChange={(e)=>onChange(e.target.value)} placeholder={placeholder}
// //         className="h-10 rounded-xl border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
// //     </label>
// //   );
// // }

// // function Number({ label, value, onChange, min, max, step=1 }: { label: string; value: number; onChange: (v:number)=>void; min?: number; max?: number; step?: number }) {
// //   return (
// //     <label className="grid gap-1 text-sm">
// //       <span className="text-slate-600">{label}</span>
// //       <input type="number" value={value} min={min} max={max} step={step}
// //         onChange={(e)=>onChange(e.target.valueAsNumber)}
// //         className="h-10 rounded-xl border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
// //     </label>
// //   );
// // }

// // function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v:string)=>void; options: {label:string, value:string}[] }) {
// //   return (
// //     <label className="grid gap-1 text-sm">
// //       <span className="text-slate-600">{label}</span>
// //       <select value={value} onChange={(e)=>onChange(e.target.value)} className="h-10 rounded-xl border border-slate-300 px-3 bg-white">
// //         {options.map(o=> <option key={o.value} value={o.value}>{o.label}</option>)}
// //       </select>
// //     </label>
// //   );
// // }

// // function Color({ label, value, onChange }: { label: string; value: string; onChange: (v:string)=>void }) {
// //   return (
// //     <label className="grid gap-1 text-sm">
// //       <span className="text-slate-600">{label}</span>
// //       <input type="color" value={value} onChange={(e)=>onChange(e.target.value)} className="h-10 rounded-xl border border-slate-300 px-2" />
// //     </label>
// //   );
// // }

// // function Checkbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v:boolean)=>void }) {
// //   return (
// //     <label className="flex items-center gap-2 text-sm">
// //       <input type="checkbox" checked={checked} onChange={(e)=>onChange(e.target.checked)} className="h-4 w-4" />
// //       <span className="text-slate-700 select-none">{label}</span>
// //     </label>
// //   );
// // }

// // // ---------- Utils ----------
// // function triggerDownload(blob: Blob, filename: string) {
// //   const url = URL.createObjectURL(blob);
// //   const a = document.createElement("a");
// //   a.href = url;
// //   a.download = filename;
// //   document.body.appendChild(a);
// //   a.click();
// //   a.remove();
// //   URL.revokeObjectURL(url);
// // }

// // function slug(s: string) {
// //   return s
// //     .toLowerCase()
// //     .replace(/[^a-z0-9]+/g, "-")
// //     .replace(/(^-|-$)+/g, "");
// // }

// // function clamp(n: number, min: number, max: number) { return Math.max(min, Math.min(max, n)); }

// // function hexWithAlpha(hex: string, alpha: number) {
// //   // supports #rgb, #rgba, #rrggbb
// //   let r=0,g=0,b=0;
// //   const clean = hex.replace("#", "");
// //   if (clean.length === 3) {
// //     r = parseInt(clean[0]+clean[0], 16);
// //     g = parseInt(clean[1]+clean[1], 16);
// //     b = parseInt(clean[2]+clean[2], 16);
// //   } else if (clean.length >= 6) {
// //     r = parseInt(clean.slice(0,2),16);
// //     g = parseInt(clean.slice(2,4),16);
// //     b = parseInt(clean.slice(4,6),16);
// //   }
// //   return `rgba(${r}, ${g}, ${b}, ${clamp(alpha,0,1)})`;
// // }

// // function mix(hex1: string, hex2: string, t: number) {
// //   const c1 = hexToRgb(hex1), c2 = hexToRgb(hex2);
// //   const r = Math.round(c1.r + (c2.r - c1.r) * t);
// //   const g = Math.round(c1.g + (c2.g - c1.g) * t);
// //   const b = Math.round(c1.b + (c2.b - c1.b) * t);
// //   return rgbToHex(r,g,b);
// // }

// // function hexToRgb(hex: string) {
// //   const clean = hex.replace("#", "");
// //   const bigint = parseInt(clean.length===3 ? clean.split("").map(c=>c+c).join("") : clean, 16);
// //   return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
// // }

// // function rgbToHex(r: number, g: number, b: number) {
// //   const toHex = (n:number)=> n.toString(16).padStart(2, "0");
// //   return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
// // }



// "use client";

// import React, { useMemo, useRef, useState, createContext, useContext } from "react";
// import Head from "next/head";

// // Save as app/logo-maker/page.jsx
// export default function LogoMakerPage() {
//   return (
//     <>
//       <Head>
//         <title>Logo Maker</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>
//       <div className="min-h-screen bg-slate-50 text-slate-800">
//         <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-slate-200">
//           <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
//             <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Logo Maker</h1>
//             <a
//               href="/"
//               className="text-sm px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-100"
//             >
//               ← Back to tools
//             </a>
//           </div>
//         </header>
//         <main className="mx-auto max-w-6xl px-4 py-6 grid lg:grid-cols-[360px,1fr] gap-6">
          
//         </main>
//         <footer className="mx-auto max-w-6xl px-4 py-10 text-center text-xs text-slate-500">
//           Built with Next.js + Tailwind. No external UI libs.
//         </footer>
//       </div>
//     </>
//   );
// }

// // ---------- Icon Library ----------
// const ICONS = {
//   Star: [{ path: "M12 2.5l2.9 5.88 6.5.94-4.7 4.58 1.1 6.45L12 17.77 6.2 20.35l1.1-6.45-4.7-4.58 6.5-.94L12 2.5z" }],
//   Bolt: [{ path: "M13 2L3 14h7l-1 8 10-12h-7l1-8z" }],
//   Leaf: [{ path: "M20 4c-6 0-10 2-12 4S4 12 4 16c0 3 2 5 5 5 4 0 6-2 8-4s4-6 4-12h-1z" }],
//   Shield: [{ path: "M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z" }],
//   Cube: [{ path: "M12 2l8 4-8 4-8-4 8-4zm-8 6l8 4v8l-8-4V8zm18 0v8l-8 4V12l8-4z" }],
//   Spark: [{ path: "M12 2v6M12 22v-6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M2 12h6M22 12h-6M4.9 19.1l4.2-4.2M14.9 9.1l4.2-4.2", viewBox: "0 0 24 24" }],
//   Circle: [{ path: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" }],
//   None: [],
// };

// // ---------- Default State ----------
// const defaultState = {
//   text: "Nova",
//   tagline: "creative studio",
//   fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\"",
//   weight: 700,
//   letterSpacing: 0,
//   wordSpacing: 0,
//   textSize: 64,
//   taglineSize: 16,
//   icon: "Star",
//   layout: "icon-left",
//   padding: 32,
//   gap: 16,
//   corner: 24,
//   bg: "#ffffff",
//   fg: "#111827",
//   accent: "#3b82f6",
//   canvasW: 1024,
//   canvasH: 512,
//   shadow: true,
//   uppercase: false,
//   showTagline: true,
//   shape: "none",
//   grid: false,
// };

// // ---------- Context ----------
// const Store = createContext(null);

// function ControlsPanel() {
//   const [state, set] = useState(defaultState);
//   const svgRef = useRef(null);

//   return (
//     <Store.Provider value={{ state, set, svgRef }}>
//       <aside className="space-y-6">
//         {/* sections */}
//         <Section title="Text">
//           <div className="grid grid-cols-1 gap-3">
//             <TextField label="Brand name" value={state.text} onChange={(v) => set((s) => ({ ...s, text: v }))} />
//             <TextField label="Tagline" value={state.tagline} onChange={(v) => set((s) => ({ ...s, tagline: v }))} />
//             <Checkbox label="Uppercase name" checked={state.uppercase} onChange={(v)=>set(s=>({...s, uppercase:v}))} />
//             <Checkbox label="Show tagline" checked={state.showTagline} onChange={(v)=>set(s=>({...s, showTagline:v}))} />
//           </div>
//         </Section>
//         {/* ... keep rest of sections same as TSX version ... */}
//         <Actions />
//       </aside>
//     </Store.Provider>
//   );
// }

// function Actions() {
//   const store = useContext(Store);
//   const { state, svgRef } = store;

//   const randomize = () => {
//     const pick = (arr) => arr[Math.floor(Math.random()*arr.length)];
//     const colors = ["#111827","#0f172a","#020617","#334155","#1f2937","#0ea5e9","#22c55e","#ef4444","#f59e0b","#6366f1","#14b8a6"]; 
//     const bg = ["#ffffff","#f8fafc","#f1f5f9","#fff7ed","#fafaf9"]; 
//     store.set(s=>({
//       ...s,
//       fg: pick(colors),
//       accent: pick(colors),
//       bg: pick(bg),
//       icon: pick(Object.keys(ICONS)),
//       layout: pick(["icon-left","icon-top","icon-only","text-only"]),
//       shape: pick(["none","pill","square","circle"]),
//       corner: Math.floor(Math.random()*32),
//       gap: 8 + Math.floor(Math.random()*24),
//       padding: 16 + Math.floor(Math.random()*48),
//     }));
//   };

//   const downloadSVG = () => {
//     const el = svgRef.current;
//     if (!el) return;
//     const clone = el.cloneNode(true);
//     clone.setAttribute("xmlns","http://www.w3.org/2000/svg");
//     const data = new XMLSerializer().serializeToString(clone);
//     const blob = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
//     triggerDownload(blob, `${slug(state.text || "logo")}.svg`);
//   };

//   return (
//     <Section title="Export">
//       <div className="grid grid-cols-2 gap-3">
//         <button onClick={()=>downloadSVG()} className="h-10 rounded-xl border border-slate-300 text-sm font-medium hover:bg-slate-100">Download SVG</button>
//         <button onClick={randomize} className="h-10 rounded-xl border border-slate-300 text-sm font-medium hover:bg-slate-100 col-span-2">🎲 Randomize</button>
//       </div>
//     </Section>
//   );
// }

// // (CanvasPanel, Hints, Section, TextField, Number, Select, Color, Checkbox, triggerDownload, slug, clamp, hexWithAlpha, mix, hexToRgb, rgbToHex)  
// // remain identical, just drop all type annotations.




"use client";

import PromoBanner from "@/components/PromoBanner";
import PromoPopup from "@/components/PromoPopUp";
import { useRef } from "react";

export default function LogoMaker() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "logo.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const handleDraw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // main text
    const name = (document.getElementById("name") as HTMLInputElement).value;
    ctx.fillStyle = "#111111";
    ctx.font = "bold 40px Arial";
    ctx.fillText(name, 50, 100);

    // tagline
    const tagline = (document.getElementById("tagline") as HTMLInputElement).value;
    ctx.fillStyle = "#666666";
    ctx.font = "20px Arial";
    ctx.fillText(tagline, 50, 150);
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Simple Logo Maker</h1>

      <input
        id="name"
        type="text"
        placeholder="Business Name"
        className="w-full border p-2 rounded"
        onChange={handleDraw}
      />
      <input
        id="tagline"
        type="text"
        placeholder="Tagline"
        className="w-full border p-2 rounded"
        onChange={handleDraw}
      />

      <canvas
        ref={canvasRef}
        width={500}
        height={200}
        className="border rounded w-full"
      />

      <button
        onClick={handleDownload}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Download Logo
      </button>
      <PromoBanner/>
      <PromoPopup/>
    </div>
  );
}
