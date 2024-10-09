import prisma from "../lib/prisma.js";

export const addMessage = async (req, res) => {
  const tokenUserId = req.userId;
  const chatId = req.params.chatId;
  const text = req.body.text;

  try {
    const chat = await prisma.chat.findUnique({
      where: {
        id: chatId,
        userIDs: {
          hasSome: [tokenUserId], //find the chat and verify the user with tokenUserId
        },
      },
    });

    if (!chat) return res.status(404).json({ message: "Chat not found!" });
    const message = await prisma.message.create({
      data: {
        text,
        chatId,
        userId: tokenUserId, //create a chat if no chat found with text, chatId, and userId
      },
    });

    await prisma.chat.update({
      where: {
        id: chatId,
      },
      data: {
        seenBy: [tokenUserId], //update the seenBy status if the chat has been opened by the user
        lastMessage: text,
      },
    });
    res.status(200).json(message);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to add message!" });
  }
};
