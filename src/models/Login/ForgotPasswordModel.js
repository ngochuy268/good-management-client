export async function sendOtp(email, id) {
    const response = await fetch('http://localhost:5000/send-otp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, id }),
    });
    return response.json();
}

export async function verifyOtp(email, otp) {
    const response = await fetch('http://localhost:5000/verify-otp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
    });
    return response.json();
}
