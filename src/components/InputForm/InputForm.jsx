import { useState } from "react";

const InputForm = (props) => {
  const [selectedName, setSelectedName] = useState("");
  const [selectedTip, setSelectedType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleChangeName = (event) => {
    setSelectedName(event.target.value);
    props.handleChangeName(event.target.value);
  };

  const handleChangeType = (event) => {
    setSelectedType(event.target.value);
    props.handleChangeType(event.target.value);
  };

  const handleChangeLocation = (event) => {
    setSelectedLocation(event.target.value);
    props.handleChangeLocation(event.target.value);
  };

  const handleChangeDate = (event) => {
    props.handleChangeDate(event.target.value);
  };

  return (
    <div className="flex xs:flex-col sm:flex-row flex-wrap gap-5 mb-10">
      <div className="flex flex-col sm:grow sm:w-2/5 lg:w-auto lg:max-w-half xs:max-w-full">
        <label htmlFor="ime">Ime Događaja</label>
        <input
          className="border-black border-2 px-3 py-1 h-full rounded"
          value={selectedName}
          onChange={handleChangeName}
          placeholder="Ime dogadjaja"
        />
      </div>
      <div className="flex flex-col sm:grow sm:w-2/5 lg:w-auto lg:max-w-half xs:max-w-full">
        <label htmlFor="tip">
          {props.inputName ? props.inputName : "Tip mesta"}
        </label>
        <input
          className="border-black border-2 px-3 py-1 h-full rounded"
          value={selectedTip}
          onChange={handleChangeType}
          placeholder={props.inputName ? props.inputName : "Tip mesta"}
        />
      </div>
      <div className="flex flex-col sm:grow sm:w-2/5 lg:w-auto lg:max-w-half xs:max-w-full">
        <label htmlFor="gde">Izaberi Grad</label>
        <input
          className="border-black border-2 px-3 py-1 h-full rounded"
          value={selectedLocation}
          onChange={handleChangeLocation}
          placeholder="Izaberi grad"
        />
      </div>
      <div className="flex flex-col sm:grow sm:w-2/5 lg:w-auto lg:max-w-half xs:max-w-full">
        <label htmlFor="Kada">Kada</label>
        <input
          id="kada"
          className="border-black border-2 px-3 py-1 rounded h-full"
          type="date"
          onChange={handleChangeDate}
        />
      </div>
    </div>
  );
};

export default InputForm;
