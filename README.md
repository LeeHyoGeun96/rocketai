# 로켓AI 사주풀이 웹툰 (roketai) - 나의 특별한 운세 여정 🚀

**[Live Demo]: https://rocketai-cyan.vercel.app/**

**![2025-05-2908-11-38-ezgif com-optimize](https://github.com/user-attachments/assets/d826500f-3296-444f-b365-13a5aa52469c)**



### ✅ **프로젝트 구조 및 목적**

> 이 페이지는 **로켓에이아이**의 과제로, 요구사항을 만족하기 위해 노력했습니다.

- **핵심 구성 요소**

  - **WebtoonImageBlock**: 웹툰 컷처럼 주요 메시지를 보여주는 고정된 배경 이미지 블록
  - **WebtoonText**: 이미지 위에 위치하는 말풍선 또는 타이틀 텍스트 요소로, 사용자 정보를 포함한 텍스트가 `textTemplate`으로 바인딩됨
  - **WebtoonDecorativeElement**: 이미지 기반의 장식 요소 (예: 구름 이미지)를 특정 위치에 clamp 기반으로 배치해 반응형 지원
  - **SaJuTableClient**: 클라이언트 사이드 렌더링되는 핵심 사주표 컴포넌트


## ✏️ 요구사항

- **디자인 에셋을 내보내기 하여 디자인된 본 1개 페이지를 완성합니다.**
- **말풍선 안의 대화는 실제 텍스트로 삽입합니다.** (이미지 사용 금지)
- **화면은 max-w-md (448px)** 가 최대 width입니다.
  - width를 더 줄였을 때에도 말풍선 안의 문자열 위치가 어색하지 않아야 합니다.
- **반응형 퍼블리싱 필수**
  - 화면을 늘리거나 줄였을 때 최대한 비슷한 사용자 경험을 제공해야 합니다.
- **사주팔자 표는 컴포넌트로 구현해야 합니다.**
  - 안에 들어가는 사주팔자의 한자 및 기타 데이터는 더미 데이터로 넣어도 됩니다.
  - 단, **이미지로 삽입하면 안 됩니다.** 실제 컴포넌트 구조로 구성하세요.
- **폰트는 신경 쓰지 않아도 됩니다.**

### 🎨 **반응형 설계와 스타일 시스템**

- 모든 위치 값, 폰트 사이즈, 이미지 크기 등은 `generateClampFontSize()` 유틸로 구현되어 다양한 화면 크기에 유동적으로 대응
- 레이아웃과 스타일링은 클램프 기반의 유연한 배치와 grid system 기반의 표 구조로 구성
- 특정 테마(`청월`)를 분리해 다양한 사주표 스타일 확장이 가능하도록 설계

### 🗂️ **데이터 구조 및 타입 안정성**

- 이미지, 텍스트, 장식 요소는 각각 타입으로 분리해 `as const` + `keyof` 기반의 타입 세이프한 구성 유지
- 텍스트는 `textTemplate` 안에서 Mustache 방식의 바인딩(`{{name}}`)으로 처리되어 텍스트 컨텐츠 재사용성과 유지 보수성을 높임
- 이미지 메타 정보도 별도 JSON-like 구조로 정리하여 너비/높이 등 UI 결정 요소를 중앙에서 관리

## 📁 프로젝트 구조

```
├───📁 components/
│   ├───📁 UI/
│   │   ├───📁 SaJuTable/
│   │   │   ├───📄 SaJuCell.tsx
│   │   │   ├───📄 SaJuRenderRow.tsx
│   │   │   ├───📄 SaJuTable.tsx
│   │   │   ├───📄 SaJuTableBackGround.tsx
│   │   │   └───📄 SaJuTableClient.tsx
│   │   ├───📁 Webtoon/
│   │   │   ├───📄 WebtoonBlock.tsx
│   │   │   ├───📄 WebtoonContainer.tsx
│   │   │   ├───📄 WebtoonDecorativeElement.tsx
│   │   │   ├───📄 WebtoonImageBlock.tsx
│   │   │   └───📄 WebtoonText.tsx
│   │   ├───📁 common/
│   │   │   └───📄 Spinner.tsx
│   │   ├───📄 Header.tsx
│   │   └───📄 Layout.tsx
│   ├───📁 templates/
│   │   └───📄 BlueMoonLadySajuResultPage.tsx
│   └───📄 ClientInit.tsx
├───📁 constants/
│   ├───📁 SaJuTable/
│   │   ├───📄 saJuTableLayoutConstants.ts
│   │   └───📄 saJuTableMeta.ts
│   ├───📁 bluemoonladysaju/
│   │   ├───📄 imagePaths.ts
│   │   ├───📄 webtoonDecorativeMeta.ts
│   │   ├───📄 webtoonImagesMeta.ts
│   │   └───📄 webtoonTextMeta.ts
│   ├───📄 layout.ts
│   ├───📄 theme.ts
│   └───📄 userDefaults.ts
├───📁 data/
│   └───📄 dummySaJuData.ts
├───📁 hooks/
│   └───📄 useInitUserData.ts
├───📁 pages/
│   ├───📁 api/
│   │   └───📄 getSaJu.ts
│   ├───📁 blank/
│   │   └───📄 index.tsx
│   ├───📄 _app.tsx
│   ├───📄 _document.tsx
│   └───📄 index.tsx
├───📁 public/
│   ├───📁 images/
│   │   └───📁 bluemoonladysaju/
│   │       ├───📁 decorations/
│   │       │   ├───📄 cloud_style_a.png
│   │       │   └───📄 cloud_style_b.png
│   │       ├───📁 loading/
│   │       │   └───📄 analyzing.png
│   │       ├───📄 1.png
│   │       ├───📄 2.png
│   │       └───📄 3.png
│   ├───📄 favicon.ico
│   ├───📄 file.svg
│   ├───📄 globe.svg
│   ├───📄 next.svg
│   ├───📄 vercel.svg
│   └───📄 window.svg
├───📁 store/
│   └───📄 userStore.ts
├───📁 styles/
│   └───📄 globals.css
├───📁 types/
│   ├───📄 saju.d.ts
│   └───📄 user.d.ts
├───📁 utils/
│   ├───📄 applyTemplate.ts
│   ├───📄 generateClampFontSize.ts
│   └───📄 getElementStyle.ts

```

## 🚀 실행 방법

1.  **Git Repository 클론:**

    ```bash
    git clone [Repository URL]
    cd roketai
    ```

2.  **의존성 패키지 설치:**
    ```bash
    npm install
    # 또는
    # yarn install
    ```
3.  **개발 서버 실행:**

    ```bash
    npm run dev
    # 또는
    # yarn dev
    ```

    브라우저에서 `http://localhost:3000` (또는 다른 포트)으로 접속합니다.

4.  **빌드 및 프로덕션 서버 실행:**
    ```bash
    npm run build
    npm run start
    ```

## 🤔 고민했던 부분 및 기술적 결정

### 1.🔧 **렌더링 전략: SSG + CSR 혼합 아키텍처**

- 고정된 템플릿 레이아웃이 반복적으로 사용되기 때문에, 매 요청마다 서버에서 렌더링을 수행하는 비효율을 방지하고자 SSG(Static Site Generation)을 기반으로 하되, 사용자별 동적 데이터를 처리하기 위해 CSR(Client Side Rendering)을 병행한 하이브리드 렌더링 구조를 사용했습니다.

### 2. **데이터 중심 UI 제어를 위한 메타데이터 설계**

- 이미지, 텍스트, 장식 요소들을 하드코딩하는 대신, 각각을 메타데이터화하여 재사용성과 유지보수성을 높였습니다.

  - `webtoonImagesMeta`, `webtoonTextMeta`, `webtoonDecorativeMeta` 등에서 위치, 크기, 스타일 정보들을 정의하고 이를 기반으로 컴포넌트를 렌더링했습니다.
  - 텍스트는 `textTemplate` 형식으로 정의하고, 런타임에서 사용자 데이터(`name`, `birthDate`, 등)를 바인딩했습니다.

### 3. **스타일 유연성을 위한 clamp 유틸리티 적용**

- 반응형 대응을 위해 `generateClampFontSize` 유틸리티를 만들어 텍스트 크기나 요소 크기를 `clamp()` 기반으로 처리했습니다.
- 이로 인해 다양한 해상도에서도 일관된 시각적 구조를 유지할 수 있습니다.

### 4. **테마 기반 스타일링 구조**

- 사주표의 스타일을 `ThemeSpecificStyles` 인터페이스에 맞춰 테마화했으며, 현재는 `"청월"` 테마를 적용 중입니다.
- 향후 새로운 테마 확장이 쉬운 구조로 설계했습니다.

### 5. **Next.js에서 클라이언트 전용 컴포넌트 처리**

- 사주표는 클라이언트 사이드에서 렌더링되는 인터랙티브 요소이므로 `dynamic import`를 활용해 `SaJuTableClient`를 비동기 로딩 처리했습니다.
- SSR이 필요 없는 영역은 `ssr: false`로 설정하여 성능 최적화도 고려했습니다.

### 6. **컴포넌트 구조 분리와 역할 명확화**

- `WebtoonContainer`, `WebtoonBlock`, `WebtoonImageBlock`, `WebtoonText`, `WebtoonDecorativeElement` 등의 컴포넌트로 UI를 분리함으로써 역할이 명확하고 유지보수가 쉬운 구조를 의도했습니다.
- 모든 요소가 재사용 가능한 단위로 나뉘어 있어, 추후에 이미지나 텍스트 교체만으로 콘텐츠 확장이 용이합니다.

### 추후 개선점

- 현재 `generateClampFontSize` 함수는 root-font-size가 **16px을 기준**으로만 정상 동작하도록 작성되어 있습니다.  
  추후 **클라이언트 환경의 root-font-size를 동적으로 감지**하여, **하이드레이션 이슈**를 방지하고 **보다 유연한 대응**이 가능하도록 개선할 필요가 있습니다.
