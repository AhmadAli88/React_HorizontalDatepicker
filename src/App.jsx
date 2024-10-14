import DatePicker from "react-horizontal-datepicker";
import "./App.css";

function App() {
 
  const selectedDay = (val) =>{
    console.log(val)
};
  return (
    <>
     <div className="datepicker-container">
     <h2>Select a Date</h2>
      <DatePicker
        getSelectedDay={selectedDay}
        endDate={100}
        selectDate={new Date("2020-04-30")}
        labelFormat={"MMMM"}
        color={"lightgreen"}
      
      />
      </div>
    </>
  );
}

export default App;
