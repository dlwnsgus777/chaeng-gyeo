# 챙겨 앱 개발 작업 계획

> **현재 상태**: 디자인 시안 완료 (시안 1: 미니멀 모던 선택)
> **다음 단계**: Step 1 - 기본 앱 구조 및 네비게이션 설정

---

## Step 1: 기본 앱 구조 및 네비게이션 설정

**목표**: 기본 앱 구조와 네비게이션을 구축하여 화면 간 이동이 가능한 앱 뼈대 만들기

### 1-1. React Navigation 설치 및 설정
- [ ] React Navigation 패키지 설치
  ```bash
  npm install @react-navigation/native @react-navigation/bottom-tabs
  npm install react-native-screens react-native-safe-area-context
  ```
- [ ] `src/navigation/AppNavigator.js` 생성 (BottomTabNavigator)
- [ ] `App.js`에서 NavigationContainer 설정

**예상 시간**: 30분

---

### 1-2. 폴더 구조 완성
- [ ] `src/hooks/` 폴더 생성
- [ ] `src/services/` 폴더 생성 (API 호출 로직용)
- [ ] `src/utils/` 폴더 생성 (유틸리티 함수용)
- [ ] `src/navigation/` 폴더 생성

**예상 시간**: 10분

---

### 1-3. 화면 컴포넌트 생성
- [ ] `src/screens/HomeScreen.js`
  - 오늘 날씨 정보 표시 화면
  - 기본 레이아웃 (헤더, 날씨 카드 영역)
  - "날씨 정보 로딩 중..." 텍스트 표시
  - 위치 정보 표시 (위도/경도)

- [ ] `src/screens/NotificationSettingsScreen.js`
  - 알림 설정 화면
  - 알림 종류 목록 표시 (우산, 미세먼지, 폭염/한파)
  - 각 알림에 대한 Switch (ON/OFF) - UI만
  - 알림 시간 선택 버튼 (기능은 추후)

- [ ] `src/screens/SettingsScreen.js`
  - 앱 설정 화면
  - 위치 권한 상태 표시
  - 위치 권한 요청 버튼
  - 앱 정보 (버전 등)

**예상 시간**: 1시간

---

### 1-4. 위치 권한 처리
- [ ] `src/hooks/useLocation.js` 커스텀 훅 생성
  - 위치 권한 요청 기능
  - 현재 위치 가져오기 (위도, 경도)
  - 권한 상태 관리
  - 에러 처리

  **반환값**:
  ```javascript
  {
    location: { latitude, longitude } | null,
    permissionStatus: 'granted' | 'denied' | 'undetermined',
    requestPermission: () => Promise<void>,
    getCurrentLocation: () => Promise<void>,
    isLoading: boolean,
    error: string | null
  }
  ```

- [ ] SettingsScreen에서 useLocation 훅 연동
  - 권한 상태 표시
  - "위치 권한 요청" 버튼 클릭 시 requestPermission 호출

**예상 시간**: 1시간

---

### 1-5. 기본 UI 컴포넌트
- [ ] `src/components/WeatherCard.js`
  - 날씨 정보 카드 컴포넌트 (UI 뼈대)
  - 현재는 "날씨 정보를 불러오는 중..." 텍스트만 표시
  - 추후 실제 날씨 데이터를 props로 받아 표시
  - 기본 카드 레이아웃 (스타일링)
  - props로 loading 상태 받기

**예상 시간**: 30분

---

### Step 1 완료 조건 (Definition of Done)

✅ 앱 실행 시 3개 탭(홈, 알림설정, 설정)이 보임
✅ 탭 클릭 시 화면 전환이 정상 작동
✅ 설정 화면에서 "위치 권한 요청" 버튼 클릭 시 권한 요청 팝업 표시
✅ 권한 승인 후 HomeScreen에 위도/경도 정보 표시
✅ 에러가 발생해도 앱이 크래시되지 않음

**Step 1 총 예상 시간**: 약 4시간

---

## Step 2: API 연동 및 날씨 데이터

**목표**: 기상청 API를 연동하여 실제 날씨 데이터를 가져오고 화면에 표시

### 2-1. 기상청 API 연동
- [ ] 기상청 공공데이터포털에서 API 키 발급
  - 동네예보 API
  - 대기오염 API

- [ ] `src/services/weatherService.js` 생성
  - 기상청 API 호출 함수
  - 날씨 데이터 파싱
  - 에러 처리

- [ ] 날씨 데이터 상태 관리
  - `src/hooks/useWeather.js` 커스텀 훅 생성 (선택사항)

**예상 시간**: 2시간

---

### 2-2. 카카오 로컬 API 연동
- [ ] 카카오 개발자 센터에서 API 키 발급
- [ ] `src/services/kakaoService.js` 생성
  - 좌표 → 주소 변환 함수
  - API 호출 및 파싱

**예상 시간**: 1시간

---

### 2-3. 날씨 데이터 표시
- [ ] WeatherCard 컴포넌트 업데이트
  - 실제 날씨 데이터 props로 받기
  - 온도, 날씨 상태, 강수확률 표시
  - 최고/최저 온도 표시

