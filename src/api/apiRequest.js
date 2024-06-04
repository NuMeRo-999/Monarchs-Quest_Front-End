import { BASE_URL, getWithAuth } from "./api";


export async function login(url, userData) {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem(
        "user",
        JSON.stringify({
          user_id: data.id,
          username: data.username,
          token: data.token,
        })
      );

      return { success: true, code: 200 };
    } else {
      return { success: false, code: response.status };
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function getUserSaveSlots() {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.token) {
      throw new Error("Token not found in localStorage");
    }

    return await getWithAuth(`/user/${user.user_id}/save-slots`)
    
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
  
}

export async function getSaveSlot(saveSlotId) {
  try {

    return await getWithAuth(`/save/slot/${saveSlotId}`)

  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function getWeaponsEquiped(stageId) {
  try {

    return await getWithAuth(`/item/equiped_weapons/`+stageId);

  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function getAmuletEquiped(stageId) {
  try {

    return await getWithAuth(`/item/equiped_amulet/`+stageId);

  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function getInventory(stageId) {
  try {
    return await getWithAuth(`/item/equiped_items/`+stageId);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}