import { createAction } from 'redux-actions';
import * as TYPE from './types';

export const createCampaignEpic = createAction(TYPE.CREATE_CAMPAIGN_EPIC);
export const createCampaignSuccess = createAction(TYPE.CREATE_CAMPAIGN_SUCCESS);
export const createCampaignCancel = createAction(TYPE.CREATE_CAMPAIGN_CANCEL);
export const createCampaignClearData = createAction(TYPE.CREATE_CAMPAIGN_CLEAR);

export const getAllCampaignsEpic = createAction(TYPE.GET_ALL_CAMPAIGNS_EPIC);
export const getAllCampaignsSuccess = createAction(
  TYPE.GET_ALL_CAMPAIGNS_SUCCESS,
);
export const getAllCampaignsCancel = createAction(
  TYPE.GET_ALL_CAMPAIGNS_CANCEL,
);
export const getAllCampaignsClearData = createAction(
  TYPE.GET_ALL_CAMPAIGNS_CLEAR,
);

export const getSingleCampaignEpic = createAction(
  TYPE.GET_SINGLE_CAMPAIGN_EPIC,
);
export const getSingleCampaignSuccess = createAction(
  TYPE.GET_SINGLE_CAMPAIGN_SUCCESS,
);
export const getSingleCampaignCancel = createAction(
  TYPE.GET_SINGLE_CAMPAIGN_CANCEL,
);
export const getSingleCampaignClearData = createAction(
  TYPE.GET_SINGLE_CAMPAIGN_CLEAR,
);

export const findByNameCampaignEpic = createAction(
  TYPE.FIND_BY_NAME_CAMPAIGN_EPIC,
);
export const findByNameCampaignSuccess = createAction(
  TYPE.FIND_BY_NAME_CAMPAIGN_SUCCESS,
);
export const findByNameCampaignCancel = createAction(
  TYPE.FIND_BY_NAME_CAMPAIGN_CANCEL,
);
export const findByNameCampaignClearData = createAction(
  TYPE.FIND_BY_NAME_CAMPAIGN_CLEAR,
);

export const deleteCampaignEpic = createAction(TYPE.DELETE_CAMPAIGN_EPIC);
export const deleteCampaignSuccess = createAction(TYPE.DELETE_CAMPAIGN_SUCCESS);
export const deleteCampaignCancel = createAction(TYPE.DELETE_CAMPAIGN_CANCEL);
export const deleteCampaignClearData = createAction(TYPE.DELETE_CAMPAIGN_CLEAR);

export const changeDateRange = createAction(TYPE.CHANGE_DATE_RANGE);
