import {
  TwitterLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';

const SocialMedia = () => {
  return (
    <div className='flex h-full flex-col justify-center gap-10'>
      <a href='#instagram'>
        <InstagramLogoIcon
          className='transition-colors duration-500 hover:text-red-200'
          style={{
            width: 'clamp(1rem, 1rem + 0.8vw, 2rem)',
            height: 'clamp(1rem, 1rem + 0.8vw, 2rem)',
          }}
        />
      </a>
      <a href='#linkedin'>
        <LinkedInLogoIcon
          className='transition-colors duration-500 hover:text-red-200'
          style={{
            width: 'clamp(1rem, 1rem + 0.8vw, 2rem)',
            height: 'clamp(1rem, 1rem + 0.8vw, 2rem)',
          }}
        />
      </a>
      <a href='#twitter'>
        <TwitterLogoIcon
          className='transition-colors duration-500 hover:text-red-200'
          style={{
            width: 'clamp(1rem, 1rem + 0.8vw, 2rem)',
            height: 'clamp(1rem, 1rem + 0.8vw, 2rem)',
          }}
        />
      </a>
      <a href='#github'>
        <GitHubLogoIcon
          className='transition-colors duration-500 hover:text-red-200'
          style={{
            width: 'clamp(1rem, 1rem + 0.8vw, 2rem)',
            height: 'clamp(1rem, 1rem + 0.8vw, 2rem)',
          }}
        />
      </a>
    </div>
  );
};

export default SocialMedia;
