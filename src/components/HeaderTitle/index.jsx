import { CurveUnderline, WaveUnderline } from '../Underline';
import { Title } from './index.stitches';

//TODO: Add svg stroke animation for underlines
const HeaderTitle = () => {
  return (
    <div className='flex h-full items-center'>
      <Title className='font-monument-ultrabold line-clamp-6 text-center'>
        Lorem <CurveUnderline>curve</CurveUnderline> sit amet{' '}
        <WaveUnderline>wave</WaveUnderline> adipisicing
      </Title>
    </div>
  );
};

export default HeaderTitle;
