"use client"

import * as m from "@/paraglide/messages"
import { setLanguageTag } from "@/paraglide/runtime"
import { useState } from "react"

export default function Home() {
  const [lang, setLang] = useState<"en" | "ko">("en")
  
  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ko" : "en"
    setLang(newLang)
    setLanguageTag(newLang)
  }
  
  return (
    <div className="p-5">
      <button onClick={toggleLanguage}  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        언어 전환
      </button>
      <div className="m-10 bg-white text-black">
        {m.channel_save()}
      </div>
    </div>
  )
}
