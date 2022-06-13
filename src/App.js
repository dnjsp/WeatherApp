import { useEffect, useState } from 'react';
import './App.css';

// 1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보임
// 2. 날씨 정보에는 도시, 섭씨, 화씨 날씨상태가 들어감
// 3. 5개의 버튼이 있음 (1개는 현재 위치, 4개는 다른 도시)
// 4. 도시 버튼을 클릭할 때마다 도시별 날씨가 보임
// 5. 현재 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나옴
// 6. 데이터를 들고 오는 동안 로딩 스피너가 돔

function App() {

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log(lat, lon)
    });
  }

  useEffect(() => {
    getCurrentLocation()
  }, [])
  return (
    <div>
      hi
    </div>
  );
}

export default App;
