# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**챙겨 (Chaeng-gyeo)** - A weather-based notification app that reminds users to bring umbrellas, wear masks for air quality, and prepare for extreme weather conditions.

**Tech Stack:**
- Frontend: React Native with Expo (~54.0.33)
- Backend: Firebase Cloud Functions (planned)
- Database: Firestore (planned)
- APIs: Korea Meteorological Administration API, Kakao Local API

**Current Status:** Design phase complete, beginning Step 1 (basic app structure and navigation)

## Development Commands

### Frontend (React Native/Expo)

```bash
cd front

# Start development server
npm start

# Start on specific platforms
npm run android
npm run ios
npm run web
```

### Installation

```bash
# Install frontend dependencies
cd front && npm install
```

## Project Architecture

### Monorepo Structure

```
chaeng-gyeo/
├── front/              # React Native (Expo) app
│   ├── src/
│   │   ├── screens/           # Screen components (HomeScreen, NotificationSettingsScreen, SettingsScreen)
│   │   ├── components/        # Reusable UI components (WeatherCard, TabNavigator)
│   │   ├── services/          # API integration (weatherService, firebaseService, kakaoService)
│   │   ├── hooks/             # Custom React hooks (useLocation, useWeather)
│   │   ├── navigation/        # React Navigation setup
│   │   ├── utils/             # Utility functions
│   │   └── constants/         # App constants (colors.js with theme)
│   ├── App.js
│   └── app.json
│
├── back/              # Firebase Cloud Functions (not yet created)
│   └── src/
│       ├── schedulers/        # Scheduled functions (weatherCheckScheduler)
│       ├── api/               # External API wrappers
│       └── services/          # Business logic
│
└── planning/          # Project documentation and planning
    ├── project_setup_planning.md   # Initial project plan
    ├── step1_planning.md           # Detailed Step 1 implementation plan
    ├── design_concepts.md          # Design mockups (3 concepts, "Minimal Modern" selected)
    └── todo_planning.md            # Comprehensive todo list (Steps 1-5)
```

### Data Flow Architecture

1. **User App** → Saves notification settings
2. **Firestore** → Stores user preferences and location
3. **Cloud Function Scheduler** → Runs daily at user-set time
4. **Weather API** → Fetches current weather data
5. **Condition Check** → Evaluates notification thresholds
6. **FCM** → Sends push notification to user

### Core Features (MVP v1.0)

1. **Location-based Weather**: Auto-detect current location and display weather
2. **Smart Notifications**:
   - Umbrella reminder (precipitation ≥ 60%)
   - Air quality alert (PM10 ≥ 81㎍/㎥)
   - Extreme weather warnings
3. **Settings**: Customizable notification time and thresholds

### Design System (Minimal Modern - Selected)

**Color Palette:**
```javascript
{
  primary: '#4A90E2',      // Bright blue
  secondary: '#F5A623',    // Warm orange
  background: '#F8F9FA',   // Light gray
  card: '#FFFFFF',         // White
  text: '#2C3E50',         // Dark gray
  textMuted: '#95A5A6',    // Muted gray
  warning: '#E74C3C',      // Red
  success: '#2ECC71'       // Green
}
```

**UI Guidelines:**
- Card-based layout with generous padding (16-24px)
- Soft shadows (shadowOffset: {0, 2}, shadowRadius: 8)
- Rounded corners (borderRadius: 16px)
- Typography: SF Pro / Noto Sans KR

## Key Implementation Details

### Current Frontend Dependencies

```json
{
  "@react-native-async-storage/async-storage": "^2.1.0",  // Settings storage
  "expo-location": "~19.0.8",                              // Location permissions
  "expo-notifications": "~0.32.16",                        // Push notifications
  "react": "19.1.0",
  "react-native": "0.81.5"
}
```

### Missing Dependencies (to be installed in Step 1)

```bash
npm install @react-navigation/native @react-navigation/bottom-tabs
npm install react-native-screens react-native-safe-area-context
```

### Screen Navigation Structure

Bottom tab navigator with 3 screens:
1. **HomeScreen**: Weather display with WeatherCard component
2. **NotificationSettingsScreen**: Toggle switches for notification types, time picker
3. **SettingsScreen**: Location/notification permissions, app info

### Custom Hooks Pattern

**useLocation Hook** (to be implemented):
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

### Firebase Integration (Step 3)

**Firestore Schema:**
```
users/{userId}/settings/
  - notificationTime: "07:00"
  - notifications: {
      rain: { enabled: true, threshold: 60 },
      dust: { enabled: true, threshold: 81 },
      weather: { enabled: true }
    }
  - location: { latitude, longitude }
  - fcmToken: "..."
```

## Development Workflow

### Current Phase: Step 1 (Basic Structure)

Refer to `planning/todo_planning.md` for the complete 5-step development roadmap.

**Step 1 Goals:**
1. Install React Navigation
2. Create folder structure (hooks/, services/, utils/, navigation/)
3. Build 3 screen components with basic layouts
4. Implement useLocation hook for permission handling
5. Create WeatherCard skeleton component

**Step 1 Completion Criteria:**
- ✅ App displays 3 tabs and allows navigation
- ✅ Settings screen can request location permission
- ✅ HomeScreen displays latitude/longitude after permission granted
- ✅ No crashes on errors

### Future Steps Summary

- **Step 2**: API integration (Korea Met Office, Kakao Local)
- **Step 3**: Firebase setup, Cloud Functions, notification logic
- **Step 4**: Apply design system, animations, error handling
- **Step 5**: App store deployment preparation

## External API Information

### Korea Meteorological Administration (기상청)
- **Endpoint**: 동네예보 API, 대기오염 API
- **Status**: API keys need to be obtained from 공공데이터포털
- **Implementation**: `src/services/weatherService.js`

### Kakao Local API
- **Purpose**: Coordinate → Address conversion
- **Status**: API key needed from Kakao Developers
- **Implementation**: `src/services/kakaoService.js`

## Important Notes

### Permission Requirements
- **Location**: Required for weather data fetching (expo-location)
- **Notifications**: Required for push alerts (expo-notifications)

### AsyncStorage Usage
- Store user settings locally for offline access
- Cache last weather data for better UX

### Firebase Cloud Functions Cost
- Free tier supports up to 1,000 users
- Firestore: 50K reads/day, 20K writes/day
- Cloud Functions: 125K invocations/month

## Future Features (v2.0+)

- Dark mode
- Commute time-based notifications
- Clothing recommendations based on feels-like temperature
- Umbrella rental location finder
- Car wash day suggestions
- Home screen widgets