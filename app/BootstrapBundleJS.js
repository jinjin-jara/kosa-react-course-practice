// Next.js에서 해당 컴포넌트를 클라이언트 컴포넌트로 명시
"use client"

// Bootstrap의 CSS 스타일시트를 전역에 import합니다.
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react";
export default function BootstrapBundleJS() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return null;
}