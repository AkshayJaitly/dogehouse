import React from "react";

export const CardBanner: React.FC<{}> = () => {
  const [file, setFile] = React.useState("");
  function handleUpload(event) {
    setFile(event.target.files[0]);
  }

  return (
    <div id="CardBanner">
      <input
        type="file"
        accept="image/x-png,image/jpeg"
        onChange={handleUpload}
        name = "Change profile header"
      />
      {file && <img src={URL.createObjectURL(file)} />}
      <div>
        <button />
      </div>
    </div>
  );
};
