import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('../../components/Test'), { ssr: false });

const Test = () => {
  return <DynamicComponentWithNoSSR />;
};
export default Test;
