import { CurveUnderline, WaveUnderline } from '../Underline';
import { Title } from './index.stitches';

const HeaderTitle = () => {
  return (
    <div className='flex h-full justify-center'>
      <Title className='font-monument-ultrabold line-clamp-6 h-auto w-full text-center'>
        Lorem <CurveUnderline>curve</CurveUnderline> sit amet{' '}
        <WaveUnderline>wave</WaveUnderline> adipisicing
      </Title>
    </div>
  );
};

export default HeaderTitle;
