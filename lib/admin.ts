import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2dk9h4w8y3O0s1fGXsTx6pPBAQW",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
