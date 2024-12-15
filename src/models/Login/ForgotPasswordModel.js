export async function sendOtp(email, id) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/send-otp`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, id }),
    });
    return response.json();
}

export async function verifyOtp(email, otp) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/verify-otp`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
    });
    return response.json();
}
