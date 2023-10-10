import { useState } from "react";

const ClubInputForm = (props) => {
  const [selectedIme, setSelectedIme] = useState("");
  const [selectedTip, setSelectedTip] = useState("");

  const handleChangIme = (event) => {
    setSelectedIme(event.target.value);
    props.handleChangIme(event.target.value);
  };

  const handleChangTip = (event) => {
    setSelectedTip(event.target.value);
    props.handleChangTip(event.target.value);
  };

  const handleChangeDate = (event) => {
    props.handleChangeDate(event.target.value);
  };

  return (
    <div className="flex xs:flex-col sm:flex-row flex-wrap gap-5 mb-10">
      <div className="flex flex-col sm:grow sm:w-2/5 lg:w-auto lg:max-w-quater xs:max-w-full">
        <label htmlFor="ime">Ime</label>
        <input
          className="border-black border-2 px-3 py-1 h-full rounded"
          value={selectedIme}
          onChange={handleChangIme}
          placeholder='ime dogadjaja'
        />
      </div>
      <div className="flex flex-col sm:grow sm:w-2/5 lg:w-auto lg:max-w-quater xs:max-w-full">
        <label htmlFor="tip">Tip</label>
        <input
          className="border-black border-2 px-3 py-1 h-full rounded"
          value={selectedTip}
          onChange={handleChangTip}
          placeholder='tip dogadjaja'
        />
      </div>
      <div className="flex flex-col sm:grow sm:w-2/5 lg:w-auto lg:max-w-quater xs:max-w-full">
        <label htmlFor="kada">Kada</label>
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

export default ClubInputForm;
