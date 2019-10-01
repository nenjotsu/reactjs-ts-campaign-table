import * as React from 'react';
import moment from 'moment';
import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

interface Props {
  onDateChange: Function;
  onReset: Function;
}

class DateRange extends React.PureComponent<Props, any> {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null,
  };

  handleDateChange = ({ startDate, endDate }: any) => {
    this.setState({ startDate, endDate });
    if (startDate != null && endDate != null) {
      this.props.onDateChange(startDate, endDate);
    }
  };

  handleFocusChange = (focusedInput: any) => this.setState({ focusedInput });

  isOutsideRange = (day: moment.Moment) => {
    if (moment(day) < moment().subtract(3, 'years')) {
      return true;
    }
    return false;
  };

  handleOnReset = () => {
    this.props.onReset();
  };

  render() {
    return (
      <div>
        <DateRangePicker
          startDate={this.state.startDate}
          startDateId="your_unique_start_date_id"
          endDate={this.state.endDate}
          endDateId="your_unique_end_date_id"
          onDatesChange={this.handleDateChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={this.handleFocusChange}
          showClearDates={true}
          enableOutsideDays={true}
          isOutsideRange={this.isOutsideRange}
        />
        <Button
          onClick={this.handleOnReset}
          size="large"
          className="btn-reset"
          title="Fetch all data"
        >
          <Icon type="undo" /> Reset
        </Button>
      </div>
    );
  }
}

export default DateRange;
