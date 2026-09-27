"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [...data.entries()].map(([k, v]) => `${k}: ${v}`).join("%0A");
    window.location.href = `mailto:hello@autoclientflow.tbd?subject=智客流查詢&body=${lines}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="rounded-2xl border border-line bg-card p-8">
        已打開電郵。你亦可以用 WhatsApp 直接搜我哋。
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-line bg-card p-6">
      {[
        ["shop", "店名 / Shop name"],
        ["name", "聯絡人 / Name"],
        ["phone", "電話或 WhatsApp"],
        ["email", "電郵 / Email"],
      ].map(([name, label]) => (
        <label key={name} className="block text-sm text-mute">
          {label}
          <input required name={name} className="mt-1 w-full rounded-lg border border-white/10 bg-black px-3 py-2 text-text" />
        </label>
      ))}
      <label className="block text-sm text-mute">
        行業 / Industry
        <select name="industry" className="mt-1 w-full rounded-lg border border-white/10 bg-black px-3 py-2 text-text">
          <option>餐飲</option>
          <option>美容</option>
          <option>零售</option>
          <option>服裝</option>
          <option>花店</option>
          <option>其他</option>
        </select>
      </label>
      <label className="block text-sm text-mute">
        想解決咩
        <textarea name="need" rows={4} className="mt-1 w-full rounded-lg border border-white/10 bg-black px-3 py-2 text-text" />
      </label>
      <button type="submit" className="w-full rounded-full bg-terra py-3 text-sm font-bold text-black">
        送出，我哋 1 個工作天內回覆
      </button>
    </form>
  );
}
