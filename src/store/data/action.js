import {
    CHANGE_ENQURIY,
     CHANGE_PROSPECTS,
     CHANGE_NOT_INTRESTED ,TOTAL_USER,USER_REGISTER,ADD_LEADS,ADD_INVOICE,QUTATION_ADD
  } from "./type";
  
  export const changeEnquriy = data => ({
    type: CHANGE_ENQURIY,
    payload: data
  });

  
  export const changeTotalUser = data => ({
    type: TOTAL_USER,
    payload: data
  });
  
  export const changeProspects = data => ({
    type: CHANGE_PROSPECTS,
    payload: data
  });
  
  export const changeNotIntrested = data => ({
    type: CHANGE_NOT_INTRESTED,
    payload: data
  });
  

  export const handleRegisterData = data => ({
    type: USER_REGISTER,
    payload: data
  });
  export const leadDataAdd = data => ({
    type: ADD_LEADS,
    payload: data
  });
  export const InvoiceData=data=>({
    Type:ADD_INVOICE,
    payload: data
  })
  export const Quatation=data=>({
    type:QUTATION_ADD,
    payload: data
  })