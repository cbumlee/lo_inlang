import * as m from "@/paraglide/messages"

export default function Home() {
  return (
    <button>
      {/* 입력하는 순간 자동완성 됨. 오타나면 빌드 에러. */}
      {m.btn_save()} 
    </button>
  )
}