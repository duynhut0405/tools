import React, { useEffect, useState } from 'react';
import { map } from 'lodash';
import { DowloadVideo } from '../common/download';

function DowloadVideos() {
  const [datatype] = useState(1);
  const [page] = useState(0);
  const [year] = useState(0);

  useEffect(() => {
    seachRegulation(datatype, page, year);
    getTypeRegulation();
  }, [getTypeRegulation, seachRegulation]);

  useEffect(() => {
    seachRegulation(datatype, page, year);
  }, [datatype, page, year]);

  return (
    <div>
      {map(listRegulation, item => {
        if (item.investors.length > 0) {
          return (
            <div className="sec-tb" key={item.year}>
              <DowloadVideo data={item.investors} year={item.year} isChecked />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default DowloadVideos;
