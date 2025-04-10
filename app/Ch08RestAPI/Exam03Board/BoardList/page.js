"use client"

import { useSearchParams } from "next/navigation"
import { useSelector } from "react-redux"
import boardAPI from "@/app/apis/boardAPI"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Page() {
    // 페이지 넘버 가져오기 위해서 쿼리 스트링 가져오기
    const queryString = useSearchParams()
    const queryPageNo = parseInt(queryString.get("pageNo") || "1")

    const [pageNo, setPageNo] = useState(queryPageNo)
    const [page, setPage] = useState(null)

    //Redux 전역 상태 이용
    const gUser = useSelector((rootState) => rootState.auth.user)

    useEffect(() => {
        console.log(pageNo)
        const fetchpage = async () => {
            try {
                const res = await boardAPI.getBoardList(pageNo)
                setPage(res.data)
            } catch (e) {
                console.log("page 호출 실패: ", e)
                setPage(null)
            }
        }
        fetchpage()
    }, [pageNo])

    return (
        <div className="card">
            <div className="card-header">
                게시글 목록
            </div>
            <div className="card-body">
                {
                    gUser !== "" && (
                        <div className="mb-3">
                            <Link href="BoardWrite" className="btn btn-success btn-sm">생성</Link>
                        </div>
                    )
                }
                {
                    page !== null && (
                        <>
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>제목</th>
                                        <th>글쓴이</th>
                                        <th>날짜</th>
                                        <th>조회수</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {page.boards.map(board => {
                                        return (
                                            <tr key={board.bno}>
                                                <td>{board.bno}</td>
                                                <td style={{ width: "40%" }}>
                                                    {gUser !== "" ? (
                                                        <Link href={`BoardRead/${board.bno}?pageNo=${page.pager.pageNo}&caller=list`}>
                                                            {board.btitle}
                                                        </Link>
                                                    ) : (
                                                        board.btitle
                                                    )}
                                                </td>
                                                <td>{board.bwriter}</td>
                                                <td>{new Date(board.bdate).toLocaleDateString()}</td>
                                                <td>{board.bhitcount}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <div className="d-flex flex-row align-items-center justify-content-center gap-2">
                                <button className="btn btn-secondary btn-sm me-1" onClick={() => setPageNo(1)}>처음</button>
                                {(page.pager.groupNo > 1) &&
                                    <button className="btn btn-outline-primary btn-sm me-1" onClick={() => setPageNo(page.pager.startPageNo - 1)}>이전</button>
                                }
                                {page.pager.pageArray.map(i =>
                                    <button className={`btn ${i === page.pager.pageNo ? "btn-success" : "btn-outline-success"} btn-sm me-1`} key={i} onClick={() => setPageNo(i)}>{i}</button>
                                )}
                                {page.pager.groupNo < page.pager.totalGroupNo &&
                                    <button className="btn btn-outline-primary btn-sm me-1" onClick={() => setPageNo(page.pager.endPageNo + 1)}>다음</button>
                                }
                                <button className="btn btn-secondary btn-sm" onClick={() => setPageNo(page.pager.totalPageNo)}>맨끝</button>
                            </div>
                        </>
                    )
                }

            </div>
        </div>
    )
}