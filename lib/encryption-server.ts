
import bcrypt from "bcrypt"

export async function hashString(inputString:string) {
    const saltRounds = 10;
    return await bcrypt.hash(inputString, saltRounds);
}

export async function compareStrings(originalString: string, hashedString: string) {
    return await bcrypt.compare(originalString, hashedString);
}

export async function getDefaultPassword() {
    return await hashString("Welcome@123");
}
