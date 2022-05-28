import { ICommand } from "@constants/command.constant";
import { sleep } from "@utils/helper.utils";

export default {
  aliases: ["revoke", "revokeinvite"],
  category: "group",
  description: "To revoke the group link",
  adminGroup: true,
  groupOnly: true,

  callback: async ({ client, msg, shortMessage }) => {
    try {
      if (client.type == "legacy") return;
      let code = await client.groupRevokeInvite(msg.from);
      msg.reply(`• New group link: https://chat.whatsapp.com/${code}`);
    } catch (e) {
      msg.reply(shortMessage.error.failGetLink);
    }
  },
} as ICommand;