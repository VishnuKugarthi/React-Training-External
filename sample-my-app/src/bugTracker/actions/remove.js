import bugApi from "../services/bugApi";

// export function remove(bugToRemove) {
//   const action = { type: "BUG_REMOVE", payload: bugToRemove };
//   return action;
// }

export async function remove(bugToRemove) {
  await bugApi.remove(bugToRemove);
  const action = { type: "BUG_ADD_NEW", payload: bugToRemove };
  return action;
}
