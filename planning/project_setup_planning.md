핵심 기능 (v1.0)
1. 필수 기능

위치 기반 날씨 조회 (현재 위치 자동 감지)
알림 설정

우산 챙기기 (강수확률 60% 이상)
미세먼지 나쁨 (81㎍/㎥ 이상)
폭염/한파 주의보


알림 시간 설정 (예: 매일 오전 7시)
간단한 오늘 날씨 요약 (홈 화면)

2. 기술 스택
   프론트엔드
- React Native (Expo 추천 - 빌드 쉬움)
- AsyncStorage (설정 저장)
- Expo Notifications (푸시 알림)
- React Navigation (화면 전환)
  백엔드
- Firebase Cloud Functions (무료 플랜)
  → 매일 정해진 시간 날씨 체크 후 알림 발송
- Firestore (사용자 설정 저장, 무료 플랜으로 충분)
  API
- 기상청 공공데이터 API (무료)
    - 동네예보 API
    - 대기오염 API
- 카카오 로컬 API (주소→좌표 변환, 무료)
3. 최소 화면 구성
1. 홈 화면
    - 오늘 날씨 카드
    - 활성화된 알림 목록

2. 알림 설정 화면
    - 알림 ON/OFF 토글
    - 알림 시간 선택
    - 각 알림 임계값 조정 (선택)

3. 설정 화면
    - 위치 권한
    - 알림 권한
4. 데이터 흐름
   [사용자 앱]
   ↓ (알림 설정 저장)
   [Firestore]
   ↓
   [Cloud Function - 스케줄러]
   ↓ (매일 설정된 시간)
   [기상청 API 호출]
   ↓
   [조건 체크 후 FCM 발송]
   ↓
   [사용자에게 알림]
5. 비용 구조
   개발 단계

$0 (Expo 무료, API 무료)

운영 단계

Firebase 무료 플랜 한도

Firestore: 읽기 50K/일, 쓰기 20K/일
Cloud Functions: 호출 125K/월
→ 사용자 1,000명까지 무료로 충분


Google Play 등록: $25 (일회성)

월 유지비: 사용자 1천명 이하면 0원
6. 개발 우선순위
   Week 1-2: 기본 앱 구조

RN 프로젝트 세팅
화면 레이아웃
위치 권한 처리

Week 3: API 연동

기상청 API 테스트
날씨 데이터 파싱 및 표시

Week 4: 알림 기능

Expo Notifications 설정
Firebase Cloud Functions 배포
스케줄러 설정

Week 5: 테스트 & 배포

실제 알림 테스트
베타 배포

6. 프로젝트 구조
```
chaeng-gyeo/
├── front/                     # React Native (Expo) 앱
│   ├── src/
│   │   ├── screens/          # 화면 컴포넌트
│   │   │   ├── HomeScreen.js
│   │   │   ├── NotificationSettingsScreen.js
│   │   │   └── SettingsScreen.js
│   │   ├── components/       # 재사용 컴포넌트
│   │   │   ├── WeatherCard.js
│   │   │   └── NotificationToggle.js
│   │   ├── services/         # API 호출 로직
│   │   │   ├── weatherService.js
│   │   │   └── firebaseService.js
│   │   ├── utils/            # 유틸리티 함수
│   │   ├── hooks/            # Custom hooks
│   │   └── navigation/       # 네비게이션 설정
│   ├── assets/               # 이미지, 폰트 등
│   ├── App.js
│   ├── app.json
│   └── package.json
│
├── back/                      # Firebase Cloud Functions
│   ├── src/
│   │   ├── schedulers/       # 스케줄러 함수
│   │   │   └── weatherCheckScheduler.js
│   │   ├── api/              # 외부 API 연동
│   │   │   ├── weatherAPI.js      # 기상청 API
│   │   │   └── kakaoAPI.js        # 카카오 로컬 API
│   │   ├── services/         # 비즈니스 로직
│   │   │   ├── notificationService.js
│   │   │   └── weatherService.js
│   │   └── index.js          # Cloud Functions 엔트리
│   ├── package.json
│   └── firebase.json
│
├── planning/                  # 기획 문서
│   └── planning_1.md
│
├── .gitignore
└── README.md
```

차별화 포인트 (나중에 추가)

🎯 "출근 준비 시간" 맞춤 알림
🌡️ 체감온도 기반 옷차림 추천
☔ 우산 대여 위치 안내 (따릉이 API 연동)
🚗 세차하기 좋은 날 알림

이 정도 스펙이면 2-3주 안에 MVP 출시 가능할 것 같은데, 어떠세요?