import { useState } from "react";

const InputForm = (props) => {
  const [selectedName, setSelectedName] = useState("");
  const [selectedTip, setSelectedTip] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleChangeName = (event) => {
    setSelectedName(event.target.value);
    props.handleChangeName(event.target.value);
  };

  const handleChangeTip = (event) => {
    setSelectedTip(event.target.value);
    props.handleChangeTip(event.target.value);
  };

  const handleChangeLocation = (event) => {
    setSelectedLocation(event.target.value);
    props.handleChangeLocation(event.target.value);
  };

  const handleChangDate = (event) => {
    props.handleChangDate(event.target.value);
  };

  return (
    <div className="flex xs:flex-col sm:flex-row flex-wrap gap-5 mb-10">
      <div className="flex flex-col sm:grow sm:w-2/5 lg:w-auto lg:max-w-half xs:max-w-full">
        <label htmlFor="ime">Ime</label>
        <input
          className="border-black border-2 px-3 py-1 h-full rounded"
          value={selectedName}
          onChange={handleChangeName}
          placeholder='Ime dogadjaja'
        />
      </div>
      <div className="flex flex-col sm:grow sm:w-2/5 lg:w-auto lg:max-w-half xs:max-w-full">
        <label htmlFor="tip">Tip</label>
        <input
          className="border-black border-2 px-3 py-1 h-full rounded"
          value={selectedTip}
          onChange={handleChangeTip}
          placeholder='Tip mesta'
        />
      </div>
      <div className="flex flex-col sm:grow sm:w-2/5 lg:w-auto lg:max-w-half xs:max-w-full">
        <label htmlFor="gde">Gde</label>
        <input
          className="border-black border-2 px-3 py-1 h-full rounded"
          value={selectedLocation}
          onChange={handleChangeLocation}
          placeholder='izaberi grad'
        />
      </div>
      <div className="flex flex-col sm:grow sm:w-2/5 lg:w-auto lg:max-w-half xs:max-w-full">
        <label htmlFor="kada">Kada</label>
        <input
          id="kada"
          className="border-black border-2 px-3 py-1 rounded h-full"
          type="date"
          onChange={handleChangDate}
        />
      </div>
    </div>
  );
};

export default InputForm;
