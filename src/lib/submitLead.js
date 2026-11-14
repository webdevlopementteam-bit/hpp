// Shared Web3Forms submit helper (same access keys as the contact page).
const WEB3FORMS_ACCESS_KEYS = [
  "bce73fc1-339e-48a1-bc67-8625d14201d5",
  "4dc4704b-85d3-4a68-a3d2-edaf55216f15",
];

export async function submitLead(formData) {
  const results = await Promise.all(
    WEB3FORMS_ACCESS_KEYS.map((key) => {
      const data = new FormData();
      for (const [k, v] of formData.entries()) data.append(k, v);
      data.append("access_key", key);
      return fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .catch(() => ({ success: false }));
    })
  );
  return results.some((result) => result.success);
}
