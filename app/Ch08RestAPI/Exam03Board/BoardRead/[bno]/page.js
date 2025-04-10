"use client"

import { useEffect, useState } from "react"
import { useParams, useSearchParams, useRouter } from "next/navigation"
import { useSelector } from "react-redux"
import Link from "next/link"
import boardAPI from "@/app/apis/boardAPI"

export default function Page() {
    const { bno: bnoParam } = useParams()
    const searchParams = useSearchParams()
    const router = useRouter()

    const bno = parseInt(bnoParam)
    const pageNo = parseInt(searchParams.get("pageNo") || "1")
    const caller = searchParams.get("caller")

    const gUser = useSelector((state) => state.auth.user)

    const [boardInfo, setBoardInfo] = useState(null)
    const [loading, setLoading] = useState(true)
    const [imgSrc, setImgSrc] = useState(null)

    // 게시글 내용 가져오기
    useEffect(() => {
        if (!bno || !caller) return
        const fetchBoard = async () => {
            try {
                setLoading(true)
                const res = await boardAPI.boardRead(bno, caller)
                setBoardInfo(res.data)
            } catch (error) {
                console.error("게시글 내용 호출 실패:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchBoard()
    }, [bno, caller])

    // 첨부 이미지 다운로드
    useEffect(() => {
        const fetchImage = async () => {
            try {
                const res = await boardAPI.boardAttachDownload(boardInfo.bno)
                setImgSrc(URL.createObjectURL(res.data))
            } catch (error) {
                console.error("이미지 다운로드 실패:", error)
            }
        }

        if (boardInfo?.battachoname) {
            fetchImage()
        }
    }, [boardInfo])

    // 게시글 삭제
    const handleRemove = async () => {
        const confirmed = window.confirm("정말 삭제하시겠습니까?")
        if (!confirmed) return

        try {
            await boardAPI.boardDelete(boardInfo.bno)
            router.push(`../BoardList?pageNo=${pageNo}`)
        } catch (error) {
            console.error("삭제 실패:", error)
        }
    }

    return (
        <div className="card">
            <div className="card-header">게시글 내용</div>
            <div className="card-body">
                {/* ✅ 로딩 중일 때 스피너 표시 */}
                {loading ? (
                    <div className="mt-3 d-flex justify-content-center">
                        <div className="spinner-border text-info" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : boardInfo === null ? (
                    <p>게시글 내용을 불러오는데 실패하였습니다.</p>
                ) : (
                    <>
                        <div className="d-flex flex-column gap-2">
                            <p>bno: {boardInfo.bno}</p>
                            <p>btitle: {boardInfo.btitle}</p>
                            <p>bcontent: {boardInfo.bcontent}</p>
                            <p>bwriter: {boardInfo.bwriter}</p>
                            <p>bdate: {new Date(boardInfo.bdate).toLocaleDateString()}</p>
                            <p>bhitcount: {boardInfo.bhitcount}</p>
                            {
                                boardInfo.battachoname && (
                                    <>
                                        <p>battachoname: {boardInfo.battachoname}</p>
                                        <p>battachtype: {boardInfo.battachtype}</p>
                                    </>
                                )
                            }
                        </div>

                        {/* 이미지 사진 있는 경우 */}
                        <div className="col-md-6">
                            {imgSrc && (
                                <img src={imgSrc} alt="" width="200" />
                            )}
                        </div>

                        <div className="d-flex flex-row align-items-center justify-content-center gap-2 mt-3">
                            <Link
                                href={`/Ch08RestAPI/Exam03Board/BoardList?pageNo=${pageNo}`}
                                className="btn btn-primary btn-sm"
                            >
                                목록
                            </Link>
                            {gUser === boardInfo.bwriter && (
                                <>
                                    <Link
                                        href={`/Ch08RestAPI/Exam03Board/BoardUpdate/${boardInfo.bno}`}
                                        className="btn btn-secondary btn-sm"
                                    >
                                        수정
                                    </Link>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={handleRemove}
                                    >
                                        삭제
                                    </button>
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
