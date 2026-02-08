# Step 1: 프로젝트 기본 구조 및 네비게이션 설정

## 현재 상태 분석

### ✅ 완료된 것
- Expo 프로젝트 초기화 완료
- 필수 패키지 설치 완료:
  - `@react-native-async-storage/async-storage` (설정 저장)
  - `expo-location` (위치 권한)
  - `expo-notifications` (알림)
  - React Native 기본 패키지

### ❌ 아직 안 된 것
- src/ 디렉토리 구조 없음
- 화면(Screen) 컴포넌트 없음
- 네비게이션 설정 없음
- 위치 권한 처리 로직 없음
- 백엔드(Firebase) 설정 없음

---

## Step 1 목표

**기본 앱 구조와 네비게이션을 구축하여 화면 간 이동이 가능한 앱 뼈대 만들기**

### 구현 범위
1. 프로젝트 폴더 구조 생성
2. React Navigation 설치 및 설정
3. 3개 기본 화면 생성 (HomeScreen, NotificationSettingsScreen, SettingsScreen)
4. 위치 권한 요청 및 현재 위치 가져오기
5. 기본 UI 컴포넌트 (WeatherCard 뼈대)

---

## 세부 구현 계획

### 1. 프로젝트 폴더 구조 생성

```
front/
├── src/
│   ├── screens/              # 화면 컴포넌트
│   │   ├── HomeScreen.js
│   │   ├── NotificationSettingsScreen.js
│   │   └── SettingsScreen.js
│   ├── components/           # 재사용 컴포넌트
│   │   └── WeatherCard.js
│   ├── services/             # API 호출 로직 (추후)
│   ├── utils/                # 유틸리티 함수
│   ├── hooks/                # Custom hooks
│   │   └── useLocation.js
│   └── navigation/           # 네비게이션 설정
│       └── AppNavigator.js
├── App.js
└── package.json
```

**작업 항목:**
- [ ] src/ 및 하위 디렉토리 생성

---

### 2. React Navigation 설치

**필요한 패키지:**
```bash
npm install @react-navigation/native @react-navigation/bottom-tabs
npm install react-native-screens react-native-safe-area-context
```

**작업 항목:**
- [ ] React Navigation 패키지 설치
- [ ] AppNavigator.js 생성 (BottomTabNavigator 사용)
- [ ] App.js에서 NavigationContainer 설정

---

### 3. 기본 화면 생성

#### 3-1. HomeScreen.js
**화면 목적:** 오늘 날씨 정보 표시 (현재는 UI 뼈대만)

**구현 내용:**
- 기본 레이아웃 (헤더, 날씨 카드 영역)
- "날씨 정보 로딩 중..." 텍스트 표시
- 위치 정보 표시 (위도/경도)

**작업 항목:**
- [ ] HomeScreen.js 생성
- [ ] 기본 UI 레이아웃 구현
- [ ] WeatherCard 컴포넌트 임포트

---

#### 3-2. NotificationSettingsScreen.js
**화면 목적:** 알림 설정 관리 (현재는 UI 뼈대만)

**구현 내용:**
- 알림 종류 목록 표시 (우산, 미세먼지, 폭염/한파)
- 각 알림에 대한 Switch (ON/OFF)
- 알림 시간 선택 버튼 (기능은 추후)

**작업 항목:**
- [ ] NotificationSettingsScreen.js 생성
- [ ] 알림 리스트 UI 구현
- [ ] Switch 컴포넌트 배치 (기능 없음, UI만)

---

#### 3-3. SettingsScreen.js
**화면 목적:** 앱 설정 관리

**구현 내용:**
- 위치 권한 상태 표시
- 위치 권한 요청 버튼
- 알림 권한 상태 표시 (추후)
- 앱 정보 (버전 등)

**작업 항목:**
- [ ] SettingsScreen.js 생성
- [ ] 권한 상태 UI 구현
- [ ] "위치 권한 요청" 버튼 구현

---

### 4. 위치 권한 처리

#### 4-1. useLocation 커스텀 훅 생성

**기능:**
- 위치 권한 요청
- 현재 위치 가져오기 (위도, 경도)
- 권한 상태 관리

**파일:** `src/hooks/useLocation.js`

**반환값:**
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

**작업 항목:**
- [ ] useLocation.js 생성
- [ ] expo-location API 사용하여 권한 요청 구현
- [ ] 현재 위치 가져오기 함수 구현
- [ ] 에러 처리 추가

---

#### 4-2. SettingsScreen에서 위치 권한 연동

**작업 항목:**
- [ ] useLocation 훅을 SettingsScreen에 연결
- [ ] 권한 상태 표시
- [ ] "위치 권한 요청" 버튼 클릭 시 requestPermission 호출

---

### 5. 기본 UI 컴포넌트

#### 5-1. WeatherCard 컴포넌트

**화면 목적:** 날씨 정보 카드 (UI 뼈대)

**구현 내용:**
- 현재는 "날씨 정보를 불러오는 중..." 텍스트만 표시
- 추후 실제 날씨 데이터를 props로 받아 표시

**파일:** `src/components/WeatherCard.js`

**작업 항목:**
- [ ] WeatherCard.js 생성
- [ ] 기본 카드 레이아웃 (스타일링)
- [ ] props로 loading 상태 받기

---

### 6. App.js 수정

**작업 항목:**
- [ ] NavigationContainer 추가
- [ ] AppNavigator 임포트
- [ ] 기본 템플릿 코드 제거

---

## 완료 조건 (Definition of Done)

Step 1이 완료되면 다음이 가능해야 함:

✅ 앱 실행 시 3개 탭(홈, 알림설정, 설정)이 보임
✅ 탭 클릭 시 화면 전환이 정상 작동
✅ 설정 화면에서 "위치 권한 요청" 버튼 클릭 시 권한 요청 팝업 표시
✅ 권한 승인 후 HomeScreen에 위도/경도 정보 표시
✅ 에러가 발생해도 앱이 크래시되지 않음

---

## 예상 작업 시간

- 폴더 구조 생성: 10분
- React Navigation 설치 및 설정: 30분
- 화면 3개 생성: 1시간
- useLocation 훅 구현: 1시간
- WeatherCard 컴포넌트: 30분
- 테스트 및 버그 수정: 1시간

**총 예상 시간: 약 4시간**

---

## 다음 단계 (Step 2 Preview)

Step 1 완료 후 다음 단계:
- 기상청 API 연동
- 실제 날씨 데이터 가져오기
- WeatherCard에 날씨 정보 표시
- 위도/경도 → 주소 변환 (카카오 API)