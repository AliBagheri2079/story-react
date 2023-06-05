import GsapContext from '@/context/Gsap';
import useGsapContext from '@/hooks/useGsapContext';
import Home from '@/pages/Home.jsx';
import { CircleCursor } from '@/components/Cursors';

const App = () => {
  return (
    <GsapContext.Provider value={{ useGsapContext }}>
      <Home />
      <CircleCursor />
    </GsapContext.Provider>
  );
};

export default App;
