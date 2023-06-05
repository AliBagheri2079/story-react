import AnimatedCursor from 'react-animated-cursor';

const CircleCursor = () => {
  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={40}
      color='255, 255, 255'
      outerAlpha={0.9}
      innerScale={1}
      outerScale={5}
      clickables={['a', 'input', 'select', 'textarea', 'button', '.link', 'h1']}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: 'var(--cursor-color)',
      }}
      outerStyle={{
        border: '3px solid var(--cursor-color)',
        mixBlendMode: 'exclusion',
      }}
    />
  );
};

export default CircleCursor;
