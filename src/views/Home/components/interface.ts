export interface ReduxAction {
  getAllCampaignsEpic: Function;
  createCampaignEpic: Function;
  findByNameCampaignEpic: Function;
  changeDateRange: Function;
}

export interface HomeProps {
  reduxAction: ReduxAction;
  dataSource: IdataSource[];
  isLoading: boolean;
}

export interface IdataSource {
  _id: string;
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  budget: number;
}

export interface HomeState {
  modalVisible: boolean;
  currentCampaign?: IdataSource | null;
}
