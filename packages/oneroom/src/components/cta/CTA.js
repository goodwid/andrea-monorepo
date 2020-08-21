import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT } from 'routes/routes';
import styles from './CTA.scss';

const CTA = () => (<div className={styles.CTA}><Link to={CONTACT.linkTo()}>Contact Andrea</Link></div>);

export default CTA;
