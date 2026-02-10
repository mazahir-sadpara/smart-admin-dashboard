import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const MultiStepUserForm = ({ onSubmit, initialData }) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: initialData?.name || "",
    email: initialData?.email || "",
    role: initialData?.role || "User",
    password: "",
    confirmPassword: "",
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateStep = () => {
    let newErrors = {};
    if (step === 1 && !form.name) newErrors.name = "Name is required";
    if (step === 1 && !form.email) newErrors.email = "Email is required";
    if (step === 2) {
      if (!form.password) newErrors.password = "Password is required";
      if (form.password !== form.confirmPassword)
        newErrors.confirmPassword = "Passwords must match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      onSubmit(form);
      setStep(1);
      setForm({ name: "", email: "", role: "User", password: "", confirmPassword: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <>
          <Input
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          <Input
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </>
      )}

      {step === 2 && (
        <>
          <Input
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
        </>
      )}

      <div className="flex justify-between mt-4">
        {step > 1 && <Button onClick={prevStep}>Back</Button>}
        {step < 2 && <Button onClick={nextStep}>Next</Button>}
        {step === 2 && <Button type="submit">Submit</Button>}
      </div>
    </form>
  );
};

export default MultiStepUserForm;
