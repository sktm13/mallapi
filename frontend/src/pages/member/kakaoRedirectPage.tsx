import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { getAccessToken, getMemberWithAccessToken } from "../../api/kakaoApi";
import type { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { save } from "../../slices/loginSlice";

const KakaoRedirectPage = () => {

    const [searchParams] = useSearchParams();
    const authCode = searchParams.get("code");

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    useEffect(() => {

        if (!authCode) return;

        const handleKakaoLogin = async () => {
            try {
                const accessToken = await getAccessToken(authCode);

                const result = await getMemberWithAccessToken(accessToken);

                dispatch(save(result));

                if (result.social === true) {
                    navigate("/member/modify");
                } else {
                    navigate("/");
                }

            } catch (error) {
                console.error("Kakao login error:", error);
                navigate("/member/login"); // 실패 시 fallback
            }
        };

        handleKakaoLogin();

    }, [authCode, dispatch, navigate]);

    return <div>카카오 로그인 처리 중...</div>;
};

export default KakaoRedirectPage;