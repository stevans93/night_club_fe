const InputForm = () => {
  return (
    <div className="flex xs:flex-col sm:flex-row flex-wrap gap-5 mb-10">
      <div className="flex flex-col sm:grow sm:w-2/5 lg:w-auto lg:max-w-half xs:max-w-full">
        <label htmlFor="ime">Ime</label>
        <select className="border-black border-2 px-3 py-1 h-full rounded">
          <option value="" disabled selected>
            Ime dogadjaja
          </option>
        </select>
      </div>
      <div className="flex flex-col sm:grow sm:w-2/5 lg:w-auto lg:max-w-half xs:max-w-full">
        <label htmlFor="tip">Tip</label>
        <select className="border-black border-2 px-3 py-1 h-full rounded">
          <option value="" disabled selected>
            Tip dogadjaja
          </option>
        </select>
      </div>
      <div className="flex flex-col sm:grow sm:w-2/5 lg:w-auto lg:max-w-half xs:max-w-full">
        <label htmlFor="gde">Gde</label>
        <select className="border-black border-2 px-3 py-1 h-full rounded">
          <option value="" disabled selected>
            Izaberi grad
          </option>
        </select>
      </div>
      <div className="flex flex-col sm:grow sm:w-2/5 lg:w-auto lg:max-w-half xs:max-w-full">
        <label htmlFor="kada">Kada</label>
        <input
          id="kada"
          className="border-black border-2 px-3 py-1 rounded h-full"
          type="date"
        />
      </div>
    </div>
  );
};

export default InputForm;
