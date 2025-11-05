import { useState } from "react";
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function ContactUs() {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState("");

  const onSubmit = (formData) => {
    setData(JSON.stringify(formData, null, 2)); 
    reset(); 
  };

  
  const formStyle = {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '30px',
    border: '2px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '16px',
  };

  const selectStyle = {
    ...inputStyle,
  };

  const textareaStyle = {
    ...inputStyle,
    height: '100px',
    resize: 'vertical',
  };

  const submitStyle = {
    ...inputStyle,
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    transition: 'background-color 0.3s',
  };

  const pStyle = {
    marginTop: '20px',
    fontSize: '14px',
    color: '#555',
  };

  return (
  <>
      <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
        <input
          {...register("firstName", { required: true })}
          placeholder="First name"
          style={inputStyle}
        />
        <input
          {...register("lastName", { required: true })}
          placeholder="Last name"
          style={inputStyle}
        />
        <input
          {...register("age", { required: true, min: 0 })}
          type="number"
          placeholder="Age"
          style={inputStyle}
        />
        <select
          {...register("category", { required: true })}
          style={selectStyle}
        >
          <option value="">Select category...</option>
          <option value="emergency">Emergency</option>
          <option value="general">General</option>
          <option value="specialist">Specialist</option>
        </select>
        <textarea
          {...register("aboutYou", { required: true })}
          placeholder="About you / Symptoms"
          style={textareaStyle}
        />
        <button type="submit" style={submitStyle}>Submit</button>
        {data && (
          <pre style={pStyle}>{data}</pre>
        )}
      </form>
      <Box sx={{ width: '100%', marginTop: '40px' }}>
  <Box className="container">
  <div className="stack">
    <div className="item">
      <LocalPhoneIcon />
      <h2>اتصل بنا</h2>
      <p>0789518966</p>
    </div>
    <div className="item">
      <LocalPostOfficeIcon />
      <h2>بريدنا الإلكتروني</h2>
    </div>
    <div className="item">
      <LocationOnIcon />
      <h2>عنواننا</h2>
    </div>
  </div>
</Box>
</Box>
  </>
  
  );
}