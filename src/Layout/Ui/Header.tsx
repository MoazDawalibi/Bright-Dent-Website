import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {  MenuOutlined } from '@ant-design/icons';
import WithDrawer from '../../HighOrderComponent/WithDrawer';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import ContactForm from '../../Components/Done/ContactForm';
import { TbPointFilled } from "react-icons/tb";
import Translate from '../../Components/Utils/Translate';

const Header = () => {
  const [t] = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.Header');
      if (header) {
        const scrollPosition = window.scrollY;
        const headerHeight = window.innerHeight;

        if (scrollPosition <= 50) {
          header.classList.add('HeaderStart');
        } else {
          header.classList.remove('HeaderStart');
        }
        if (scrollPosition >= headerHeight) { 
          header.classList.add('Scrolled');
        } else {
          header.classList.remove('Scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
      setIsModalOpen(true);
    };

  return (
    <header className='Header'>
      <Link to={'/'} className='logo_link' > <img className='nav_logo' src="../Logo.png" alt="" /></Link>
      <nav>
        <ul className='Links MenuLinks'>
          <li> <a href='/#NewHeroSection'>{t('Home')}</a> </li>
          <li> <a href='/#Services'>{t('Services')}</a> </li>
          <li> <a href='/#Update'>{t('blog')}</a> </li>
          <li> <a href='/#Reviews'>{t('Reviews')}</a> </li>
          <li> <a href='/about'>{t('About')}</a> </li>
          <li> <a href='/privacy'>{t('Privacy')}</a> </li>
          <li className='translate_link'> <Translate/></li>
          <li> <div  onClick={showModal}>{t('Contact Us')} <FaArrowAltCircleRight /></div> </li>
        </ul>
        <div className='MenuNav'>
          <WithDrawer
            title='Bright Dent'
            
            button={<Button icon={<MenuOutlined />} type='primary' />}
          >
        <ul className='DrawerLinks'>
          <li><TbPointFilled/> <a href='/#NewHeroSection'>{t('Home')}</a> </li>
          <li><TbPointFilled/> <a href='/#Services'>{t('Services')}</a> </li>
          <li><TbPointFilled/> <a href='/#Update'>{t('blog')}</a> </li>
          <li><TbPointFilled/> <a href='/#Reviews'>{t('Reviews')}</a> </li>
          <li><TbPointFilled/> <a href='/about'>{t('About')}</a> </li>
          <li><TbPointFilled/> <a href='/privacy'>{t('Privacy')}</a> </li>
          <li><TbPointFilled/> <a  onClick={showModal}>{t('Contact Us')} <FaArrowAltCircleRight /></a> </li>
          <li className=''> <Translate/></li>
            </ul>
          </WithDrawer>
        </div>
      </nav>
      <ContactForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

    </header>
  );
};

export default Header;
