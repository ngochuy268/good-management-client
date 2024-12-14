import { sendOtp, verifyOtp } from '../../models/Login/ForgotPasswordModel';

export const handleSendOtp = async (email, id, setStep, setError) => {
    try {
        const data = await sendOtp(email, id);
        if (data.success) {
            alert('OTP がメールに送信されました');
            setStep('VERIFY_OTP');
        } else {
            alert(data.message || 'OTPの送信に失敗しました');
        }
    } catch (error) {
        setError('OTP の送信中にエラーが発生しました');
    }
};

export const handleVerifyOtp = async (email, otp, history, id) => {
    try {
        const data = await verifyOtp(email, otp);
        if (data.success) {
            alert('OTP を正常に検証する');
            history.push('/changePassword', { id });
        } else {
            alert('OTP が無効です');
        }
    } catch (error) {
        alert('OTP 検証中にエラーが発生しました');
    }
};
