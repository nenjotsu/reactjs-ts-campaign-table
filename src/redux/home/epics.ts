import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import {
  switchMap,
  takeUntil,
  map,
  mergeMap,
  startWith,
  catchError,
} from 'rxjs/operators';
import { of } from 'rxjs';
import * as TYPES from './types';
import * as ACTION from './actions';
import { showSpinner, hideSpinner } from '../ui/actions';
import { onErrorApi } from '../error/actions';
import { headersJson, url } from '../helpers';

export const createCampaign = (action$: any) =>
  action$.pipe(
    ofType(TYPES.CREATE_CAMPAIGN_EPIC),
    switchMap((action: any) =>
      ajax.post(url.genericDomain, action.payload, headersJson).pipe(
        map(result => ACTION.createCampaignSuccess(result.response)),
        takeUntil(action$.pipe(ofType(TYPES.CREATE_CAMPAIGN_CANCEL))),
        catchError(error => of(onErrorApi(error))),
        startWith(showSpinner()),
      ),
    ),
  );

export const getAllCampaigns = (action$: any) =>
  action$.pipe(
    ofType(TYPES.GET_ALL_CAMPAIGNS_EPIC),
    switchMap(() =>
      ajax.get(url.genericDomain, headersJson).pipe(
        mergeMap(result => [
          ACTION.getAllCampaignsSuccess(result.response),
          hideSpinner(),
        ]),
        takeUntil(action$.pipe(ofType(TYPES.GET_ALL_CAMPAIGNS_CANCEL))),
        catchError(error => of(onErrorApi(error))),
        startWith(showSpinner()),
      ),
    ),
  );

export const findByNameCampaign = (action$: any) =>
  action$.pipe(
    ofType(TYPES.FIND_BY_NAME_CAMPAIGN_EPIC),
    switchMap((action: any) =>
      ajax.get(url.findByName(action.payload), headersJson).pipe(
        mergeMap(result => [
          ACTION.findByNameCampaignSuccess(result.response),
          hideSpinner(),
        ]),
        takeUntil(action$.pipe(ofType(TYPES.FIND_BY_NAME_CAMPAIGN_CANCEL))),
        catchError(error => of(onErrorApi(error))),
        startWith(showSpinner()),
      ),
    ),
  );

export const deleteCampaign = (action$: any) =>
  action$.pipe(
    ofType(TYPES.DELETE_CAMPAIGN_EPIC),
    switchMap((action: any) =>
      ajax.delete(`${url.delete(action.payload.id)}`, headersJson).pipe(
        mergeMap(() => [
          ACTION.deleteCampaignSuccess(action.payload),
          hideSpinner(),
        ]),
        takeUntil(action$.pipe(ofType(TYPES.DELETE_CAMPAIGN_CANCEL))),
        catchError(error => of(onErrorApi(error))),
        startWith(showSpinner()),
      ),
    ),
  );

export default [
  createCampaign,
  getAllCampaigns,
  findByNameCampaign,
  deleteCampaign,
];
