import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Tools } from '../../components/block';

function Tool() {
  const router = useRouter();
  const [type, setType] = useState('1');

  useEffect(() => {
    if (router?.query?.id) {
      setType(router?.query?.id);
    }
  }, [router]);

  return (
    <Tools
      content={{
        optionWidth: '2',
        type,
        interest_rate: 5,
        minValue: '1000000',
        maxValue: '10000000000'
      }}
      id={1}
    />
  );
}
export default Tool;
