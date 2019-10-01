import { handleActions } from 'redux-actions';
import moment from 'moment';
import {
  getAllCampaignsSuccess,
  findByNameCampaignSuccess,
  deleteCampaignSuccess,
  updateCampaignSuccess,
  getAllCampaignsClearData,
  changeDateRange,
} from './actions';
import Model from './model';

interface HomeReducer {
  loading: boolean;
  dataSource: any[];
}

interface CreateSession {
  date: string;
  records: any[];
}

interface Payload {
  payload: CreateSession | any;
}

const getAction = (action: any) => {
  return action.toString();
};

export default handleActions<HomeReducer, Payload>(
  {
    [getAction(getAllCampaignsSuccess)]: (state, action: Payload) => {
      const newDataSource = action.payload.filter((record: any) => {
        return moment(record.endDate) > moment(record.startDate);
      });
      return {
        ...state,
        dataSource: newDataSource,
      };
    },
    [getAction(findByNameCampaignSuccess)]: (state, action: Payload) => {
      const newDataSource = action.payload.filter((record: any) => {
        return moment(record.endDate) > moment(record.startDate);
      });
      return {
        ...state,
        dataSource: newDataSource,
      };
    },
    [getAction(changeDateRange)]: (state, action: Payload) => {
      const isBetweenRange = (source: string) => (from: string, to: string) => {
        return moment(source).isBetween(from, to);
      };
      const newDataSource = state.dataSource.filter((record: any) => {
        const { startDate, endDate } = action.payload;
        const isStartDateBetween = isBetweenRange(record.startDate)(
          startDate,
          endDate,
        );

        const isEndDateBetween = isBetweenRange(record.endDate)(
          startDate,
          endDate,
        );
        return isStartDateBetween || isEndDateBetween;
      });
      return {
        ...state,
        dataSource: newDataSource,
      };
    },
    [getAction(deleteCampaignSuccess)]: (state, action: Payload) => {
      const newDataSource = state.dataSource.filter((record: any) => {
        return record._id !== action.payload.id;
      });
      return {
        ...state,
        dataSource: [...newDataSource],
      };
    },
    [getAction(updateCampaignSuccess)]: (state, action: Payload) => {
      const newDataSource = state.dataSource.map((record: any) => {
        if (record._id !== action.payload._id) {
          return record;
        }
        return {
          ...action.payload,
        };
      });
      return {
        ...state,
        dataSource: [...newDataSource],
      };
    },
    [getAction(getAllCampaignsClearData)]: state => ({
      ...state,
      dataSource: [],
    }),
  },
  Model,
);
