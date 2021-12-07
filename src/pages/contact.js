import React from 'react';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContractForm';
import Profile from '../components/Profile';
import * as style from '../styles/styles.module.css';

const Contact = () => {
  return (
    <Layout>
      <SectionTitle position='center' styleName={style.featuredTitle}>
        Contact
      </SectionTitle>
      <div className={style.contactWrapper}>
        <Profile />
        <ContactForm />
      </div>
      {/* introduction to me */}
      {/* contact form */}
      {/* external links i.e personal website */}
    </Layout>
  );
};

export default Contact;
