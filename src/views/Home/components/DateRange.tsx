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
      const { onDateChange } = this.props;
      onDateChange(startDate, endDate);
    }
  };

  handleFocusChange = (focusedInput: any) => this.setState({ focusedInput });

  isOutsideRange = (day: moment.Moment) => {
    const isDateLessThanThreeYears =
      moment(day) < moment().subtract(3, 'years');

    return isDateLessThanThreeYears ? true : false;
  };

  handleOnReset = () => {
    const { onReset } = this.props;
    onReset();
  };

  render() {
    const { startDate, endDate, focusedInput } = this.state;
    return (
      <div>
        <DateRangePicker
          startDate={startDate}
          startDateId="your_unique_start_date_id"
          endDate={endDate}
          endDateId="your_unique_end_date_id"
          focusedInput={focusedInput}
          onDatesChange={this.handleDateChange}
          onFocusChange={this.handleFocusChange}
          isOutsideRange={this.isOutsideRange}
          showClearDates
          enableOutsideDays
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
