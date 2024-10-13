import DatePicker from "react-horizontal-datepicker";
import "./App.css";

function App() {
 
  const selectedDay = (val) =>{
    console.log(val)
};
  return (
    <>
      <DatePicker
        getSelectedDay={selectedDay}
        endDate={100}
        selectDate={new Date("2020-04-30")}
        labelFormat={"MMMM"}
        color={"#374e8c"}
      />
    </>
  );
}

export default App;
