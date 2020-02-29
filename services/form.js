import request from '../utils/request';

const getFormbuilderByIdService = id => {
  return request({
    url: `/forms/${id}`,
    method: 'GET',
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlcyI6IlJPTEVfQUNDRVBUIE5FV1MsUk9MRV9BQ0NFUFQgUEFHRVMsUk9MRV9BREQgQkxPQ0ssUk9MRV9BREQgRk9STSxST0xFX0FERCBHUk9VUCxST0xFX0FERCBNRURJQSxST0xFX0FERCBST0xFLFJPTEVfQUREIFRBRyxST0xFX0FERCBVU0VSLFJPTEVfQ0jhu4hOSCBT4busQSBEQU5IIE3hu6RDLFJPTEVfQ0jhu4hOSCBT4busQSBNQUlMVEVNUExBVEUsUk9MRV9DSOG7iE5IIFPhu6xBIE1FTlUsUk9MRV9DSOG7iE5IIFPhu6xBIE1FTlVJVEVNLFJPTEVfQ0jhu4hOSCBT4busQSBQQUdFLFJPTEVfQ0jhu4hOSCBT4busQSBTTElERVIsUk9MRV9DSOG7iE5IIFPhu6xBIFRJTiBU4buoQyxST0xFX0NI4buITkggU-G7rEEgVuG7iiBUUsONIERBTkggTeG7pEMsUk9MRV9DSOG7iE5IIFPhu6xBIFbhu4ogVFLDjSBNRU5VSVRFTSxST0xFX0NI4buITkggU-G7rEEgVuG7iiBUUsONIFBBR0UsUk9MRV9DUkVBVEUgQ0FURUdPUlksUk9MRV9DUkVBVEUgRVhDSEFOR0VfUkFURSxST0xFX0NSRUFURSBJTlRFUkVTVF9SQVRFLFJPTEVfQ1JFQVRFIE1BSUxURU1QTEFURSxST0xFX0NSRUFURSBNRU5VLFJPTEVfQ1JFQVRFIE1FTlVJVEVNLFJPTEVfQ1JFQVRFIE5FVFdPUktTLFJPTEVfQ1JFQVRFIE5FV1MsUk9MRV9DUkVBVEUgUEFHRSxST0xFX0NSRUFURSBTTElERVIsUk9MRV9ERUxFVEUgQkxPQ0ssUk9MRV9ERUxFVEUgQ0FURUdPUlksUk9MRV9ERUxFVEUgRVhDSEFOR0VfUkFURSxST0xFX0RFTEVURSBGT1JNLFJPTEVfREVMRVRFIEdST1VQLFJPTEVfREVMRVRFIElOVEVSRVNUX1JBVEUsUk9MRV9ERUxFVEUgTUFJTFRFTVBMQVRFLFJPTEVfREVMRVRFIE1FRElBLFJPTEVfREVMRVRFIE1FTlUsUk9MRV9ERUxFVEUgTUVOVUlURU0sUk9MRV9ERUxFVEUgTkVUV09SS1MsUk9MRV9ERUxFVEUgTkVXUyxST0xFX0RFTEVURSBQQUdFLFJPTEVfREVMRVRFIFJPTEUsUk9MRV9ERUxFVEUgU0xJREVSLFJPTEVfREVMRVRFIFRBRyxST0xFX0RFTEVURSBVU0VSLFJPTEVfRFVZ4buGVCBUSU4gVOG7qEMsUk9MRV9EVVnhu4ZUIFRSQU5HLFJPTEVfRURJVCBCTE9DSyxST0xFX0VESVQgQ0FURUdPUlksUk9MRV9FRElUIEVYQ0hBTkdFX1JBVEUsUk9MRV9FRElUIEZPUk0sUk9MRV9FRElUIEdST1VQLFJPTEVfRURJVCBJTlRFUkVTVF9SQVRFLFJPTEVfRURJVCBNQUlMVEVNUExBVEUsUk9MRV9FRElUIE1FRElBLFJPTEVfRURJVCBNRU5VLFJPTEVfRURJVCBNRU5VSVRFTSxST0xFX0VESVQgTkVUV09SS1MsUk9MRV9FRElUIE5FV1MsUk9MRV9FRElUIFBBR0UsUk9MRV9FRElUIFJPTEUsUk9MRV9FRElUIFNMSURFUixST0xFX0VESVQgU1RPUkUsUk9MRV9FRElUIFRBRyxST0xFX0VESVQgVEjGryBQSOG6ok4gSOG7kkksUk9MRV9FRElUIFVTRVIsUk9MRV9HRVQgQkxPQ0ssUk9MRV9HRVQgQ0FURUdPUlksUk9MRV9HRVQgRVhDSEFOR0VfUkFURSxST0xFX0dFVCBGT1JNLFJPTEVfR0VUIEdST1VQLFJPTEVfR0VUIElOVEVSRVNUX1JBVEUsUk9MRV9HRVQgTUFJTFRFTVBMQVRFLFJPTEVfR0VUIE1FRElBLFJPTEVfR0VUIE1FTlUsUk9MRV9HRVQgTUVOVUlURU0sUk9MRV9HRVQgTkVUV09SS1MsUk9MRV9HRVQgTkVXUyxST0xFX0dFVCBQQUdFLFJPTEVfR0VUIFJPTEUsUk9MRV9HRVQgU0VUVElORyxST0xFX0dFVCBTTElERVIsUk9MRV9HRVQgU1RPUkUsUk9MRV9HRVQgVEFHLFJPTEVfR0VUIFRIxq8gUEjhuqJOIEjhu5JJLFJPTEVfR0VUIFVTRVIsUk9MRV9T4busQSBCTE9DSyxST0xFX1Phu6xBIEZPUk0sUk9MRV9T4busQSBMw4NJIFNV4bqkVCxST0xFX1Phu6xBIE1FRElBLFJPTEVfU-G7rEEgTeG6oE5HIEzGr-G7mkksUk9MRV9T4busQSBOSMOCTiBWScOKTixST0xFX1Phu6xBIE5Iw5NNLFJPTEVfU-G7rEEgU1RPUkUsUk9MRV9T4busQSBUQUcsUk9MRV9T4busQSBUSMavIFBI4bqiTiBI4buSSSxST0xFX1Phu6xBIFThu4ggR0nDgSxST0xFX1Phu6xBIFZBSSBUUsOSLFJPTEVfVEjDik0gQkxPQ0ssUk9MRV9USMOKTSBGT1JNLFJPTEVfVEjDik0gTUVESUEsUk9MRV9USMOKTSBOSMOCTiBWScOKTixST0xFX1RIw4pNIE5Iw5NNLFJPTEVfVEjDik0gVEFHLFJPTEVfVEjDik0gVkFJIFRSw5IsUk9MRV9U4bqgTyBEQU5IIE3hu6RDLFJPTEVfVOG6oE8gTMODSSBTVeG6pFQsUk9MRV9U4bqgTyBNQUlMVEVNUExBVEUsUk9MRV9U4bqgTyBNRU5VLFJPTEVfVOG6oE8gTUVOVUlURU0sUk9MRV9U4bqgTyBN4bqgTkcgTMav4buaSSxST0xFX1ThuqBPIFBBR0UsUk9MRV9U4bqgTyBTTElERVIsUk9MRV9U4bqgTyBUSU4gVOG7qEMsUk9MRV9U4bqgTyBU4buIIEdJw4EsUk9MRV9VUERBVEUgUE9TSVRJT04gQ0FURUdPUlksUk9MRV9VUERBVEUgUE9TSVRJT04gTUVOVUlURU0sUk9MRV9VUERBVEUgUE9TSVRJT04gUEFHRSxST0xFX1hFTSBCTE9DSyxST0xFX1hFTSBDw4BJIMSQ4bq2VCxST0xFX1hFTSBEQU5IIE3hu6RDLFJPTEVfWEVNIEZPUk0sUk9MRV9YRU0gTMODSSBTVeG6pFQsUk9MRV9YRU0gTUFJTFRFTVBMQVRFLFJPTEVfWEVNIE1FRElBLFJPTEVfWEVNIE1FTlUsUk9MRV9YRU0gTUVOVUlURU0sUk9MRV9YRU0gTeG6oE5HIEzGr-G7mkksUk9MRV9YRU0gTkjDgk4gVknDik4sUk9MRV9YRU0gTkjDk00sUk9MRV9YRU0gUEFHRSxST0xFX1hFTSBTTElERVIsUk9MRV9YRU0gU1RPUkUsUk9MRV9YRU0gVEFHLFJPTEVfWEVNIFRIxq8gUEjhuqJOIEjhu5JJLFJPTEVfWEVNIFRJTiBU4buoQyxST0xFX1hFTSBU4buIIEdJw4EsUk9MRV9YRU0gVkFJIFRSw5IsUk9MRV9Yw5NBIEJMT0NLLFJPTEVfWMOTQSBEQU5IIE3hu6RDLFJPTEVfWMOTQSBGT1JNLFJPTEVfWMOTQSBMw4NJIFNV4bqkVCxST0xFX1jDk0EgTUFJTFRFTVBMQVRFLFJPTEVfWMOTQSBNRURJQSxST0xFX1jDk0EgTUVOVSxST0xFX1jDk0EgTUVOVUlURU0sUk9MRV9Yw5NBIE3huqBORyBMxq_hu5pJLFJPTEVfWMOTQSBOSMOCTiBWScOKTixST0xFX1jDk0EgTkjDk00sUk9MRV9Yw5NBIFBBR0UsUk9MRV9Yw5NBIFNMSURFUixST0xFX1jDk0EgVEFHLFJPTEVfWMOTQSBUSU4gVOG7qEMsUk9MRV9Yw5NBIFThu4ggR0nDgSxST0xFX1jDk0EgVkFJIFRSw5IscXXhuqNuIHRy4buLIiwiaWF0IjoxNTgxMzg5MzQ3LCJleHAiOjE1ODM5ODEzNDd9.AynmpmEKDmTposaWSOzEBPLARBpisJVIK5RgS4q4MMQ'
    }
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response.data;
    });
};
export { getFormbuilderByIdService };
