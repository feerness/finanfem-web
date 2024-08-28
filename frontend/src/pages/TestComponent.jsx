import { useEffect } from 'react';
import { useForo } from '../context/foroContext';

function TestComponent() {
  const { loadLikes } = useForo();

  useEffect(() => {
    const testLoadLikes = async () => {
      const data = await loadLikes('somePostId', 'someUserId');
      console.log('Test loadLikes data:', data);
    };
    testLoadLikes();
  }, [loadLikes]);

  return <div>Testing loadLikes</div>;
}

export default TestComponent;
