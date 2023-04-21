import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
import styles from '../../styles/sidebar.module.css';
import styles2 from '../../styles/modal.module.css';
import Modal from '../elements/Modal';

const Sidebar = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleModalClose = () => {
        setModalVisible(false);
    };

    const handleCreatePostClick = () => {
        setModalVisible(true);
    };
    return (
        <div className={styles.sidebar} style={{ width: 'calc(20vw - 50px)', height: 'calc(100vh)' }}>
            <button href="#">
                <i className="fas fa-bars"></i>
            </button>
            <div>
                <div className="flex justify-center items-center py-6">
                    <button
                        className={`${styles.createPostButton} create-post-button bg-slate-400 text-white rounded-full p-3 hover:bg-slate-500 transition-colors flex items-center`}
                        style={{ fontSize: '1.15rem'}}
                        onClick={handleCreatePostClick}
                    >
                        <FaPlus className="mr-2" /> Create Post
                    </button>
                </div>
                <hr className={styles.separator} style={{ borderWidth: "4px", borderColor: "darkgray" }}></hr>
                <ul className={styles.sidebarList}>
                <li>
                    <a href="#" className={`${styles.sidebarLink} ${styles.active} flex items-center px-2 py-5`}>
                    <FaFileAlt className={`${styles.icon} mr-2`} />
                    <div className={styles.item}>Posts</div>
                    </a>
                </li>
                <li>
                    <a href="#" className={`${styles.sidebarLink} ${styles.active} flex items-center px-2 py-5`}>
                    <FaBell className={`${styles.icon} mr-2`} />
                    <div className={styles.item}>Notifications</div>
                    </a>
                </li>
                </ul>
            </div>
            <Modal show={modalVisible} onClose={handleModalClose}>
            <button className={styles2.closeButton} onClick={handleModalClose}>
                <FaTimes />
            </button>
            <div className={styles2.labelText}>
                <h2>Create New Post</h2>
            </div>
            <form>
                <div>
                    <label htmlFor="title">Title</label>
                </div>
                <input type="text" id="title" className={styles2.inputField} />
                <div>
                    <label htmlFor="content">Content</label>
                </div>
                <textarea id="content" className={styles2.inputFieldArea}></textarea>
                <div className="flex justify-end mt-4">
                    <button type="submit" className={styles2.createButton}>Create</button>
                    <button type="button" className={styles2.cancelButton} onClick={handleModalClose}>Cancel</button>
                </div>
            </form>
            </Modal>
        </div>
      );
}

export default Sidebar;