- [ ] 날씨 아이콘 추가
  - assets 폴더에 날씨 아이콘 이미지 추가
  - 또는 아이콘 라이브러리 사용 (react-native-vector-icons)

- [ ] HomeScreen 업데이트
  - weatherService를 사용하여 날씨 데이터 가져오기
  - 로딩 상태 처리
  - 에러 메시지 표시
  - 새로고침 기능

**예상 시간**: 2시간

---

### 2-4. 데이터 저장 (선택사항)
- [ ] AsyncStorage를 사용하여 마지막 날씨 데이터 캐싱
- [ ] 오프라인 상태에서도 마지막 데이터 표시

**예상 시간**: 1시간

---

### Step 2 완료 조건

✅ 현재 위치 기반으로 실제 날씨 데이터 표시
✅ 온도, 날씨 상태, 강수확률, 최고/최저 온도 표시
✅ 날씨 아이콘이 적절하게 표시됨
✅ 로딩 및 에러 상태 처리
✅ 주소 정보가 한글로 표시됨

**Step 2 총 예상 시간**: 약 6시간

---

## Step 3: 알림 기능 구현

**목표**: 사용자가 설정한 조건에 따라 푸시 알림을 받을 수 있도록 구현

### 3-1. Firebase 프로젝트 설정
- [ ] Firebase Console에서 새 프로젝트 생성
- [ ] Firebase 프로젝트에 Android 앱 추가
- [ ] `google-services.json` 다운로드 및 프로젝트에 추가
- [ ] Firebase SDK 설치
  ```bash
  npm install @react-native-firebase/app @react-native-firebase/messaging @react-native-firebase/firestore
  ```

**예상 시간**: 1시간

---

### 3-2. Firestore 데이터베이스 설정
- [ ] Firestore 데이터베이스 생성
- [ ] 컬렉션 구조 설계
  ```
  users/
    {userId}/
      settings/
        - notificationTime: "07:00"
        - notifications: {
            rain: { enabled: true, threshold: 60 },
            dust: { enabled: true, threshold: 81 },
            weather: { enabled: true }
          }
        - location: { latitude, longitude }
        - fcmToken: "..."
  ```
- [ ] 보안 규칙 설정

**예상 시간**: 1시간

---

### 3-3. 프론트엔드 알림 설정 구현
- [ ] `src/services/firebaseService.js` 생성
  - Firebase 초기화
  - FCM 토큰 가져오기
  - Firestore 데이터 읽기/쓰기 함수

- [ ] NotificationSettingsScreen 업데이트
  - 알림 ON/OFF 토글 기능 구현
  - 알림 설정 변경 시 Firestore에 저장
  - 알림 시간 선택 기능 (TimePicker)
  - AsyncStorage에도 설정 저장 (로컬 캐시)

- [ ] Expo Notifications 설정
  - 알림 권한 요청
  - FCM 토큰 등록
  - 알림 수신 처리

**예상 시간**: 3시간

---

### 3-4. 백엔드 Cloud Functions 구현
- [ ] `back/` 폴더에 Firebase Functions 프로젝트 초기화
  ```bash
  cd back
  npm install -g firebase-tools
  firebase init functions
  ```

- [ ] `src/schedulers/weatherCheckScheduler.js` 생성
  - Cloud Scheduler로 매일 정해진 시간에 실행
  - 모든 사용자의 위치 정보 가져오기
  - 각 사용자별로 날씨 API 호출
  - 조건 체크 (강수확률, 미세먼지, 특보)

- [ ] `src/services/notificationService.js` 생성
  - FCM을 통한 푸시 알림 발송 함수
  - 알림 메시지 템플릿

- [ ] Cloud Functions 배포
  ```bash
  firebase deploy --only functions
  ```

**예상 시간**: 4시간

---

### 3-5. 테스트
- [ ] 실제 디바이스에서 알림 권한 테스트
- [ ] 알림 설정 변경 및 저장 테스트
- [ ] Cloud Functions 수동 실행 테스트
- [ ] 실제 푸시 알림 수신 테스트

**예상 시간**: 2시간

---

### Step 3 완료 조건

✅ 사용자가 알림 설정을 변경할 수 있음
✅ 알림 설정이 Firestore에 저장됨
✅ 설정된 시간에 Cloud Function이 실행됨
✅ 조건에 맞는 날씨일 때 푸시 알림이 발송됨
✅ 앱에서 알림을 정상적으로 수신함

**Step 3 총 예상 시간**: 약 11시간

---

## Step 4: UI/UX 개선 및 테스트

**목표**: 디자인 시안을 적용하고 사용자 경험을 개선

### 4-1. 디자인 시안 적용
- [ ] 시안 1 (미니멀 모던) 컬러 팔레트 적용
  ```javascript
  // src/constants/colors.js
  export const colors = {
    primary: '#4A90E2',
    secondary: '#F5A623',
    background: '#F8F9FA',
    card: '#FFFFFF',
    text: '#2C3E50',
    textMuted: '#95A5A6',
    warning: '#E74C3C',
    success: '#2ECC71'
  }
  ```

