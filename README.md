# Reservation calendar

## Built with

- node: v20.11.1
- npm: v10.2.4
- typescript: 4.9.5
- react: v18.2.0

## Description

- 예약 가능일을 확인할 수 있는 캘린더를 개발.
- 캘린더에서 공휴일의 정보도 확인 가능.
- https://main.dqycsru16d7mf.amplifyapp.com/


## Installation

1. 레포지토리 클론받기

```bash
https://github.com/seod0209/reservation-calendar.git
```

2. 필요한 모든 라이브러리 설치

```bash
npm install
```

3. 프로젝트 실행하기

```bash
npm start
```

## Available Scripts

app을 development mode로 실행 :

```jsx
npm  start
```

제작용 앱을 빌드 폴더에 빌드

```jsx
npm build
```

storybook:

```jsx
npm run storybook
```

build-storybook:

```jsx
npm run build-storybook
```

## Check List
- [x] **캘린더에서 시작일과 종료일을 선택하여, 해당 기간 내의 공휴일 정보를 검색할 수 있어야합니다.**
  - 시작일과 종료일의 간격은 최대 2년입니다.
  - 종료일은 최대 2025년까지만 선택할 수 있습니다.
- [x] **검색 결과 화면에서는 아래의 내용을 확인할 수 있어야합니다.**
  - 시작일과 종료일 사이에 해당하는 공휴일 수를 확인할 수 있어야합니다.
  - 지정한 시작일과 종료일의 날짜를 확인할 수 있어야합니다.
- [x] **검색 결과 화면에 노출된 공휴일의 수를 클릭할 경우, 아래 정보를 확인할 수 있어야합니다.**
  - 지정한 기간에 해당하는 공휴일의 상세 정보를 표시하되, 모든 공휴일을 한 페이지에서 볼 수 있어야 합니다.
  - 각 공휴일마다 날짜, 공휴일명은 필수로 표시되어야 하며, 그 이외의 데이터 중 필요하다고 생각되는 부분은 추가해주세요.
- [x] 배포
  - AWS amplify사용.
  - https://main.dqycsru16d7mf.amplifyapp.com/


## ScreenShot

https://github.com/seod0209/payhere-fe-interview/assets/74766722/29e64e26-1b70-4175-9f27-635a1caff53b

<img width="1680" alt="Screenshot 2024-04-23 at 14 03 59" src="https://github.com/seod0209/payhere-fe-interview/assets/74766722/12221295-8937-446a-99e9-9baa884f5240">

<img width="510" alt="Screenshot 2024-04-23 at 17 07 54" src="https://github.com/seod0209/payhere-fe-interview/assets/74766722/1d2655af-2d10-4b97-9eae-009a70ac2171">

<img width="510" alt="Screenshot 2024-04-23 at 17 08 00" src="https://github.com/seod0209/payhere-fe-interview/assets/74766722/c8ccfda9-825b-4a61-abae-b45c963d2fc6">


