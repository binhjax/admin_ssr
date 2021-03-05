import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('../../components/Diagram'), { ssr: false });

const Test = () => {
  return <DynamicComponentWithNoSSR />;
};
export default Test;
