"use client"

import { useState, useRef, useCallback } from "react"
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"
import boardAPI from "@/app/apis/boardAPI"

export default function Page() {
    // 추가할 게시글에 대한 객체
    const [board, setBoard] = useState({ btitle: "", bcontent: "" })
    // 입력 파일 객체
    const inputFileRef = useRef()

    const router = useRouter()
    // 전역 사용자
    const gUser = useSelector((state) => state.auth.user)

    // 입력값 변경 핸들러
    const handleChange = useCallback((e) => {
        const { name, value } = e.target
        setBoard((prev) => ({ ...prev, [name]: value }))
    }, [])

    // 게시글 등록 함수
    // board, gUser, router 값이 바뀌지 않는 한 handleAdd 함수는 재생성하지 않도록 useCallback 사용
    const handleAdd = useCallback(async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append("btitle", board.btitle)
            formData.append("bcontent", board.bcontent)
            formData.append("bwriter", gUser)
            if (inputFileRef.current?.files?.length === 1) {
                formData.append("battach", inputFileRef.current.files[0])
            }

            await boardAPI.boardWrite(formData)
            router.back()
        } catch (err) {
            console.error("게시물 등록 실패:", err)
        }
    }, [board, gUser, router])

    // 취소 버튼
    const handleCancel = useCallback(() => {
        router.back()
    }, [router])

    return (
        <div className="card">
            <div className="card-header">게시글 작성</div>
            <div className="card-body">
                <form onSubmit={handleAdd}>
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
                        <label htmlFor="battach" className="form-label">파일 첨부</label>
                        <input
                            type="file"
                            id="battach"
                            name="battach"
                            className="form-control"
                            ref={inputFileRef}
                        />
                    </div>

                    <div className="d-flex justify-content-center gap-2">
                        <button type="submit" className="btn btn-primary btn-sm">추가</button>
                        <button type="button" className="btn btn-secondary btn-sm" onClick={handleCancel}>
                            취소
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
