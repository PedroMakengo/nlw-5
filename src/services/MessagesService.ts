import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repositories/MessagesRepository";

interface IMessages {
  text: string;
  admin_id?: string;
  user_id: string;
}

class MessagesService {
  async create({ text, admin_id, user_id }: IMessages) {
    const messagesRepository = getCustomRepository(MessagesRepository);

    const message = messagesRepository.create({
      text,
      admin_id,
      user_id,
    });

    await messagesRepository.save(message);

    return message;
  }

  // List Messages by User
  async listByUser(user_id: string) {
    const messagesRepository = getCustomRepository(MessagesRepository);

    const list = await messagesRepository.find({
      where: user_id,
      relations: ["user"],
    });

    return list;
  }
}

export { MessagesService };
