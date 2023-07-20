import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const phones = {
  US: "+1",
  DE: "+89",
  TR: "+90",
  FR: "+38",
};
const InputForm = () => {
  const [selected, setSelected] = useState("TR");
  return (
    <div className="w-full h-full md:h-48 md:w-96 bg-white md:p-6 rounded-md ">
      <h1 className="text-brand-text-purple font-semibold mb-3 text-center">
        Giriş Yap veya Kaydol
      </h1>
      <div className="flex gap-x-4">
        <div className="h-14">
          <ReactFlagsSelect
            className="menu-flags"
            selectedSize={14}
            optionsSize={14}
            fullWidth={false}
            countries={Object.keys(phones)}
            customLabels={phones}
            placeholder="+90"
            onSelect={(code) => setSelected(code)}
            selected={selected}
          />
        </div>
        <div className="w-full relative">
          <input
            required
            type="text"
            className="border px-4 h-14 rounded text-sm outline-none w-full peer z-20 "
          />
          <span className="absolute top-0 h-full flex items-center text-sm left-4 peer-focus:h-3 peer-focus:text-xs peer-valid:h-3 peer-valid:text-xs pointer-events-none duration-200 peer-focus:top-2 peer-valid:top-2 peer-focus:text-brand-text-purple peer-valid:text-brand-text-purple text-gray-500 ">
            Telefon Numarası
          </span>
        </div>
      </div>
      <button className="bg-brand-yellow w-full text-brand-text-purple mt-2 text-sm font-semibold rounded py-3 hover:bg-brand-purple hover:text-brand-yellow duration-200">
        Telefon Numarası ile Devam Et
      </button>
    </div>
  );
};

export default InputForm;
