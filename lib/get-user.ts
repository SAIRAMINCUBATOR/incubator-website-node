import { verifyToken } from "@/lib/jwt";
import { db } from "@/lib/db";

export async function getUser(token: string | null) {
  if (!token) {
    return null;
  }
  const payload = verifyToken(token.slice(7));
  if (!payload) {
    return null;
  }
  const email = payload.email;

  const user = await db.user.findFirst({
    where: {
      email,
    },
  });
  if (!user) {
    return null;
  }

  return user;
}
