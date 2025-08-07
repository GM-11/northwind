export default function chatbotMapping(
  data: string,
  context: "name" | "phone" | "email" | "flat" | "thanks"
) {
  const mapping = {
    name: `Hi! Welcome to North Wind Estates. Let's help you find your dream home at Northwind Sanctuary. May I have your name, please?`,
    phone: `Thanks, ${data}! Can I have your contact number so our team can reach out to you?`,
    email: `Thanks, Can I have your email so our team can reach out to you?`,
    flat: `Great! What type of home are you looking for?`,
    thanks: `Thank you for sharing your details!
Our Sales Manager will be in touch with you shortly to provide further assistance.
Feel free to ask anything in the meantime.`,
  };
  return mapping[context];
}
