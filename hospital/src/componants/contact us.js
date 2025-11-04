import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactUs() {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState("");

  const onSubmit = (formData) => {
    setData(JSON.stringify(formData));
    reset(); // إعادة تعيين النموذج بعد الإرسال (اختياري لتحسين التجربة)
  };

  // أنماط CSS لجعل النموذج أكبر حجماً ومركزاً مع إطار
  const formStyle = {
    maxWidth: '600px', // عرض أكبر للنموذج
    margin: '50px auto', // مركز النموذج عمودياً وأفقياً
    padding: '30px', // مساحة داخلية أكبر
    border: '2px solid #ccc', // إطار حول النموذج
    borderRadius: '10px', // زوايا مستديرة للإطار
    backgroundColor: '#f9f9f9', // خلفية فاتحة للتمييز
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // ظل خفيف للعمق
  };

  const inputStyle = {
    width: '100%', // عرض كامل للحقول
    padding: '12px', // مساحة داخلية أكبر
    margin: '10px 0', // مسافة بين الحقول
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '16px', // حجم خط أكبر
  };

  const selectStyle = {
    ...inputStyle, // نفس الأنماط للـ select
  };

  const textareaStyle = {
    ...inputStyle,
    height: '100px', // ارتفاع أكبر للـ textarea
    resize: 'vertical', // السماح بتغيير الحجم عمودياً
  };

  const submitStyle = {
    ...inputStyle,
    backgroundColor: '#4CAF50', // لون خلفية للزر
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px', // حجم خط أكبر للزر
  };

  const pStyle = {
    marginTop: '20px',
    fontSize: '14px',
    color: '#555',
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
      <input {...register("firstName", { required: true })} placeholder="First name" style={inputStyle} />
      <input {...register("lastName", { required: true })} placeholder="Last name" style={inputStyle} />
      <input {...register("age", { required: true, min: 0 })} type="number" placeholder="Age" style={inputStyle} />
      <select {...register("category", { required: true })} style={selectStyle}>
        <option value="">Select category...</option>
        <option value="emergency">Emergency</option>
        <option value="general">General</option>
        <option value="specialist">Specialist</option>
      </select>
      <textarea {...register("aboutYou", { required: true })} placeholder="About you / Symptoms" style={textareaStyle} />
      <p style={pStyle}>{data}</p>
      <input type="submit" style={submitStyle} />
    </form>
  );
}
