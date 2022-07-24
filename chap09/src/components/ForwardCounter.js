import Card from './Card';
import useCounter from '../hooks/use_counter';

const ForwardCounter = () => {
  const counter = useCounter(); //논리만 공유하는 것이지 상태까지 공유되진 않음.

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
