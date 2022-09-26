import React from 'react';
import { Slider } from 'antd';

export default function SliderCustom({ value, setValue, min = 3, max = 84 }) {
  return (
    <Slider
      onChange={value => setValue(value.toString())}
      value={value}
      min={min}
      max={max}
      step={1}
    />
  );
}
