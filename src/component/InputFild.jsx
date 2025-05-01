import { Button } from "./Button";

export const InputFild = ({
  inputdata,
  setInputdata,
  selectData,
  setSelectData,
  updatedData,
  handelClick
}) => {
 
  return (
    <>
      <input
        className="py-2 px-5 w-full lg:w-auto rounded-xl border text-white"
        placeholder="Search anything..."
        type="text"
        value={inputdata}
        onChange={(e) => setInputdata(e.target.value)}
      />
      <div className="flex gap-5 items-center justify-center w-full lg:w-auto">
        <Button onClick={()=> handelClick("asc")}>Asc</Button>
        <Button onClick={()=> handelClick("dsc")}>Dsc</Button>
      </div>

      <select
        value={selectData}
        onChange={(e) => setSelectData(e.target.value)}
        className="py-2 lg:w-50 px-5 text-sm lg:text-lg font-bold rounded-xl border text-white bg-slate-700 w-full"
      >
        <option value="">All</option>
        {[...new Set(updatedData.map((name) => name.region))].map(
          (region, index) => (
            <option key={index} value={region}>
              {region}
            </option>
          )
        )}
      </select>
    </>
  );
};
