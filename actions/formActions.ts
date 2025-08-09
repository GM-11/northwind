"use server";

export type FormActionProps = {
  name: string;
  email: string;
  message: string;
  mobile: string;
  isSigned?: boolean;
};

export async function submitForm(formData: FormActionProps) {
  
  const { name, mobile, message, email, isSigned } = formData;
  const form = new URLSearchParams();

  form.append("name", name);
  form.append("mobile", mobile);
  form.append("message", message);
  form.append("email", email);
  form.append("isSigned", `${isSigned}`);
  
  const response = await fetch(process.env.GOOGLE_APP_SCRIPT_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: form,
  });


  if (response.status === 200) {
    return true;
  }
  
  return false;
}
