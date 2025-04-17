"use client";
import { useEffect } from "react";
import BottomNavigation from "../main/BottomNavigation";
import FriendManagement from "./friendManagement";

declare global {
  interface Window {
    Kakao?: {
      Share: any;
      isInitialized: () => boolean;
      init: (key: string) => void;
    };
  }
}

export default function FriendsContainer() {
  useEffect(() => {
    const KAKAO_APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY;

    const loadKakaoSDK = () => {
      const script = document.createElement("script");
      script.src = "https://developers.kakao.com/sdk/js/kakao.js";
      script.async = true;

      script.onload = () => {
        if (window.Kakao && !window.Kakao.isInitialized()) {
          window.Kakao.init(KAKAO_APP_KEY);
          console.log("Kakao SDK initialized");
        }
      };

      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    };

    loadKakaoSDK();
  }, []);
  return (
    <div className="max-w-md mx-auto">
      <FriendManagement />
      <BottomNavigation activeTab="friends" />
    </div>
  );
}
