import React from 'react'
import style from './index.module.scss'
import { withRouter } from 'react-router-dom'
import { DatePicker, TimePicker, Space, Select } from 'antd';

const { Option } = Select;
function Index(props) {
  const [des, setDes] = React.useState('')
  const [date, setDate] = React.useState('')
  const [air, setAir] = React.useState('')
  const [contact, setContact] = React.useState('')
  const [time, setTime] = React.useState('')
  const [people, setPeople] = React.useState('')
  const [luggage, setLuggage] = React.useState('')
  const [other, setOther] = React.useState('')

  const destination = (e) => {
    setDes(e.target.value);
  }
  const handleDate = (date, dateString) => {
    setDate(dateString);
  }
  const airport = (value) => {
    setAir(value);
  }
  const handlePhone = (e) => {
    setContact(e.target.value);
  }
  const handleTime = (time, timeString) => {
    setTime(timeString);
  }
  const handlePeople = (value) => {
    setPeople(value);
  }
  const handleLuggage = (value) => {
    setLuggage(value);
  }
  const handleOther = (e) => {
    setOther(e.target.value);
  }
  const hanleSubmit = () => {
    const result = {

      type: 'Pick Up',
      status: 'doing',
      time: date + ' ' + time,
      add_from: air,
      add_to: des,
      add: other,
      contact, people_number: people, luggage
    }
    // console.log(result);
    props.history.push('/confirm', result)
  }
  const num_people = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  const num_luggage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  return (
    <div className={style.form_content}>
      <div>
        <span>Airport: </span>
        <Select placeholder="Select Airport" style={{ width: 148 }} onChange={airport}>
          <Option value="BNE Domestic Airport">BNE Domestic Airport</Option>
          <Option value="BNE International Airport">BNE International Airport</Option>
        </Select>
      </div>
      <div>
        <span>Destination: </span>
        <input onChange={destination} type="text" className={style.input_text} />
      </div>
      <div>
        <span>Date: </span>
        <Space direction="vertical">
          <DatePicker onChange={handleDate} />
        </Space>
      </div>
      <div>
        <span>Phone Num: </span>
        <input onChange={handlePhone} type="text" className={style.input_text} />
      </div>
      <div>
        <span>Time: </span>
        <TimePicker showNow={false} style={{ width: 148 }} onChange={handleTime} format={'HH:mm'} />
      </div>
      <div>
        <span>People: </span>
        <Select placeholder="Number of People" style={{ width: 148 }} onChange={handlePeople}>
          {
            num_people.map((item) => {
              return (
                <Option key={item} value={item}>{item}</Option>
              )
            })
          }
        </Select>
      </div>
      <div>
        <span>Luggage: </span>
        <Select placeholder="Number of Luggages" style={{ width: 148 }} onChange={handleLuggage}>
          {
            num_luggage.map((item) => {
              return (
                <Option key={item} value={item}>{item}</Option>
              )
            })
          }
        </Select>
      </div>
      <div>
        <span>Others(option): </span>
        <input onChange={handleOther} type="text" className={style.input_text} />
      </div>
      <button className={style.submit} type="submit" onClick={hanleSubmit}>Submit</button>
    </div>

  )
}
export default withRouter(Index)