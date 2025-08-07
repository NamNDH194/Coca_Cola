const getMess = async (reqBody) => {
  const conversation = reqBody.mess.toString();
  const mess = await fetch(
    `https://503b7c7aac0d.ngrok-free.app/chat?message=${conversation}`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return mess;
};

const messageAIServices = {
  getMess,
};

module.exports = messageAIServices;
