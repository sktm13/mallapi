import useCustomLogin from "../hooks/useCustomLogin";

function AboutPage() {

    // 1. 로그인 체크
    const { loginStatus, moveToLoginReturn } = useCustomLogin()

    if (loginStatus !== 'fulfilled' && loginStatus !== 'saved') {
        return moveToLoginReturn()
    }

    return (
        <div className="max-w-3xl mx-auto py-10 px-4">

            {/* 제목 */}
            <h1 className="text-3xl font-bold mb-6">
                프로젝트 소개
            </h1>

            {/* 소개 */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">개요</h2>
                <p className="text-gray-600">
                    이 프로젝트는 Spring Boot와 React를 기반으로 구현한 쇼핑몰 서비스입니다.
                    강의를 기반으로 학습하며, 실제 사용자 상황을 고려한 기능들을 추가로 구현했습니다.
                </p>
            </div>

            {/* 주요 기능 */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">주요 기능</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>JWT 기반 로그인 인증</li>
                    <li>상품 목록 조회 및 이미지 출력</li>
                    <li>장바구니 추가 및 수량 변경 기능</li>
                    <li>기본 이미지 처리 (default 이미지)</li>
                </ul>
            </div>

            {/* 기술 스택 */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">기술 스택</h2>
                <ul className="text-gray-600 space-y-1">
                    <li><strong>Backend:</strong> Spring Boot, Spring Security, JPA</li>
                    <li><strong>Frontend:</strong> React, TypeScript, Redux Toolkit</li>
                    <li><strong>Database:</strong> MariaDB / MySQL</li>
                </ul>
            </div>

            {/* 구현 내용 */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">구현 내용</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>JWT 인증 흐름 직접 구현</li>
                    <li>로그인 성공 / 실패 핸들러 커스터마이징</li>
                    <li>장바구니 수량 변경 로직 구현</li>
                    <li>썸네일 이미지 생성 (s_ prefix)</li>
                </ul>
            </div>

        </div>
    );
}

export default AboutPage;