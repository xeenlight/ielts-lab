import Main from '../components/Main/Main';
import Results from '../components/Results/Results';
import FreeResources from '../components/FreeResources/FreeResources';
import Teachers from '../components/Teachers/Teachers';
import FloatingAlert from '../components/FloatingAlert/FloatingAlert.jsx';
import MockPlatform from '../components/MockPlatform/MockPlatform.jsx';
import Location from '../components/Location/Location';
export default function Home() {
  return (
    <>
                  <FloatingAlert />
      <Main />
      <Results />
      <FreeResources />
      <Teachers />
      <MockPlatform />
      <Location />
    </>
  );
}