- [ ] 타이포그래피 스타일 적용
- [ ] 카드 컴포넌트 스타일링
  - 그림자 효과
  - 둥근 모서리 (borderRadius: 16)
  - 넉넉한 패딩

**예상 시간**: 2시간

---

### 4-2. 애니메이션 추가
- [ ] 화면 전환 애니메이션
- [ ] 날씨 카드 로딩 애니메이션
- [ ] 스위치 토글 애니메이션
- [ ] Pull-to-refresh 기능

**예상 시간**: 2시간

---

### 4-3. 에러 처리 개선
- [ ] 네트워크 에러 메시지
- [ ] 위치 권한 거부 시 안내 메시지
- [ ] API 호출 실패 시 재시도 버튼
- [ ] 적절한 에러 토스트 메시지

**예상 시간**: 1시간

---

### 4-4. 종합 테스트
- [ ] 실제 디바이스에서 전체 플로우 테스트
- [ ] 다양한 날씨 조건 시뮬레이션
- [ ] 알림 발송 시나리오 테스트
- [ ] 권한 거부 시나리오 테스트
- [ ] 네트워크 오프라인 시나리오 테스트

**예상 시간**: 2시간

---

### Step 4 완료 조건

✅ 디자인 시안이 전체 화면에 일관되게 적용됨
✅ 부드러운 애니메이션과 전환 효과
✅ 모든 에러 상황에서 적절한 메시지 표시
✅ 실제 디바이스에서 안정적으로 동작

**Step 4 총 예상 시간**: 약 7시간

---

## Step 5: 배포 준비

**목표**: 앱을 Google Play Store에 배포할 준비

### 5-1. 앱 정보 설정
- [ ] 앱 아이콘 제작 및 적용
- [ ] 스플래시 스크린 제작 및 적용
- [ ] 앱 이름 최종 확정
- [ ] 앱 설명 작성
- [ ] 스크린샷 준비 (최소 2개)

**예상 시간**: 2시간

---

### 5-2. 빌드 설정
- [ ] `app.json` 설정 확인
  - version, versionCode
  - package name
  - permissions

- [ ] Android 릴리즈 빌드 생성
  ```bash
  eas build --platform android
  ```

- [ ] APK/AAB 파일 테스트

**예상 시간**: 2시간

---

### 5-3. Google Play Console 설정
- [ ] Google Play Console 개발자 계정 등록 ($25)
- [ ] 새 앱 생성
- [ ] 스토어 등록정보 작성
  - 앱 설명
  - 스크린샷
  - 개인정보처리방침

- [ ] 내부 테스트 트랙에 업로드
- [ ] 베타 테스터 초대

**예상 시간**: 3시간

---

### 5-4. 베타 테스트
- [ ] 5-10명의 베타 테스터 모집
- [ ] 피드백 수집
- [ ] 버그 수정
- [ ] 최종 빌드

**예상 시간**: 5시간 (테스트 기간 제외)

---

### Step 5 완료 조건

✅ 앱 아이콘과 스플래시 스크린 적용
✅ 릴리즈 빌드가 정상적으로 생성됨
✅ Google Play Console에 앱 등록 완료
✅ 베타 테스트 완료 및 주요 버그 수정
✅ 프로덕션 배포 준비 완료

**Step 5 총 예상 시간**: 약 12시간

---

## 전체 개발 일정 요약

| Step | 내용 | 예상 시간 | 예상 기간 |
|------|------|-----------|-----------|
| Step 1 | 기본 앱 구조 및 네비게이션 | 4시간 | 1일 |
| Step 2 | API 연동 및 날씨 데이터 | 6시간 | 1-2일 |
| Step 3 | 알림 기능 구현 | 11시간 | 2-3일 |
| Step 4 | UI/UX 개선 및 테스트 | 7시간 | 1-2일 |
| Step 5 | 배포 준비 | 12시간 | 2-3일 |
| **총합** | | **40시간** | **1-2주** |

---

## 향후 기능 (v2.0 이후)

### 차별화 기능
- [ ] 다크 모드 추가
- [ ] 출근 준비 시간 맞춤 알림
- [ ] 체감온도 기반 옷차림 추천
- [ ] 우산 대여 위치 안내 (따릉이 API 연동)
- [ ] 세차하기 좋은 날 알림
- [ ] 위젯 지원
- [ ] 주간 날씨 예보

### 기술 개선
- [ ] 코드 리팩토링
- [ ] 단위 테스트 추가
- [ ] E2E 테스트 추가
- [ ] CI/CD 파이프라인 구축
- [ ] 성능 최적화
- [ ] 에러 모니터링 (Sentry 등)
- [ ] 분석 도구 연동 (Firebase Analytics 등)

---

## 참고 문서

- [프로젝트 초기 기획](./project_setup_planning.md)
- [Step 1 상세 계획](./step1_planning.md)
- [디자인 시안](./design_concepts.md)

---

**마지막 업데이트**: 2026-02-08
**현재 진행 상황**: 디자인 완료, Step 1 준비 중