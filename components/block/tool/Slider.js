import { Slider } from 'antd';

const marks = {
  3: '3',
  6: '6',
  9: '9',
  12: '12',
  72: '72',
  84: '84'
};

export default function SliderCustom({ value, setValue }) {
  return (
    <Slider
      onChange={value => setValue(value.toString())}
      marks={marks}
      step={null}
      value={value}
      min={3}
      max={84}
      step={1}
    />
  );
}
