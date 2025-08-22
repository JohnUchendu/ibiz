"use client";

import React, { useRef, useState, useEffect } from "react";

// ShadCN + Tailwind based Poster & Flyer Maker
// Default export a single React component for quick preview in a Next.js / React app.
// Note: This component assumes you have TailwindCSS + shadcn/ui set up in the project.
// You may want to install html2canvas (npm i html2canvas) to support export functionality.

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import PromoBanner from "@/components/PromoBanner";
import PromoPopup from "@/components/PromoPopUp";

type ElementType = {
  id: string;
  type: "text" | "image";
  x: number; // percent
  y: number; // percent
  width?: number; // percent
  height?: number; // percent
  text?: string;
  fontSize?: number;
  color?: string;
  src?: string;
};

const defaultTemplates = [
  { id: "t1", name: "Simple Poster", size: { w: 1080, h: 1350 } },
  { id: "t2", name: "Flyer (A5) - Portrait", size: { w: 1748, h: 2480 } },
  { id: "t3", name: "Instagram Post 1:1", size: { w: 1080, h: 1080 } },
];

export default function PosterFlyerMaker() {
  const [template, setTemplate] = useState(defaultTemplates[0]);
  const [elements, setElements] = useState<ElementType[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [bgColor, setBgColor] = useState("#ffffff");
  const canvasRef = useRef<HTMLDivElement | null>(null);

  // Helpers
  const addText = () => {
    const el: ElementType = {
      id: cryptoRandomId(),
      type: "text",
      x: 10,
      y: 10,
      text: "New headline",
      fontSize: 36,
      color: "#000000",
    };
    setElements((s) => [...s, el]);
    setSelectedId(el.id);
  };

  const addImage = (file: File | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target?.result as string;
      const el: ElementType = {
        id: cryptoRandomId(),
        type: "image",
        x: 10,
        y: 10,
        width: 50,
        height: 30,
        src,
      };
      setElements((s) => [...s, el]);
      setSelectedId(el.id);
    };
    reader.readAsDataURL(file);
  };

  const updateElement = (id: string, patch: Partial<ElementType>) => {
    setElements((s) =>
      s.map((el) => (el.id === id ? { ...el, ...patch } : el))
    );
  };

  const removeElement = (id: string) => {
    setElements((s) => s.filter((el) => el.id !== id));
    setSelectedId((cur) => (cur === id ? null : cur));
  };

  // Dragging logic using pointer events
  useEffect(() => {
    let draggingId: string | null = null;
    let startX = 0,
      startY = 0,
      startLeft = 0,
      startTop = 0;

    function onPointerDown(e: PointerEvent) {
      const target = e.target as HTMLElement;
      const elId = target?.closest("[data-elid]")?.getAttribute("data-elid");
      if (!elId) return;
      draggingId = elId;
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      startX = e.clientX;
      startY = e.clientY;
      const el = elements.find((x) => x.id === elId);
      startLeft = el?.x ?? 0;
      startTop = el?.y ?? 0;
      (target as HTMLElement).setPointerCapture(e.pointerId);
    }

    function onPointerMove(e: PointerEvent) {
      if (!draggingId) return;
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      const dx = ((e.clientX - startX) / rect.width) * 100;
      const dy = ((e.clientY - startY) / rect.height) * 100;
      updateElement(draggingId, {
        x: clamp(startLeft + dx, 0, 100),
        y: clamp(startTop + dy, 0, 100),
      });
    }

    function onPointerUp(e: PointerEvent) {
      draggingId = null;
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
    };
  }, [elements]);

  const exportAsPNG = async () => {
    // This function expects html2canvas or similar library to be installed.
    // npm i html2canvas
    // Then use: import html2canvas from 'html2canvas'
    // For portability here we reference it via (window as any).html2canvas to avoid build errors in preview.
    const node = canvasRef.current;
    if (!node) return;
    // @ts-ignore
    const html2canvas = (window as any).html2canvas;
    if (!html2canvas) {
      alert(
        "To export you should install html2canvas and expose it (npm i html2canvas). See the file comments."
      );
      return;
    }
    const canvas = await html2canvas(node, { backgroundColor: null, scale: 2 });
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = `design-${Date.now()}.png`;
    a.click();
  };

  const selected = elements.find((e) => e.id === selectedId) ?? null;

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-6">
        Craft your legacy in print
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Design, customize, and showcase premium posters that capture attention
        and embody your vision
      </p>
      <div className="p-6 grid grid-cols-12 gap-6">
        {/* Left toolbar */}
        <aside className="col-span-3">
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <Select
                onValueChange={(v) =>
                  setTemplate(
                    defaultTemplates.find((t) => t.id === v) ??
                      defaultTemplates[0]
                  )
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder={template.name} />
                </SelectTrigger>
                <SelectContent>
                  {defaultTemplates.map((t) => (
                    <SelectItem key={t.id} value={t.id}>
                      {t.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="mt-4 space-y-2">
                <Button onClick={addText}>Add Text</Button>
                <label className="block">
                  <span className="sr-only">Upload image</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => addImage(e.target.files?.[0] ?? null)}
                    className="mt-2"
                  />
                </label>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Canvas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label>Background</Label>
                  <Input
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    placeholder="#ffffff"
                  />
                </div>
                <div>
                  <Label>Size</Label>
                  <div className="text-sm mt-2">
                    {template.size.w} × {template.size.h} px
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Button
                  variant="secondary"
                  onClick={() => {
                    setElements([]);
                    setBgColor("#ffffff");
                  }}
                >
                  Reset Canvas
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Export</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button onClick={exportAsPNG}>Export PNG</Button>
                <div className="text-xs text-muted-foreground mt-2">
                  Tip: Install html2canvas for PNG export to work in preview.
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* Canvas area */}
        <main className="col-span-6 flex justify-center items-start">
          <div className="border rounded shadow p-4 bg-white">
            <div
              ref={canvasRef}
              className="relative overflow-hidden"
              style={{
                width: `${Math.min(720, template.size.w / 2)}px`,
                height: `${Math.min(900, template.size.h / 2)}px`,
                backgroundColor: bgColor,
              }}
            >
              {elements.map((el) => (
                <div
                  key={el.id}
                  data-elid={el.id}
                  onClick={() => setSelectedId(el.id)}
                  className={`absolute transform -translate-x-0 -translate-y-0 select-none cursor-move ${
                    selectedId === el.id
                      ? "outline outline-2 outline-offset-2 outline-indigo-400"
                      : ""
                  }`}
                  style={{
                    left: `${el.x}%`,
                    top: `${el.y}%`,
                    width:
                      el.type === "image" && el.width ? `${el.width}%` : "auto",
                  }}
                >
                  {el.type === "text" ? (
                    <div
                      style={{ fontSize: `${el.fontSize}px`, color: el.color }}
                    >
                      {el.text}
                    </div>
                  ) : (
                    <img
                      src={el.src}
                      alt="uploaded"
                      style={{
                        maxWidth: el.width ? `${el.width}%` : "200px",
                        maxHeight: el.height ? `${el.height}%` : "200px",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Right inspector */}
        <aside className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Inspector</CardTitle>
            </CardHeader>
            <CardContent>
              {!selected ? (
                <div className="text-sm text-muted-foreground">
                  Select an element on the canvas to edit its properties.
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <Label>Type</Label>
                    <div className="text-sm">{selected.type}</div>
                  </div>

                  {selected.type === "text" && (
                    <>
                      <div>
                        <Label>Text</Label>
                        <Input
                          value={selected.text}
                          onChange={(e) =>
                            updateElement(selected.id, { text: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <Label>Font Size</Label>
                        <Slider
                          defaultValue={[selected.fontSize ?? 36]}
                          max={120}
                          onValueChange={(val) =>
                            updateElement(selected.id, { fontSize: val[0] })
                          }
                        />
                      </div>
                      <div>
                        <Label>Color</Label>
                        <Input
                          value={selected.color}
                          onChange={(e) =>
                            updateElement(selected.id, {
                              color: e.target.value,
                            })
                          }
                        />
                      </div>
                    </>
                  )}

                  {selected.type === "image" && (
                    <>
                      <div>
                        <Label>Width (%)</Label>
                        <Input
                          type="number"
                          value={selected.width}
                          onChange={(e) =>
                            updateElement(selected.id, {
                              width: Number(e.target.value),
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label>Height (%)</Label>
                        <Input
                          type="number"
                          value={selected.height}
                          onChange={(e) =>
                            updateElement(selected.id, {
                              height: Number(e.target.value),
                            })
                          }
                        />
                      </div>
                    </>
                  )}

                  <div>
                    <Label>Position X (%)</Label>
                    <Input
                      type="number"
                      value={selected.x}
                      onChange={(e) =>
                        updateElement(selected.id, {
                          x: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>Position Y (%)</Label>
                    <Input
                      type="number"
                      value={selected.y}
                      onChange={(e) =>
                        updateElement(selected.id, {
                          y: Number(e.target.value),
                        })
                      }
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="destructive"
                      onClick={() => removeElement(selected.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </aside>
      </div><PromoBanner/><PromoPopup/>
    </>
  );
}

// --- Utility functions ---
function cryptoRandomId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID)
    return crypto.randomUUID();
  return Math.random().toString(36).slice(2, 9);
}

function clamp(v: number, a: number, b: number) {
  return Math.max(a, Math.min(b, v));
}
