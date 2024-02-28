import css from './Contact.module.css';
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({contact, deleteContact}){
    return (
        <li className={css.contactCard}>
            <div>
                <div className={css.contactInfoRowWrp}>
                    <IoPerson />
                    <h3>{contact.name}</h3>
                </div>
                <div className={css.contactInfoRowWrp}>
                    <FaPhoneAlt />
                    <h3>{contact.number}</h3>
                </div>
            </div>
            <button
                onClick={() => deleteContact(contact.id)} 
                type="button">
                    Delete
            </button>
        </li>
    )
}