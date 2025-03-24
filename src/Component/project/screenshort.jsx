import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import  nidImage from "@/assets/nid.jpeg"; // image import


function Screenshort() {
  const selected = useRef(null);
  const [slink, setSlink] = useState(null);

  // ✅ Screenshot Link Function
  const links = async () => {
    const canvas = await html2canvas(selected.current);
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        const link = new Blob([blob],"fgsfgsfgs.png", { type: "image/png" });
        const fileURL = URL.createObjectURL(link);
        setSlink(fileURL);
        resolve(link);
      });
    });
  };

  // ✅ Share Function
  const sss = async () => {
    const linkFile = await link();
    if (navigator.share) {
      try {
        await navigator.share({
          files: [linkFile],
          title: "screenshort.png",
          text: "Amar Sonar Bangla, Ami Tomay Valo Bashi...",
        });
        console.log("Share successful!");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing not supported in this browser.");
    }
  };
  // ✅ Download Function
  const dsss = async () => {
    const linkFile = await link();
    const file = document.createElement("a");
    file.href = URL.createObjectURL(linkFile);
    file.download = "ss.png";
    file.click();
  };
  const link = async () => {
    const canvas = await html2canvas(selected.current);
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        const link = new File([blob], "ScreenShort.png", { type: "image/png" });
        setSlink(link);
        resolve(link);
      });
    });
  };

  // ✅ Share Function
  const ss = async () => {
    const linkFile = await link();
    if (navigator.share) {
      try {
        await navigator.share({
          files: [linkFile],
          title: "screenshort.png",
          text: "Amar Sonar Bangla, Ami Tomay Valo Bashi...",
        });
        console.log("Share successful!");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing not supported in this browser.");
    }
  };

  // ✅ Download Function
  const dss = async () => {
    const linkFile = await link();
    const file = document.createElement("a");
    file.href = URL.createObjectURL(linkFile);
    file.download = "ss.png";
    file.click();
  };

  // ✅ Form State Management
  const [formData, setFormData] = useState({
    nameE: "",
    nameB: "",
    nameF: "",
    nameM: "",
    dob: "",
    nid: "",
    img: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData((prev) => ({
          ...prev,
          [name]: event.target.result, // Base64 URL সেট করা হবে
        }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const inputClass ="block w-full border-2  p-2 border-gray-400 rounded-md shadow-sm";

  return (
    <div className="flex flex-col m-5 lg:flex-row">
      <br />
     
      <div ref={selected} className="niddiv m-5">
        <img className=" nidimg" src={nidImage} alt="NID image" />
        <div className="nidtext ">
          <span className="name">{formData.nameB}</span> <br />
          <span className="ename">{formData.nameE}</span>
          <br />
          <span className="fname">{formData.nameF}</span>
          <br />
          <span className="mname">{formData.nameM}</span>
          <br />
          <img className=" nidpic" src={formData.img} alt="NID image" />
        </div>

        <span className="dob">{formData.dob}</span>
        <br />
        <span className="nid">{formData.nid}</span>
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      
      <form className="m-5" onChange={handleChange}>
        <p>Fill up in this input field</p>
        <input
        className={inputClass}
          type="text"
          name="nameB"
          placeholder="Enter full name in Bengali"
          value={formData.nameB}
          onChange={handleChange}
        />
        <input
        className={inputClass}
          type="text"
          name="nameE"
          placeholder="Enter full name in English"
          value={formData.nameE}
          onChange={handleChange}
        />
        <input
          type="text"
        className={inputClass}
          name="nameF"
          placeholder="Enter full name of father's in Bengali"
          value={formData.nameF}
          onChange={handleChange}
        />
        <input
        className={inputClass}
          type="text"
          name="nameM"
          placeholder="Enter full name of mother's in Bengali"
          value={formData.nameM}
          onChange={handleChange}
        />
        <input
          type="text"
        className={inputClass}
          name="dob"
          placeholder="Enter date of birth"
          value={formData.dob}
          onChange={handleChange}
        />
        <input
          type="number"
        className={inputClass}
          name="nid"
          placeholder="Enter NID number"
          value={formData.nid}
          onChange={handleChange}
        />
        <input
          type="file"
        className={inputClass}
          name="img"
          accept="image/*"
          placeholder="Upload your pic"
          onChange={handleChange}
        />
      </form>
     
      <div className="p-2 m-2">
        {" "}
        <button
          className="m-2 p-2 bg-blue-500 rounded-lg"
          onClick={ss}
        >
          Share
        </button>
        <button className="m-2 p-2 bg-blue-500 rounded-lg" onClick={dss}>
          Download
        </button>
      </div>
     
    </div>
  );
}

export default Screenshort;
