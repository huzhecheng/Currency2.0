import React from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux'
import '../styles/CYSelect.scss';

const Option = Select.Option;

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start"
};

const CountrySelect = ({ ...props }) => {
  const { currencys, loading, onChange } = props;

  return loading ? (
    <Select className="cy_select" defaultValue={0} size="large">
      <Option value={0}>請選擇</Option>
    </Select>
  ) : (
      <Select className="cy_select" defaultValue={0} onChange={onChange} size="large">
        {currencys.map((prop, index) => {
          return (
            <Option value={index} key={prop.country}>
              <div style={{ ...verticalCenter }}>
                <img src={prop.icon} alt={prop.country} /> &nbsp;&nbsp;
                <b>{prop.country}</b>
              </div>
            </Option>
          );
        })}
      </Select>
    );
};

const mapStateToProps = ({ currencyFetch }) => ({
  currencys: currencyFetch.items,
  loading: currencyFetch.loading,
  error: currencyFetch.error
});
export default connect(mapStateToProps)(CountrySelect);
