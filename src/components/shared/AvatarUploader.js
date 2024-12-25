
import styles from '../../pages/Personal/Personal.module.scss';

const AvatarUploader = ({ avatar, isUpdating, handleAvatarClick }) => {
    return (
        <div
            className={styles.avatarContainer}
            onClick={handleAvatarClick}
            style={{ cursor: 'pointer', position: 'relative' }}
        >
            <img
                src={avatar}
                alt="avatar"
                className={styles.employeeAvatar}
                style={{ opacity: isUpdating ? 0.5 : 1 }}
            />
            {isUpdating && (
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: '#000',
                    }}
                >
                    更新中...
                </div>
            )}
            <div className={styles.avatarOverlay}>クリックして変更</div>
        </div>
    );
};

export default AvatarUploader;
