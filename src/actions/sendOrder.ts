import emailjs from "@emailjs/browser";

type Props = {
  name: string;
  address: string;
  phone: string;
  email: string;
  order: string;
  price: number;
}

export default async function sendOrder({ name, address, phone, email, order, price }: Props) {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const templateParams: Props = { 
    name, 
    email,
    address,
    phone,
    order,
    price 
  };
  const options = { publicKey: PUBLIC_KEY };
  
  try {
    const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, options);
    return res.status === 200 ? true : false;
  } catch (error) {
    console.log(error);
    return false;
  }
}