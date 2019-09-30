import * as React from 'react';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _get from 'lodash/get';
import Modal from 'antd/lib/modal';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import * as actions from '../../redux/home/actions';
import AutoComplete from './components/AutoComplete';
import DateRange from './components/DateRange';
import CampaignTable from './components/CampaignTable';
import { HomeProps, HomeState, IdataSource } from './components/interface';
import { SpanConfig, formatDate, addCommas } from './components/constants';

class Home extends React.Component<HomeProps, HomeState> {
  state = {
    modalVisible: false,
    currentCampaign: null,
  };

  componentDidMount() {
    const { reduxAction } = this.props;
    reduxAction.getAllCampaignsEpic();
  }

  handleModalClose = () => {
    this.setState({ modalVisible: false });
  };

  handleSearch = (text: string) => {
    const { reduxAction } = this.props;
    reduxAction.findByNameCampaignEpic(text);
  };

  handleDateChange = (startDate: moment.Moment, endDate: moment.Moment) => {
    const { reduxAction } = this.props;
    reduxAction.changeDateRange({ startDate, endDate });
  };

  handleGetAllCampaigns = () => {
    const { reduxAction } = this.props;
    reduxAction.getAllCampaignsEpic();
  };

  handleRowClick = (record: IdataSource) => {
    this.setState({ currentCampaign: record, modalVisible: true });
  };

  render() {
    const { currentCampaign } = this.state;
    const { dataSource, isLoading } = this.props;
    return (
      <section>
        <h1>Campaign List</h1>
        <Row>
          <Col {...SpanConfig}>
            <DateRange
              onDateChange={this.handleDateChange}
              onReset={this.handleGetAllCampaigns}
            />
          </Col>
          <Col {...SpanConfig}>
            <AutoComplete onSearch={this.handleSearch} />
          </Col>
        </Row>

        {dataSource && (
          <CampaignTable
            isLoading={isLoading}
            dataSource={dataSource}
            onRowClick={this.handleRowClick}
          />
        )}

        <Modal
          title="Campaign"
          style={{ top: 20 }}
          width={350}
          maskClosable={false}
          visible={this.state.modalVisible}
          onOk={this.handleModalClose}
          onCancel={this.handleModalClose}
        >
          <h1>
            {_get(currentCampaign, 'name')} {_get(currentCampaign, 'id')}
          </h1>
          <h4>
            Start Date: {formatDate(_get(currentCampaign, 'startDate', ''))}
          </h4>
          <h4>End Date: {formatDate(_get(currentCampaign, 'endDate', ''))}</h4>
          <h4>Budget: {addCommas(_get(currentCampaign, 'budget', ''))} USD</h4>
        </Modal>
      </section>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    isLoading: state.ui.isLoading,
    dataSource: state.home.dataSource,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    reduxAction: bindActionCreators({ ...actions }, dispatch),
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
