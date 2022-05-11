import { action } from 'typesafe-actions'

export const BoxActionTypes = {
  ADD_BOX: '@@box/ADD_BOX',
  GET_BOX_LIST: '@@box/GET_BOX_LIST',
  GET_BOX_DETAIL: '@@box/GET_BOX_DETAIL',
  GET_BOX_MANUAL_LIST: '@@box/GET_BOX_MANUAL_LIST',
  GET_BOX_MANUAL_CHECK: '@@box/GET_BOX_MANUAL_CHECK',
  ADD_BOX_WITHDRAW: '@@box/ADD_BOX_WITHDRAW',
  REMOVE_BOX_WITHDRAW: '@@box/REMOVE_BOX_WITHDRAW',
  GET_AUTO_BOX_WITHDRAW: '@@box/GET_AUTO_BOX_WITHDRAW',
  GET_IBANS_AUTO_BOX_WITHDRAW: '@@box/GET_IBANS_AUTO_BOX_WITHDRAW',
  ADD_AUTO_BOX_WITHDRAW: '@@box/ADD_AUTO_BOX_WITHDRAW',
  REMOVE_AUTO_BOX_WITHDRAW: '@@box/REMOVE_AUTO_BOX_WITHDRAW',
  
  BOX_TRANACTIONS: '@@box/BOX_TRANACTIONS',


}

export const addBox = (data: any) => action(BoxActionTypes.ADD_BOX, data)
export const getBoxDetail = (data: any) =>
  action(BoxActionTypes.GET_BOX_DETAIL, data)
export const getBoxList = (data: any) =>
  action(BoxActionTypes.GET_BOX_LIST, data)
export const getBoxWithdrawManualList = (data: any) =>
  action(BoxActionTypes.GET_BOX_MANUAL_LIST, data)
export const boxCheck = (data: any) =>
  action(BoxActionTypes.GET_BOX_MANUAL_CHECK, data)
export const addBoxWithdraw = (data: any) =>
  action(BoxActionTypes.ADD_BOX_WITHDRAW, data)
export const removeBoxWithdraw = (data: any) =>
  action(BoxActionTypes.REMOVE_BOX_WITHDRAW, data)
export const getAutoWithdrawList = (data: any) =>
  action(BoxActionTypes.GET_AUTO_BOX_WITHDRAW, data)
export const getAutoWithdrawIbanList = (data: any) =>
  action(BoxActionTypes.GET_IBANS_AUTO_BOX_WITHDRAW, data)
export const addAutoBoxWithdraw = (data: any) =>
  action(BoxActionTypes.ADD_AUTO_BOX_WITHDRAW, data)
export const removeAutoBoxWithdraw = (data: any) =>
  action(BoxActionTypes.REMOVE_AUTO_BOX_WITHDRAW, data)


  export const boxTransctions = (data: any) =>
  action(BoxActionTypes.BOX_TRANACTIONS, data)
