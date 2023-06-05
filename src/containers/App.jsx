import GsapContext from '@/context/Gsap';
import useGsapContext from '@/hooks/useGsapContext';
import Home from '@/pages/Home.jsx';

const App = () => {
  return (
    <GsapContext.Provider value={{ useGsapContext }}>
      <Home />
    </GsapContext.Provider>
  );
};

export default App;
