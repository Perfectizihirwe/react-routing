import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export const AddBlogs = () => {
  const { token } = useSelector((state) => state.auth);
  const [province, setProvince] = useState("");
  const [district, setdistrict] = useState("");
  const [street, setstreet] = useState("");
  const [price, setprice] = useState("");
  const [beds, setbeds] = useState("");
  const [description, setdescription] = useState("");
  const [bath, setbath] = useState("");
  const [lotSize, setLotSize] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");

  const handleAddBlog = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("province", province);
    formData.append("District", district);
    formData.append("street", street);
    formData.append("price", price);
    formData.append("beds", beds);
    formData.append("description", description);
    formData.append("bath", bath);
    formData.append("LotSize", lotSize);
    formData.append("status", status);
    formData.append("image", image);

    axios({
      method: "POST",
      url: " https://klabapi.onrender.com/api/estate/create",
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form>
        <label>Province</label>
        <input type={"text"} onChange={(e) => setProvince(e.target.value)} />
        <label>District</label>
        <input type={"text"} onChange={(e) => setdistrict(e.target.value)} />
        <label>Street</label>
        <input type={"text"} onChange={(e) => setstreet(e.target.value)} />
        <label>Price</label>
        <input type={"text"} onChange={(e) => setprice(e.target.value)} />
        <label>Beds</label>
        <input type={"text"} onChange={(e) => setbeds(e.target.value)} />
        <label>description</label>
        <input type={"text"} onChange={(e) => setdescription(e.target.value)} />
        <label>bath</label>
        <input type={"text"} onChange={(e) => setbath(e.target.value)} />
        <label>lotSize</label>
        <input type={"text"} onChange={(e) => setLotSize(e.target.value)} />
        <label>status</label>
        <input type={"text"} onChange={(e) => setStatus(e.target.value)} />
        <label>Image</label>
        <input
          type={"file"}
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <button onClick={(e) => handleAddBlog(e)} />
      </form>
    </div>
  );
};
