"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { useParams, useRouter } from "next/navigation"
import boardAPI from "@/app/apis/boardAPI"

export default function Page() {
  const { bno: bnoParam } = useParams()
  const bno = parseInt(bnoParam)
  const router = useRouter()

  const [board, setBoard] = useState({
    bno: "",
    btitle: "",
    bcontent: "",
  })

  const inputFileRef = useRef()

  // 게시글 정보 불러오기
  useEffect(() => {
    if (!bno) return

    const fetchBoard = async () => {
      try {
        const res = await boardAPI.boardRead(bno)
        setBoard({
          bno,
          btitle: res.data.btitle,
          bcontent: res.data.bcontent,
        })
      } catch (err) {
        console.error("게시글 정보 가져오기 실패:", err)
      }
    }

    fetchBoard()
  }, [bno])

  // 입력값 변경 핸들러
  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setBoard((prev) => ({ ...prev, [name]: value }))
  }, [])

  // 게시글 수정 요청
  const handleUpdate = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData()
      formData.append("bno", board.bno)
      formData.append("btitle", board.btitle)
      formData.append("bcontent", board.bcontent)

      if (inputFileRef.current?.files?.length === 1) {
        formData.append("battach", inputFileRef.current.files[0])
      }

      await boardAPI.boardUpdate(formData)
      router.back()
    } catch (err) {
      console.error("게시글 업데이트 실패:", err)
    }
  }

  const handleCancel = () => {
    router.back()
  }

  return (
    <div className="card">
      <div className="card-header">게시글 수정</div>
      <div className="card-body">
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="btitle" className="form-label">제목</label>
            <input
              type="text"
              id="btitle"
              name="btitle"
              className="form-control"
              value={board.btitle}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="bcontent" className="form-label">내용</label>
            <input
              type="text"
              id="bcontent"
              name="bcontent"
              className="form-control"
              value={board.bcontent}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="battach" className="form-label">수정할 파일</label>
            <input
              type="file"
              id="battach"
              name="battach"
              className="form-control"
              ref={inputFileRef}
            />
          </div>

          <div className="d-flex justify-content-center gap-2">
            <button type="submit" className="btn btn-primary btn-sm">수정</button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={handleCancel}>
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
