import React, { useRef, useState } from "react";
import propTypes from "prop-types";

import "./index.scss";

export default function InputFile(props) {
  const [fileName, setFileName] = useState("");
  const { placeholder, name, accept, inputClassName } = props;

  const refInputFile = useRef(null);

  const onChange = (event) => {
    setFileName(event.target.value);
    props.onChange({
      target: {
        name: event.target.name,
        value: event.target.files,
      },
    });
  };

  return (
    <div className="input-group mb-3">
      <input
        accept={accept}
        ref={refInputFile}
        name={name}
        className="d-block p-3"
        type="file"
        value={fileName}
        onChange={onChange}
      />
      <input
        onClick={() => refInputFile.current.click()}
        defaultValue={fileName}
        placeholder={placeholder}
        className={["form-control d-none", inputClassName].join(" ")}
      />
    </div>
  );
}

File.defaultProps = {
  placeholder: "Browse a file...",
};

File.propTypes = {
  name: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string,
  inputClassName: propTypes.string,
};
