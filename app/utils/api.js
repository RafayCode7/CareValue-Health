export const checkUserRole = async (wallet) => {
    const res = await fetch(`/api/check-role?wallet=${wallet}`);
    return res.json();
  };
  
  export const submitVerificationRequest = async (data) => {
    const res = await fetch('/api/submit-verification', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });
    return res.json();
  };
  