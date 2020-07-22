

import React, {useState, useContext} from 'react';


import Modal from '../../common/components/UIElements/Modal'

import Card from '../../common/components/UIElements/Card'
import Button from '../../common/components/FormElements/Button'
import { AuthContext } from '../../common/context/auth-context'
import './NewsItem.css';
 
const NewsItem = props => {
    const auth  = useContext(AuthContext)

    const [showPage, setShowPage] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

   const openPageHandler = () => setShowPage(true);
    
    const closePageHandler = () => setShowPage(false);

    const showDeleteWarningHandler = () => {
        setShowConfirmModal(true)
    }

    const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
    }

    const confirmDeleteHandler = () => {
        setShowConfirmModal(false);
        console.log('DELETING...')
    }
    
    return (
           <React.Fragment>
           <Modal show={showPage}
            onCancel={closePageHandler}
             header={props.address}
                 contentClass="news-item__modal-content"
                 footerClass="news-item__modal-actions"
                 footer={<Button onClick={closePageHandler}>Close</Button>}
             >
                 <div className="map-container">
                     {/* <Map center={props.coordinates} zoom={16} /> */}

                 </div>
             </Modal>
             <Modal 
             show={showConfirmModal}
             onCancel={cancelDeleteHandler}
             header="Are you sure" 
             footerClass="news-item__modal-actions" 
             footer={
                 <React.Fragment>
                     <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
                     <Button danger onClick={confirmDeleteHandler}>DELETE</Button>

                 </React.Fragment>
             }>
                 <p>Do you want to proceed and delete this News?
                 Please note that it cant be undone after
                 </p>
             </Modal>
           <li className="news-item">
           <Card className="news-item__content">
           
        <div className="news-item__info">
        <h2>{props.title}</h2>
            <h3>{props.subject}</h3>
            <p>{props.category}</p>
            <p>{props.body}</p>
             <p>{props.date}</p>
            

        </div>
        <div className="news-item__actions">
            <Button inverse onClick={openPageHandler}>create News</Button>
            {auth.isLoggedIn && (
            <Button to={`/news/${props.id}`}>Edit</Button>
            )}
            {auth.isLoggedIn && (
            
            <Button danger onClick={showDeleteWarningHandler}>Delete</Button>
            )}
        </div>

        </Card> 
    </li>
    </React.Fragment>
    )
}

export default NewsItem